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

const ResetPassword = () => {
  // const [text, onChangeText] = React.useState('Useless Text');
  // const [number, onChangeNumber] = React.useState('');
  return (
    <View>
      {/* Text Savvy */}
      <Text
        style={style=StyleLogin.HeadingText}>
        Savvy
      </Text>

      {/* Text Welcome back! */}
      <Text
        style={style=StyleLogin.extraText}>
        Reset Password
      </Text>

      {/* TextInput Email/Phone */}
      <View>
        <Text
          style={StyleLogin.textHint}>
          Email/Phone
        </Text>
        <TextInput
          style={StyleLogin.RSPassInput}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="+1 Phone Number/Email..........."
          keyboardType="numeric"
        />
      </View>

      <View>
        <TouchableOpacity
          style={StyleLogin.SButtonShape}>
          <Text
            style={StyleLogin.TextButton}>
            Coutinue
          </Text>
        </TouchableOpacity>

        <Text style={StyleLogin.fgPass1}>
          Change Number?</Text>
          <Text
            style={StyleLogin.RPBottomText}>
            Continute without signing in
          </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});
export default ResetPassword;
