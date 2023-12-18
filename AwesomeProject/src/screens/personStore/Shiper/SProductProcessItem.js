import { StyleSheet, Text, View, Image, Pressable, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Dimensions } from 'react-native';
import AxiosIntance from '../../../utils/AxiosIntance'
import { AppContext } from '../../../utils/AppContext';
const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';

const SProductProcessItem = (props) => {
    const data = props.data;
    const sProductProcessChange = props.sProductProcessChange;
    const appContextData = useContext(AppContext);
    const userID = appContextData.userID;
    const [ownerID, setownerID] = useState();
    const [customerID, setcustomerID] = useState()
    const [paymentMethods, setpaymentMethods] = useState()
    const [paymentStatus, setpaymentStatus] = useState()
    const navigation = useNavigation();
    const [orderData, setorderData] = useState([])

    const handleDeliverySuccess = () => {
        Alert.alert(
            'Thông báo',
            'Bạn có chắc đã hoàn vận chuyển tất cả sản phẩm này?',
            [
                {
                    text: 'Cancel',
                    onPress: () => {
                        console.log('Bạn đã chọn Cancel');
                    }
                },
                {
                    text: 'OK',
                    onPress: async () => {
                        try {
                            sProductProcessChange();
                            const response1 = await AxiosIntance().put(`/orderdetail/updateDeliveryStatus/${data.orderDetailID}`, {
                                deliveryStatus: 'Delivered'
                            })
                        } catch (error) {
                            console.log("SProductProcessItem - handleDeliverySuccess error: " + error);
                        }

                    },
                },
            ]
        );
    }
    
    console.log(">>>>>>>>>>>>>>>>>>asdasd" + JSON.stringify(data.orderDetailID))

    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/order/getOrderByOrderDetailID/${data.orderDetailID}`)
                setorderData(response)
                console.log("=>>>>>>>>>>>>> res: " + JSON.stringify(response))
            } catch (error) {
                console.log("SProductProcessItem: lỗi lấy dữ liệu: " + error);
            }
        })();
    }, []);

    const navigateToAllProductDetails = () => {
        navigation.navigate("AllProductDetails", {navigateData: data})
    }

    return (
        <View style={{ borderWidth: 2, borderRadius: 5, margin: 10, padding: 15, backgroundColor: '#ebf6fc' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', marginBottom: 15 }}>
                <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, padding: 5 }}>
                    <Text style={{ textAlign: 'center' }}>Người Bán: {orderData.ownerID}</Text>
                </View>
                <View style={{ borderBottomWidth: 0.5, width: 40 * width / 100, padding: 5 }}>
                    <Text style={{ textAlign: 'center' }}> Order Detail ID: {orderData.orderDetailID}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
                <View>
                    <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, marginBottom: 15, padding: 5 }}>
                        <Text style={{ textAlign: 'center' }}>Người Mua: {orderData.userID}</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, marginBottom: 15, padding: 5 }}>
                        <Text style={{ textAlign: 'center' }}>Payment Methods: {orderData.paymentMethods}</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, padding: 5 }}>
                        <Text style={{ textAlign: 'center' }}>Payment Status: {orderData.paymentStatus}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "column", justifyContent: 'space-between' }}>
                    <View style={{ borderWidth: 0.5, borderRadius: 5, padding: 5, flexDirection: 'row', width: 35 * width / 100 }}>
                        <Text style={{ textAlign: 'center' }}>Số lượng: {data.products.length}</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, padding: 5 }}>
                        <Text style={{ textAlign: 'center' }}>Địa chỉ: {orderData.address}</Text>
                    </View>
                    <Pressable onPress={navigateToAllProductDetails} style={{ borderWidth: 0.5, borderRadius: 5, padding: 5, backgroundColor: '#87C4FF' }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Xem chi tiết</Text>
                    </Pressable>
                    <Pressable onPress={handleDeliverySuccess} style={{ borderWidth: 0.5, borderRadius: 5, padding: 5, backgroundColor: '#39A7FF' }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Hoàn tất vận chuyển</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default SProductProcessItem

const styles = StyleSheet.create({})