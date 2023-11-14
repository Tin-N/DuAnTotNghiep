import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native';
import SProductProcessItem from './SProductProcessItem';
const { width, height } = Dimensions.get('screen');
import AxiosIntance from '../../../utils/AxiosIntance'
import { AppContext } from '../../../utils/AppContext';

const SProductProcess = () => {
    const appContextData = useContext(AppContext);
    const userID = appContextData.userID;
    const [orderDetail, setorderDetail] = useState([])
    const [productDetailChanged, setproductDetailChanged] = useState(1)

    console.log("ProductProcess Render")
    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/orderdetail/getOrderDetailByShiper/${userID}`)
                setorderDetail(response.products[0]);
                console.log("Product Process - lấy dữ liệu: " + JSON.stringify(response));
            } catch (error) {
                console.log("Order: lỗi lấy dữ liệu: " + error);
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#3669C9', height: 5 * height / 100, alignItems: 'center', padding: 5 }}>
                <Icon name='arrow-back' size={20} />
                <View style={{ flexDirection: 'row', }}>
                    <Icon name='settings-sharp' size={20} />
                    <Icon name='chatbox-ellipses-outline' size={20} />
                </View>
            </View>
            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                data={orderDetail}
                renderItem={({ item }) => <SProductProcessItem data={item} productDetailChanged={handleProducDetailChanged} />}
                keyExtractor={item => item.productID}
            />
        </View >
    )
}

export default SProductProcess

const styles = StyleSheet.create({})
