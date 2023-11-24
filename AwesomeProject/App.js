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

import { AppContextProvider } from './src/utils/AppContext';

import AppNavigator from './src/utils/AppNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()




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
