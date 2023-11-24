import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLOR } from './Theme';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
const { width, height } = Dimensions.get('screen');

export const StyleLogin1 = StyleSheet.create({

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
        margin: 5
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
        width: 25 * width / 100,
        fontSize: 20,
        fontStyle: 'bold',
        color: 'black',
        marginLeft: 5,
    },
    textInfoFlatList: {
        width: 25 * width / 100,
        fontSize: 12,
        fontStyle: 'bold',
        color: '#AEAEAE',
        marginLeft: 5,
    },
    function: {
        width: 20 * width / 100,
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
        margin: 10,
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {

    },
    text: {
        margin: 10,
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    },
    lightText: { fontSize: 16, },
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
    });


export const StyleBanner = StyleSheet.create({
    secondText: {
        fontFamily: 'DMSans-VariableFont_opsz,wght',
    },
    title: {
        fontFamily: 'DMSans-VariableFont_opsz,wght',
        fontWeight: '700',
        fontSize: 25,
        lineHeight: 35
    }, WholeView: {
        borderRadius: 15,
        flexDirection: 'row',
        width: '86%',
        alignSelf: 'center',
        padding: 25,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 10,



    }, icon: {
        marginLeft: 5
    }, image: {
        alignSelf: 'flex-end'
    }

});

export const styleWelcome = StyleSheet.create({
    view: {
        backgroundColor: '#3669C9',
        height: '100%',
        width: '100%',
    },
    text: {
        width: '83%',
        fontFamily: 'DMSans-VariableFont_opsz,wght',
        fontSize: 43,
        fontWeight: 'bold',
        color: 'white',
        margin: 20
    },
    TextInput: {
        backgroundColor: 'white',
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 50,
        marginBottom: 50,
        borderRadius: 30
    },
    MiniTextInput: {
        // color : '#EE2624',
        color: '#3669C9',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export const StyleDetailFeedback = StyleSheet.create({
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
        width: 220
    },
    images: {
        marginLeft: 80
    },
    touchOpa: {
        alignItems: 'center',
        width: 300,
        padding: 5,
        marginLeft: 48,
        borderWidth: 0.4,
        borderRadius: 5
    },
    line: {
        borderWidth: 1,
        opacity: 0.03,
        marginTop: 20
    },
    boxRate: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 25,

    },
    boxTextRate: {
        marginTop: 28,
        width: 75
    },
    boxStarRate: {
        marginLeft: 15
    },
    separator: {
        height: 1,
        padding: 5
    }
})
export const StyleDialogShopping = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 250,
        borderRadius: 5,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'white',
        padding: 10, borderWidth: 1, height: 'auto'
    },
    line: {
        borderWidth: 1,
        opacity: 0.03,
        marginTop: 20
    },
    container2: {
        flex: 1,
        marginTop: 300,
        borderRadius: 5,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'white',
        padding: 10, borderWidth: 1, height: 150
    },
    containerShopping: {
        flex: 1,
        marginTop: 150,
        borderTopLeftRadius: 10, borderTopRightRadius: 10,
        backgroundColor: 'white',
        padding: 10, borderWidth: 1
    }



})

