import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useEffect, React, useContext, useState } from 'react'
import ActionBar from '../../ActionBar'
import OrderHistoryItem from './Items/OrderHistoryItem'
import { AppContext } from '../../../utils/AppContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AxiosIntance from '../../../utils/AxiosIntance'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

const OrderHistory = () => {
    const appContextData = useContext(AppContext)
    const userID = appContextData.userID
    const [orderData, setorderData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/order/getOrderForCustomer/${userID}`)
                setorderData(response)
            } catch (error) {
                console.log("OrderHistory: lỗi lấy dữ liệu: " + error);
            }
        })();
    }, []);

    return (
        < View>
            <ActionBar title={"Lịch sử mua hàng"} />
            <FlatList
                style={{ height: height }}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                data={orderData}
                renderItem={({ item }) => <OrderHistoryItem data={item} />}
                keyExtractor={item => item.orderID} />
        </View>
    )
}

export default OrderHistory

const styles = StyleSheet.create({})