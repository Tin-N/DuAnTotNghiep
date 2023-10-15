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
import {Image} from 'react-native';
const windowWIdth = Dimensions.get('window').width;
import {StyleSheet} from 'react-native';
import {StyleLogin} from '../css/Styles.js';


const SignUp = () => {
  return (
    <View
      >
      {/* Text Savvy */}
      <Text
        style={StyleLogin.HeadingText}>
        Savvy
      </Text>

      {/* Text Welcome back! */}
      <Text
        style={StyleLogin.extraText}>
        Sign Up
      </Text>

      {/* TextInput Email */}
      <View>
        <Text
          style={StyleLogin.textHint}>
          Email
        </Text>
        <TextInput
          style={StyleLogin.input}
          placeholder="Clavi@gmail.com"
          keyboardType="numeric"
        />
      </View>
      {/* TextInput Email */}

      {/* TextInput Password */}
      <View>
        <Text
          style={StyleLogin.textHint}>
          Password
        </Text>
        <TextInput
          style={StyleLogin.input}
          // onChangeText={onChangeNumber}
          // value={password}
          placeholder="Enter your password"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
        {/* TextInput Password */}
        

        {/* TextInput Confirm Password */}
        <Text
          style={StyleLogin.textHint}>
          Confirm Password
        </Text>
        <TextInput
          style={StyleLogin.input}
          // onChangeText={onChangeNumber}
          // value={password}
          placeholder="Enter your password"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
         {/* TextInput Confirm Password */}


        <TouchableOpacity
          style={StyleLogin.buttonShape}>
          <Text
            style={StyleLogin.TextButton}>
            Sign In
          </Text>
        </TouchableOpacity>

        <View
          style={style=StyleLogin.CbuttomText}>
          <Text
            style={StyleLogin.ButtomText1}>
            You don't have any account?
          </Text>
          <Text
            style={StyleLogin.ButtomText2}>
            SignUp
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // input: {
  //   placeholderTextColor: COLOR.TextPlaceHolder,
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   borderColor: COLOR.borderColor,
  //   padding: 15,
  //   height: 55,
  //   justifyContent: 'space-between',
  //   borderRadius: 5,
  // },
});
export default SignUp;
