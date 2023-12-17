import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
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
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/order/getOrderForCustomer/${userID}`)
                setorderData(response)
                if (response) {
                    setisLoading(false)
                }
            } catch (error) {
                console.log("OrderHistory: lỗi lấy dữ liệu: " + error);
                setisLoading(false)
            }
        })();
    }, []);

    return (
        < View>
            <ActionBar title={"Lịch sử mua hàng"} />
            {isLoading ? (
                <View style={{ alignItems: 'center', marginTop: 220 }}>
                    <ActivityIndicator size='large' color="#0000ff" />
                    <Text>Loading...</Text>
                </View>
            ) : (
                orderData.length > 0 ? (
                    <FlatList
                        style={{ height: height }}
                        showsVerticalScrollIndicator={false}
                        overScrollMode='never'
                        data={orderData}
                        renderItem={({ item }) => <OrderHistoryItem data={item} />}
                        keyExtractor={item => item.orderID} />
                ) : (
                    <View style={{ alignItems: 'center', marginTop: 220 }}>
                        <Text>Không có dữ liệu</Text>
                    </View>
                )
            )}
        </View>
    )
}

export default OrderHistory

const styles = StyleSheet.create({})