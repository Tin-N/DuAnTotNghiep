import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleOrder } from '../css/Styles'
import OrderItem from './OrderItem'
import { ScrollView } from 'react-native-gesture-handler'


// khong co cart
const MyCart1 = () => {
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

// co cart
const MyCart2 = () => {
  return (
    <FlatList style={{ height: 370 }}
      data={data}
      renderItem={({ item }) => <OrderItem dulieu1={item} />}
      keyExtractor={item => item._id}
    />
  )
}

const Order = () => {
  const { isOrder } = useContext(AppContext);
  return (
    <View style={StyleOrder.container}>

      {/* header */}
      <View style={StyleOrder.header}>
        <Text style={StyleOrder.textHeader}>My Cart</Text>
        <Pressable onPress={click}>
          <Icon name='ellipsis-vertical' size={24} color={"black"} />
        </Pressable>

      </View>

      {/* co san pham thi hien list san pham khong thi hien hinh anh */}
      <View>
        {
          isOrder == false ? <MyCart1 /> : <MyCart2 />
        }
      </View>

      {/* 1 so chuc nang */}
      <View style={StyleOrder.tillte}>
        <Image source={require('../images/wishlist.png')} />
        <Text style={StyleOrder.textTillte}>Wishlist</Text>
        <Pressable onPress={click} style={StyleOrder.icon}>
          <Image source={require('../images/Frame5.png')} />
        </Pressable>
      </View>

      <View style={StyleOrder.tillte}>
        <Image source={require('../images/shopping.png')} />
        <Text style={StyleOrder.textTillte}>Shipping and Payment</Text>
        <Pressable onPress={click} style={StyleOrder.icon}>
          <Image source={require('../images/Frame5.png')} />
        </Pressable>
      </View>

      <View style={StyleOrder.tillte}>
        <Image source={require('../images/refundPolicy.png')} />
        <Text style={StyleOrder.textTillte}>Refund Policy</Text>
        <Pressable onPress={click} style={StyleOrder.icon}>
          <Image source={require('../images/Frame5.png')} />
        </Pressable>
      </View>

      <View style={StyleOrder.tillte} onPress={click}>
        <Image source={require('../images/support.png')} />
        <Text style={StyleOrder.textTillte}>Support</Text>
        <Pressable onPress={click} style={StyleOrder.icon}>
          <Image source={require('../images/Frame5.png')} />
        </Pressable>
      </View>

    </View>
  )
}

export default Order

const click = () => {
  console.log("213");
}

var data = [
  {
    "_id": "1",
    "name": "IPhone14",
    "firm": "Apple- Iphone",
    "cost": 1000000,
    "image": "iphone14"
  },
  {
    "_id": "2",
    "name": "IPhone14",
    "firm": "Apple- Iphone",
    "cost": 2000000,
    "image": "iphone14"
  },
  {
    "_id": "3",
    "name": "IPhone14",
    "firm": "Apple- Iphone",
    "cost": 3000000,
    "image": "iphone14"
  },
  {
    "_id": "4",
    "name": "IPhone14",
    "firm": "Apple- Iphone",
    "cost": 3000000,
    "image": "iphone14"
  },
  {
    "_id": "5",
    "name": "IPhone14",
    "firm": "Apple- Iphone",
    "cost": 3000000,
    "image": "iphone14"
  },
  {
    "_id": "6",
    "name": "IPhone14",
    "firm": "Apple- Iphone",
    "cost": 3000000,
    "image": "iphone14"
  },
]

