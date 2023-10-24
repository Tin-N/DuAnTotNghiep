import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleOrder } from '../css/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AxiosIntance from '../utils/AxiosIntance'; // Đảm bảo bạn đã import AxiosInstance

const OrderItem = (props) => {
    const { data } = props;
    const [quantity, setQuantity] = useState(data.quantity);
    const [productName, setProductName] = useState('Tên Sản Phẩm');
    const [imageUri, setImageUri] = useState();
    const [categoryID, setCategoryID] = useState('Gán');
    const [isCheck, setIsCheck] = useState(false);

    console.log(data.productID)
    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/productAPI/getProductByID?id=${data.productID}`);
                if (response.result == true) {
                    console.log("Lấy dữ liệu nè: ")
                    setProductName(response.products.name);
                    setImageUri(response.products.image[0]);
                    setCategoryID(response.products.categoryID);
                }
            } catch (error) {
                console.log(error)
            }
        })();
    }, [data.productID]);

    const itemTotalCost = quantity * data.price;

    const increaseQuantity = () => {
        console.log("Tăng số lượng");
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            console.log("Giảm số lượng");
            setQuantity(quantity - 1);
        }
    };

    const toggleCheck = () => {
        setIsCheck(!isCheck);
        props.productsSelected(data.productID, itemTotalCost);
    };

    return (
        <View style={StyleOrder.header}>
            <View style={StyleOrder.checkBoxOrder}>
                <Pressable onPress={toggleCheck}>
                    {isCheck ? <MaterialIcons name='check-box' size={24} color={'green'} /> : <MaterialIcons name='check-box-outline-blank' size={24} color={'black'} />}
                </Pressable>
            </View>

            <View style={StyleOrder.header}>
                <Image style={StyleOrder.imageFlatList} source={{ uri: imageUri }} />
                <View>
                    <Text numberOfLines={2} style={StyleOrder.textNameFlatList}>{productName}</Text>
                    <Text numberOfLines={2} style={StyleOrder.textInfoFlatList}>{categoryID}</Text>
                    <Text numberOfLines={2} style={StyleOrder.textInfoFlatList}>${data.price}</Text>
                </View>
            </View>

            <View style={[StyleOrder.header, StyleOrder.function]}>
                <Pressable onPress={decreaseQuantity}>
                    <Icon name='trash-outline' size={24} />
                </Pressable>
                <Text>{quantity}</Text>
                <Pressable onPress={increaseQuantity}>
                    <Icon name='add' size={24} />
                </Pressable>
            </View>

            <View style={[StyleOrder.header, StyleOrder.function]}>
                <Text>{itemTotalCost}</Text>
            </View>
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({});
