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

const SignIn = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View
      style={{
        height: 1000,
        width: windowWIdth,
        height: '100%',
      }}>
      {/* Text Savvy */}
      <Text
        style={{
          color: COLOR.background,
          fontSize: 80,
          fontWeight: 'bold',
          marginTop: 30,
          justifyContent: 'space-between',
          marginHorizontal: 20,
          // Tạo bóng chữ
          textShadowColor: 'black',
          textShadowOffset: {width: -3, height: 5},
          textShadowRadius: 1,
        }}>
        Savvy
      </Text>

      {/* Text Welcome back! */}
      <Text
        style={{
          color: 'black',
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 10,
          justifyContent: 'space-between',
          marginHorizontal: 16,
        }}>
        Welcome back!
      </Text>

      {/* TextInput Email */}
      <View>
        <Text
          style={{
            color: COLOR.TextHint,
            fontSize: 17,
            marginTop: 20,
            justifyContent: 'space-between',
            marginHorizontal: 16,
          }}>
          Email
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Clavi@gmail.com"
          keyboardType="numeric"
        />
      </View>
      {/* TextInput Password */}
      <View>
        <Text
          style={{
            color: COLOR.TextHint,
            fontSize: 17,
            justifyContent: 'space-between',
            marginHorizontal: 16,
          }}>
          Password
        </Text>
        <TextInput
          style={{
            marginTop: 10,
            height: 55,
            pading: 10,
            borderRadius: 5,
            width: '94%',
            borderColor: COLOR.TextPlaceHolder,
            borderWidth: 1,
            marginHorizontal: 10,
          }}
          // onChangeText={onChangeNumber}
          // value={password}
          placeholder="Enter your password"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
        <Text
          style={{
            textAlign: 'right',
            marginHorizontal: 20,
            color: COLOR.Blue,
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Forgot password
        </Text>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            jussifyContent: 'center',
            backgroundColor: COLOR.background,
            padding: 10,
            height: 55,
            width: '94%',
            marginHorizontal: 10,
            marginTop: 20,
            borderRadius: 30,
            // marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              paddingTop: 2,
              fontWeight: 'bold',
              height: 55,
              color: 'white',
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: COLOR.TextHint,
            fontSize: 17,
            justifyContent: 'space-between',
            marginHorizontal: 16,
            marginTop: 15,
            // backgroundColor: 'red',
            textAlign: 'center',
          }}>
          Or
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '94%',
            marginHorizontal: 10,
            marginTop: 10,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: COLOR.Blue,
              padding: 10,
              height: 55,
              width: '46%',
              borderRadius: 10,
              marginHorizontal: 0,
            }}>
            <Image
              source={require('../images/icon/Facebook.png')}
              style={{width: 35, height: 35, tintColor: COLOR.title}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              borderColor: COLOR.borderColor,
              borderWidth: 1,
              padding: 10,
              height: 55,
              width: '46%',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Image
              source={require('../images/icon/Google.png')}
              style={{width: 35, height: 35, tintColor: COLOR.title}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: "20%",
            flexDirection: 'row',
            justifyContent: 'center',
            width: '94%',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWight: 'bold',
              // backgroundColor: 'red',
            }}>
            You don't have any account?
          </Text>
          <Text
            style={{
              color: COLOR.Blue,
              fontSize: 20,
              fontWight: 'bold',
              fontStyle: 'italic',
              // backgroundColor: 'blue',
              textDecorationLine: 'underline',
            }}>
            SignUp
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    placeholderTextColor: COLOR.TextPlaceHolder,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: COLOR.borderColor,
    padding: 15,
    height: 55,
    justifyContent: 'space-between',
    borderRadius: 5,
  },
});
export default SignIn;
