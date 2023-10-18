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
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import Category from './src/screens/Category';
const App = () => {
  return (
  // <WelcomeScreen/>
  // <HomeScreen/>
    // <TestScreen/>
    <Category/>
  // <SearchScreen/>
  )
}



export default App;
