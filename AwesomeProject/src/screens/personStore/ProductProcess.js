import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native';
import ProductProcessItem from './ProductProcessItem';
const { width, height } = Dimensions.get('screen');
import AxiosIntance from '../../utils/AxiosIntance'
import { AppContext } from '../../utils/AppContext';
import { useRoute } from '@react-navigation/native';
import ActionBar from '../ActionBar';

const ProductProcess = () => {
    const appContextData = useContext(AppContext);
    const userID = appContextData.userID;
    const [orderDetail, setorderDetail] = useState([])
    const [productDetailChanged, setproductDetailChanged] = useState(1)

    const route = useRoute();
    const receivedOrderDetailID = route.params?.navigateData || null;

    console.log("ProductProcess Render")
    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/orderdetail/getOrderDetailByOwnerAndOrderDetailID/${receivedOrderDetailID}/${userID}`)
                setorderDetail(response.products[0]);
                // console.log("Product Process - lấy dữ liệu: " + JSON.stringify(response.products[0]));
            } catch (error) {
                console.log("ProductProcess: lỗi lấy dữ liệu: " + error);
            }
        })();
    }, [productDetailChanged]);

    const handleProducDetailChanged = () => {
        if (productDetailChanged) {
            setproductDetailChanged(false)
            console.log(productDetailChanged)
        } else {
            setproductDetailChanged(true)
            console.log(productDetailChanged)
        }
    }

    return (
        <View style={{}}>
            <ActionBar title={"Sản phẩm"}/>

            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                data={orderDetail}
                renderItem={({ item }) => <ProductProcessItem data={item} productDetailChanged={handleProducDetailChanged} />}
                keyExtractor={item => item.productID}
            />
        </View >
    )
}

export default ProductProcess

const styles = StyleSheet.create({})
