import { Dimensions, StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
const { width, height } = Dimensions.get('screen');
import AxiosIntance from '../../utils/AxiosIntance'
import { AppContext } from '../../utils/AppContext';
import ActionBar from '../ActionBar';


const ProdsProcessOverviewItem = (props) => {
    const data = props.data;
    const navigateToDetail = props.navigateToDetail;
    const prodsProcessOverviewChange = props.prodsProcessOverviewChange;
    const appContextData = useContext(AppContext);
    const userID = appContextData.userID;
    const formattedDate = new Date(data.orderDate).toLocaleDateString('vn-VN', {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    });
    // console.log(">>>>>>>>ProdsProcessOverviewItem: " + JSON.stringify(data))
    const [orderDetailProducts, setorderDetailProducts] = useState([])
    // console.log("orderDetailProducts: ", data.orderID)

    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/order/getOrderForSeller/${data.orderID}`)
            } catch (error) {
                console.log("ProdsProcessOverviewItem: lỗi lấy dữ liệu getOrderForSeller: " + error);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/orderdetail/getOrderDetailByOwner/${userID}`)
                setorderDetailProducts(response.products[0]);
                // console.log("<>>>>>>>>" + JSON.stringify(response.products[0]))
            } catch (error) {
                console.log("ProdsProcessOverviewItem: lỗi lấy dữ liệu getOrderDetailByOwner: " + error);
            }
        })();
    }, []);
    // console.log("data orderID: " + JSON.stringify(data.orderID));
    const handlePushProduct = async () => {
        Alert.alert(
            'Thông báo',
            'Bạn có chắc muốn vận chuyển tất cả sản phẩm này?',
            [
                {
                    text: 'Cancel',
                    onPress: () => {
                        // console.log('Bạn đã chọn Cancel');
                    }
                },
                {
                    text: 'OK',
                    onPress: async () => {
                        const update = await AxiosIntance().put(`/order/updateisConfirmedisTrue/${data.orderID}`)

                        const res = await AxiosIntance()
                            .put(`/orderdetail/update/updateAllProductDeliveryStatus/${data.orderDetailID}/${userID}`
                                , { deliveryStatus: 'Delivering' })
                        prodsProcessOverviewChange()
                    },
                },
            ]
        );
    }

    const handleNavigateToDetail = () => {
        // console.log("handleNavigateToDetail: " + data.orderDetailID)
        navigateToDetail(data.orderDetailID)
    }

    return (
        <View style={{ borderWidth: 2, borderRadius: 5, margin: 10, padding: 15, backgroundColor: '#ebf6fc' }}>
           
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', marginBottom: 15 }}>
                <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, padding: 5 }}>
                    <Text style={{ textAlign: 'center' }}>ID Người Dùng: {data.userID}</Text>
                </View>

                <View style={{ borderBottomWidth: 0.5, width: 40 * width / 100, padding: 5 }}>
                    <Text style={{ textAlign: 'center' }}>{data.orderDetailID}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
                <View>
                    <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, marginBottom: 15, padding: 5 }}>
                        <Text style={{ textAlign: 'center' }}>Ngày đặt hàng: {formattedDate}</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, marginBottom: 15, padding: 5 }}>
                        <Text style={{ textAlign: 'center' }}>Phương thanh toán: {data.paymentMethods}</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, padding: 5 }}>
                        <Text style={{ textAlign: 'center' }}>Tình trạng thanh toán: {data.paymentStatus}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "column", justifyContent: 'space-between' }}>
                    <View style={{ borderWidth: 0.5, borderRadius: 5, padding: 5, flexDirection: 'row', width: 35 * width / 100 }}>
                        <Text style={{ textAlign: 'center' }}>Số lượng: {orderDetailProducts.length}</Text>
                    </View>
                    <Pressable onPress={handleNavigateToDetail} style={{ borderWidth: 0.5, borderRadius: 5, padding: 5, backgroundColor: '#87C4FF' }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Xem chi tiết</Text>
                    </Pressable>
                    <Pressable onPress={handlePushProduct} style={{ borderWidth: 0.5, borderRadius: 5, padding: 5, backgroundColor: '#39A7FF' }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Vận chuyển ngay</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default ProdsProcessOverviewItem

const styles = StyleSheet.create({})