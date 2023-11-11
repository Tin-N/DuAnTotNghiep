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
    width:180,
    elevation:1,
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
    

    searchButton:{
        marginLeft:5,
        padding:15,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3669C9',
        borderRadius:30
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
        marginTop:10,
      }
    ,
    textInput: {
        paddingHorizontal:20,
        padding:10,
        width:'60%',
        borderRadius:30,
        fontSize:15,
        borderWidth:0.8,
        borderColor:'black'
    },
    textInput2: {
        padding:10,
        width:'90%',
        borderRadius:10,
        fontSize:15
    },
    textInput3: {
        paddingLeft:15,
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
        marginTop:20,
        marginBottom:10,
        padding:10,
        paddingLeft:20,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red'
    },
    title:{
        color:'#fefefe',
        fontSize:20,
        textAlignVertical:'center',
        fontWeight:'700',
        width:'16%',
        justifyContent:'center',
    },
    viewIcons:{
        width:'20%',
        justifyContent:'flex-end',
        flexDirection:'row',
        marginRight:10,
    },
    icons:{
        height:30,
        width:30,
        marginRight:10
    },

        // Category
        
    CategoryView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:0,
       
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
  
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'black',
        marginLeft:145,
        width:'50%',
        // backgroundColor:'blue'
    }
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
        textAlign:'center',
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
    },
    });
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
});


export const styleProductScreen=StyleSheet.create({
    
});
