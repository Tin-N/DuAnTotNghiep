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

const ConfirmPhoneNum = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View>
      {/* Text Savvy */}
      <Text
        style={StyleLogin.HeadingTextCP}>
        Verify your mobile phone
      </Text>

     
      <Text
        style={StyleLogin.HintTextCP}>
        Enter the 4-digit code sent to +1(83626457)
      </Text>

 
      <View style= {{
        marginTop: "0%",
        flexDirection: 'row',
        width: '90%',
      }}>
        <TextInput
          style={StyleLogin.inputCP}
          // onChangeText={onChangeNumber}
          value={number}
          placeholder="X"
          // keyboardType="numeric"
        />
         <TextInput
          style={StyleLogin.inputCP}
          // onChangeText={onChangeNumber}
          value={number}
          placeholder="X"
          // keyboardType="numeric"
        />
        <TextInput
          style={StyleLogin.inputCP}
          // onChangeText={onChangeNumber}
          value={number}
          placeholder="X"
          // keyboardType="numeric"
        />
        <TextInput
          style={StyleLogin.inputCP}
          // onChangeText={onChangeNumber}
          value={number}
          placeholder="X"
          // keyboardType="numeric"
        />
      </View>
      <Text style={StyleLogin.Resent}>resent</Text>

      <View style={StyleLogin.ContainerSentCode}>
        <Text style={StyleLogin.SCText1}>Sent reset code in </Text>
        <Text style={StyleLogin.SCText2}>03:05 </Text>

      </View>

    
      <View>
        <TouchableOpacity
          style={style=StyleLogin.buttonShape}>
          <Text
            style={style=StyleLogin.TextButton}>
            Coutinue
          </Text>
        </TouchableOpacity>

        
          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});
export default ConfirmPhoneNum;
