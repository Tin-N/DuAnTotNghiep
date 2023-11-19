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


  const SignUpp= async()=>{
    if(password==confirmPass){
      
      try {
        
        const response= await AxiosIntance().post("/UserApi/register?email="+ emailUser + "&password="+ password);
        console.log(password);
        if(response.result==true)
        {
          ToastAndroid.show("Đăng ký thành công",ToastAndroid.SHORT);
          navigation.navigate("SignIn");
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
          style={StyleLogin.buttonShape} onPress={SignUpp}>
          <Text
            style={StyleLogin.TetuxtButton}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <View
          style={StyleLogin.CbuttomText}>
          <Text
            style={StyleLogin.ButtomText1}>
            You don't have any account?
          </Text>
          <TouchableOpacity onPress={moveToSignIn}>
            <Text
              style={StyleLogin.ButtomText2}>
              SignIn
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
