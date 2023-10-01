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
import Welcome from './src/screens/Welcome';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ResetPassword from './src/screens/ResetPassword';
import ConfirmPhoneNum from './src/screens/ConfirmPhoneNum';
import UpdatePassword from './src/screens/UpdatePassword';
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
