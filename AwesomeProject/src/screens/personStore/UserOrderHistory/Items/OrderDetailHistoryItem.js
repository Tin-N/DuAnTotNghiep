import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import {React, useEffect, useState} from 'react'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
import AxiosIntance from '../../../../utils/AxiosIntance';

const OrderDetailHistoryItem = (props) => {
    const data = props.data;
    const productID = data.productID;
    const [productName, setProductName] = useState('Tên Sản Phẩm');
    const [productPrice, setproductPrice] = useState(data.itemTotalCost)
    const [quantity, setquantity] = useState(data.quantity)
    const [imageUri, setImageUri] = useState();
    console.log("OrderDetailHistoryItemData" + imageUri)

    useEffect(() => {
        (async () => {
            try {
                const productResponse = await AxiosIntance().get(`/productAPI/getProductByID?id=${productID}`);
                if (productResponse.result == true) {
                    setProductName(productResponse.products.name);
                    setImageUri(productResponse.products.image[0]);
                }
            } catch (error) {
                console.log("OrderDetailHistoryItem: lỗi lấy dữ liệu: " + error)
            }
        })();
    }, []);

    return (
        <View style={{ width: 45 * width / 100, borderWidth: 0.2, margin: 10, padding: 10, backgroundColor: '#F6F6F6', borderRadius: 3 }}>
            <Image source={{ uri: imageUri }} style={{ alignSelf: 'center', width: 130, height: 150, backgroundColor: 'red', zIndex: 4 }} />

            <Text style={{ color: 'black', fontSize: 15, marginBottom: 5, marginTop: 5, fontWeight: '500' }} numberOfLines={1}>{productName}</Text>
            <Text>Số Lượng: {quantity}</Text>

            <Text style={{ color: '#008000', marginBottom: 3, marginTop: 3, textAlign: 'right' }}>{productPrice} VNĐ</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
            </View>
        </View>
    )
}

export default OrderDetailHistoryItem

const styles = StyleSheet.create({})