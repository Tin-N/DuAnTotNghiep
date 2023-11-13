
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
import Order from './src/screens/Order';
import { AppContextProvider } from './src/utils/AppContext';
import AppNavigator from './src/utils/AppNavigator';
<<<<<<< Updated upstream
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
=======
import CategoryManager from './src/screens/CategoryManager';
import ProductProcess from './src/screens/personStore/ProductProcess';
// import CensorshipProduct from './src/screens/CensorshipProduct';
// import CensorshipDetailProduct from './src/screens/CensorshipDetailProduct';

>>>>>>> Stashed changes

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateProduct from './src/screens/personStore/CreateProduct';
import TestScreen from './src/screens/TestScreen';
const Stack = createNativeStackNavigator()
const App = () => {
  return (
<<<<<<< Updated upstream
    <AppContextProvider>
      <NavigationContainer>
        <AppNavigator/>
        {/* <SignIn/> */}
        {/* <ResetPassword/> */}
        {/* <UpdatePassword/> */}
      </NavigationContainer>
    </AppContextProvider>
=======
    // <AppContextProvider>
    //   <NavigationContainer>
    //     <AppNavigator />
    //   </NavigationContainer>
    // </AppContextProvider>

    // <CensorshipDetailProduct/>
    // <CategoryManager/>
    // <CensorshipProduct/> // ko duyet: thong bao ko duyet, xoa | giao dien
    <ProductProcess/>
>>>>>>> Stashed changes
  )
}




export default App;
