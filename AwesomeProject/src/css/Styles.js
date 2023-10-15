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
        height: '70%',
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
    width:170,
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
        borderRadius:5,
        marginRight:30,
        marginTop:10,
      }
    ,
    textInput: {
        padding:10,
        width:'90%',
        borderRadius:10,
        fontSize:15

    },
    TouchableOpacity:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3669C9',
        width:"14%",
        borderBottomRightRadius:5,
        borderTopRightRadius:5
    }
    ,
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
        padding:25,
        marginLeft:30,
        marginRight:30,
        marginTop:10,
        marginBottom:10,



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
 export const styleHome=StyleSheet.create({
    // Top bar

        // View
    topBarView:{
        
        height:50,
        padding:10,
        paddingLeft:30,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red'
    },
    title:{
        color:'#EE2624',
        fontSize:20,
        fontWeight:'700',
        textAlign:'right',
        width:'66%',
        justifyContent:'flex-end',
    },
    viewIcons:{
        width:'34%',
        justifyContent:'flex-end',
        flexDirection:'row',
        marginRight:10,
    },
    icons:{
        marginRight:10
    },

        // Category
        
    CategoryView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:0,
        marginLeft:20,
        marginRight:20,
        marginBottom:8,

        alignItems:'center'
    },
    text:{
        color:'#3669C9'
    },
    titleCategory:{
        color:'black',
        fontWeight:'700',
        fontSize:15
    },


 });
 export const styleSearchScreen = StyleSheet.create({
    topBarView:{
        // backgroundColor:'red',
        flexDirection:'row',
        height:50,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    icons:{
        marginLeft:15
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'black',
        marginLeft:145,
        width:'50%',
        // backgroundColor:'blue'
    }
 })