import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert
} from 'react-native';
import React, {useState,useContext, ToastAndroid, } from 'react';
import {COLOR} from '../css/Theme';
import {Image} from 'react-native';
const {width} = Dimensions.get('window');
import {StyleSheet} from 'react-native';
import {StyleLogin} from '../css/Styles.js';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AxiosIntance from '../utils/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../utils/Context';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../utils/AppContext';
const SignIn = () => {

  const [showPassword, setShowPassword] = useState(true);
  const [emailUser, setEmailUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  // Lấy thông tin user từ context    
  const {setuserInfo, userInfo, userID, setuserID,setisLogin}= useContext(AppContext);
  const navigation = useNavigation();
  // regex
  const validate = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+[0-9._%+-]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{11,}$/;
    if(emailUser === "" || password === "")
    {
      Alert.alert("Error","Please enter full information");
    }else if(!emailRegex.test(emailUser)){
      Alert.alert("Email Error","Your email must have more than 16 characters, and must include numbers");
    }else if(!passwordRegex.test(password)){
      Alert.alert("Password Error","Your password must have more than 11 characters, and must include numbers");
  }
}

  const moveToSignUp = () => {
    navigation.navigate("SignUp");
  }

  const FGPassword = () => {
    navigation.navigate("ResetPassword");
  }

  const SignIn = async () => {
    validate();
    try {
      // console.log(emailUser, password );
      const response= await AxiosIntance().post("/UserApi/login?email="+ emailUser + "&password="+ password);
      
      // console.log(emailUser, password );
      if(response.user )
      {
        
        // lấy thông tin user từ context (id)
        const _id = response.user._id;
        setuserInfo({...userInfo, ...response.user});
        setuserID(_id);
        setisLogin(true)
        console.log("UserID "+ response.user );// log ra ID

     
        setuserInfo(response.user);
        navigation.navigate("ProfileScreen");
       
        
      }else{
        // ToastAndroid.show("Đăng nhập thất bại",ToastAndroid.SHORT);
      }
      
    } catch (error) {
      console.log(error);
    }
  
  }
     
  

  return (
    <View>
      {/* Text Savvy */}
      <Text style={StyleLogin.HeadingText}>Savvy</Text>

      {/* Text Welcome back! */}
      <Text style={StyleLogin.extraText}>Welcome back!</Text>

      {/* TextInput Email */}
      <View>
        <Text style={StyleLogin.textHint}>Email</Text>
        <View style={StyleLogin.input}>
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

        <View style={StyleLogin.inputP}>
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
        
        <TouchableOpacity onPress={FGPassword}>
          <Text style={StyleLogin.fgPass} >Forgot password</Text>
        </TouchableOpacity>
        

        <TouchableOpacity style={StyleLogin.buttonShape} onPress={SignIn}>
          <Text style={StyleLogin.TextButton}>Sign In</Text>
        </TouchableOpacity>
        <View style={StyleLogin.FGcontainer}>
          <TouchableOpacity style={StyleLogin.FButton}>
            <Image
              source={require('../images/icon/Facebook.png')}
              style={{width: 35, height: 35, tintColor: COLOR.title}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={StyleLogin.GButton}>
            <Image
              source={require('../images/icon/Google.png')}
              style={{width: 35, height: 35, tintColor: COLOR.title}}
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
