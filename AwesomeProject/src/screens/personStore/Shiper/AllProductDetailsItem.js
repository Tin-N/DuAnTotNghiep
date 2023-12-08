import { StyleSheet, Text, View, Image, Pressable, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Dimensions } from 'react-native';
import AxiosIntance from '../../../utils/AxiosIntance'
import { AppContext } from '../../../utils/AppContext';
const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';

const AllProductDetailsItem = (props) => {
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
    console.log(">>>>>>>>>>>>>>>>>>" + JSON.stringify(data))

    useEffect(() => {
        (async () => {
            try {
                const productResponse = await AxiosIntance().get(`/productAPI/getProductByID?id=${productID}`);
                if (productResponse.result == true) {
                    setProductName(productResponse.products.name);
                    setImageUri(productResponse.products.image[0]);
                }
            } catch (error) {
                console.log("ProductProcessItem: lỗi lấy dữ liệu: " + error)
            }
        })();
    }, []);


    return (
        <View style={{ width: 45 * width / 100, borderWidth: 0.2, margin: 10, padding: 10, backgroundColor: '#F6F6F6', borderRadius: 3 }}>
            <Image source={{ uri: "http://nhatminhdecor.com/wp-content/uploads/2019/01/chup-anh-voi-phong-nen-vai-trang-1.jpg" }} style={{ alignSelf: 'center', width: 130, height: 150, backgroundColor: 'red', zIndex: 4 }} />

            <Text style={{ color: 'black', fontSize: 15, marginBottom: 5, marginTop: 5, fontWeight:'500' }} numberOfLines={1}>{productName}</Text>
            <Text>Số Lượng: {quantity}</Text>

            <Text style={{ color: '#008000', marginBottom: 3, marginTop: 3, textAlign: 'right' }}>$ {productPrice}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
            </View>
            <Pressable  style={{ alignItems: 'center', borderWidth: 0.5, borderRadius: 5, borderColor: '#3669C9', backgroundColor: '#8B0000', padding: 5 }}>
                <Text style={{ color: 'white', fontStyle: 'bold', fontSize: 15, fontWeight: '370' }}>Hàng trả về</Text>
            </Pressable>
        </View>
    )
}

export default AllProductDetailsItem;

const styles = StyleSheet.create({})