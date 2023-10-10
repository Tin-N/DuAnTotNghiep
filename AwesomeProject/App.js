
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
import HomeStore from './src/screens/personStore/HomeStore';
import Shipper from './src/screens/personStore/Shipper';
import SearchStore from './src/screens/personStore/SearchStore';
import DetailFeedback from './src/screens/personStore/DetailFeedback';
import ItemFeedBack from './src/screens/personStore/ItemFeedBack';
import DialogShopping from './src/screens/personStore/DialogShopping';
import DetailPersonFedback from './src/screens/personStore/DetailPersonFedback';
const App = () => {
  return (
    // <AppContextProvider>
    //   <NavigationContainer>
    //     <AppNavigator/>
    //   </NavigationContainer>
    // </AppContextProvider>
    <DetailPersonFedback/>
    
  )
}



export default App;
