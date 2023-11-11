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
    const [productPrice, setproductPrice] = useState(data.itemTotalCost/data.quantity)
    const [ownerID, setownerID] = useState()
    const [ownerInfo, setownerInfo] = useState()
    let itemTotalCost = quantity * productPrice;

    const appContextData = useContext(AppContext);
    const userID = appContextData.userID;

    useEffect(() => {
        (async () => {
            try {
                const productResponse = await AxiosIntance().get(`/productAPI/getProductByID?id=${data.productID}`);
                if (productResponse.result == true) {
                    setProductName(productResponse.products.name);
                    setImageUri(productResponse.products.image[0]);
                    setCategoryID(productResponse.products.categoryID);
                    setownerID(productResponse.userID)
                }
            } catch (error) {
                console.log("Order item: lỗi lấy dữ liệu: " + error)
            }
        })();
    }, []);

    const handleCartChanged = () => {
        cartChanged()
    }

    const increaseQuantity = useCallback(async (quantity) => {
        try {
            console.log("productPrice: " + productPrice)   
            let newQuantity = quantity + 1; 
            const newItemTotalCost = newQuantity * productPrice
            console.log("newItemTotalCost: " + newItemTotalCost)   

            try {
                const response = await AxiosIntance()
                    .put(`cart/update/${userID}/${data.productID}`,
                        { quantity: newQuantity, itemTotalCost: newItemTotalCost })
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
                let newQuantity = quantity - 1;
                const newItemTotalCost = newQuantity * productPrice
                try {
                    const response = await AxiosIntance()
                        .put(`cart/update/${userID}/${data.productID}`,
                            { quantity: newQuantity, itemTotalCost: newItemTotalCost })
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
            Alert.alert('Thông báo', 'Số lượng không thể giảm thêm. Bạn có muốn xoá sản phẩm này khỏi giỏ hàng?', [
                { text: 'Huỷ', onPress: () => console.log('Cancel Pressed') },
                { text: 'Xoá', onPress: () => deleteProductInCart() },
            ]);
        }
    }, []);

    const deleteProductInCart = async () => {
        const response = await AxiosIntance()
            .delete(`cart/deleteProduct/${userID}/${data.productID}`).then(handleCartChanged())
    }

    const itemSelectedProcess = useCallback(async () => {
        try {
            const response = await AxiosIntance()
                .put(`cart/update/${userID}/${data.productID}`,
                    { isSelected: true })
            handleCartChanged();
        } catch (error) {
            console.error('Lỗi không chọn được sản phẩm:', error);
            throw error;
        }
    }, []);

    const itemDeSelectedProcess = useCallback(async () => {
        try {
            const response = await AxiosIntance()
                .put(`cart/update/${userID}/${data.productID}`,
                    { isSelected: false })
            handleCartChanged();
        } catch (error) {
            console.error('Lỗi không huỷ chọn được sản phẩm:', error);
            throw error;
        }
    }, []);

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 5
        }}>
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
                        <Text style={{ marginLeft: 10 }}>Tên chủ sản phẩm</Text>
                    </View>
                    <Pressable onPress={deleteProductInCart}>
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
