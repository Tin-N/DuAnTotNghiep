import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleCategory, StyleOrder } from '../css/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Order from './Order'

const OrderItem = async (props) => {
    const { data } = props
    const [quantity, setquantity] = useState(data.quantity)
    const [productName, setproductName] = useState()
    const [imageUri, setImageUri] = useState(null);
    const [categoryID, setcategoryID] = useState()

    const [isCheck, setisCheck] = useState();
    const itemTotalCost = quantity * data.price;


    const increaseQuantity = () => {
        setquantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setquantity(quantity - 1);
        }
    };

    function pickOption(selectedCheck) {
        if (isCheck.includes(selectedCheck)) {
            setisCheck(isCheck.filter(isCheck => isCheck !== selectedCheck));
            return;
        }
        setisCheck(isCheck => isCheck.concat(selectedCheck))
        props.productsSelected(data.productID, itemTotalCost)
    }

    const response = await AxiosIntance().get('productAPI/getProductByID?id=' + data.productID);
    if (response || response.status === 201) {
        setproductName(response.products.name);
        setImageUri(response.products.image);
        setcategoryID(response.products.categoryID);
    } else {
        ToastAndroid.show('Lấy dữ liệu thất bại', ToastAndroid.SHORT);
    }

    return (
        <View style={StyleOrder.header}>
            {options.map(option => (
                <View key={option} >
                    <View style={StyleOrder.checkBoxOrder}>
                        <TouchableOpacity onPress={() => pickOption(option)}>
                            {isCheck.includes(option) == true ? <MaterialIcons name='check-box' size={24} color={'green'} /> : <MaterialIcons name='check-box-outline-blank' size={24} color={'black'} />}
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
            <View style={StyleOrder.header}>
                <Image style={StyleOrder.imageFlatList} source={{ uri: imageUri }} />
                <View>
                    <Text style={StyleOrder.textNameFlatList}>{productName}</Text>
                    <Text style={StyleOrder.textInfoFlatList}>{categoryID}</Text>
                    <Text style={StyleOrder.textInfoFlatList} onChang>${data.price}</Text>
                </View>
            </View>

            <View style={[StyleOrder.header, StyleOrder.function]}>
                <Pressable onPress={decreaseQuantity}>
                    <Icon name='trash-outline' size={24} />
                </Pressable>
                <Text>{data.quantity}</Text>
                <Pressable onPress={increaseQuantity}>
                    <Icon name='add' size={24} />
                </Pressable>
            </View>

            <View style={[StyleOrder.header, StyleOrder.function]}>
                <Text>{itemTotalCost}</Text>
            </View>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({})