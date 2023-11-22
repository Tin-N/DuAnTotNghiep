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
import CensorshipProductItem from '../screens/CensorshipProductItem';
import CensorshipProduct from '../screens/CensorshipProduct';
import CensorshipDetailProduct from '../screens/CensorshipDetailProduct';
import DetailProduct from '../screens/personStore/DetailProduct'
import ProfileUser from '../screens/ProfileUser';
// import CreateProduct from '../screens/personStore/CreateProduct';
import SignIn from '../screens/SignIn';
import Splash from '../screens/Splash';
import WarningProfile from '../screens/WarningPorfile';
import ProfileSeller from '../screens/ProfileSeller';
import ProfileScreen from '../screens/ProfileScreen';
import ResetPassword from '../screens/ResetPassword';
import ConfirmPhoneNum from '../screens/ConfirmPhoneNum';
import UpdatePassword from '../screens/UpdatePassword';

import ProductProcess from '../screens/personStore/ProductProcess'
import SProductProcess from '../screens/personStore/Shiper/SProductProcess';
import ProductProcessOverview from '../screens/personStore/ProdsProcessOverview';
import SearchScreen from '../screens/SearchScreen';
import FilterScreen from '../screens/FilterScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailList from '../screens/DetailList';
import DetailPersonFedback from '../screens/personStore/DetailPersonFedback';

import DetailProduct from '../screens/personStore/DetailProduct';
import CreateProduct from '../screens/personStore/CreateProduct';
import ManageProduct from '../screens/personStore/ManageProduct';
import UpdateProduct from '../screens/personStore/UpdateProduct';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const User = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
            <Stack.Screen name='Product' component={ProductHome}></Stack.Screen>
            <Stack.Screen name='SignIn' component={SignIn}></Stack.Screen>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen}></Stack.Screen>
            <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>
            <Stack.Screen name='ProfileUser' component={ProfileUser}></Stack.Screen>
            <Stack.Screen name='ProfileSeller' component={ProfileSeller}></Stack.Screen>
            <Stack.Screen name='Splash' component={Splash}></Stack.Screen>
            <Stack.Screen name='WarningProfile' component={WarningProfile}></Stack.Screen>
            <Stack.Screen name='ResetPassword' component={ResetPassword}></Stack.Screen>
            <Stack.Screen name='ConfirmPhoneNum' component={ConfirmPhoneNum}></Stack.Screen>
            <Stack.Screen name='UpdatePassword' component={UpdatePassword}></Stack.Screen>
        </Stack.Navigator>
    )
}
const Profile = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ProfileScreen'>
            <Stack.Screen name='SignIn' component={SignIn}></Stack.Screen>
            <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>

            <Stack.Screen name='ProfileUser' component={ProfileUser}></Stack.Screen>
            <Stack.Screen name='ProfileSeller' component={ProfileSeller}></Stack.Screen>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen}></Stack.Screen>
            <Stack.Screen name='WarningProfile' component={WarningProfile}></Stack.Screen>
            <Stack.Screen name='ResetPassword' component={ResetPassword}></Stack.Screen>
            <Stack.Screen name='ConfirmPhoneNum' component={ConfirmPhoneNum}></Stack.Screen>
            <Stack.Screen name='UpdatePassword' component={UpdatePassword}></Stack.Screen>


        </Stack.Navigator>
    )
}
const ProductHome = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ProductList'>
            <Stack.Screen name='ProductList' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='SearchScreen' component={SearchScreen}></Stack.Screen>
            <Stack.Screen name='FilterScreen' component={FilterScreen}></Stack.Screen>
            <Stack.Screen name='SearchStore' component={SearchStore}></Stack.Screen>
            <Stack.Screen name='ProductDetail' component={ProductDetail}></Stack.Screen>
            <Stack.Screen name='DetailFeedback' component={DetailFeedback}></Stack.Screen>
            <Stack.Screen name='HomeStore' component={HomeStore}></Stack.Screen>
            <Stack.Screen name='DetailPersonFedback' component={DetailPersonFedback}></Stack.Screen>

            <Stack.Screen name='ItemHomeStore' component={ItemHomeStore}></Stack.Screen>

            <Stack.Screen name='DetailProduct' component={DetailProduct} />

            <Stack.Screen name='DetailList' component={DetailList}>

            </Stack.Screen>
            <Stack.Screen name='ManageProduct' component={ManageProduct} />
            <Stack.Screen name='UpdateProduct'
                options={{
                    presentation: 'modal',
                    animationTypeForReplace: 'push',
                    animation: 'slide_from_right'
                }}
                component={UpdateProduct} />
        </Stack.Navigator >
    )
}


const ProductProcessStack = () => {
    return (
        <Stack.Navigator initialRouteName='Product Process Overview'>
            <Stack.Screen name="Product Process Overview" component={ProductProcessOverview} />
            <Stack.Screen name="Product Process" component={ProductProcess} />
        </Stack.Navigator>
    );
};


const censorshipProduct = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='CensorshipProduct'>
            <Stack.Screen name='CensorshipProduct' component={CensorshipProduct}></Stack.Screen>
            <Stack.Screen name='CensorshipDetailProduct' component={CensorshipDetailProduct}></Stack.Screen>
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
                tabBarActiveTintColor: '#3669C9',
                tabBarInactiveTintColor: 'black',
                tabBarLabelStyle: {
                },
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    paddingBottom: 5,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    height: 60,
                    position: 'absolute',
                    borderTopWidth: 0,
                    elevation: 10 // để thêm bóng cho Android
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Order') {

                        iconName = focused ? 'bag-handle-sharp' : 'bag-handle-outline';
                    } else if (route.name === 'Profile') {

                        iconName = focused ? 'bag' : 'bag-handle-outline';
                    } else if (route.name === 'SignUp') {

                        iconName = focused ? 'people-sharp' : 'people-outline';
                    } else if (route.name === 'Prod Process') {
                        iconName = focused ? 'clipboard' : 'clipboard-outline';

                    } else if (route.name === 'Test') {
                        iconName = focused ? 'people-sharp' : 'people-outline';
                    }
                    return <Icon1 name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: '#3669C9',
                tabBarInactiveTintColor: 'black',
                tabBarIconStyle: {
                    marginTop: 8
                }
            })}
        >
            <Tab.Screen name="Home" component={ProductHome} />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Prod Process" component={ProductProcessStack} />
            <Tab.Screen name="Shipper" component={SProductProcess} />
            <Tab.Screen name="Test" component={censorshipProduct} />
        </Tab.Navigator>
    )
}

const AppNavigator = () => {
    const { isLogin } = useContext(AppContext);
    return (
        <>
            {
                <Main />
                // <User />
                // <Main/>
            }
        </>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})