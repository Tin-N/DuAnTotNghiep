import { StyleSheet, Text, View, Image, Pressable, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Dimensions } from 'react-native';
import AxiosIntance from '../../../utils/AxiosIntance'
import { AppContext } from '../../../utils/AppContext';
const { width, height } = Dimensions.get('screen');
const SProductProcessItem = (props) => {
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
    // console.log("orderDetailID: " + JSON.stringify(orderDetailID))


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

    const handleSuccess = async () => {
        const res = await AxiosIntance()
            .put(`/orderdetail/update/updateProductDeliveryStatus/${orderDetailID}/${userID}/${productID}`
                , { deliveryStatus: 'Delivered' })
        handleProductDetailChanged()
    }

    const handleFailure = () => {
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
                                , { deliveryStatus: 'Return' })
                        handleProductDetailChanged()
                    },
                },
            ]
        );
    }

    return (
        <View style={{ width: 45 * width / 100, borderWidth: 0.2, margin: 10, padding: 10, backgroundColor: '#F6F6F6', borderRadius: 3 }}>
            <Image source={{ uri: "http://nhatminhdecor.com/wp-content/uploads/2019/01/chup-anh-voi-phong-nen-vai-trang-1.jpg" }} style={{ alignSelf: 'center', width: 130, height: 150, backgroundColor: 'red', zIndex: 4 }} />

            <Text style={{ color: 'black', fontSize: 15, marginBottom: 5, marginTop: 5, fontWeight: '500' }} numberOfLines={1}>{productName}</Text>
            <Text>Số Lượng: {quantity}</Text>
            <Text style={{ fontSize: 10 }}>orderDetailID: {orderDetailID}</Text>
            <Text style={{ fontSize: 10 }}>productID: {productID}</Text>
            <Text style={{ fontSize: 10 }}>deliveryStatus: {data.deliveryStatus}</Text>
            <Text style={{ color: '#008000', marginBottom: 3, marginTop: 3, textAlign: 'right' }}>$ {productPrice}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
            </View>
            <Pressable onPress={handleSuccess} style={{ alignItems: 'center', borderWidth: 0.5, borderRadius: 5, borderColor: '#3669C9', backgroundColor: '#6495ED', padding: 5 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontStyle: 'bold', fontSize: 15, fontWeight: '370' }}>Giao Hàng Thành Công</Text>
            </Pressable>
            <Pressable onPress={handleFailure} style={{ marginTop: 5, alignItems: 'center', borderWidth: 0.5, borderRadius: 5, borderColor: '#3669C9', backgroundColor: '#6495ED', padding: 5 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontStyle: 'bold', fontSize: 15, fontWeight: '370' }}>Hàng Trả Về</Text>
            </Pressable>
        </View>
    )
}

export default SProductProcessItem

const styles = StyleSheet.create({})