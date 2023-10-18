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
// import Welcome from './src/screens/Welcome';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ResetPassword from './src/screens/ResetPassword';
import ConfirmPhoneNum from './src/screens/ConfirmPhoneNum';
import UpdatePassword from './src/screens/UpdatePassword';
import { UserContextProvider } from '../AwesomeProject/src/utils/Context'
const App = () => {
  return (
    <SafeAreaView>
      <UserContextProvider>
        {/* <SignIn/> */}
         {/* <SignUp/> */}
      {/* <ResetPassword/> */}
      {/* <ConfirmPhoneNum/> */}
      <UpdatePassword/>
      </UserContextProvider>
      
 
    </SafeAreaView>
  )
}



export default App;
