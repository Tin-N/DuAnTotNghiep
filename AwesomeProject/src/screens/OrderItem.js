import { StyleSheet, Text, View, Image, Pressable, ToastAndroid, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleOrder } from '../css/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AxiosIntance from '../utils/AxiosIntance';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {memo} from "react"

const OrderItem = memo ((props) => {
    const { data, itemSelectedData, itemDeselectedData, updateItemData, newData } = props;
    const [quantity, setQuantity] = useState(data.quantity);
    const [productName, setProductName] = useState('Tên Sản Phẩm');
    const [imageUri, setImageUri] = useState();
    const [categoryID, setCategoryID] = useState('Gán');
    const [isCheck, setIsCheck] = useState(false);
    const [productPrice, setproductPrice] = useState(50)
    let itemTotalCost = quantity * productPrice;

    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/productAPI/getProductByID?id=${data.productID}`);
                if (response.result == true) {
                    setProductName(response.products.name);
                    setproductPrice(response.products.price)
                    setImageUri(response.products.image[0]);
                    setCategoryID(response.products.categoryID);
                }
            } catch (error) {
                console.log("lỗi lấy dữ liệu: " + error)
            }
        })();
    }, [data.productID]);

    // const setNewDataAfterReRender = (productID) => {
    //     // Sao chép mảng sản phẩm hiện tại để tránh thay đổi trực tiếp state
    //     const newProductsInfo = [...newData.products];
    //     console.log(">>>>>>>>>>>>>>" + newProductsInfo.quantity)

    //     // Tìm sản phẩm có productID trùng khớp trong mảng
    //     const existingProductIndex = newProductsInfo.findIndex(item => item.productID === productID);

    //     if (existingProductIndex !== -1) {
    //         const newQuantity = newProductsInfo[existingProductIndex].quantity;
    //         setQuantity(newQuantity);

    //         // Tính toán itemTotalCost dựa vào newQuantity và productPrice (bạn cần có productPrice ở đâu đó)
    //         let newItemTotalCost = newQuantity * productPrice;
    //         // Sử dụng newItemTotalCost khi cần thiết, ví dụ:
    //         itemTotalCost = itemTotalCost;
    //         console.log('New Item Total Cost:', newItemTotalCost);
    //     }
    // };

    const increaseQuantity = (productID, quantity, itemTotalCost) => {
        try {
            console.log("Tăng số lượng");
            let newQuantity = quantity + 1;
            setQuantity(newQuantity);
            const newItemTotalCost = newQuantity * productPrice
            updateItemData(productID, newQuantity, newItemTotalCost)
            console.log(data.productID, newQuantity, newItemTotalCost);
            // setNewDataAfterReRender(productID)
        } catch (error) {
            console.log(error);
            throw error
        }
    };

    const decreaseQuantity = async (productID, quantity) => {
        if (quantity > 1) {
            try {
                console.log("Giảm số lượng");
                let newQuantity = quantity - 1;
                setQuantity(newQuantity);
                const newItemTotalCost = newQuantity * productPrice
                updateItemData(productID, newQuantity, newItemTotalCost)
                console.log(data.productID, newQuantity, newItemTotalCost);
            } catch (error) {
                console.log(error);
                throw error
            }
        } else {
            Alert.alert('Thông báo', 'Số lượng không thể giảm thêm.', [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => "Đây sẽ là chức năng xóa trong tương lai" },
            ]);
        }
    };

    const itemSelectedProcess = (productID, quantity, itemTotalCost) => {
        try {
            let products = {
                productID: productID,
                quantity: quantity,
                itemTotalCost: itemTotalCost,
            }
            itemSelectedData(products);
        } catch (error) {
            console.error('Lỗi khi xử lý sản phẩm:', error);
            throw error;
        }
    };

    const itemDeSelectedProcess = (productID) => {
        try {
            itemDeselectedData(productID)
        } catch (error) {
            console.error('Lỗi khi xử lý bỏ chọn sản phẩm:', error);
            throw error;
        }
    };

    return (
        <View style={StyleOrder.header}>
            <View style={StyleOrder.viewCheckBoxOrder}>
                {/* <Pressable onPress={toggleCheck}>
                    {isCheck ? <MaterialIcons name='check-box' size={24} color={'green'} /> : <MaterialIcons name='check-box-outline-blank' size={24} color={'black'} />}
                </Pressable> */}
                <BouncyCheckbox
                    style={StyleOrder.checkBoxOrder}
                    fillColor='white'
                    onPress={() => {
                        if (!isCheck) {
                            setIsCheck(!isCheck)
                        } else setIsCheck(isCheck == false)

                        if (!isCheck) {
                            itemSelectedProcess(data.productID, quantity, itemTotalCost);
                        } else {
                            itemDeSelectedProcess(data.productID, quantity, itemTotalCost);
                        }
                    }}
                    iconComponent={isCheck ? <MaterialIcons name='check-box' size={24} color={'#3669C9'} /> : <MaterialIcons name='check-box-outline-blank' size={24} color={'black'} />}
                />
            </View>

            <View style={StyleOrder.header}>
                <Image style={StyleOrder.imageFlatList} source={{ uri: imageUri }} />
                <View>
                    <Text numberOfLines={2} style={StyleOrder.textNameFlatList}>{productName}</Text>
                    <Text numberOfLines={2} style={StyleOrder.textInfoFlatList}>{categoryID}</Text>
                    <Text numberOfLines={2} style={StyleOrder.textInfoFlatList}>${productPrice}</Text>
                </View>
            </View>

            <View style={[StyleOrder.header, StyleOrder.function]}>
                <Pressable onPress={() => decreaseQuantity(data.productID, quantity, itemTotalCost)}>
                    <Icon name='trash-outline' size={24} />
                </Pressable>
                <Text>{quantity}</Text>
                <Pressable onPress={() => increaseQuantity(data.productID, quantity, itemTotalCost)}>
                    <Icon name='add' size={24} />
                </Pressable>
            </View>

            <View style={[StyleOrder.header, StyleOrder.function]}>


                <Text>{itemTotalCost}</Text>
            </View>
        </View>
    );
});

export default OrderItem;

const styles = StyleSheet.create({});
