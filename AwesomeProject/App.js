/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { StyleLogin } from './src/css/Styles';
const App =()=> {
  return(
    <SafeAreaView>
      <Text style={StyleLogin.header}>Dcm ao that day </Text>
    </SafeAreaView>
  )
}



export default App;
