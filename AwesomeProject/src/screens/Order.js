import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleOrder } from '../css/Styles'


const MyCart1 = () => {
  return (
    <View style={StyleOrder.myCart1}>
      <Image style={StyleOrder.image}/>
      <Text style={StyleOrder.textHeader}>Your Card is Empty</Text>
      <Pressable style={StyleOrder.pressable}>
        <Text style={StyleOrder.textPressable}>Start Browsing</Text>
      </Pressable>
    </View>
  )
}

const MyCart2 = () => {
  return (
    <View style={{ height: 200 }}>
      <Text>flatlist</Text>
    </View>
  )
}

const Order = () => {
  const { isOrder } = useContext(AppContext);
  return (
    <View style={StyleOrder.container}>

      {/* header */}
      <View style={StyleOrder.header}>
        <Text style={StyleOrder.textHeader}>My Cart</Text>
        <Icon name='menu' size={24} color={"black"} />
      </View>

      {/* co san pham thi hien list san pham khong thi hien hinh anh */}
      <View>
        {
          isOrder == false ? <MyCart1 /> : <MyCart2 />
        }
      </View>

      {/* 1 so chuc nang */}
      <View style={StyleOrder.tillte}>
        <Icon name='menu' size={24} color={"black"} />
        <Text style={StyleOrder.textTillte}>Wishlist</Text>
        <Icon name='menu' size={24} color={"black"} style={StyleOrder.icon} />
      </View>

      <View style={StyleOrder.tillte}>
        <Icon name='menu' size={24} color={"black"} />
        <Text style={StyleOrder.textTillte}>Shipping and Payment</Text>
        <Icon name='menu' size={24} color={"black"} style={StyleOrder.icon} />
      </View>

      <View style={StyleOrder.tillte}>
        <Icon name='menu' size={24} color={"black"} />
        <Text style={StyleOrder.textTillte}>Refund Policy</Text>
        <Icon name='menu' size={24} color={"black"} style={StyleOrder.icon} />
      </View>

      <View style={StyleOrder.tillte}>
        <Icon name='menu' size={24} color={"black"} />
        <Text style={StyleOrder.textTillte}>Support</Text>
        <Icon name='menu' size={24} color={"black"} style={StyleOrder.icon} />
      </View>

    </View>
  )
}

export default Order