export const StyleLogin = StyleSheet.create({
    Container: {
        backgroundColor: COLOR.backgroundSignIn,
    },
    header: {
      color: COLOR.primary,
    },
    HintTextCP:{
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: "2%",
      height: 55,
      letterSpacing: 0.9,
      color: COLOR.TextHint,
      // justifyContent: 'center',
      marginHorizontal: 25,
    },
    HeadingTextCP: {
      color: COLOR.background,
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: '20%',
      justifyContent: 'space-between',
      marginHorizontal: 20,
    },
    HeadingText: {
      color: COLOR.background,
      fontSize: 80,
      fontWeight: 'bold',
  
      marginTop: '2%',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      // Tạo bóng chữ
      textShadowColor: 'black',
      textShadowOffset: {width: -3, height: 5},
      textShadowRadius: 1,
    },
    extraText: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
      justifyContent: 'space-between',
      paddingTop: '2%',
      marginHorizontal: 16,
      paddingBottom: '3%',
    },
    textHint: {
      color: COLOR.TextHint,
      fontSize: 15,
      marginTop: '1%',
      justifyContent: 'space-between',
      marginHorizontal: 16,
    },
    textHintP: {
      color: COLOR.TextHint,
      fontSize: 15,
      marginTop: '1%',
      justifyContent: 'space-between',
      marginHorizontal: 16,
    },
    fgPass: {
      marginTop: '1%',
      textAlign: 'right',
      marginHorizontal: 20,
      color: COLOR.background,
      fontSize: 15,
      // alignContent: 'flex-end',
      fontWeight: 'bold',
    },
    fgPass1: {
      textAlign: 'center',
      marginTop: '3%',
      color: COLOR.Blue,
      fontSize: 20,
      fontWeight: 'bold',
    },
    input: {
      flexDirection: 'row',
      // placeholderTextColor: COLOR.TextPlaceHolder,
      // height: 30,
      marginHorizontal: '3%',
      marginTop: '1.3%',
      borderWidth: 1,
      borderColor: COLOR.borderColor,
      padding: '1%',
      height: 55,
      justifyContent: 'space-between',
      alignContent: 'center',
      borderRadius: 15,
    },
    inputP:{
      flexDirection: 'row',
      // placeholderTextColor: COLOR.TextPlaceHolder,
      // height: 30,
      marginTop: '1.3%',
      marginHorizontal: '3%',
      borderWidth: 1,
      borderColor: COLOR.borderColor,
      padding: '1%',
      height: 55,
      justifyContent: 'space-between',
      alignContent: 'center',
      borderRadius: 15,
    },
    buttonShape: {
      alignItems: 'center',
      jussifyContent: 'center',
      backgroundColor: COLOR.background,
      padding: 10,
      height: 55,
      width: '95%',
      marginHorizontal: 10,
      marginTop: "5%",
      borderRadius: 30,
      // marginHorizontal: 10
    },
    TextButton: {
      fontSize: 20,

      fontWeight: 'bold',
      height: 55,
      marginTop:"1%",
      color: 'white',
    },
  
    text: {
      color: COLOR.TextHint,
      fontSize: 17,
      justifyContent: 'space-between',
      marginHorizontal: 16,
      marginTop: 15,
      // backgroundColor: 'red',
      textAlign: 'center',
    },
    FGcontainer: {
      flexDirection: 'row',
      width: '94%',
      marginHorizontal: 10,
      marginTop: "4%",
      justifyContent: 'space-around',
    },
    FButton: {
      alignItems: 'center',
      backgroundColor: COLOR.background,
      padding: 10,
      height: 55,
      width: '46%',
      borderRadius: 10,
      marginHorizontal: 0,
    },
    GButton: {
      alignItems: 'center',
      borderWidth: 0.5,
      padding: 10,
      height: 55,
      width: '46%',
      borderRadius: 10,
      marginHorizontal: 0,
    },
    CbuttomText: {
      marginTop: '8%',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '94%',
      marginHorizontal: 10,
    },
    CSbuttomText: {
      marginTop: '7%',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '94%',
      marginHorizontal: 10,
    },
    ButtomText1: {
      fontSize: 20,
      fontWight: 'bold',
      // backgroundColor: 'red',
    },
    ButtomText2: {
      color: COLOR.background,
      fontSize: 20,
      fontWight: 'bold',
      fontStyle: 'italic',
      // backgroundColor: 'blue',
      textDecorationLine: 'underline',
    },
    SButtonShape: {
      alignItems: 'center',
      jussifyContent: 'center',
      backgroundColor: COLOR.background,
      padding: 10,
      height: 55,
      width: '94%',
      marginHorizontal: 10,
      marginTop: 20,
      borderRadius: 30,
    },
    RPBottomText: {
      textAlign: 'center',
      marginTop: '7%',
      fontSize: 20,
      color: COLOR.background,
      fontWeight: 'bold',
      
    },
    RSPassInput: {
      placeholderTextColor: COLOR.TextPlaceHolder,
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: COLOR.borderColor,
      padding: 15,
      height: 55,
      justifyContent: 'space-between',
      borderRadius: 25,
      
    },
  
    //Welcome
  
    //Welcome
    HeadingTextWelcome: {
      paddingTop: '2%',
      fontWeight: 'bold',
      paddingHorizontal: 20,
      color: 'white',
      fontFamily: 'INter-Black',
      fontSize: 39,
    },
    ButtonWelcome: {
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      height: 55,
      margin: 75,
      borderRadius: 30,
      marginHorizontal: 20,
    },
    TextWelcome: {
      fontSize: 20,
      paddingTop: 2,
      fontWeight: 'bold',
      height: 55,
      color: COLOR.background,
    },
  
    // Confirm Pass
    HeadingTextCP: {
      color: COLOR.background,
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: '20%',
      justifyContent: 'space-between',
      marginHorizontal: 20,
    },
    HintText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 30,
      height: 55,
      color: COLOR.TextHint,
      // justifyContent: 'center',
      marginHorizontal: 16,
    },
    inputCP: {
      placeholderTextColor: COLOR.TextPlaceHolder,
      height: 40,
      width: '100%',
      margin: 12,
      borderWidth: 1,
      borderColor: COLOR.borderColor,
      padding: 15,
      height: 55,
      justifyContent: 'space-between',
      borderRadius: 25,
      textAlign: 'center',
    },
    Resent: {
      color: COLOR.background,
      fontSize: 20,
      fontWeight: 'bold',
      marginHorizontal: 15,
    },
    ContainerSentCode: {
      flexDirection: 'row',
      marginTop: 15,
      width: '90%',
      marginHorizontal: 15,
      // backgroundColor: COLOR.background,
    },
    SCText1: {
      color: COLOR.TextHint,
      fontSize: 14,
      flex: 5,
    },
    SCText2: {
      color: COLOR.TextHint,
      fontSize: 14,
      flex: 1,
    },
  
    //UPdate Password
    UPContainerWarning: {
      marginTop: '2%',
      marginHorizontal: '6%',
      flexDirection: 'row',
      alignItems: 'center',
  
      // backgroundColor: 'green',
    },
    iconWarning: {
      width: 20,
      height: 20,
      // justifyContent: 'space-between',
      alignItems: 'center',
  
      // backgroundColor: 'yellow',
    },
    TextWarning: {
      color: COLOR.TextHint,
      width: '85%',
      fontSize: 15,
      // backgroundColor: 'red',
      alignItems: 'center',
      // color: COLOR.TextHint,
      justifyContent: 'space-between',
      marginHorizontal: '2%',
    },
    ButtonUP: {
      marginTop: '2%',
      marginHorizontal: '1%',
    },
    containerTextInput: {
      flexDirection: 'row',
    },
    TextInputUP: {
      width: '85%',
      height: '100%',
      marginLeft: '4%',
    },
    HideShowIcon: {
      width: '60%',
      height: '50%',
    },
    CTIcon: {
      marginVertical: '0.5%',
      width: '14%',
      // height: '100%',
      justifyContent: 'center',
      // backgroundColor: 'red',
    },
  });
