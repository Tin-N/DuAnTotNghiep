import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import ProdsProcessOverviewItem from './ProdsProcessOverviewItem'
import AxiosIntance from '../../utils/AxiosIntance'
import { AppContext } from '../../utils/AppContext';
import { useNavigation } from '@react-navigation/native';
import ActionBar from '../ActionBar';

const ProdsProcessOverview = () => {
    const [orderData, setorderData] = useState([])
    const appContextData = useContext(AppContext);
    const userID = appContextData.userID;
    const navigation = useNavigation();
    const [ProdsProcessOverviewChanged, setProdsProcessOverviewChanged] = useState(true)
    const [isLoading, setisLoading] = useState(true)
    // console.log(">>>>>ProdsProcessOverviewChanged " + JSON.stringify(orderData))

    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/order/getOrderForSeller/${userID}`)

                setorderData(response);
                // console.log("ProdsProcessOverview - lấy dữ liệu: " + JSON.stringify(response));
                if (response) {
                    setisLoading(false)
                }
            } catch (error) {
                console.log("ProdsProcessOverview: lỗi lấy dữ liệu: " + error);
                setisLoading(false)
            }
        })();
    }, [ProdsProcessOverviewChanged]);

    const handleNavigateToDetail = (orderDetailID) => {
        navigation.navigate("Product Process", { navigateData: orderDetailID })
    }

    const handleProdsProcessOverviewChange = () => {
        if (ProdsProcessOverviewChanged) {
            setProdsProcessOverviewChanged(false)
        } else {
            setProdsProcessOverviewChanged(true)
        }
    }

    return (
        <View>

            <ActionBar title={"Xử Lý Đơn Hàng"} />
            {isLoading ? (
                <View style={{ alignItems: 'center', marginTop: 220 }}>
                    <ActivityIndicator size='large' color="#0000ff" />
                    <Text>Loading...</Text>
                </View>
            ) : (
                orderData.length > 0 ? (
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        overScrollMode='never'
                        data={orderData}
                        renderItem={({ item }) => <ProdsProcessOverviewItem data={item} navigateToDetail={handleNavigateToDetail} prodsProcessOverviewChange={handleProdsProcessOverviewChange} />}
                        keyExtractor={item => item.orderID}
                    />
                ) : (
                    <View style={{ alignItems: 'center', marginTop: 220 }}>
                        <Text>Không có dữ liệu</Text>
                    </View>
                )
            )}
        </View>
    )
}

export default ProdsProcessOverview

const styles = StyleSheet.create({})