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

const ResetPassword = () => {
  // const [text, onChangeText] = React.useState('Useless Text');
  // const [number, onChangeNumber] = React.useState('');
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
        Reset Password
      </Text>

      {/* TextInput Email/Phone */}
      <View>
        <Text
          style={{
            color: COLOR.TextHint,
            fontSize: 17,
            marginTop: 20,
            justifyContent: 'space-between',
            marginHorizontal: 16,
          }}>
          Email/Phone
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="+1 Phone Number/Email..........."
          keyboardType="numeric"
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
            width: '94%',
            marginHorizontal: 10,
            marginTop: 20,
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

        <Text style={{
            marginTop: 20,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: COLOR.Blue,
        }}>
          Change Number?</Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: "70%",
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
              // backgroundColor: 'red',
            }}>
            Continute without signing in
          </Text>
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
    borderRadius: 25,
  },
});
export default ResetPassword;
