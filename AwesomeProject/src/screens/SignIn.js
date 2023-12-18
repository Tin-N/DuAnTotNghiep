import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  StyleSheet, ToastAndroid
} from 'react-native';

import React, {useState, useContext, userEffect} from 'react';
import {Image} from 'react-native';
import AxiosIntance from '../utils/AxiosIntance';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../utils/AppContext';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {COLOR} from '../css/Theme.js';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {StyleLogin} from '../css/Styles.js';
import {useEffect} from 'react';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
const {width} = Dimensions.get('window');
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [emailUser, setEmailUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  // Lấy thông tin user từ context
  const {setuserInfo, userInfo, userID, setuserID, setisLogin, setuserAddress,setuserRole} =
    useContext(AppContext);
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);


  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleFocusPassword = () => {
    setIsFocusedPassword(true);
  };
  const handleBlurPassword = () => {
    setIsFocusedPassword(false);
  };
  const signInGoogle = async () => {};
  // regex
  const validate = () => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+[0-9._%+-]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{11,}$/;
    if (emailUser === '' || password === '') {
      Alert.alert('Lỗi chưa điền', 'Hãy điền đầy đủ');
      return false;
    } 
    return true;
  };
  const moveToSignUp = () => {
    navigation.navigate('SignUp');
  };
  const FGPassword = () => {
    navigation.navigate('ResetPassword');
  };
  const SignIn = async () => {
    try {
      if (validate() === true) {
        // console.log(emailUser, password );
        const response = await AxiosIntance().post(
          '/UserApi/login?email=' + emailUser + '&password=' + password,
        );

        // console.log(emailUser, password );
        if (response.user) {
          // lấy thông tin user từ context (id)
          const _id = response.user._id;
          setuserInfo({...userInfo, ...response.user});
          setuserID(_id);

          setisLogin(true);
          console.log('Đăng nhập thành công ' + JSON.stringify(response.user)); // log ra ID
          setuserAddress(response.user.address)
          setuserInfo(response.user);
          setuserRole(response.user.roleID)
          navigation.navigate('ProfileScreen');
        } else {
          ToastAndroid.show("Đăng nhập thất bại",ToastAndroid.SHORT);
        }
      }
    } catch (error) {
      console.log('Đăng nhập thất bại: ' + error);
      ToastAndroid.show("Sai tên tài khoản hoặc mật khẩu",ToastAndroid.SHORT);
    }
  };

  return (
    <View style={StyleLogin.Container}>
      {/* Text Savvy */}
      <Text style={StyleLogin.HeadingText}>Savvy</Text>

      {/* Text Welcome back! */}
      <Text style={StyleLogin.extraText}>Chúc mừng trở lại!</Text>

      {/* TextInput Email */}
      <View>
        <Text style={StyleLogin.textHint}>Email</Text>
        <View
          style={[
            StyleLogin.input,
            {borderColor: isFocused ? 'blue' : 'white'},
          ]}>
          <TextInput
            autoCorrect={true}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={StyleLogin.TextInputUP}
            placeholder="Clavi@gmail.com"
            onChangeText={setEmailUser}
          />
        </View>
      </View>
      {/* TextInput Password */}
      <View>
        <Text style={StyleLogin.textHintP}>Mật khẩu</Text>

        <View
          style={[
            StyleLogin.inputP,
            {borderColor: isFocusedPassword ? 'blue' : 'white'},
          ]}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="Nhập mật khẩu của bạn"
            onFocus={handleFocusPassword}
            onBlur={handleBlurPassword}
            underlineColorAndroid="transparent"
            secureTextEntry={showPassword}
            onChangeText={setPassword}></TextInput>

          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
            style={StyleLogin.CTIcon}>
            <Image
              source={
                showPassword === false
                  ? require('../images/icon/view.png')
                  : require('../images/icon/hide.png')
              }
              style={StyleLogin.HideShowIcon}
            />
          </TouchableOpacity>
        </View>

        {/* <Text style={StyleLogin.textHintP}>Password</Text> */}

        <TouchableOpacity onPress={FGPassword}>
          <Text style={StyleLogin.fgPass}>Quên mật khẩu</Text>
        </TouchableOpacity>

     
        <View style={StyleLogin.FGcontainer}>
          <TouchableOpacity style={StyleLogin.FButton} onPress={SignIn}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: '2%',
              }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
        <View style={StyleLogin.CSbuttomText}>
          <Text style={StyleLogin.ButtomText1}>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity onPress={moveToSignUp}>
            <Text style={StyleLogin.ButtomText2}> Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SignIn;
