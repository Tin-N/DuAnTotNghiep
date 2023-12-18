import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { AppContext } from '../utils/AppContext'
import { useContext } from 'react'
import ProfileUser from './ProfileUser'
import ProfileSeller from './ProfileSeller'
import WarningPorfile from './WarningPorfile'
import UserScreen from './personStore/UserScreen'
import SellerScreen from './personStore/SellerScreen'
import ShipperScreen from './personStore/ShipperScreen'
const ProfileScreen = () => {
    const { isLogin } = useContext(AppContext);
    const { userInfo } = useContext(AppContext);
    // const isLogin=true;
    const ShowScreen = () => {
        const _role = userInfo.roleID;

        if (_role == 1) {
            return (
                <UserScreen />
            )
        } else if (_role == 3) {
            return (
                <SellerScreen />
            )
        } else if (_role == 4) {
            return (
                <ShipperScreen />
            )
        }
    }
    return (
        isLogin ? <View>
            {
                ShowScreen()
            }

        </View> : <WarningPorfile />
    )
}
export default ProfileScreen
const styles = StyleSheet.create({})