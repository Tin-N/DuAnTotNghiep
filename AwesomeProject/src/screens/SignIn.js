import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
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
// import {UserContext} from '../utils/Context';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../utils/AppContext';
const SignIn = () => {
  const [show, setshow] = useState(true);
  const [visible, setvisible] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [emailUser, setEmailUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {setisLogin}= useContext(AppContext);
  const {setuserInfo}= useContext(AppContext);
  const navigation=useNavigation();

  const Signin = async () => {
    try {
      const response= await AxiosIntance().post("/UserApi/login?email="+ emailUser + "&password="+ password);
      // console.log(emailUser, password );
      if(response.user)
      {
        console.log(emailUser, password );
        // await AsyncStorage.setItem("token",response.returnData.data.token);
        // ToastAndroid.show("Đăng nhập ",ToastAndroid.SHORT);
        // ToastAndroid.show("Đăng nhập thành công",ToastAndroid.SHORT);
        setisLogin(true);
        setuserInfo(response.user);
        navigation.navigate('Product');
        console.log(response );

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
        
        <TouchableOpacity>
          <Text style={StyleLogin.fgPass}>Forgot password</Text>
        </TouchableOpacity>
        

        <TouchableOpacity style={StyleLogin.buttonShape} onPress={Signin}>
          <Text style={StyleLogin.TextButton}>Sign In</Text>
        </TouchableOpacity>
        <Text style={StyleLogin.text}>Or</Text>
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
          <TouchableOpacity>
            <Text style={StyleLogin.ButtomText2}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SignIn;
