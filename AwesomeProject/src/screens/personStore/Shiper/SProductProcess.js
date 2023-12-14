import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import SProductProcessItem from './SProductProcessItem';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
import AxiosIntance from '../../../utils/AxiosIntance'
import { AppContext } from '../../../utils/AppContext';

const SProductProcess = () => {
    const [orderDetail, setorderDetail] = useState([])
    // console.log('>>>> DATA: ' + JSON.stringify(orderDetail))
    const [toReRender, settoReRender] = useState(1)
    console.log("=>>>>>>>>>>>>> " + toReRender)

    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/orderdetail/getAllForShipper`)
                setorderDetail(response.data)
            } catch (error) {
                console.log("SProductProcess: lỗi lấy dữ liệu: " + error);
            }
        })();
    }, [toReRender]);

    const handleSProductProcessChange = () => {
        if (toReRender) {
            settoReRender(false)
        } else {
            settoReRender(true)
        }
    }

    return (
        <View style={{}}>
            <FlatList
                style={{ height: height }}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                data={orderDetail}
                renderItem={({ item }) => <SProductProcessItem sProductProcessChange={handleSProductProcessChange} data={item} />}
                keyExtractor={item => item.productID}
            />
        </View >
    )
}

export default SProductProcess

const styles = StyleSheet.create({})
