import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../css/Theme';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
const windowWIdth = Dimensions.get('window').width;
import {StyleLogin} from '../css/Styles.js';

const Welcome = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View
      style={{
        backgroundColor: COLOR.background,
      }}>
        <StatusBar backgroundColor='#3669c9'/>
      <Text
        style={StyleLogin.HeadingTextWelcome}>
        Buy everything what you want
      </Text>
      <Image style={{
        // backgroundColor: "blue",
        marginHorizontal: "27%",
        width: "50%",
        height: "57%",
      }} source={require('../images/Welcome.png')}></Image>
      <TouchableOpacity
        style={StyleLogin.ButtonWelcome}>
        <Text style={StyleLogin.TextWelcome}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Welcome;
