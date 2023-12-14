import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
import AxiosIntance from '../../../utils/AxiosIntance'
import { AppContext } from '../../../utils/AppContext';
import { useRoute } from '@react-navigation/native';
import AllProductDetailsItem from './AllProductDetailsItem';
import Actionbar from '../../ActionBar'
import { useNavigation } from '@react-navigation/native';
const AllProductDetail = ({ route }) => {
    const appContextData = useContext(AppContext);
    const userID = appContextData.userID;
    const dataFromPreviousScreen = route.params?.navigateData || {};
    console.log("data>>>>>>>>>>" + JSON.stringify(dataFromPreviousScreen))
    return (
        <View style={{}}>
            <Actionbar title={"Chi tiết các mặt hàng"} />
            <FlatList
                style={{ height: height }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                data={dataFromPreviousScreen.products}
                renderItem={({ item }) => <AllProductDetailsItem data={item} />}
                keyExtractor={item => item.productID}
            />
        </View >
    )
}

export default AllProductDetail;

const styles = StyleSheet.create({})
