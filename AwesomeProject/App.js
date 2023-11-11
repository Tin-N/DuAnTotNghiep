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
import { AppContextProvider } from './src/utils/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/utils/AppNavigator';
import CategoryManager from './src/screens/CategoryManager';
import CensorshipProduct from './src/screens/CensorshipProduct';
import CensorshipDetailProduct from './src/screens/CensorshipDetailProduct';

const App = () => {
  return (
    // <AppContextProvider>
    //   <NavigationContainer>
    //     <AppNavigator />
    //   </NavigationContainer>
    // </AppContextProvider>

    // <CensorshipDetailProduct/>
     <CategoryManager/>
    // <CensorshipProduct/> // ko duyet: thong bao ko duyet, xoa | giao dien
  )
}



export default App;
