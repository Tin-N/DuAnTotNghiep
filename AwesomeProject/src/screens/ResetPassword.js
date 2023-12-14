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
import React, {useState} from 'react';
import {COLOR} from '../css/Theme';
import {StyleLogin} from '../css/Styles.js';
import {Image} from 'react-native';
const windowWIdth = Dimensions.get('window').width;
import {StyleSheet} from 'react-native';
import AxiosIntance from '../utils/AxiosIntance';
import {useNavigation} from '@react-navigation/native';
const ResetPassword = () => {
  // const [text, onChangeText] = React.useState('Useless Text');
  // const [number, onChangeNumber] = React.useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  // regex
  const GotoSignIn = () => {
    navigation.navigate('SignIn');
  }
  const checkEmail = async () => {
    try {
      // http://localhost:3000/api/UserApi/email-verify?email=thuannicky1606@gmail.com
      const response= await AxiosIntance().post("/UserApi/email-verify?email="+email);
      console.log(response);
      if(response)
      {
        console.log(email);
        navigation.navigate("ConfirmPhoneNum", {email: email});
        Alert.alert("Xác nhận email thành công");
      }else{
        // ToastAndroid.show("Đăng nhập thất bại",ToastAndroid.SHORT);
        Alert.alert("Xác nhận email không thành công");
      }
    } catch (error) {
      console.log(error);
    }
  
  };

  return (
    <View>
      {/* Text Savvy */}
      <Text style={(style = StyleLogin.HeadingText)}>Savvy</Text>

      {/* Text Welcome back! */}
      <Text style={(style = StyleLogin.extraText)}>Đặt lại mật khẩu</Text>

      {/* TextInput Email/Phone */}
      <View>
        <Text style={StyleLogin.textHint}>Email</Text>
        <TextInput
          style={StyleLogin.RSPassInput}
          onChangeText={setEmail}
          // value={number}
          placeholder="+1 Email..........."
        />
      </View>

      <View>
        <TouchableOpacity
          style={StyleLogin.SButtonShape}
          onPress={checkEmail}>
          <Text style={StyleLogin.TextButton}>Tiếp tục</Text>
        </TouchableOpacity>
       

        <TouchableOpacity style={{marginTop:"55%"}} onPress={GotoSignIn}>
          <Text style={StyleLogin.RPBottomText}>
            Continute without signing in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ResetPassword;
