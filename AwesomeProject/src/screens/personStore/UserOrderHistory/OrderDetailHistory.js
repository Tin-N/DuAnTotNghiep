import { StyleSheet, Text, View, FlatList } from 'react-native'
import { React, useEffect, useState } from 'react'
import ActionBar from '../../ActionBar';
import AxiosIntance from '../../../utils/AxiosIntance';
import OrderDetailHistoryItem from './Items/OrderDetailHistoryItem';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

const OrderDetailHistory = ({ route }) => {
  const dataFromPreviousScreen = route.params?.navigateData || {};
  const orderDetailID = dataFromPreviousScreen.orderDetailID;
  const [orderDetailData, setorderDetailData] = useState([])
  console.log(">>>>>orderDetailData: " + JSON.stringify(orderDetailData))

  useEffect(() => {
    (async () => {
      try {
        const res = await AxiosIntance().get(`/orderdetail/getOrderHistoryForCustomer/${orderDetailID}`);
        setorderDetailData(res[0].products)
      } catch (error) {
        console.log("OrderDetailHistory: lỗi lấy dữ liệu: " + error)
      }
    })();
  }, []);

  return (
    <View style={{}}>
      <ActionBar title={"Chi tiết đơn hàng"} />
      <FlatList
        style={{ height: height }}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        overScrollMode='never'
        data={orderDetailData}
        renderItem={({ item }) => <OrderDetailHistoryItem data={item} />}
        keyExtractor={item => item.productID}
      />
    </View >
  )
}

export default OrderDetailHistory

const styles = StyleSheet.create({})