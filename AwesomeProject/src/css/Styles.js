import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR } from './Theme'
export const StyleLogin = StyleSheet.create({
    header: {
        color: COLOR.primary,
    }
})
export const StyleHomeStore = StyleSheet.create({
    container: {      
    },
    menu: {           
        paddingTop:50,
        flexDirection:'row',     
        marginLeft:30,
        marginRight:30,     
    },
    textTitle: {
        fontFamily:'DM Sans',
        textAlign:'center',
        color: 'black',
        fontSize:20,
        paddingLeft:110,
        marginTop:-6
    },
    images: {
        marginLeft:80
    },
    touchOpa: {
        marginLeft:75
    },
    line: {
        borderWidth:1, 
        opacity:0.03, 
        marginTop:20
    },
    boxSeller: {
        marginTop:30,
        paddingLeft:30,
        paddingRight:30,
        flexDirection:'row'
    },
    infoSeller: {
        flexDirection:'row',
    },
    boxNameSeller: {
        width:218,
        marginLeft:20
    },
    boxRate: {
        flexDirection:'row',
        paddingTop:10
    },
    textRate: {
        fontSize:20, 
        color:'black', 
        marginTop:-5, 
        paddingLeft:5
    },
    boxLocate: {
        flexDirection:'row',
        marginLeft:30,
        marginTop:20
    },
    boxProductStore: {
        flexDirection:'row',
        marginTop:20,
        marginLeft:30,
        justifyContent:'space-between',
        marginRight:30
    },
    textTitleProduct: {
        fontSize:15
    },
    textCountProduct: {
        color:'black',
        fontSize:13
    }, 
    textitleProductSelling: {
        fontSize:20,
        color:'black'
    },
    productSelling: {
        marginTop:15,
        marginLeft:30,
        marginRight:30
    },
    boxSelling: {
        backgroundColor: 'FAFAFA'
    },
    boxProduct: {
        padding:10
    }
})
