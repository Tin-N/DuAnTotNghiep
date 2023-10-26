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
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/utils/AppNavigator';
import { AppContextProvider } from './src/utils/AppContext';
import { StyleLogin } from './src/css/Styles';
import ProductScreen from './src/screens/ProductScreen';
import TestScreen from './src/screens/TestScreen';
import FilterScreen from './src/screens/FilterScreen';
// import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
// import SearchScreen from './src/screens/SearchScreen';
// import Category from './src/screens/Category';
// import SearchStore from './src/screens/personStore/SearchStore';
// import HomeStore from './src/screens/personStore/HomeStore';
const App = () => {
  return (
  // <WelcomeScreen/>
  // <HomeScreen/>
    // <TestScreen/>
    // <FilterScreen/>
    // <HomeStore/>
    <AppContextProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </AppContextProvider>
    // <SearchStore/>
  // <SearchScreen/>
  // <ProductScreen/>
  )
}



export default App;
