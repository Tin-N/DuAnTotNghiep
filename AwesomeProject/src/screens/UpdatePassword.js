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
import {StyleLogin} from '../css/Theme';
import {Image} from 'react-native';
const windowWIdth = Dimensions.get('window').width;
import {StyleSheet} from 'react-native';

const UpdatePassword = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View
      style={{
        width: windowWIdth,
        height: '100%',
      }}>
      {/* Text Savvy */}
      <Text
        style={{
          color: 'black',
          fontSize: 28,
          fontWeight: 'bold',
          marginTop: '40%',
          justifyContent: 'space-between',
          marginHorizontal: 15,
        }}>
        Update Password
      </Text>

      <Text
        style={{
          color: COLOR.TextHint,
          width: '85%',
          fontSize: 15,
          // fontWeight: 'bold',
          marginTop: 25,
          color: COLOR.TextHint,
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        Complete the following final data to enter the Savvy Shop application
      </Text>

      <View>
        <Text
          style={{
            color: COLOR.TextHint,
            fontSize: 17,
            justifyContent: 'space-between',
            marginHorizontal: '6%',
            marginTop: '5%',
          }}>
          New Password
        </Text>
        <TextInput
          style={{
            marginTop: 10,
            height: 50,
            pading: 10,
            borderRadius: 10,
            width: '88%',
            borderColor: COLOR.TextPlaceHolder,
            borderWidth: 1,
            marginHorizontal: '6%',
          }}
          // onChangeText={onChangeNumber}
          // value={password}
          TextHint="Enter your password"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
      </View>

      <View
        style={{
          marginTop: '5%',
          marginHorizontal: '6%',
          flexDirection: 'row',
          alignItems: 'center',
          // backgroundColor: 'green',
        }}>
        <Image
          source={require('../images/icon/warning.png')}
          style={{
            width: 20,
            height: 20,
            // justifyContent: 'space-between',
            alignItems: 'center',

            // backgroundColor: 'yellow',
          }}></Image>
        <Text
          style={{
            color: COLOR.TextHint,
            width: '85%',
            fontSize: 15,
            // backgroundColor: 'red',
            alignItems: 'center',
            // color: COLOR.TextHint,
            justifyContent: 'space-between',
            marginHorizontal: '2%',
          }}>
          {' '}
          Mật khẩu phải có 6 ký tự trở lên{' '}
        </Text>
      </View>

      <View style={{
        marginTop: '5%',
      }}>
        <Text
          style={{
            color: COLOR.TextHint,
            fontSize: 17,
            justifyContent: 'space-between',
            marginHorizontal: '6%',
          }}>
          Confirm New Password
        </Text>
        <TextInput
          style={{
            marginTop: "5%",
            height: 50,
            pading: 10,
            borderRadius: 10,
            width: '88%',
            borderColor: COLOR.TextPlaceHolder,
            borderWidth: 1,
            marginHorizontal: '6%',
          }}
          // onChangeText={onChangeNumber}
          // value={password}
          placeholder="Enter your password"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
      </View>

      <View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            jussifyContent: 'center',
            backgroundColor: COLOR.background,
            padding: 10,
            height: 55,
            width: '95%',
            marginTop: '50%',
            marginHorizontal: 10,

            borderRadius: 30,
          }}>
          <Text
            style={{
              fontSize: 20,
              paddingTop: 2,
              fontWeight: 'bold',
              height: 55,
              color: 'white',
            }}>
            Coutinue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    placeholderTextColor: COLOR.TextPlaceHolder,
    height: 40,
    width: '20%',
    margin: 12,
    borderWidth: 1,
    borderColor: COLOR.borderColor,
    padding: 15,
    height: 55,
    justifyContent: 'space-between',
    borderRadius: 25,
    textAlign: 'center',
  },
});
export default UpdatePassword;
