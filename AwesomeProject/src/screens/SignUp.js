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

const SignUp = () => {
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
        Sign Up
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
          placeholder="Clavi@gmail.com"
          keyboardType="numeric"
        />
      </View>
      {/* TextInput Email */}

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
        {/* TextInput Password */}
        

        {/* TextInput Confirm Password */}
        <Text
          style={{
            color: COLOR.TextHint,
            fontSize: 17,
            marginTop: 15,
            justifyContent: 'space-between',
            marginHorizontal: 16,
          }}>
          Confirm Password
        </Text>
        <TextInput
          style={{
            marginTop: 15,
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
         {/* TextInput Confirm Password */}


        <TouchableOpacity
          style={{
            alignItems: 'center',
            jussifyContent: 'center',
            backgroundColor: COLOR.background,
            padding: 10,
            height: 55,
            width: '94%',
            marginHorizontal: 10,
            marginTop: 40,
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
        <View
          style={{
            marginTop: "30%",
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
            SignIp
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
export default SignUp;
