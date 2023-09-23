
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
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Order from './src/screens/Order';
import Login from './src/screens/Login';
import { AppContextProvider } from './src/utils/AppContext';
import AppNavigator from './src/utils/AppNavigator';
import ProductDetail from './src/screens/ProductDetail';

const App = () => {
  return (
    <ProductDetail/>
    // <AppContextProvider>
    //   <NavigationContainer>
    //     <AppNavigator/>
    //   </NavigationContainer>
    // </AppContextProvider>

  )
}



export default App;
