import { StyleSheet, Text, View, Image, Pressable, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Dimensions } from 'react-native';
import AxiosIntance from '../../utils/AxiosIntance'
import { AppContext } from '../../utils/AppContext';
import ActionBar from '../ActionBar';
const { width, height } = Dimensions.get('screen');
const ProductProcessItem = (props) => {
    const data = props.data;
    const productDetailChanged = props.productDetailChanged
    const productID = data.productID;
    const appContextData = useContext(AppContext);
    const userID = appContextData.userID;
    const [productName, setProductName] = useState('Tên Sản Phẩm');
    const [imageUri, setImageUri] = useState();
    const [productPrice, setproductPrice] = useState(data.itemTotalCost)
    const [quantity, setquantity] = useState(data.quantity)
    const [orderDetailID, setorderDetailID] = useState()

    useEffect(() => {
        (async () => {
            try {
                const productResponse = await AxiosIntance().get(`/productAPI/getProductByID?id=${productID}`);
                if (productResponse.result == true) {
                    setProductName(productResponse.products.name);
                    setImageUri(productResponse.products.image[0]);
                }
                const response = await AxiosIntance().get(`/orderdetail/getOrderDetailByOwner/${userID}`)
                setorderDetailID(response.responseData[0].orderDetailID)
            } catch (error) {
                console.log("ProductProcessItem: lỗi lấy dữ liệu: " + error)
            }
        })();
    }, []);

    const handleProductDetailChanged = () => {
        productDetailChanged()
    }

    const handlePushProduct = async () => {
        const res = await AxiosIntance()
            .put(`/orderdetail/update/updateProductDeliveryStatus/${orderDetailID}/${userID}/${productID}`
                , { deliveryStatus: 'Delivering' })
        handleProductDetailChanged()
    }

    const handleProductRejection = () => {
        Alert.alert(
            'Thông báo',
            'Bạn có muốn từ chối sản phẩm này?',
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
                        const res = await AxiosIntance()
                            .put(`/orderdetail/update/updateProductDeliveryStatus/${orderDetailID}/${userID}/${productID}`
                                , { deliveryStatus: 'Rejected' })
                        handleProductDetailChanged()
                    },
                },
            ]
        );
    }

    return (
        <View style={{ width: 45 * width / 100, borderWidth: 0.2, margin: 10, padding: 10, backgroundColor: '#F6F6F6', borderRadius: 3 }}>

            <Pressable onPress={handleProductRejection} style={{ position: 'absolute', zIndex: 5, right: 5, top: 5 }}>
                <MaterialIcons name='cancel' size={28} />
            </Pressable>

            <Image source={{ uri: imageUri }} style={{ alignSelf: 'center', width: 130, height: 150, backgroundColor: 'red', zIndex: 4 }} />

            <Text style={{ color: 'black', fontSize: 15, marginBottom: 5, marginTop: 5, fontWeight: '500' }} numberOfLines={1}>{productName}</Text>
            <Text>Số Lượng: {quantity}</Text>
            <Text style={{ fontSize: 7 }}>orderDetailID: {orderDetailID}</Text>

            <Text style={{ color: '#008000', marginBottom: 3, marginTop: 3, textAlign: 'right' }}>$ {productPrice}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
            </View>
            <Pressable onPress={handlePushProduct} style={{ alignItems: 'center', borderWidth: 0.5, borderRadius: 5, borderColor: '#3669C9', backgroundColor: '#6495ED', padding: 5 }}>
                <Text style={{ color: 'white', fontStyle: 'bold', fontSize: 15, fontWeight: '370' }}>ĐẨY SẢN PHẨM</Text>
            </Pressable>
        </View>
    )
}

export default ProductProcessItem

const styles = StyleSheet.create({})