export const StyleDetailPersonFeedback = StyleSheet.create({
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
        paddingLeft: 20,
        marginTop: -6,
    },
    images: {
        marginLeft: 80
    },
    touchOpa: {
        marginLeft: 190
    },
    line: {
        borderWidth: 1,
        opacity: 0.03,
        marginTop: 20
    },
})
export const StyleDetailProduct = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        paddingTop: 20,
        paddingBottom: 15
    },
    textTitle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        paddingLeft: 20,
        marginTop: -9,
        fontFamily: 'TiltNeon-Regular',
    },
    line: {
        height: 10,
        opacity: 0.06,
        marginTop: 8,
        backgroundColor: '#766f6f'
    },
    banner: {
        width: width
    },
    titleBanner: {
        padding: 10,

        color: 'white',
        fontSize: 25,
        fontFamily: 'TiltNeon-Regular'
    },
    textPrice: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3669C9',
        fontFamily: 'TiltNeon-Regular'
    },
    textSalePrice: {
        fontSize: 20,
        textDecorationLine: 'line-through',
        marginTop: 7,
        marginLeft: 10
    },
    textd: {
        fontSize: 23,
        marginTop: 6,
        fontWeight: 'bold',
        color: '#3669C9'
    },
    textBoxSale: {
        fontSize: 20,
        backgroundColor: '#DDDDDD',
        borderRadius: 5,
        textAlign: 'center',
        height: 30,
        marginTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'TiltNeon-Regular',
        color: '#3669C9',
        marginLeft: 10
    },
    bottom: {
        height: 65,
        width: width,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        padding: 8,
        flexDirection: 'row',
        borderTopWidth: 0.2,
        borderTopColor: '#DDDDDD'
    },
    touchOpa: {
        backgroundColor: '#1351c4',
        padding: 8,
        width: 130,
        borderRadius: 25
    },
    touchOpa2: {
        backgroundColor: '#1351c4',
        padding: 8,
        borderRadius: 25,
        width: 370
    },
    image: {
        width: 25,
        height: 25,
        marginLeft: 3,
        marginTop: 8
    },
    textButton: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontFamily: 'TiltNeon-Regular',
    },
    separator: {
        height: 1,
        padding: 10
    }, 
    outOfQuantityButon: {
        border: 1,
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        fontFamily: 'TiltNeon-Regular',
    },
    disabledTouchable: {
        backgroundColor: '#e4e4e4',
        padding: 8,
        width: width - 90
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
    boxSearch: {
        width:'100%'
    },
    viewSearchbar:{
        backgroundColor: '#c0c0c03c',
        alignSelf: 'center', 
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
        width:'100%',
        borderRadius:10,
        fontSize:15, 
        backgroundColor:'white'
    },
    textInput3: {
        paddingLeft:15,
        width:'90%',
        borderRadius:10,
        fontSize:15,
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

 
 export const styleHome=StyleSheet.create({
    // Top bar

        // View
    topBarView:{
        padding:15,
        paddingLeft:20,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#3669c9',
    },
    title:{
        color:'#fefefe',
        fontSize:28,
        textAlignVertical:'center',
        fontWeight:'bold',
        justifyContent:'center',
        marginLeft:45
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
        marginTop:20,
        alignItems:'center',
        paddingLeft:25,
        paddingRight:25
    },
    text:{
        fontSize:15,
        color:'white',
        width:'100%',
        textAlign:'center'
    },
    titleCategory:{
        color:'black',
        fontWeight:'500',
        fontSize:25,
    },
    touchSeeAll: {
        padding:5,
        width:80,
        flexDirection:'row',
        backgroundColor:'#3669c9',
        borderRadius:5
    }

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

export const SytleCategoryManager = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 95 * height / 100,
        width: width,
    },
    textHeader:{
        color: 'black', 
        fontSize: 20
    },
    touchableOpacity:{
        backgroundColor: "white", 
        alignItems: 'center', 
        marginTop: 10,
    },
    imageTouchableOpacity:{
        width: 150, 
        height: 150,
    },
    viewTop: {
        flexDirection: 'row',
        margin: 10,
    },
    textInput: {
        width: width * 75 / 100,
        borderWidth: 0.2,
        borderRadius: 5,
        padding: 5,
        height: 52,
        marginRight: 5,
    },
    textInputSearch: {
        width: width * 95 / 100,
        borderWidth: 0.2,
        borderRadius: 5,
        padding: 5,
        height: height * 7 / 100,
        alignSelf: 'center',
    },
    iconSearch: {
        position: 'absolute',
        top: 20,
        right: 15,
    },
    viewSeprate: {
        marginTop: 15, marginBottom: 10,
        padding: 0.5,
        borderBottomWidth: 0.2,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 0.5,
            width: 1
        }
    },
    pressable: {
        borderRadius: 10,
        height: 52,
        width: width * 20 / 100,
        backgroundColor: '#3669C9',
        padding: 15,
    },
    textPressable: {
        textAlign: 'center',
        color: 'white',
    },

    //item
    containerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.2,
        borderRadius: 5,
        margin: 5,
        padding: 5,
    },
    textNameItem: {
        fontSize: 18,
        marginTop: 5,
        color: 'black',
    },
    viewPressableModal: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    pressableModal: {
        borderRadius: 10,
        height: 52,
        width: width * 0.25,
        marginLeft: 5,
        marginTop: 5,
        padding: 15,
        borderWidth: 1,
        alignSelf: 'center',
    },
    textPressableModal: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export const StyleCensorshipProduct = StyleSheet.create({
    //item product
    viewBorder: {
        margin: 10,
        borderWidth: 0.2,
        borderRadius: 15,
        padding: 10,
    },
    viewInfoShop: {
        flexDirection: 'row',

    },
    imageShop: {
        width: 50,
        height: 50,
    },
    textName: {
        color: 'black',
        fontSize: 18,
        marginTop: 10,
    },
    line: {
        borderWidth: 0.2,
        color: '#FFFFFF',
        marginBottom: 15,
        marginTop: 15,
    },
    imageProduct: {
        width: 150,
        height: 150,
    },
    infoProduct: {
        marginLeft: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textInfoProduct: {
        color: 'black',
        fontSize: 14,
    },
    textItemDetail: {
        color: '#3669C9',
        fontSize: 14,
        left: '120%',
    },
    viewButtonFuncItem: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    pressable: {
        borderWidth: 0.2,
        borderRadius: 5,
        padding: 10,
        alignSelf: 'center',
        backgroundColor: '#3669C9',
    },
    textPressable: {
        color: 'white',
    },

    //Detail Product
    container: {
        height: "100%",
        backgroundColor: 'white',
    },
    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textHeader: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5,
    },
    viewInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 10,
    },
    imageDetailProduct: {
        width: '100%',
        height: 400,
    },
    textDetailInfo: {
        color: 'black',
        fontSize: 14,
        marginBottom: 5,
        fontWeight: '500'
    },
    textDetail: {
        width: width*92/100,
        color: 'black',
        fontSize: 14,
        marginBottom: 5,
    },
    viewButtonFuncDetail: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 10,
    },
    pressableDetailProduct: {
        borderWidth: 0.2,
        borderRadius: 5,
        padding: 10,
        alignSelf: 'center',
        backgroundColor: '#3669C9',
        width: '45%',
    },
    textPressableDetail: {
        color: 'white',
        alignSelf: 'center',
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
export const StyleProfile = StyleSheet.create({
    ProfileContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: COLOR.backgroundProfile,
    },
  NavTab: {
    marginTop: '2%',
    flexDirection: 'row',
  },
  IconShapeStart: {
    marginTop: '2%',
    marginLeft: '4%',
    backgroundColor: COLOR.background,
    height: '80%',
    width: 40,
    borderRadius: 9,
  },
  Icon: {
    margin: 10,
    justifyContent: 'center',
    height: 20,
    width: 20,
  },
  TextIcon: {
    marginTop: '2%',
    marginLeft: '5%',
    height: 40,
    width: '64%',
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  IconShapeEnd: {
    marginTop: '2%',
    marginLeft: '4%',
    backgroundColor: COLOR.Blue,
    height: '80%',
    width: 40,
    borderRadius: 9,
  },
  IconSetting: {
    margin: 10,
    justifyContent: 'center',
    height: 20,
    width: 20,
  },

  Heading: {
    // backgroundColor: COLOR.background,
    marginTop: '5%',
    marginLeft: '4%',
    height: 130,
    width: '92%',
    flexDirection: 'row',
    // marginBottom: '2%',
  },
  Avatar: {
    height: '90%',
    width: '35%',
    // backgroundColor: "red",
    borderRadius: 110,
    
  },
  iconProfile: {
    marginVertical: 0.1,
    justifyContent: 'center',
    height: '90%',
    width: '80%',
  },
  TextProfile: {
    marginLeft: '1%',
    justifyContent: 'space-around',
    // backgroundColor: "orange",
    height: '80%',
  },
  Name: {
    fontSize: 25,
    color: 'black',
  },
  Email: {
    fontSize: 16,
    color: 'black',
    width: '100%',
  },
  iconEdit: {
    height: 20,
    width: 20,
    marginLeft: '25%',
    marginTop: '5%',
  },
  iconEditContainer: {
    backgroundColor: COLOR.background,
    width: '25%',
    height: '25%',
    borderRadius: 110,
  },
  Line: {
    width: '90%',
    borderBottomColor: COLOR.TextHint, // Change this to the desired color
    borderBottomWidth: 0.1, // Change this to the desired thickness
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginTop: '2%',
  },
  Form:{
    // backgroundColor: COLOR.background,
    
  },
  FormItemTextAddress:{
    marginLeft: 13,
    color: COLOR.TextHint,
    fontWeight: 'bold',
  },
  FormItemInputAddress:{
    borderWidth: 0.2,
    color: 'black',
    paddingLeft: 15,
    borderRadius: 35,
    borderColor: COLOR.TextHint,
    fontWeight: 'bold',
  },
  FormItem:{
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  ButtonCP:{
    marginTop: 20,
    marginHorizontal: "20%",
    backgroundColor: COLOR.background,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextButton:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ListProduct:{
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 1,
  },
  ListProductIcon:{
    height: 28,
    width: 28,
    marginTop: 5,
  },
  ListProductText:{
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  ListProductIconEnd:{
    height: 16,
    width: 16,
    marginTop: 15,
    marginLeft: "60%" ,
  },
  ListProductIconEndSeller:{
    height: 16,
    width: 16,
    marginTop: 15,
    marginLeft: "55%" ,
  },
  ListProductItem:{
    flexDirection: 'row',
  },
  FormItemText:{
    marginTop: 10,
    flexDirection: 'row',
  },      
  FormItemStart:{
    color: 'red',
  }
  
});
