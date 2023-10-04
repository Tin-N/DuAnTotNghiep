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
<<<<<<< HEAD
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
=======
    container: {
    },
    menu: {
        paddingTop: 30,
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
    },
    textTitle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        paddingLeft: 110,
        marginTop: -6,
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
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    }
})
export const StyleShipper = StyleSheet.create({
    line: {
        borderWidth: 1,
        opacity: 0.03,
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'space-between'
    },
    boxShipper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: "DMSans_400Regular"
    },
    listShipper: {
        marginLeft: 30,
        marginRight: 30
    },
    images: {
        height: 35,
        width: 80
    },
    textShippe: {
        marginLeft: 30
    }
>>>>>>> devTin
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
    viewSearchbar:{
        backgroundColor: '#c0c0c03c',
        alignSelf: 'center', 
        width: '90%', 
        flexDirection: 'row',
        height:50,
        marginLeft:30,
        borderRadius:10,
        marginRight:30,
        marginTop:30,
      }
    ,
    textInput: {
        padding:10,
        width:'90%',
        borderRadius:10,
        fontSize:15

    },
    iconSearch: {
        alignSelf:'center'
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
});
export const StyleBanner =  StyleSheet.create({
    secondText:{
                fontFamily: 'DMSans-VariableFont_opsz,wght',
    },
    title:{
        fontFamily: 'DMSans-VariableFont_opsz,wght',
        fontWeight:'700',
        fontSize:25,
        lineHeight:35
    },WholeView:{
        borderRadius:15,
        flexDirection:'row',
        width:'86%',
        alignSelf:'center',
        padding:10,
        marginLeft:30,
        marginRight:30,
        marginTop:30,
        marginBottom:30,



    },icon:{
        marginLeft:5
    },image:{
        alignSelf:'flex-end'
    }

 });

 export const styleWelcome = StyleSheet.create({
    view:{
        backgroundColor:'#3669C9',
        height:'100%',
        width:'100%',
    },
    text:{
        width:'83%',
        fontFamily:'DMSans-VariableFont_opsz,wght',
        fontSize:43,
        fontWeight:'bold',
        color:'white',
        margin:20
    },
    TextInput:{
        backgroundColor:'white',
        width:'80%',
        alignSelf:'center',
        justifyContent:'center',
        height:50,
        marginBottom:50,
        borderRadius:30
    },
    MiniTextInput:{
        // color : '#EE2624',
        color : '#3669C9',
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold'
    }
 });