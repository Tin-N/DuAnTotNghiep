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

const ConfirmPhoneNum = () => {
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
          color: COLOR.background,
          fontSize: 28,
          fontWeight: 'bold',
          marginTop: "40%",
          justifyContent: 'space-between',
          marginHorizontal: 20,
          
        }}>
        Verify your mobile phone
      </Text>

     
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: 30,
          color: COLOR.TextHint,
          justifyContent: 'space-between',
          marginHorizontal: 16,
        }}>
        Enter the 4-digit code sent to +1(83626457)
      </Text>

 
      <View style= {{
        marginTop: 20,
        flexDirection: 'row',
        width: '90%',
      }}>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          value={number}
          placeholder="X"
          // keyboardType="numeric"
        />
         <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          value={number}
          placeholder="X"
          // keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          value={number}
          placeholder="X"
          // keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          value={number}
          placeholder="X"
          // keyboardType="numeric"
        />
      </View>
      <Text style={{
        color: COLOR.Blue,
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 15,
      }}>resent</Text>

      <View style={{
        flexDirection: 'row',
        marginTop: 15,
        width: '90%',
        marginHorizontal: 15,
        // backgroundColor: COLOR.background,
      }}>
        <Text style={{
          color: COLOR.TextHint,
          fontSize: 14,

          flex: 5,
        }}>Sent reset code in </Text>
        <Text style={{
          color: COLOR.TextHint,
          fontSize: 14,
          // jussifyContent: 'Space-between',
          flex: 1,
        }}>03:05 </Text>

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
            marginTop: "75%",
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
    textAlign : 'center',
  },
});
export default ConfirmPhoneNum;
