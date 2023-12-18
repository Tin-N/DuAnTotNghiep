import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native'
import { React, useEffect } from 'react'
import AxiosIntance from '../../../../utils/AxiosIntance';
import { useNavigation } from '@react-navigation/native';

const OrderHistoryItem = (props) => {
    const data = props.data;
    const navigation = useNavigation();
    const formattedDate = new Date(data.orderDate).toLocaleDateString('vn-VN', {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    });

    const navigateToOrderDetailHistory = () => {
        navigation.navigate("OrderDetailHistory", { navigateData: data })
    }

    const handleCancelOrder = () => {
        Alert.alert(
            'Thông báo',
            `Bạn có chắc muốn huỷ đơn hàng này?`,
            [
                {
                    text: 'Cancel',
                },
                {
                    text: 'OK',
                    onPress: async () => {
                        try {
                            sProductProcessChange();
                            const response1 = await AxiosIntance().put(`/orderdetail/updateDeliveryStatus/${data.orderDetailID}`, {
                                deliveryStatus: 'Cancel'
                            })
                        } catch (error) {
                            console.log("OrderHistoryItem - handleCancelOrder: error: " + error);
                        }

                    },
                },
            ]
        );
    }

    return (
        <View style={{ borderWidth: 1, margin: 5, borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Image
                    source={{ uri: "https://banner2.cleanpng.com/20180425/iee/kisspng-computer-icons-5ae02032a20968.3568738115246377466637.jpg" }}
                    style={{ width: 80, height: 80, marginRight: 10 }}
                />
                
                <View style={{ flex: 1 }}>
                    <Text style={{ color: 'black' }} numberOfLines={1} ellipsizeMode="tail">
                        OwnerID: <Text style={{ color: 'red' }}>{data.ownerID}</Text>
                    </Text>
                    <Text style={{ color: 'black' }} numberOfLines={1} ellipsizeMode="tail">
                        Order Date: <Text style={{ color: 'red' }}>{formattedDate}</Text>
                    </Text>
                    <Text style={{ color: 'black' }} numberOfLines={1} ellipsizeMode="tail">
                        Payment Status: <Text style={{ color: 'red' }}>{data.paymentStatus}</Text>
                    </Text>
                    <Text style={{ color: 'black' }} numberOfLines={1} ellipsizeMode="tail">
                        Payment Methods: <Text style={{ color: 'red' }}>{data.paymentMethods}</Text>
                    </Text>
                </View>
            </View>

            {data.isConfirmed ? null
                : <Pressable onPress={handleCancelOrder} style={{ padding: 5, backgroundColor: '#8B0000' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Huỷ Đơn Hàng</Text>
                </Pressable>}

            <Pressable onPress={navigateToOrderDetailHistory} style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, padding: 5, backgroundColor: '#87C4FF' }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Xem chi tiết</Text>
            </Pressable>
        </View>
    );

}

export default OrderHistoryItem

const styles = StyleSheet.create({})