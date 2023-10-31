import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../css/Theme';
import {Image} from 'react-native';
const windowWIdth = Dimensions.get('window').width;
import {StyleSheet} from 'react-native';
import {StyleLogin} from '../css/Styles.js';
import AxiosIntance from '../utils/AxiosIntance';


const SignUp = () => {
  const [show, setshow] = useState(true);
  const [visible, setvisible] = useState(true);

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [confirmPass,setConfirmPass]=React.useState("");
  const [emailUser,setEmailUser]=React.useState("");
  const [password,setPassword]=React.useState("");
//http://localhost:3000/api/UserApi/register?email=thuan1234@gmail.com&password=1234

  const SignUp= async()=>{
    if(password==confirmPass){
      console.log(emailUser+password);
      try {
        const response= await AxiosIntance().post("/UserApi/register?email="+ emailUser + "&password="+ password);
        console.log(response);
        if(response.result==true)
        {
          ToastAndroid.show("Đăng ký thành công",ToastAndroid.SHORT);
          // moveToLoggin();
          console.log(response);
        }
          else
          ToastAndroid.show("Đăng ký thất bại",ToastAndroid.SHORT);

      } catch (error) {
        console.log(error);
      }
    }else{
      ToastAndroid.show("Mật khẩu không trùng khớp",ToastAndroid.SHORT);
    }
  }

  return (
    <View
      >
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
            value={emailUser}
            style={StyleLogin.TextInputUP}
            placeholder="Enter your email"
            keyboardType="default"
            onChangeText={setEmailUser}
          />
        </View>
      </View>

      {/* TextInput Password */}
      <View>
        <Text style={StyleLogin.textHint}>Password</Text>

        <View style={StyleLogin.input}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="Enter your password"
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
                show === false
                  ? require('../images/icon/view.png')
                  : require('../images/icon/hide.png')
              }
              style={StyleLogin.HideShowIcon}
            />
          </TouchableOpacity>
        </View>
        {/* TextInput Password */}
        

        {/* TextInput Confirm Password */}
        <Text style={StyleLogin.textHint}>Confirm Password</Text>

        <View style={StyleLogin.input}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="Enter your password again"
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
         {/* TextInput Confirm Password */}


        <TouchableOpacity
          style={StyleLogin.buttonShape} onPress={SignUp}>
            
          <Text
            style={StyleLogin.TextButton}>
            Sign In
          </Text>
        </TouchableOpacity>

        <View
          style={style=StyleLogin.CbuttomText}>
          <Text
            style={StyleLogin.ButtomText1}>
            You don't have any account?
          </Text>
          <Text
            style={StyleLogin.ButtomText2}>
            SignUp
          </Text>
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
