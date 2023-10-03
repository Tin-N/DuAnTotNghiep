import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR} from './Theme';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const StyleLogin = StyleSheet.create({
  header: {
    color: COLOR.primary,
  },
});






export const stylesNoResult = StyleSheet.create({
    view: {
        margin:10,
        height: '90%',
        justifyContent:'center',
        alignItems:'center'
    },
    image: {

    },
    text: {
        margin:10,
        fontSize:20,
        textAlign:'center',
        color:'black',
        fontWeight:'bold'
    },
    lightText: {fontSize:16,},
});
export const StyleSearchSuggestions = StyleSheet.create({
  image: {
    width: 22,
    height: 22,
    margin: 9,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  WholeViewInItem: {
    margin: 8,
    flexDirection: 'row',
    width: width * 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewInside: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 19,
    lineHeight: 20,
    letterSpacing: 0.2,
    alignSelf: 'center',
  },
});


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
