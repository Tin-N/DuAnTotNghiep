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


import { StyleLogin } from './src/css/Styles';
import TestScreen from './src/screens/TestScreen';
const App = () => {
  return (
  <TestScreen/>
  )
}



export default App;
