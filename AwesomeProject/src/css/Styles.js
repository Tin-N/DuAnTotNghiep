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
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: width,
        height: height,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    textHeader: {
        fontSize: 25,
        fontStyle: 'bold',
        color: 'black'
    },
    tillte: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    textTillte: {
        fontSize: 20,
        fontStyle: 'bold',
        color: 'black',
        marginLeft: 5,
    },
    icon: {
        position: 'absolute',
        right: '5%',
    },
    myCart1: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    textPressable: {
        fontSize: 20,
        fontStyle: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    pressable: {
        marginTop: 20,
        borderRadius: 35,
        height: 52,
        width: 239,
        backgroundColor: '#D44325',
        padding: 10,
    },
    image: {
        height: 226,
        width: 219,
    },
    imageFlatList: {
        height: 80,
        width: 59,
    },
    textNameFlatList: {
        fontSize: 20,
        fontStyle: 'bold',
        color: 'black',
        marginLeft: 5,
    },
    textInfoFlatList: {
        fontSize: 12,
        fontStyle: 'bold',
        color: '#AEAEAE',
        marginLeft: 5,
    },
    function: {
        width: 100,
        alignItems: 'center'
    },
    checkBoxOrder: {
        position: 'relative',
        top: '50%',
    }, 
    pressableBuy: {
        height: 52,
        backgroundColor: '#D44325',
        padding: 5,
    },
})

export const StyleCategory = StyleSheet.create({
    textHeader: {
        fontSize: 16,
        color: 'black',
    },
    textTillte: {
        fontSize: 25,
        fontStyle: 'bold',
        color: 'black',
        marginLeft: 30
    },
    search: {
        position: 'relative',
        marginTop: 15,
    },
    textInput: {
        height: 50,
        width: 325,
        backgroundColor: '#FAFAFA',
        alignSelf: 'center',
        padding: 15,
    },
    icon: {
        position: 'absolute',
        top: '25%',
        right: '15%'
    },
    pressable: {
        borderRadius: 10,
        height: 52,
        width: 325,
        padding: 15,
        borderWidth: 1,
        alignSelf: 'center',
    },
    textPressable: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        padding: 35,
        elevation: 5,
    },
    filterSorting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.25,
    },
    pressableModal: {
        borderRadius: 10,
        height: 52,
        width: width * 0.3,
        padding: 15,
        borderWidth: 1,
        alignSelf: 'center',
    },
    textRang: {
        fontSize: 14,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
    }
})
export const StyleSlider = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        margin: 16,
        paddingBottom: 32,
    },
    sliderContainer: {
        paddingVertical: 16,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})