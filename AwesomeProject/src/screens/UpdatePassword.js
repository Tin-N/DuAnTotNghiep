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
  const [show, setshow] = useState(true);
  const [visible, setvisible] = useState(true);
  return (
    <View>
      
      <Text style={StyleLogin.HeadingTextCP}>Update Password</Text>

      <Text style={StyleLogin.HintText}>
        Complete the following final data to enter the Savvy Shop application
      </Text>

      <View>
        <Text style={StyleLogin.textHint}>New Password</Text>

        <View style={StyleLogin.input}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="Enter your password"
            underlineColorAndroid="transparent"
            secureTextEntry={visible}></TextInput>

          <TouchableOpacity
            onPress={() => {
              setvisible(!visible);
              setshow(!show);
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
      </View>

      <View style={StyleLogin.UPContainerWarning}>
        <Image
          source={require('../images/icon/warning.png')}
          style={StyleLogin.iconWarning}></Image>
        <Text style={StyleLogin.TextWarning}>
          {' '}
          Mật khẩu phải có 6 ký tự trở lên{' '}
        </Text>
      </View>

      <View>
        <Text style={StyleLogin.textHint}> Confirm New Password</Text>

        <View style={StyleLogin.input}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="Enter your password"
            underlineColorAndroid="transparent"
            secureTextEntry={visible}></TextInput>

          <TouchableOpacity
            onPress={() => {
              setvisible(!visible);
              setshow(!show);
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
      </View>
      <View style={StyleLogin.ButtonUP}>
        <TouchableOpacity style={StyleLogin.buttonShape}>
          <Text style={StyleLogin.TextButton}>Save Update</Text>
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
