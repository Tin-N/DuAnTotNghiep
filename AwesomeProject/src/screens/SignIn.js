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
const {width} = Dimensions.get('window');
import {StyleSheet} from 'react-native';
import {StyleLogin} from '../css/Styles.js';

const SignIn = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View>
      {/* Text Savvy */}
      <Text style={StyleLogin.HeadingText}>Savvy</Text>

      {/* Text Welcome back! */}
      <Text style={StyleLogin.extraText}>Welcome back!</Text>

      {/* TextInput Email */}
      <View>
        <Text style={StyleLogin.textHint}>Email</Text>
        <TextInput
          style={StyleLogin.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Clavi@gmail.com"
          keyboardType="numeric"
        />
      </View>
      {/* TextInput Password */}
      <View>
        <Text style={StyleLogin.textHint}>Password</Text>
        <TextInput
          style={StyleLogin.input}
          // onChangeText={onChangeNumber}
          // value={password}
          placeholder="Enter your password"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
        <Text style={StyleLogin.fgPass}>Forgot password</Text>

        <TouchableOpacity style={StyleLogin.buttonShape}>
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
          <Text style={StyleLogin.ButtomText1}>You don't have any account?</Text>
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
  
});
export default SignIn;