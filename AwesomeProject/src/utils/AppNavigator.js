import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home'
import Order from '../screens/Order'
import { AppContext } from './AppContext';
import SignUp from '../screens/SignUp';
import HomeStore from '../screens/personStore/HomeStore';
import Category from '../screens/Category';
const Tab = createBottomTabNavigator();
const User = () => {
    return (
        <Text>Đăng nhập</Text>
    )
}
const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Order') {
                        iconName = focused ? 'bag-handle-sharp' : 'bag-handle-outline';
                    } else if (route.name === 'SignUp') {
                        iconName = focused ? 'people-sharp' : 'people-outline';
                    }
                    return <Icon1 name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: '#3669C9',
                tabBarInactiveTintColor: 'black',
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="SignUp" component={SignUp} />
        </Tab.Navigator>
    )
}

const AppNavigator = () => {
    const {isLogin} = useContext(AppContext);
    return (
        <>
            {
                isLogin == true ? <User/> : <Main/>
            }
        </>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})