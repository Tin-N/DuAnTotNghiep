import { StyleSheet, Text, View, Image, Pressable, ToastAndroid, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleOrder } from '../css/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AxiosIntance from '../utils/AxiosIntance';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderItem = (props) => {
    const { data } = props;
    const [quantity, setQuantity] = useState(data.quantity);
    const [productName, setProductName] = useState('Tên Sản Phẩm');
    const [imageUri, setImageUri] = useState();
    const [categoryID, setCategoryID] = useState('Gán');
    const [isCheck, setIsCheck] = useState(false);
    const [productPrice, setproductPrice] = useState(50)
    const itemTotalCost = quantity * productPrice;

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

    const increaseQuantity = async (productID, quantity) => {
        try {
            console.log("Tăng số lượng");
            let newQuantity = quantity + 1;
            setQuantity(newQuantity);
            const productsJSON = await AsyncStorage.getItem('products');
            let products = [];
            if (productsJSON) {
                products = JSON.parse(productsJSON);
            }

            // Kiểm tra xem sản phẩm đã tồn tại trong danh sách chưa
            const existingProductIndex = products.findIndex(item => item.productID === productID);

            if (existingProductIndex !== -1) {
                // Sản phẩm đã tồn tại, cập nhật số lượng
                products[existingProductIndex].quantity = newQuantity;
            }
            // Lưu danh sách sản phẩm mới vào AsyncStorage
            await AsyncStorage.setItem('products', JSON.stringify(products));

            // Tính toán grandTotal bằng tổng của itemTotalCost
            const grandTotal = products.reduce((total, item) => {
                // Tính toán itemTotalCost dựa vào productID và quantity
                const itemTotalCost = item.quantity * productPrice; // productPrice cần được xác định ở đây
                return total + itemTotalCost;
            }, 0);

            // Lưu giá trị grandTotal vào AsyncStorage
            await AsyncStorage.setItem('grandTotal', grandTotal.toString());
            console.log({ products, grandTotal });
        } catch (error) {
            console.log(error);
            throw error
        }
    };

    const decreaseQuantity = async (productID, quantity) => {
        if (quantity > 1) {
            console.log("Giảm số lượng");
            try {
                let newQuantity = quantity - 1;
                setQuantity(newQuantity);
                const productsJSON = await AsyncStorage.getItem('products');
                let products = [];
                if (productsJSON) {
                    products = JSON.parse(productsJSON);
                }

                // Kiểm tra xem sản phẩm đã tồn tại trong danh sách chưa
                const existingProductIndex = products.findIndex(item => item.productID === productID);

                if (existingProductIndex !== -1) {
                    // Sản phẩm đã tồn tại, cập nhật số lượng
                    products[existingProductIndex].quantity = newQuantity;
                }
                // Lưu danh sách sản phẩm mới vào AsyncStorage
                await AsyncStorage.setItem('products', JSON.stringify(products));

                // Tính toán grandTotal bằng tổng của itemTotalCost
                const grandTotal = products.reduce((total, item) => {
                    // Tính toán itemTotalCost dựa vào productID và quantity
                    const itemTotalCost = item.quantity * productPrice; // productPrice cần được xác định ở đây
                    return total + itemTotalCost;
                }, 0);

                // Lưu giá trị grandTotal vào AsyncStorage
                await AsyncStorage.setItem('grandTotal', grandTotal.toString());
                console.log({ products, grandTotal });
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

    const itemSelectedProcess = async (productID, quantity) => {
        try {
            // Lấy danh sách sản phẩm từ AsyncStorage (nếu tồn tại)
            const productsJSON = await AsyncStorage.getItem('products');
            let products = [];
            if (productsJSON) {
                products = JSON.parse(productsJSON);
            }

            // Kiểm tra xem sản phẩm đã tồn tại trong danh sách chưa
            const existingProductIndex = products.findIndex(item => item.productID === productID);

            if (existingProductIndex !== -1) {
                // Sản phẩm đã tồn tại, cập nhật số lượng
                products[existingProductIndex].quantity = quantity;
            } else {
                // Sản phẩm chưa tồn tại, thêm mới vào danh sách
                products.push({ productID, quantity });
            }

            // Lưu danh sách sản phẩm mới vào AsyncStorage
            await AsyncStorage.setItem('products', JSON.stringify(products));

            // Tính toán grandTotal bằng tổng của itemTotalCost
            const grandTotal = products.reduce((total, item) => {
                // Tính toán itemTotalCost dựa vào productID và quantity
                const itemTotalCost = item.quantity * productPrice;
                return total + itemTotalCost;
            }, 0);

            // Lưu giá trị grandTotal vào AsyncStorage
            await AsyncStorage.setItem('grandTotal', grandTotal.toString());
            console.log({ products, grandTotal });
        } catch (error) {
            console.error('Lỗi khi xử lý sản phẩm:', error);
            throw error;
        }
    };

    const itemDeSelectedProcess = async (productID, quantity) => {
        try {
            // Lấy danh sách sản phẩm từ AsyncStorage (nếu tồn tại)
            const productsJSON = await AsyncStorage.getItem('products');
            let products = [];
            if (productsJSON) {
                products = JSON.parse(productsJSON);
            }

            // Tìm sản phẩm theo productID và xóa nó khỏi danh sách
            const productIndex = products.findIndex(item => item.productID === productID);
            if (productIndex !== -1) {
                // Lấy giá trị itemTotalCost của sản phẩm bị xóa
                const removedProduct = products.splice(productIndex, 1)[0];
                const removedItemTotalCost = removedProduct.quantity * productPrice;
                // Lưu danh sách sản phẩm mới vào AsyncStorage
                await AsyncStorage.setItem('products', JSON.stringify(products));
                // Lấy giá trị hiện tại của grandTotal
                const grandTotalJSON = await AsyncStorage.getItem('grandTotal');
                let grandTotal = grandTotalJSON ? parseFloat(grandTotalJSON) : 0;
                // Giảm grandTotal
                grandTotal -= removedItemTotalCost;
                // Lưu giá trị grandTotal mới vào AsyncStorage
                await AsyncStorage.setItem('grandTotal', grandTotal.toString());
                console.log({ products, grandTotal });
            }
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
                            itemSelectedProcess(data.productID, quantity);
                        } else {
                            itemDeSelectedProcess(data.productID, quantity);
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
                <Pressable onPress={() => decreaseQuantity(data.productID, quantity)}>
                    <Icon name='trash-outline' size={24} />
                </Pressable>
                <Text>{quantity}</Text>
                <Pressable onPress={() => increaseQuantity(data.productID, quantity)}>
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
