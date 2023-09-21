

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
import Icon1 from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleLogin } from './src/css/Styles';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Order from './src/screens/Order';
import Login from './src/screens/Login';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Search') {
              iconName = focused ? 'search-sharp' : 'search-outline'
            }else if (route.name === 'Order') {
              iconName = focused ? 'bag-handle-sharp' : 'bag-handle-outline'
            }else if (route.name === 'Login') {
              iconName = focused ? 'people-sharp' : 'people-outline'
            }
            return <Icon1 name= {iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#3669C9',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Order" component={Order} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}



export default App;
