import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity, Switch, Alert, ToastAndroid } from 'react-native'
import React, { useContext, useState, useEffect, useCallback } from 'react'
import { AppContext } from '../utils/AppContext'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { StyleCategory, StyleOrder } from '../css/Styles'
import OrderItem from './OrderItem'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import AxiosIntance from '../utils/AxiosIntance'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const ObjectID = require('bson-objectid');
import { memo } from "react"

const Order = () => {
  // const { isOrder } = useContext(AppContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isCheckBox, setisCheckBox] = useState(false);
  const [userCart, setuserCart] = useState([])
  const [productsSelected, setproductsSelected] = useState([])
  const [totalCost, settotalCost] = useState(0)
  const [isCartChanged, setisCartChanged] = useState(1)

  const appContextData = useContext(AppContext);
  const userID = appContextData.userID;
  console.log(">>>>>>>>> UserID: " + userID);

  // Lấy dữ liệu giỏ hàng của user
  useEffect(() => {
    (async () => {
      try {
        const response = await AxiosIntance().get(`/cart/getCartByUserID/${userID}`);
        console.log("userCart: " + response)
        setuserCart(response);
      } catch (error) {
        console.log("Order: lỗi lấy dữ liệu: " + error);
      }
    })();
  }, [isCartChanged]);

  // Các dữ liệu đã chọn
  useEffect(() => {
    if (userCart) {
      const prodsSelected = userCart.filter(product => product.isSelected === true);
      const prodsWithDeliveryStatus = prodsSelected.map(product => ({
        ...product,
        deliveryStatus: 'Pending',
      }));
      setproductsSelected(prodsWithDeliveryStatus);
      // console.log("Product Selected: " + prodsSelected);
    }
  }, [userCart]);

  // Tính tổng tiền
  useEffect(() => {
    settotalCost(productsSelected.reduce((total, product) => total + product.itemTotalCost, 0))
    // console.log(">>>>>>>>>Total Cost: " + totalCost)
  }, [productsSelected])

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
        data={userCart}
        renderItem={
          ({ item }) =>
            <OrderItem data={item}
              cartChanged={handleCartChanged}
            />
        }
        keyExtractor={item => item.productID}
      />
    )
  }

  const handleCartChanged = () => {
    if (isCartChanged) {
      setisCartChanged(false)
    } else {
      setisCartChanged(true)
    }
  }

  // Hàm xử lý chức năng đặt hàng
  const OrderFunc = async () => {
    console.log("-------------------------------------------------")
    try {
      const objectId = new ObjectID();
      console.log(objectId)

      const orderDetailResponse = await AxiosIntance().post('/orderdetail/add',
        {
          orderDetailID: objectId,
          products: productsSelected,
          totalCost: totalCost
        });
      // console.log("Order Detail ID: " + orderDetailResponse.data.orderDetailID)

      const OrderPost = async () => {
        if (orderDetailResponse.error == false) {
          const orderDate = new Date()
          const orderResponse = await AxiosIntance().post('/order/add',
            {
              orderDetailID: objectId,
              orderDate: orderDate,
              paymentStatus: 'Unpaid',
              paymentMethods: 'COD',
              ownerID: [...new Set(productsSelected.map(product => product.ownerID))]
            });
          console.log("Đặt hàng thành công");
          ToastAndroid.show("Đơn hàng của bạn đang chờ xử lý", ToastAndroid.SHORT);
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
              OrderPost().then(async () => {
                console.log(productsSelected)
                await AxiosIntance().delete(`cart/deleteProductsSelected/${userID}`)
              }).then(() => {
                handleCartChanged()
              });
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
      <View>
        {/* header */}
        <View style={[StyleOrder.header, { borderBottomWidth: 0.2, paddingBottom: 10 }]}>
          <Text style={StyleOrder.textHeader}>My Cart</Text>
          <Pressable >
            <Icon name='ellipsis-vertical' size={24} color={"black"} />
          </Pressable>
        </View>

        {/* co san pham thi hien list san pham khong thi hien hinh anh */}
        <View style={{ height: 550 }}>
          {userCart.length === 0 ? <MyCartIsEmpty /> : <MyCart />}

        </View>
      </View>

      <View style={{ marginRight: 10 }}>
        {/* Order Process */}
        <View style={{ bottom: 100 }}>
          <View style={[StyleOrder.tillte, { marginLeft: -6, marginRight: -6, borderTopWidth: 0.3, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderLeftWidth: 1, borderRightWidth: 1 }]}>
            <Image style={{ width: 40, height: 40 }} source={require('../images/icons8-coin-50.png')} />
            {!productsSelected
              ? <Text style={StyleOrder.textTillte}>Bạn chưa chọn sản phầm nào</Text>
              : <Text style={StyleOrder.textTillte}>Bạn đã chọn {productsSelected.length} sản phẩm</Text>}
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
            <Text style={[StyleOrder.textTillte, { marginTop: 10 }]}>Tổng: {totalCost}</Text>

            <Pressable onPress={OrderFunc} style={StyleOrder.pressableBuy}>
              <Text style={[StyleOrder.textTillte, { color: 'white', marginTop: 5 }]}>Mua Hàng</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}
export default memo(Order);