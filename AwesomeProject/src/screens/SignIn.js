import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,

  Alert, StyleSheet
} from 'react-native';

import React, {useState, useContext,userEffect} from 'react';

// const {width} = Dimensions.get('window');
import AxiosIntance from '../utils/AxiosIntance';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../utils/AppContext';
import { GoogleSignin , statusCodes } from '@react-native-google-signin/google-signin';

import {COLOR} from '../css/Theme.js'
import { Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleLogin } from '../css/Styles.js';


const { width } = Dimensions.get('window');



const SignIn = () => {
 
  const [showPassword, setShowPassword] = useState(true);

  const [emailUser, setEmailUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  // Lấy thông tin user từ context    
  const { setuserInfo, userInfo, userID, setuserID, setisLogin, setuserAddress } = useContext(AppContext);

  const navigation = useNavigation();
  const [checkEmail, setCheckEmail] = useState(COLOR.TextHint);
  const [checkPassword, setCheckPassword] = useState(COLOR.TextHint);

  // userEffect(() => {
  //   GoogleSignin.configure({webClientId: '152259882272-lits3cdfboaiv105q0t8oiu15tfc14au.apps.googleusercontent.com'});
  // },[])

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      setuserInfo(usrInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  // regex
  const validate = () => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+[0-9._%+-]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{11,}$/;
    if (emailUser === '' || password === '') {
      Alert.alert('Lỗi chưa điền', 'Hãy điền đầy đủ');
      setCheckEmail("red");
      setCheckPassword("red");
      return false;
    } else if (!emailRegex.test(emailUser)) {
      Alert.alert('Lỗi Email','Hãy điền đầy đủ Email và theo đúng định dạng ');
      setCheckEmail("red");
      return false
    } else if (!passwordRegex.test(password)) {
      Alert.alert('Lỗi Password','Hãy điền đầy đủ Password và theo đúng định dạng');
      setCheckPassword("red");
      return false
    }
    setCheckEmail("white");
    setCheckPassword("white");
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
          console.log('UserID ' + response.user); // log ra ID

          setuserInfo(response.user);
          navigation.navigate('ProfileScreen');
        } else {
          // ToastAndroid.show("Đăng nhập thất bại",ToastAndroid.SHORT);
        }
      }
    } catch (error) {
      console.log('Đăng nhập thất bại: ' + error);
    }
  };

  return (
    <View style={StyleLogin.Container}>
      {/* Text Savvy */}
      <Text style={StyleLogin.HeadingText}>Savvy</Text>

      {/* Text Welcome back! */}
      <Text style={StyleLogin.extraText}>Welcome back!</Text>

      {/* TextInput Email */}
      <View>
        {/* <Text style={StyleLogin.textHint}>Email</Text> */}
        <View style={[StyleLogin.input,{borderColor: checkEmail}]}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="Clavi@gmail.com"
            onChangeText={setEmailUser}
          />
        </View>
      </View>
      {/* TextInput Password */}
      <View>
        <Text style={StyleLogin.textHintP}>Password</Text>

        <View style={[StyleLogin.inputP,{borderColor: checkPassword}]}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="Enter your password"
            underlineColorAndroid="transparent"
            secureTextEntry={showPassword}

            onChangeText={setPassword}></TextInput>

          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword)

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

        <Text style={StyleLogin.textHintP}>Password</Text>



        <TouchableOpacity onPress={FGPassword}>
          <Text style={StyleLogin.fgPass}>Quên mật khẩu</Text>
        </TouchableOpacity>


        <TouchableOpacity style={StyleLogin.buttonShape} onPress={SignIn}>
          <Text style={StyleLogin.TextButton}>Sign In</Text>
        </TouchableOpacity>
        <View style={StyleLogin.FGcontainer}>
          <TouchableOpacity style={StyleLogin.FButton}>
            <Image
              source={require('../images/icon/Facebook.png')}
              style={{ width: 35, height: 35, tintColor: COLOR.title }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={StyleLogin.GButton} onPress={signIn}>
            <Image
              source={require('../images/icon/Google.png')}
              style={{ width: 35, height: 35, tintColor: COLOR.title }}
            />
          </TouchableOpacity>
        </View>
        <View style={StyleLogin.CSbuttomText}>
          <Text style={StyleLogin.ButtomText1}>
            You don't have any account?
          </Text>
          <TouchableOpacity onPress={moveToSignUp}>
            <Text style={StyleLogin.ButtomText2}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};  

const styles = StyleSheet.create({});
export default SignIn;
