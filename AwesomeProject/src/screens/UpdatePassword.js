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

const UpdatePassword = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View>

      <Text
        style={StyleLogin.HeadingTextCP}>
        Update Password
      </Text>

      <Text
         style={StyleLogin.HintText}>
        Complete the following final data to enter the Savvy Shop application
      </Text>

      <View>
        <Text
          style={StyleLogin.textHint}>
          New Password
        </Text>
        <TextInput
           style={StyleLogin.input}
          // onChangeText={onChangeNumber}
          // value={password}
          TextHint="Enter your password"
          underlineColorAndroid="transparent"
          // secureTextEntry={true}
        />
      </View>

      <View
        style={StyleLogin.UPContainerWarning}>
        <Image
          source={require('../images/icon/warning.png')}
          style={StyleLogin.iconWarning}></Image>
        <Text
          style={StyleLogin.TextWarning}>
          {' '}
          Mật khẩu phải có 6 ký tự trở lên{' '}
        </Text>
      </View>

      <View >
        <Text
          style={StyleLogin.textHint}>
          Confirm New Password
        </Text>
        <TextInput
              style={StyleLogin.input}
          // onChangeText={onChangeNumber}
          // value={password}
          placeholder="Enter your password"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
      </View>
      <View style={StyleLogin.ButtonUP}>
      <TouchableOpacity style={StyleLogin.buttonShape}>
          <Text style={StyleLogin.TextButton}>Confirm</Text>
        </TouchableOpacity>

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  // input: {
  //   placeholderTextColor: COLOR.TextPlaceHolder,
  //   height: 40,
  //   width: '20%',
  //   margin: 12,
  //   borderWidth: 1,
  //   borderColor: COLOR.borderColor,
  //   padding: 15,
  //   height: 55,
  //   justifyContent: 'space-between',
  //   borderRadius: 25,
  //   textAlign: 'center',
  // },
});
export default UpdatePassword;
