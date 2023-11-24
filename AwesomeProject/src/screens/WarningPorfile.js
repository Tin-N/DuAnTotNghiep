import { StyleSheet, Text, View,TouchableOpacity, ToastAndroid, Image } from 'react-native'
import React from 'react'
import {COLOR} from '../css/Theme';

import {useNavigation} from '@react-navigation/native'


const WarningPorfile = () => {
    const navigation = useNavigation();
    const goLogin = () => {
        navigation.navigate('SignIn');
    }

  return (
    <View style={styles.Container} >
        <TouchableOpacity onPress={()=>goLogin()}>
            <Text style={styles.Text} >You should Login To Savvy</Text>
            <Image style={styles.Icon}  source={require('../images/icon/Logo.png')}></Image>
        </TouchableOpacity>
    </View>
  )
}

export default WarningPorfile

const styles = StyleSheet.create({
    Text:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: "25%",
        color :  'white'
    },
    Container:{
        flex: 1,
        backgroundColor: COLOR.background,
    },
    Icon:{
        width: 300,
        height: 300,
        alignSelf: 'center',
        marginTop: "20%",
    },
})