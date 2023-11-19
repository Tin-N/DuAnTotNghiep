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
import Slideshow from './src/component/Slideshow/Slideshow';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ProductDetail from './src/screens/ProductDetail';
import DetailFeedback from './src/screens/personStore/DetailFeedback';
import Welcome from './src/screens/Welcome';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ResetPassword from './src/screens/ResetPassword';
import ConfirmPhoneNum from './src/screens/ConfirmPhoneNum';
import UpdatePassword from './src/screens/UpdatePassword';
import Category from './src/screens/Category';
import ItemFeedBack from './src/screens/personStore/ItemFeedBack';
import DialogShopping from './src/screens/personStore/DialogShopping';
import DetailPersonFedback from './src/screens/personStore/DetailPersonFedback';
import DetailProduct from './src/screens/personStore/DetailProduct';
import HomeStore from './src/screens/personStore/HomeStore';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateProduct from './src/screens/personStore/CreateProduct';
import TestScreen from './src/screens/TestScreen';
import ProfileUser from './src/screens/ProfileUser';
import ProfileSeller from './src/screens/ProfileSeller';
import Splash from './src/screens/Splash';
const Stack = createNativeStackNavigator()
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

        {/* <ProfileUser/> */}
        {/* <ProfileSeller/> */}
        {/* <Splash/> */}
        {/* <ConfirmPhoneNum/> */}
        {/* <SignUp/>  */}
        {/* <ResetPassword/> */}
        {/* <UpdatePassword/> */}

      </NavigationContainer>
    </AppContextProvider>

   
  )
}



export default App;
