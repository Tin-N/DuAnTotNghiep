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
