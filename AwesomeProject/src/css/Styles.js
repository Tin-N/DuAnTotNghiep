import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR } from './Theme'
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'

export const StyleLogin = StyleSheet.create({
    header: {
        color: COLOR.primary,
    }
})
export const StyleHomeStore = StyleSheet.create({
    container: {
    },
    menu: {
        paddingTop: 50,
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
    },
    textTitle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        paddingLeft: 110,
        marginTop: -6
    },
    images: {
        marginLeft: 80
    },
    touchOpa: {
        marginLeft: 75
    },
    line: {
        borderWidth: 1,
        opacity: 0.03,
        marginTop: 20
    },
    boxSeller: {
        marginTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row'
    },
    infoSeller: {
        flexDirection: 'row',
    },
    boxNameSeller: {
        width: 218,
        marginLeft: 20
    },
    boxRate: {
        flexDirection: 'row',
        paddingTop: 10
    },
    textRate: {
        fontSize: 20,
        color: 'black',
        marginTop: -5,
        paddingLeft: 5
    },
    boxLocate: {
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 20
    },
    boxProductStore: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 30,
        justifyContent: 'space-between',
        marginRight: 30
    },
    textTitleProduct: {
        fontSize: 15
    },
    textCountProduct: {
        color: 'black',
        fontSize: 13
    },
    textitleProductSelling: {
        fontSize: 20,
        color: 'black'
    },
    productSelling: {
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30
    },
    boxSelling: {
        backgroundColor: 'FAFAFA',
        paddingLeft: 30,
        paddingRight: 30,
    },
    boxProduct: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 3,
    },
    reviewsProduct: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:5
    }
})
export const StyleShipper = StyleSheet.create({
    line: {
        borderWidth: 1,
        opacity: 0.03,       
    },
    menu: {
        flexDirection:'row',
        alignItems:'center',
        height:80,
        marginLeft:30, 
        marginRight:30,
        justifyContent:'space-between'
    },
    boxShipper: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        marginBottom:20
    },
    textTitle: {
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        fontFamily: "DMSans_400Regular"
    },
    listShipper: {
        marginLeft:30,
        marginRight:30
    },
    images: {
        height:35,
        width:80
    },
    textShippe: {
        marginLeft:30
    }
})
export const StyleSearch = StyleSheet.create({
    menu: {
        paddingTop: 50,
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
    },
    textTitle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        paddingLeft: 90,
        marginTop: -6
    },
    images: {
        marginLeft: 80
    },
    touchOpa: {
        marginLeft: 75
    },
    line: {
        borderWidth: 1,
        opacity: 0.03,
        marginTop: 20
    },
    inputSearch: {
        paddingLeft:30,
        paddingRight:30,
        paddingTop:30,
        flexDirection:'row',
        alignItems:'center',       
    },
    textInput: {
        height:45,
        paddingLeft:20,
        width:220,
        borderRadius:30,
        borderWidth:1.2,
        borderColor:'#3669C9'
    },
    searchButton: {
        height:45,
        backgroundColor:'#3669C9',
        alignItems:'center',
        paddingTop:12,
        marginLeft:15,
        borderRadius:30,
    },
    iconSearch: {
        marginLeft:-40
    },
    boxSeller: {
        marginTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row'
    },
    infoSeller: {
        flexDirection: 'row',
    },
    boxNameSeller: {
        width: 218,
        marginLeft: 20
    },
    boxRate: {
        flexDirection: 'row',
        paddingTop: 10
    },
    textRate: {
        fontSize: 20,
        color: 'black',
        marginTop: -5,
        paddingLeft: 5
    },
    boxProductStore: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 30,
        justifyContent: 'space-between',
        marginRight: 30
    },
    textTitleProduct: {
        fontSize: 15
    },
    textCountProduct: {
        color: 'black',
        fontSize: 13
    },
    textitleProductSelling: {
        fontSize: 20,
        color: 'black'
    },
    productSelling: {
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30
    },
    boxSelling: {
        backgroundColor: 'FAFAFA',
        paddingLeft: 30,
        paddingRight: 30,
    },
    boxProduct: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 3,
    },
    reviewsProduct: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:5
    },
    flatlistHistory: {
        marginTop:30
    }
})
