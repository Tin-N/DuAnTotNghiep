import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../css/Theme';
import {Image} from 'react-native';
const windowWIdth = Dimensions.get('window').width;
import {StyleSheet} from 'react-native';
import {StyleLogin} from '../css/Styles.js';
import AxiosIntance from '../utils/AxiosIntance';
import {useNavigation} from '@react-navigation/native'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const [confirmPass,setConfirmPass]=React.useState("");
  const [emailUser,setEmailUser]=React.useState("");
  const [password,setPassword]=React.useState("");
  const navigation = useNavigation();

  
//http://localhost:3000/api/UserApi/register?email=thuan1234@gmail.com&password=1234
  const moveToSignIn = () => {
    navigation.navigate("SignIn");
  }
  const validation = () => {
    const emailRegex =
    /^[a-zA-Z0-9._%+-]+[0-9._%+-]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{11,}$/;
  if (emailUser === '' || password === '') {
    Alert.alert('Lỗi chưa điền', 'Hãy điền đầy đủ');
    setCheckEmail("yellow");
    setCheckPassword("yellow");
    return false;
  } else if (!emailRegex.test(emailUser)) {
    Alert.alert('Lỗi Email','Hãy điền đầy đủ Email và theo đúng định dạng ');
    setCheckEmail("yellow");
    return false
  } else if (!passwordRegex.test(password)) {
    Alert.alert('Lỗi Password','Hãy điền đầy đủ Password và theo đúng định dạng');
    setCheckPassword("yellow");
    return false
  }
  setCheckEmail("white");
  setCheckPassword("white");
  return true;
};

  const SignUpp= async()=>{
  
      
      try {

        const response= await AxiosIntance().post("/UserApi/register?email="+ emailUser + "&password="+ password);
        // console.log(password);
        // const _id = response.user._id;


        if(response.result==true)
        {
          // ToastAndroid.show("Đăng ký thành công",ToastAndroid.SHORT);
          Alert.alert("","Đăng ký thành công")
          navigation.navigate("SignIn");
          // console.log(response);
        }
          else
          ToastAndroid.show("Đăng ký thất bại",ToastAndroid.SHORT);

      } catch (error) {
        console.log(error);
      }
   
  }

  return (
    <View style={StyleLogin.Container}>
      {/* Text Savvy */}
      <Text
        style={StyleLogin.HeadingText}>
        Savvy
      </Text>

      {/* Text Welcome back! */}
      <Text
        style={StyleLogin.extraText}>
        Sign Up
      </Text>

      {/* TextInput Email */}
      <View>
        <Text style={StyleLogin.textHint}>Email</Text>

        <View style={StyleLogin.input}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="Clavi@gmail.com"
            keyboardType="default"
            onChangeText={setEmailUser}
          />
        </View>
      </View>

      {/* TextInput Password */}
      <View>
        <Text style={StyleLogin.textHint}>Mật khẩu</Text>

        <View style={StyleLogin.input}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="*************"
            underlineColorAndroid="transparent"
            secureTextEntry={showPassword}
            onChangeText={setPassword}
            ></TextInput>

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
        {/* TextInput Password */}
        

        {/* TextInput Confirm Password */}
        <Text style={StyleLogin.textHint}>Xác nhận mật khẩu</Text>

        <View style={StyleLogin.input}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="*************"
            underlineColorAndroid="transparent"
            secureTextEntry={showConfirmPassword}
            onChangeText={setConfirmPass}
            
            ></TextInput>

          <TouchableOpacity
            onPress={() => {
              setShowConfirmPassword(!showConfirmPassword)
            }}
            style={StyleLogin.CTIcon}>
            <Image
              source={
                showConfirmPassword === false
                  ? require('../images/icon/view.png')
                  : require('../images/icon/hide.png')
              }
              style={StyleLogin.HideShowIcon}
            />
          </TouchableOpacity>
          
        </View>
        {/* <Text style={StyleLogin.textHint}>Password Error Validation</Text> */}

         {/* TextInput Confirm Password */}


        <TouchableOpacity
          style={StyleLogin.buttonShape} onPress={SignUpp}>
          <Text
            style={StyleLogin.TextButton}>
            Đăng ký
          </Text>
        </TouchableOpacity>

        <View
          style={StyleLogin.CbuttomText}>
          <Text
            style={StyleLogin.ButtomText1}>
            Bạn đã có tài khoản SavvyShop?
          </Text>
          <TouchableOpacity onPress={moveToSignIn}>
            <Text
              style={StyleLogin.ButtomText2}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // input: {
  //   placeholderTextColor: COLOR.TextPlaceHolder,
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   borderColor: COLOR.borderColor,
  //   padding: 15,
  //   height: 55,
  //   justifyContent: 'space-between',
  //   borderRadius: 5,
  // },
});
export default SignUp;
