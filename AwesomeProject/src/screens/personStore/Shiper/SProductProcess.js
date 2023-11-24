import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native';
import SProductProcessItem from './SProductProcessItem';
const { width, height } = Dimensions.get('screen');
import AxiosIntance from '../../../utils/AxiosIntance'
import { AppContext } from '../../../utils/AppContext';

const SProductProcess = () => {
    const [orderDetail, setorderDetail] = useState([])
    console.log('>>>> DATA: ' + JSON.stringify(orderDetail))

    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/orderdetail/getAllForShipper`)
                setorderDetail(response.data)
            } catch (error) {
                console.log("SProductProcess: lỗi lấy dữ liệu: " + error);
            }
        })();
    }, []);

    return (
        <View style={{}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                data={orderDetail}
                renderItem={({ item }) => <SProductProcessItem data={item} />}
                keyExtractor={item => item.productID}
            />
        </View >
    )
}

export default SProductProcess

const styles = StyleSheet.create({})
