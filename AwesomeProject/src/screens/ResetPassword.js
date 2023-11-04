import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../css/Theme';
import {StyleLogin} from '../css/Styles.js';
import {Image} from 'react-native';
const windowWIdth = Dimensions.get('window').width;
import {StyleSheet} from 'react-native';
import AxiosIntance from '../utils/AxiosIntance';


const ResetPassword = () => {
  // const [text, onChangeText] = React.useState('Useless Text');
  // const [number, onChangeNumber] = React.useState('');
  const [email, setEmail] = useState("");
  // regex
  const ResetPassword = async () => {
    try {
      
      // http://localhost:3000/api/UserApi/check-email?
      const response= await AxiosIntance().post("/UserApi/check-email?email="+ email);
      
      // console.log(emailUser, password );
      if(response.user)
      {
        // // console.log(emailUser, password );
        // await AsyncStorage.setItem("token",response.returnData.data.token);
        // ToastAndroid.show("check thanhf coong ",ToastAndroid.SHORT);
        console.log(email);
        // ToastAndroid.show("Đăng nhập thành công",ToastAndroid.SHORT);
        // // setisLogin(true);
        // // setuserInfo(response.user);
        // // navigation.navigate('Product');
        // // console.log(response);

      }else{
        ToastAndroid.show("check thất bại",ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <View>
      {/* Text Savvy */}
      <Text
        style={style=StyleLogin.HeadingText}>
        Savvy
      </Text>

      {/* Text Welcome back! */}
      <Text
        style={style=StyleLogin.extraText}>
        Reset Password
      </Text>

      {/* TextInput Email/Phone */}
      <View>
        <Text
          style={StyleLogin.textHint}>
          Email/Phone
        </Text>
        <TextInput
          style={StyleLogin.RSPassInput}
          onChangeText={setEmail}
          // value={number}
          placeholder="+1 Phone Number/Email..........."
        />
      </View>

      <View>
        <TouchableOpacity
          style={StyleLogin.SButtonShape} onPress={ResetPassword}>
          <Text
            style={StyleLogin.TextButton} >
            Coutinue
          </Text>
        </TouchableOpacity>

        <Text style={StyleLogin.fgPass}>
          Change Number?</Text>
          <Text
            style={StyleLogin.RPBottomText}>
            Continute without signing in
          </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});
export default ResetPassword;
