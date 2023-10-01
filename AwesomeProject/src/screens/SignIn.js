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
          style={styles.input}
          onChangeText={onChangeNumber}
          // value={password}
          placeholder="Clavi@gmail.com"
          keyboardType="numeric"
        />
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
