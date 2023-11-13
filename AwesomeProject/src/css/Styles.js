
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

export const stylesNoResult = StyleSheet.create({
    view: {
        margin: 10,
        height: '90%',
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
export const StyleHomeStore = StyleSheet.create({
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
    touchOpa: {
        marginLeft: 75,
    },
    line: {
        borderWidth: 1,
        opacity: 0.03,
        marginTop: 20,
    },
    boxSeller: {
        marginTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
    },
    infoSeller: {
        flexDirection: 'row',
    },
    boxNameSeller: {
        width: 218,
        marginLeft: 20,
    },
    boxRate: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    textRate: {
        fontSize: 20,
        color: 'black',
        marginTop: -5,
        paddingLeft: 5,
    },
    boxLocate: {
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 20,
    },
    boxProductStore: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 30,
        justifyContent: 'space-between',
        marginRight: 30,
    },
    textTitleProduct: {
        fontSize: 15,
    },
    textCountProduct: {
        color: 'black',
        fontSize: 13,
    },
    textitleProductSelling: {
        fontSize: 20,
        color: 'black',
    },
    productSelling: {
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30,
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
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewSearchbar: {
        backgroundColor: '#c0c0c03c',
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        height: 50,
        marginLeft: 30,
        borderRadius: 10,
        marginRight: 30,
        marginTop: 30,
    }
    ,
    textInput: {
        padding: 10,
        width: '90%',
        borderRadius: 10,
        fontSize: 15

    },
    iconSearch: {
        alignSelf: 'center'
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
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    flatlistHistory: {
        marginTop: 30
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
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        marginBottom: 30,



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
export const StyleOrder = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: width,
        height: height,
        marginLeft: 5,
        marginRight: 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    textHeader: {
        fontSize: 25,
        fontStyle: 'bold',
        color: 'black'
    },
    tillte: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        height: 70,
        width: 70,
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
    viewCheckBoxOrder: {
        width: 10 * width / 100,
    },
    checkBoxOrder: {
        position: 'relative',
        alignSelf: 'center',
        flex: 1,
    },
    pressableBuy: {
        height: 52,
        backgroundColor: '#3669C9',
        padding: 5,
    },
})
export const StyleLogin = StyleSheet.create({
    header: {
        color: COLOR.primary,
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

        marginTop: "2%",
        justifyContent: 'space-between',
        marginHorizontal: 20,
        // Tạo bóng chữ
        textShadowColor: 'black',
        textShadowOffset: { width: -3, height: 5 },
        textShadowRadius: 1,
    },
    extraText: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        paddingTop: '2%',
        marginHorizontal: 16,
        paddingBottom: '3%',
    },
    textHint: {
        color: COLOR.TextHint,
        fontSize: 17,
        marginTop: '1%',
        marginHorizontal: 16,
    },
    textHint: {
        color: COLOR.TextHint,
        fontSize: 15,
        marginTop: "1%",
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    fgPass: {
        textAlign: 'right',
        marginHorizontal: 20,
        color: COLOR.Blue,
        fontSize: 15,
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
        margin: "3%",

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
        marginTop: 20,
        borderRadius: 30,
        // marginHorizontal: 10
    },
    TextButton: {
        fontSize: 20,
        paddingTop: 2,
        fontWeight: 'bold',
        height: 55,
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
        marginTop: 10,
        justifyContent: 'space-around',
    },
    FButton: {
        alignItems: 'center',
        backgroundColor: COLOR.Blue,
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
        color: COLOR.Blue,
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
        marginTop: '50%',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        // backgroundColor: 'red',
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
        paddingTop: "2%",
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
        marginTop: "20%",
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    HintText:
    {
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
        width: '20%',
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
        color: COLOR.Blue,
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

        marginTop: '20%',
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
        width: "60%",
        height: "50%",
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

// HeadingTextWelcome: {
//     paddingTop: '2%',
// input: {
//     placeholderTextColor: COLOR.TextPlaceHolder,
//     height: 30,
//     margin: 12,
//     borderWidth: 1,
//     borderColor: COLOR.borderColor,
//     padding: 15,
//     height: 55,
//     justifyContent: 'space-between',
//     borderRadius: 5,
// },
// buttonShape: {
//     alignItems: 'center',
//     jussifyContent: 'center',
//     backgroundColor: COLOR.background,
//     padding: 10,
//     height: 55,
//     width: '95%',
//     marginHorizontal: 10,
//     marginTop: 20,
//     borderRadius: 30,
//     // marginHorizontal: 10
// },
// TextButton: {
//     fontSize: 20,
//     paddingTop: 2,
//     fontWeight: 'bold',
//     height: 55,
//     color: 'white',
// },
// text: {
//     color: COLOR.TextHint,
//     fontSize: 17,
//     justifyContent: 'space-between',
//     marginHorizontal: 16,
//     marginTop: 15,
//     // backgroundColor: 'red',
//     textAlign: 'center',
// },
// FGcontainer: {
//     flexDirection: 'row',
//     width: '94%',
//     marginHorizontal: 10,
//     marginTop: 10,
//     justifyContent: 'space-around',
// },
// FButton: {
//     alignItems: 'center',
//     backgroundColor: COLOR.Blue,
//     padding: 10,
//     height: 55,
//     width: '46%',
//     borderRadius: 10,
//     marginHorizontal: 0,
// },
// GButton: {
//     alignItems: 'center',
//     borderWidth: 0.5,
//     padding: 10,
//     height: 55,
//     width: '46%',
//     borderRadius: 10,
//     marginHorizontal: 0,
// },
// CbuttomText: {
//     marginTop: '20%',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     width: '94%',
//     marginHorizontal: 10,
// },
// CSbuttomText: {
//     marginTop: '10%',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     width: '94%',
//     marginHorizontal: 10,
// },
// ButtomText1: {
//     fontSize: 20,
//     fontWight: 'bold',
//     // backgroundColor: 'red',
// },
// ButtomText2: {
//     color: COLOR.Blue,
//     fontSize: 20,
//     fontWight: 'bold',
//     fontStyle: 'italic',
//     // backgroundColor: 'blue',
//     textDecorationLine: 'underline',
// },
// SButtonShape: {
//     alignItems: 'center',
//     jussifyContent: 'center',
//     backgroundColor: COLOR.background,
//     padding: 10,
//     height: 55,
//     width: '94%',
//     marginHorizontal: 10,
//     marginTop: 20,
//     borderRadius: 30,
// },
// RPBottomText: {
//     textAlign: 'center',
//     marginTop: "60%",
//     fontSize: 20,
//     color: 'black',
//     fontWeight: 'bold',
//     // backgroundColor: 'red',
// },
// RSPassInput: {
//     placeholderTextColor: COLOR.TextPlaceHolder,
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     borderColor: COLOR.borderColor,
//     padding: 15,
//     height: 55,
//     justifyContent: 'space-between',
//     borderRadius: 25,
// },