/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Alert,
  Dimensions,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { StyleLogin } from './src/css/Styles';
import Home from './src/screens/Home';
import Order from './src/screens/Order';
import { AppContextProvider } from './src/utils/AppContext';

import AppNavigator from './src/utils/AppNavigator';
import { StyleLogin } from './src/css/Styles';
import ProductScreen from './src/screens/ProductScreen';
import TestScreen from './src/screens/TestScreen';
import FilterScreen from './src/screens/FilterScreen';
// import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import { useState } from 'react';
import DisableUserScreen from './src/screens/DisableUserScreen';
import Tesst from './src/screens/Tesst';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Item from './src/component/UserList/Item';
import ActivateUserScreen from './src/screens/ActivateUserScreen';
import StatisticSellerScreen from './src/screens/personStore/StatisticSellerScreen';
import DetailChatScreen from './src/screens/personStore/DetailChatScreen';
// import SearchScreen from './src/screens/SearchScreen';
// import Category from './src/screens/Category';
// import SearchStore from './src/screens/personStore/SearchStore';
// import HomeStore from './src/screens/personStore/HomeStore';



const App = () => {
  
  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </AppContextProvider>

   
  )
}



export default App;
