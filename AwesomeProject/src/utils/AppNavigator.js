import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home'
import Order from '../screens/Order'
import { AppContext } from './AppContext';
import SignUp from '../screens/SignUp';
import HomeStore from '../screens/personStore/HomeStore';
import Category from '../screens/Category';
import ProductDetail from '../screens/ProductDetail';
import SearchStore from '../screens/personStore/SearchStore';
import ItemHomeStore from '../screens/personStore/ItemHomeStore';

const Tab = createBottomTabNavigator();
const Stack= createNativeStackNavigator();

const User = () => {
    return (
        <Text>Đăng nhập</Text>
    )
}

const ProductHome = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ProductList'>
            <Stack.Screen name='ProductList' component={HomeStore}></Stack.Screen>
            {/* <Stack.Screen name='ItemHomeStore' component={ItemHomeStore}></Stack.Screen> */}
            <Stack.Screen name='SearchStore' component={SearchStore}></Stack.Screen>
            <Stack.Screen name='ProductDetail' component={ProductDetail}></Stack.Screen>
        </Stack.Navigator>
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
            <Tab.Screen name="Home" component={ProductHome} />
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