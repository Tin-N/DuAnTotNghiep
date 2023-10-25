import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity, Switch, Alert } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../utils/AppContext'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { StyleCategory, StyleOrder } from '../css/Styles'
import OrderItem from './OrderItem'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import AxiosIntance from '../utils/AxiosIntance'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Order = () => {
  // const { isOrder } = useContext(AppContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isCheck, setisCheck] = useState([]);
  const [isCheckBox, setisCheckBox] = useState(false);
  const [grandTotal, setgrandTotal] = useState();
  const [products, setproducts] = useState();
  const [orderDetailID, setorderDetailID] = useState('');

  // Xóa mục grandTotal và products
  AsyncStorage.removeItem('grandTotal' && 'products' && 'currentTotal')
    .then(() => {
      // console.log('Đã xóa dữ liệu grandTotal và products trong AsyncStorage');
    })
    .catch(error => {
      console.error('Lỗi khi xóa dữ liệu grandTotal và products trong AsyncStorage: ', error);
    });

  // View thông báo khi giỏ hàng trống
  const MyCartIsEmpty = () => {
    return (
      <View style={StyleOrder.myCart1}>
        <Image style={StyleOrder.image} source={require('../images/myCart1.png')} />
        <Text style={StyleOrder.textHeader}>Your Card is Empty</Text>
        <Pressable style={StyleOrder.pressable}>
          <Text style={StyleOrder.textPressable}>Start Browsing</Text>
        </Pressable>
      </View>
    )
  }

  // View giỏ hàng
  const MyCart = () => {
    return (
      <FlatList
        data={sampleData}
        renderItem={({ item }) => <OrderItem data={item} />}
        keyExtractor={item => item.productID}
      />
    )
  }

  // Hàm xử lý chức năng đặt hàng
  const OrderFunc = async () => {
    console.log("-------------------------------------------------")
    console.log("Current Products: " + products)
    try {

      const productsSelected = await AsyncStorage.getItem('products');
      const grandTotalOfAllItems = await AsyncStorage.getItem('grandTotal');
      while (products == []) {
          setproducts(JSON.parse(productsSelected));
          setgrandTotal(grandTotalOfAllItems);
      }

        console.log("Current Products After: " + products)
        const orderDetailResponse = await AxiosIntance().post('/orderdetail/add', { products: products, totalCost: grandTotal });
        console.log("Order Detail ID: " + orderDetailResponse.data.orderDetailID)
        setorderDetailID(orderDetailResponse.data.orderDetailID)
        if (orderDetailResponse.error == false) {
          const orderResponse = await AxiosIntance().post('/order/add', { orderDetailID: orderDetailID, orderDate: new Date() });
          console.log("Đặt hàng thành công " + orderResponse.orderDetailID);
        }
        
      // Xóa mục grandTotal và products
      AsyncStorage.removeItem('grandTotal' && 'products')
        .then(() => {
          // console.log('Đã xóa dữ liệu grandTotal và products trong AsyncStorage');
        })
        .catch(error => {
          console.error('Lỗi khi xóa dữ liệu grandTotal và products trong AsyncStorage: ', error);
        });
    } catch (error) {
      console.log("Đặt hàng không thành công --- " + error)
      throw error;
    }
  }

  return (
    <View style={StyleOrder.container}>

      {/* header */}
      <View style={StyleOrder.header}>
        <Text style={StyleOrder.textHeader}>My Cart</Text>
        <Pressable >
          <Icon name='ellipsis-vertical' size={24} color={"black"} />
        </Pressable>
      </View>

      {/* co san pham thi hien list san pham khong thi hien hinh anh */}
      <View style={{ height: 500 }}>
        <MyCart />
      </View>

      <View>
        {/* Order Process */}
        <View style={{ bottom: 100 }}>
          <View style={StyleOrder.tillte}>
            <Image source={require('../images/cost.png')} />
            <Text style={StyleOrder.textTillte}>Bạn chưa có sản phầm nào</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#3669C9' }}
              thumbColor={isEnabled ? '#18039E' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={StyleOrder.tillte}>
            <BouncyCheckbox
              fillColor='white'
              onPress={() => setisCheckBox(!isCheckBox)}
              iconComponent={isCheckBox ? <MaterialIcons name='check-box' size={24} color={'#3669C9'} /> : <MaterialIcons name='check-box-outline-blank' size={24} color={'black'} />}
            />
            <Text style={[StyleOrder.textTillte, { marginTop: 10 }]}>Tổng: {grandTotal}</Text>

            <Pressable onPress={OrderFunc} style={StyleOrder.pressableBuy}>
              <Text style={[StyleOrder.textTillte, { color: 'white', marginTop: 5 }]}>Mua Hàng</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Order

const sampleData = [
  {
    productID: '65291577c199df71b460f143',
    quantity: 1,
  },
  {
    productID: '6529164fc199df71b460f15a',
    quantity: 1,
  },
  {
    productID: '65291733c199df71b460f190',
    quantity: 1,
  },
];