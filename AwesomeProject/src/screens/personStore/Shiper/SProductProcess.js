import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import SProductProcessItem from './SProductProcessItem';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
import AxiosIntance from '../../../utils/AxiosIntance'
import { AppContext } from '../../../utils/AppContext';
import ActionBar from '../../ActionBar';

const SProductProcess = () => {
    const [orderDetail, setorderDetail] = useState([])
    // console.log('>>>> DATA: ' + JSON.stringify(orderDetail))

    const [toReRender, settoReRender] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    // console.log("=>>>>>>>>>>>>> " + toReRender)

    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/orderdetail/getAllForShipper`)
                setorderDetail(response.data)
                console.log("=>>>>>>>>>>>>> res: " + JSON.stringify(response))
                if (response) {
                    setisLoading(false)
                }
            } catch (error) {
                console.log("SProductProcess: lỗi lấy dữ liệu: " + error);
                setisLoading(false)
            }
        })();
    }, [toReRender]);

    const handleSProductProcessChange = () => {
        if (toReRender) {
            settoReRender(false)
        } else {
            settoReRender(true)
        }
    }

    return (
        <View style={{}}>
            <ActionBar title={"Shipper"} />
            {isLoading ? (
                <View style={{ alignItems: 'center', marginTop: 220 }}>
                    <ActivityIndicator size='large' color="#0000ff" />
                    <Text>Loading...</Text>
                </View>
            ) : (
                orderDetail.length > 0 ? (
                    <FlatList
                        style={{ height: height - 170 }}
                        showsVerticalScrollIndicator={false}
                        overScrollMode='never'
                        data={orderDetail}
                        renderItem={({ item }) => <SProductProcessItem sProductProcessChange={handleSProductProcessChange} data={item} />}
                        keyExtractor={item => item.productID}
                    />
                ) : (
                    <View style={{ alignItems: 'center', marginTop: 220 }}>
                        <Text>Không có dữ liệu</Text>
                    </View>
                )
            )}
        </View >
    )
}

export default SProductProcess

const styles = StyleSheet.create({})
