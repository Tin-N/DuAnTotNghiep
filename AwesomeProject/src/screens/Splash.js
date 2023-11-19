import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import {COLOR} from '../css/Theme'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("SignIn");
        },4000);
    },[]);
  return (
    <View style={{backgroundColor:COLOR.background, flex:1, justifyContent:"center", alignItems:"center"}}>
      <Animatable.Image source={require("../images/icon/Logo.png")} duration={3000} animation="slideInDown"/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})