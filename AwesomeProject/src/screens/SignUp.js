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

  
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedPasswordCF, setIsFocusedPasswordCF] = useState(false);

  const handleFocusEmail = () => {
    setIsFocusedEmail(true);
  };

  const handleBlurEmail = () => {
    setIsFocusedEmail(false);
  };
  const handleFocusPassword = () => {
    setIsFocusedPassword(true);
  };

  const handleBlurPassword = () => {
    setIsFocusedPassword(false);
  };
  const handleFocusPasswordCF = () => {
    setIsFocusedPasswordCF(true);
  };

  const handleBlurPasswordCF = () => {
    setIsFocusedPasswordCF(false);
  };
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

  
//http://localhost:3000/api/UserApi/register?email=thuan1234@gmail.com&password=1234
  const moveToSignIn = () => {
    navigation.navigate("SignIn");
  }
  const validation = () => {
    const emailRegex =
    /^[a-zA-Z0-9._%+-]+[0-9._%+-]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //  gồm chữ, số @ gmail.com
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{11,}$/; // có trên 11 kí tự
  if (emailUser === '' || password === '') {
    Alert.alert('Lỗi chưa điền', 'Hãy điền đầy đủ');
    return false;
  } else if (!emailRegex.test(emailUser)) {
    Alert.alert('Email sai định dạng','Hãy điền theo đúng định dạng');
   
    return false
  } else if (!passwordRegex.test(password)) {
    Alert.alert('Lỗi mật khẩu',' mật khẩu quá ngắn, phải đủ 11 ký tự');
   
    return false
  }else if (password!=confirmPass) {
    Alert.alert('Lỗi mật khẩu',' mật khẩu không trùng khớp');
 
    return false
  }


  return true;
};

  const SignUpp= async()=>{ 
      try {
        if(validation()==true){
          const response= await AxiosIntance().post("/UserApi/register?email="+ emailUser + "&password="+ password);
          if(response.result==true)
          {
            Alert.alert("","Đăng ký thành công")
            navigation.navigate("SignIn");
          }
            else
            ToastAndroid.show("Đăng ký thất bại",ToastAndroid.SHORT);
        }
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

        <View style={[StyleLogin.input,{borderColor: isFocusedEmail ? 'blue' : 'white', }]}>
          <TextInput
            style={StyleLogin.TextInputUP}
            onFocus={handleFocusEmail}
            onBlur={handleBlurEmail}
            placeholder="Clavi@gmail.com"
            keyboardType="default"
            onChangeText={setEmailUser}
          />
        </View>
      </View>

      {/* TextInput Password */}
      <View>
        <Text style={StyleLogin.textHint}>Mật khẩu</Text>

        <View style={[StyleLogin.input,{borderColor: isFocusedPassword ? 'blue' : 'white'}]}>
          <TextInput
            style={StyleLogin.TextInputUP}
            onFocus={handleFocusPassword}
            onBlur={handleBlurPassword}
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

        <View style={[StyleLogin.input,{borderColor: isFocusedPasswordCF ? 'blue' : 'white'}]}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="*************"
            onFocus={handleFocusPasswordCF}
            onBlur={handleBlurPasswordCF}
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
