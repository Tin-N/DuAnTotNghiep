import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity, Switch } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../utils/AppContext'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { StyleCategory, StyleOrder } from '../css/Styles'
import OrderItem from './OrderItem'
import { ScrollView } from 'react-native-gesture-handler'
import AxiosIntance from '../utils/AxiosIntance'





const Order = () => {
  // const { isOrder } = useContext(AppContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isCheck, setisCheck] = useState([]);
  const [grandTotal, setgrandTotal] = useState()
  const [products, setproducts] = useState([]);
  const [orderDetailID, setorderDetailID] = useState();

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

  const productsSelected = (productID, totalCost) => {
    setgrandTotal(totalCost);
    setproducts(products => [...products, productID])
  }

  // Hàm xử lý chức năng đặt hàng
  const OrderFunc = async () => {
    try {
      const orderDetailRequestData = {
        products: products,
        totalCost: grandTotal,
      };
      const orderRequestData = {
        orderDetailID: orderDetailID,
        // userID: data truyền vào
        orderDate: new Date()
      }
      const orderDetailResponse = await AxiosIntance().post('/OrderDetails/add', orderDetailRequestData);
      setorderDetailID(orderDetailResponse.data.orderDetailID)
      if (orderResponse && orderResponse.status === 201) {
        const orderResponse = await AxiosIntance().post('/Order/add', orderRequestData);
        console.log("Đặt hàng thành công" + orderResponse);
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Hàm xử lý chọn tất các các sản phẩm trong giỏ hàng
  function pickOption(selectedCheck) {
    if (isCheck.includes(selectedCheck)) {
      setisCheck(isCheck.filter(isCheck => isCheck !== selectedCheck));
      return;
    }
    setisCheck(isCheck => isCheck.concat(selectedCheck))
  }

  return (
    <View style={StyleOrder.container}>
      <View>
        {/* header */}
        <View style={StyleOrder.header}>
          <Text style={StyleOrder.textHeader}>My Cart</Text>
          <Pressable onPress={click}>
            <Icon name='ellipsis-vertical' size={24} color={"black"} />
          </Pressable>
        </View>

        {/* co san pham thi hien list san pham khong thi hien hinh anh */}
        <View>
          {/* {
            isOrder == true ? <MyCartIsEmpty/> : <MyCart2/>
          } */}
          <MyCart />
        </View>
      </View>
      {/* Order Process */}
      <View style={{ marginBottom: 100 }}>
        <View style={StyleOrder.tillte}>
          <Image source={require('../images/cost.png')} />
          <Text style={StyleOrder.textTillte}>Bạn chưa có sản phầm nào</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={StyleOrder.tillte}>
          {/* {options.map(option => (
            <View key={option} >
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity onPress={() => pickOption(option)}>
                  {isCheck.includes(option) == true ? <MaterialIcons name='check-box' size={24} color={'green'} /> : <MaterialIcons name='check-box-outline-blank' size={24} color={'black'} />}
                </TouchableOpacity>
              </View>
            </View>
          ))} */}

          <Text style={[StyleOrder.textTillte, { marginTop: 10 }]}>Tổng: {grandTotal}</Text>

          <Pressable onPress={OrderFunc} style={StyleOrder.pressableBuy}>
            <Text style={[StyleOrder.textTillte, { color: 'white', marginTop: 5 }]}>Mua Hàng</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Order

const sampleData = [
  {
    productID: '65291577c199df71b460f143',
    quantity: 2,
    price: 50,
  },
  {
    productID: '652915b8c199df71b460f146',
    quantity: 3,
    price: 75,
  },
  {
    productID: '65291733c199df71b460f190',
    quantity: 1,
    price: 105,
  },
];