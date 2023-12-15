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
const ConfirmPhoneNum = (props) => {
  const [SMS, setSMS] = React.useState("");
  const {email} = props.route.params;
  const maskedEmail = email.replace(/(?<=.{2}).(?=.*@)/g, '*');
  const navigation = useNavigation();

  const confirmSMS = async () => {
    //http://localhost:3000/api/UserApi/verify-email?emailToken=6589&email=thuannicky1606@gmail.com
    const response = await AxiosIntance().post("/UserApi/verify-email?emailToken="+SMS+"&email="+ email);
    console.log(response);
    if(response.result)
    {
      // console.log(response);
      Alert.alert("Success","Mã xác nhận chính xác");
      navigation.navigate("UpdatePassword",{email: email});
    }else{
      Alert.alert("Sai","Mã xác nhận không chính xác");
    }
  }
  return (
    <View>
      {/* Text Savvy */}
      <Text
        style={StyleLogin.HeadingTextCP}>
        Xác nhận Email
      </Text>

     
      <Text
        style={StyleLogin.HintTextCP}>
        Nhập mã xác nhận vào email{"\n"} ******@gmail.com
        ({maskedEmail})

      </Text>

 
      <View style= {{
        marginTop: 20,
        flexDirection: 'row',
        width: '90%',
      }}>
        
        <TextInput
          style={StyleLogin.inputCP}
          onChangeText={setSMS}
          placeholder="X"
          keyboardType="numeric"
        />
      </View>
      <Text style={StyleLogin.Resent}>Gửi lại</Text>

      <View style={StyleLogin.ContainerSentCode}>
        <Text style={StyleLogin.SCText1}>Mã hết hạn trong </Text>
        <Text style={StyleLogin.SCText2}>03:05 </Text>

      </View>

    
      <View>
        <TouchableOpacity
          style={style=StyleLogin.buttonShape} 
          onPress={() => confirmSMS()}
          > 
          <Text
            style={style=StyleLogin.TextButton}>
            Xác nhận
          </Text>
        </TouchableOpacity>

        
          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});
export default ConfirmPhoneNum;
