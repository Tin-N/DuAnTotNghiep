
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

import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';


import { StyleLogin } from './src/css/Styles';
<<<<<<< HEAD
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Order from './src/screens/Order';
import Login from './src/screens/Login';
import { AppContextProvider } from './src/utils/AppContext';
import AppNavigator from './src/utils/AppNavigator';
import Slideshow from './src/component/Slideshow/Slideshow';
const App = () => {
  return (
    // <AppContextProvider>
    //   <NavigationContainer>
    //     <AppNavigator/>
    //   </NavigationContainer>
    // </AppContextProvider>
    <Slideshow/>

=======
import TestScreen from './src/screens/TestScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
const App = () => {
  return (
  <WelcomeScreen/>
>>>>>>> devNhat
  )
}



export default App;
