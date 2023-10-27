import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity, Switch, Alert } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../utils/AppContext'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { StyleCategory, StyleOrder } from '../css/Styles'
import OrderItem from './OrderItem'
const ObjectID = require('bson-objectid');

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
  const [products, setproducts] = useState([]);

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
        renderItem={
          ({ item }) =>
            <OrderItem data={item}
              itemSelectedData={itemFromOrderItem}
              itemDeselectedData={itemDeselectedFromOrderItem}
              updateItemData={updateItemSelected}
              newData={products}
            />
        }
        keyExtractor={item => item.productID}
      />
    )
  }

  const itemFromOrderItem = (productsReceived) => {
    setproducts([...products, productsReceived]);

    console.log(productsReceived)
  }

  const itemDeselectedFromOrderItem = (productIDReceived) => {
    setproducts(products => products.filter(product => product.productID !== productIDReceived));
  }

  const updateItemSelected = (productID, quantity, itemTotalCost) => {
    // Sao chép mảng sản phẩm hiện tại để tránh thay đổi trực tiếp state
    const updatedProducts = [...products];

    // Tìm sản phẩm có productID trùng khớp trong mảng
    const existingProductIndex = updatedProducts.findIndex(item => item.productID === productID);

    if (existingProductIndex !== -1) {
      // Nếu có sản phẩm trùng khớp, cập nhật quantity và itemTotalCost
      updatedProducts[existingProductIndex].quantity = quantity;
      updatedProducts[existingProductIndex].itemTotalCost = itemTotalCost;

      // Cập nhật state với danh sách sản phẩm mới
      setproducts(updatedProducts);
    } else {
      return;
    }
  }

  const updatedSampleData = sampleData.filter((sampleItem) => {
    return !products.some((productItem) => productItem.productID === sampleItem.productID);
  });

  // Hàm xử lý chức năng đặt hàng
  const OrderFunc = async () => {
    console.log("-------------------------------------------------")
    try {
      console.log("Current Products After: " + products)

      // Sử dụng reduce để tính tổng itemTotalCost của tất cả các mục trong mảng products
      const total = products.reduce((accumulator, product) => {
        return accumulator + product.itemTotalCost;
      }, 0);

      // Xóa dữ liệu truyền vào
      updatedSampleData;

      // Cập nhật giá trị grandTotal
      setgrandTotal(total);
      const objectId = new ObjectID();
      console.log(objectId)
      const orderDetailResponse = await AxiosIntance().post('/orderdetail/add', { orderDetailID: objectId, products: products, totalCost: grandTotal });

      console.log("Order Detail ID: " + orderDetailResponse.data.orderDetailID)

      const OrderPost = async () => {
        if (orderDetailResponse.error == false) {
          const orderResponse = await AxiosIntance().post('/order/add', { orderDetailID: objectId, orderDate: new Date() });
          console.log("Đặt hàng thành công, Order ID: " + orderResponse.orderDetailID);
        }
      }

      Alert.alert(
        'Thông báo',
        'Bạn có muốn mua những sản phẩm này?', // Nội dung thông báo
        [
          {
            text: 'Cancel', // Chữ hiển thị trên nút Cancel
            onPress: () => {
              // Xử lý khi người dùng chọn "Cancel"
              console.log('Bạn đã chọn Cancel');
            }
          },
          {
            text: 'OK', // Chữ hiển thị trên nút OK
            onPress: () => {
              // Xử lý khi người dùng chọn "OK"
              setTimeout(() => {
                OrderPost();
              }, 500);

            },
          },
        ]
      );

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
