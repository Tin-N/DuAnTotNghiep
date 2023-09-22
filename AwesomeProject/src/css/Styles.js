import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { COLOR } from './Theme'

const { width, height } = Dimensions.get("window");
export const StyleLogin = StyleSheet.create({
    header: {
        color: COLOR.primary,
    }
})

export const StyleOrder = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: width,
        height: height,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    textHeader:{
        fontSize: 25,
        fontStyle: 'bold',
        color: 'black'
    },
    tillte:{
        flexDirection: 'row',
        margin: 10
    },
    textTillte:{
        fontSize: 20,
        fontStyle: 'bold',
        color: 'black',
        marginLeft: 5,
    },
    icon:{
        position: 'absolute',
        right: '5%',
    },
    myCart1:{
        flexDirection: 'column', 
        alignItems: 'center'
    },
    textPressable:{
        fontSize: 20,
        fontStyle: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    pressable:{
        marginTop: 20,
        borderRadius: 35,
        height: 52,
        width: 239,
        backgroundColor: '#D44325',
        padding: 10,
    },
    image:{
        height: 226, 
        width: 219,
    },
})

export const StyleCategory = StyleSheet.create({
    textHeader:{
        fontSize: 16,
        color: 'black',
    },
    textTillte:{
        fontSize: 25,
        fontStyle: 'bold',
        color: 'black',
        marginLeft: 30
    },
    search:{
        position: 'relative',
        marginTop: 15,
    },
    textInput:{
        height: 50,
        width: 325,
        backgroundColor: '#FAFAFA',
        alignSelf: 'center',
        padding: 15,
    },
    icon:{
        position: 'absolute',
        top: '25%',
        right: '15%'
    },
    pressable:{
        borderRadius: 10,
        height: 52,
        width: 325,
        padding: 15,
        borderWidth: 1,
        alignSelf: 'center',
        position: 'relative',
        top: '70%',
    },
    textPressable:{
        fontSize: 14,
        textAlign: 'center'
    }
})