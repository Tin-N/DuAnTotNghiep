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
import {StyleLogin} from '../css/Theme';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
const windowWIdth = Dimensions.get('window').width;

const Welcome = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View
      style={{
        height: 1000,
        backgroundColor: COLOR.background,
      }}>
      <Text
        style={{
          paddingTop: 20,
          fontWeight: 'bold',
          paddingHorizontal: 20,
          color: 'white',
          fontFamily: 'INter-Black',
          fontSize: 39,
        }}>
        Buy everything what you want
      </Text>
      <Image style={{}} source={require('../images/Welcome.png')}></Image>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 10,
          height: 55,
          margin: 75,
          borderRadius: 30,
          marginHorizontal : 20,
        }}>
        <Text style={{
          fontSize: 20,
          paddingTop: 2,
          fontWeight: 'bold',
          height: 55,
          color: COLOR.background,
          }}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Welcome;
