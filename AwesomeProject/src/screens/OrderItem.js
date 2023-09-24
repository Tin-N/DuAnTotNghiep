import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { StyleOrder } from '../css/Styles'
import Icon from 'react-native-vector-icons/Ionicons'

const OrderItem = (props) => {
    const { dulieu1 } = props

    const Delete = () => {
        console.log("Đã xóa");
    }

    const Add = () => {
        console.log("Thêm");
    }

    return (
        <View style={StyleOrder.header}>
            <View style={StyleOrder.header}>
                <Image style={StyleOrder.imageFlatList} source={require('../images/iphone14.png')} />
                <View>
                    <Text style={StyleOrder.textNameFlatList}>{dulieu1.name}</Text>
                    <Text style={StyleOrder.textInfoFlatList}>{dulieu1.firm}</Text>
                    <Text style={StyleOrder.textInfoFlatList}>${dulieu1.cost}</Text>
                </View>
            </View>

            <View style={[StyleOrder.header, StyleOrder.function]}>
                <Pressable onPress={Delete}>
                    <Icon name='trash-outline' size={24}/>
                </Pressable>
                <Text>1</Text>
                <Pressable onPress={Add}>
                <Icon name='add' size={24}/>
                </Pressable>
            </View>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({})