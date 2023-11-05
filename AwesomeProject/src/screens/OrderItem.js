import { StyleSheet, Text, View, Image, Pressable, ToastAndroid, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { StyleOrder } from '../css/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AxiosIntance from '../utils/AxiosIntance';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { memo } from "react"
import { AppContext } from '../utils/AppContext';

const OrderItem = (props) => {
    const { data, cartChanged } = props;
    const [quantity, setQuantity] = useState(data.quantity);
    const [productName, setProductName] = useState('Tên Sản Phẩm');
    const [imageUri, setImageUri] = useState();
    const [categoryID, setCategoryID] = useState('Gán');
    const [isCheck, setIsCheck] = useState(data.isSelected); // chọn sản phẩm
    const [productPrice, setproductPrice] = useState(50)
    let itemTotalCost = quantity * productPrice;
    const userID = '6041c523d4f6a5db0f82e870';

    useEffect(() => {
        (async () => {
            try {
                const productResponse = await AxiosIntance().get(`/productAPI/getProductByID?id=${data.productID}`);
                if (productResponse.result == true) {
                    setProductName(productResponse.products.name);
                    setproductPrice(productResponse.products.price)
                    setImageUri(productResponse.products.image[0]);
                    setCategoryID(productResponse.products.categoryID);
                }
            } catch (error) {
                console.log("lỗi lấy dữ liệu: " + error)
            }
        })();
    }, []);

    const handleCartChanged = () => {
        cartChanged()
    }

    const increaseQuantity = useCallback(async (quantity) => {
        try {
            console.log("Tăng số lượng");
            let newQuantity = quantity + 1;
            setQuantity(newQuantity);
            const newItemTotalCost = newQuantity * productPrice
            try {
                const response = await AxiosIntance()
                    .put(`cart/update/${userID}/${data._id}`,
                        { quantity: newQuantity, totalItemCost: newItemTotalCost })
                handleCartChanged();
            } catch (error) {
                console.error('Lỗi khi xử lý sản phẩm:', error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            throw error
        }
    }, []);

    const decreaseQuantity = useCallback(async (quantity) => {
        if (quantity > 1) {
            try {
                console.log("Giảm số lượng");
                let newQuantity = quantity - 1;
                setQuantity(newQuantity);
                const newItemTotalCost = newQuantity * productPrice
                try {
                    const response = await AxiosIntance()
                        .put(`cart/update/${userID}/${data._id}`,
                            { quantity: newQuantity, totalItemCost: newItemTotalCost })
                    handleCartChanged();

                } catch (error) {
                    console.error('Lỗi khi xử lý sản phẩm:', error);
                    throw error;
                }
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
    }, []);

    const itemSelectedProcess = useCallback(async () => {
        try {
            const response = await AxiosIntance()
                .put(`cart/update/${userID}/${data._id}`,
                    { isSelected: true })
            handleCartChanged();
        } catch (error) {
            console.error('Lỗi khi xử lý sản phẩm:', error);
            throw error;
        }
    }, []);

    const itemDeSelectedProcess = useCallback(async () => {
        try {
            const response = await AxiosIntance()
                .put(`cart/update/${userID}/${data._id}`,
                    { isSelected: false })
            handleCartChanged();
        } catch (error) {
            console.error('Lỗi khi xử lý sản phẩm:', error);
            throw error;
        }
    }, []);

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
                            itemSelectedProcess();
                        } else {
                            itemDeSelectedProcess();
                        }
                    }}
                    iconComponent={isCheck ? <MaterialIcons name='check-box' size={24} color={'#3669C9'} /> : <MaterialIcons name='check-box-outline-blank' size={24} color={'black'} />}
                />
            </View>

            <View >
                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name='shop' size={24} />
                        <Text style={{ marginLeft: 10 }}>Tên Shop</Text>
                    </View>
                    <Pressable>
                        <Text>Xóa</Text>
                    </Pressable>
                </View> */}

                {/* <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'gary'}}/> */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={StyleOrder.header}>
                        <Image style={StyleOrder.imageFlatList} source={{ uri: imageUri }} />
                        <View>
                            <Text numberOfLines={2} style={StyleOrder.textNameFlatList}>{productName}</Text>
                            <Text numberOfLines={2} style={StyleOrder.textInfoFlatList}>{categoryID}</Text>
                            <Text numberOfLines={2} style={StyleOrder.textInfoFlatList}>${productPrice}</Text>
                        </View>
                    </View>

                    <View style={[StyleOrder.header, StyleOrder.function]}>
                        <Pressable onPress={() => decreaseQuantity(quantity)}>
                            <Icon name='trash-outline' size={24} />
                        </Pressable>
                        <Text>{quantity}</Text>
                        <Pressable onPress={() => increaseQuantity(quantity)}>
                            <Icon name='add' size={24} />
                        </Pressable>
                    </View>

                    <View style={[StyleOrder.header, StyleOrder.function]}>
                        <Text>{itemTotalCost}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default memo(OrderItem);

const styles = StyleSheet.create({});
