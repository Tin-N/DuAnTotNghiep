
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


const App = () => {
  return (
    <SafeAreaView>
      {/* <Welcome /> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <ResetPassword/> */}
      {/* <ConfirmPhoneNum/> */}
      <UpdatePassword/>
    </SafeAreaView>

  )
}




export default App;
