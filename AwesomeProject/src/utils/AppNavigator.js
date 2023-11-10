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
import DetailFeedback from '../screens/personStore/DetailFeedback';
import DetailPersonFedback from '../screens/personStore/DetailPersonFedback';
import TestScreen from '../screens/TestScreen';
// import TestScreen from '../screens/TestScreen/TestScreen'
import DetailProduct from '../screens/personStore/DetailProduct';

import CreateProduct from '../screens/personStore/CreateProduct';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const User = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn'>
                        <Stack.Screen name='Product' component={ProductHome}></Stack.Screen>
                        <Stack.Screen name='SignIn' component={SignIn}></Stack.Screen>
                        <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>
        </Stack.Navigator>
    )
}

const ProductHome = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomeStore'>
            <Stack.Screen name='ProductList' component={HomeStore}></Stack.Screen>
            {/* <Stack.Screen name='ItemHomeStore' component={ItemHomeStore}></Stack.Screen> */}
            <Stack.Screen name='SearchStore' component={SearchStore}></Stack.Screen>
            <Stack.Screen name='ProductDetail' component={ProductDetail}></Stack.Screen>
            <Stack.Screen name='DetailFeedback' component={DetailFeedback}></Stack.Screen>
            <Stack.Screen name='HomeStore' component={HomeStore}></Stack.Screen>
            <Stack.Screen name='DetailPersonFedback' component={DetailPersonFedback}></Stack.Screen>
            <Stack.Screen name='DetailProduct' component={DetailProduct} />
            <Stack.Screen name='CreateProduct' component={CreateProduct}
                options={{
                    presentation: 'modal',
                    animationTypeForReplace: 'push',
                    animation: 'slide_from_right'
                }}></Stack.Screen>
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
                unmountOnBlur: true,
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
        </Tab.Navigator>
    )
}

const AppNavigator = () => {
    const { isLogin } = useContext(AppContext);
    return (
        <>
            {
                isLogin == true ? <User /> : <Main />
            }
        </>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})