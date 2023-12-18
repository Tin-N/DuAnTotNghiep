import { StyleSheet, Text, View, Image, Pressable, FlatList, ActivityIndicator, Switch, Alert, ToastAndroid } from 'react-native'
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
import ActionBar from './ActionBar'
import { memo } from "react"
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';

const Order = () => {
  // const { isOrder } = useContext(AppContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isCheckBox, setisCheckBox] = useState(false);
  const [userCart, setuserCart] = useState([])
  const [productsSelected, setproductsSelected] = useState([])
  const [totalCost, settotalCost] = useState(0)
  const [isCartChanged, setisCartChanged] = useState(1)
  const [isLoading, setisLoading] = useState(false)
  const navigation = useNavigation();

  const appContextData = useContext(AppContext);
  const userID = appContextData.userID;
  const userAddress = appContextData.userAddress;

  // Lấy dữ liệu giỏ hàng của user
  useEffect(() => {
    (async () => {
      try {
        const response = await AxiosIntance().get(`/cart/getCartByUserID/${userID}`)
          .then(setisLoading(true));
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
  }, [productsSelected])

  // View thông báo khi giỏ hàng trống
  const MyCartIsEmpty = () => {
    const navigation = useNavigation();

    if (!userID) {
      Alert.alert(
        'Thông báo',
        'Cỏ vẻ bạn chưa đăng nhập vào ứng dụng, bạn muốn đăng nhập chứ?', // Nội dung thông báo
        [
          {
            text: 'Cancel', // Chữ hiển thị trên nút Cancel
            onPress: () => {
              // Xử lý khi người dùng chọn "OK"
              navigation.goBack();
            },
          },
          {
            text: 'OK', // Chữ hiển thị trên nút OK
            onPress: () => {
              // Xử lý khi người dùng chọn "OK"
              navigation.navigate('Profile');
            },
          },
        ]
      );
    }
    return (
      <View style={StyleOrder.myCart1}>
        <Image style={StyleOrder.image} source={require('../images/myCart1.png')} />
        <Text style={StyleOrder.textHeader}>Your Card is Empty</Text>
        <Pressable onPress={() => {
          navigation.navigate("Home")
        }} style={StyleOrder.pressable}>
          <Text style={StyleOrder.textPressable}>Start Browsing</Text>
        </Pressable>
      </View>
    )
  }

  // View giỏ hàng
  const MyCart = () => {
    return (
      <FlatList
        // style={{ height: height }}
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
      if (!userAddress) {
        Alert.alert(
          'Thông báo',
          'Bạn chưa điền địa chỉ, có muốn chuyển đến điền thông tin?', // Nội dung thông báo
          [
            {
              text: 'Cancel'
            },
            {
              text: 'OK', // Chữ hiển thị trên nút OK
              onPress: () => {
                navigation.navigate("Profile", { screen: 'ProfileUser' })
              },
            },
          ]
        );
      } else {
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
                userID,
                orderDetailID: objectId,
                orderDate: orderDate,
                paymentStatus: 'Unpaid',
                paymentMethods: 'COD',
                ownerID: [...new Set(productsSelected.map(product => product.ownerID))],
                address: userAddress,
                isConfirmed: false
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
              text: 'Cancel'
            },
            {
              text: 'OK', // Chữ hiển thị trên nút OK
              onPress: () => {
                // Xử lý khi người dùng chọn "OK"
                OrderPost().then(async () => {
                  // console.log(productsSelected)
                  await AxiosIntance().delete(`cart/deleteProductsSelected/${userID}`)
                }).then(() => {
                  handleCartChanged()
                });

                async () => {
                  try {
                    await AxiosIntance().put(`productAPI/updateQuantityOrdered`, {
                      productsToUpdate: productsSelected
                    })
                  } catch (error) {

                  }
                }
              },
            },
          ]
        );
      }
    } catch (error) {
      console.log("Đặt hàng không thành công --- " + error)
      throw error;
    }
  }

  return (
    <View style={StyleOrder.container}>
      <View>
        {/* header */}
        <ActionBar title={"Cart"} />
        {/* co san pham thi hien list san pham khong thi hien hinh anh */}
        {isLoading
          ? <View style={{ height: 525 }}>
            {userCart.length != 0 ? <MyCart /> : <MyCartIsEmpty />}
          </View>
          : <View style={{ alignItems: 'center', marginTop: 220 }}>
            <ActivityIndicator size='large' color="#0000ff" />
            <Text>Loading...</Text>
          </View>
        }

      </View>

      <View style={{ marginRight: 10 }}>
        {/* Order Process */}
        <View style={{ bottom: 100 }}>
          <View style={[StyleOrder.tillte, { width: Dimensions.get('window').width, borderTopWidth: 0.3, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderLeftWidth: 0.3, borderRightWidth: 0.3 }]}>
            {/* <Image style={{ width: 40, height: 40 }} source={require('../images/icons8-coin-50.png')} /> */}
            {!productsSelected
              ? <Text style={StyleOrder.textTillte}>Bạn chưa chọn sản phầm nào</Text>
              : <Text style={[StyleOrder.textTillte, { margin: 10, marginLeft: 10 }]}>Bạn đã chọn {productsSelected.length} sản phẩm</Text>}

          </View>

          <View style={[StyleOrder.tillte]}>
            <Text style={[StyleOrder.textTillte, { marginTop: 10, marginLeft: 10 }]}>Tổng:</Text>
            <Text style={[StyleOrder.textTillte, { marginTop: 10, color: '#EE2624' }]}>{totalCost} VNĐ</Text>
            <Pressable onPress={OrderFunc} style={StyleOrder.pressableBuy}>
              <Text style={[{ color: 'white', fontSize: 18 }]}>Mua Hàng</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}
export default memo(Order);