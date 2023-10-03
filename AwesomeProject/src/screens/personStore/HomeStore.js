import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleHomeStore, StyleLogin } from '../../css/Styles'
import { FlatList } from 'react-native';
import ItemHomeStore from './ItemHomeStore';
import { ScrollView } from 'react-native';
const HomeStore = (props) => {
    const { navigation } = props;
    const [dataProduct, setDataProduct] = useState([]);
    const [columns, setColumns] = useState(2);   
    return (
        <View>
            <View style={StyleHomeStore.menu}>
                <Image source={require('../../images/backic.png')} />
                <Text style={StyleHomeStore.textTitle}>
                    Info Seller
                </Text>
                <TouchableOpacity style={StyleHomeStore.touchOpa}>
                    <Image source={require('../../images/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 10 }}>
                    <Image source={require('../../images/cardic.png')} />
                </TouchableOpacity>
            </View>
            <View style={StyleHomeStore.line}></View>
            <ScrollView 
            
            style={{marginBottom:90}}
            showsVerticalScrollIndicator={false}>
            <View style={StyleHomeStore.boxSeller}>
                <View>
                    <Image source={require('../../images/avatarPersonStore.png')} />
                </View>
                <View style={StyleHomeStore.boxNameSeller}>
                    <Text style={{ color: 'black', fontSize: 15 }}>
                        BUMDES Desa Sidosari
                    </Text>
                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                        <Text style={{ color: 'black' }}>
                            Verified
                        </Text>
                        <Image source={require('../../images/verify.png')} />
                    </View>
                </View>
                <View style={StyleHomeStore.boxRate}>
                    <Image source={require('../../images/star.png')} />
                    <Text style={StyleHomeStore.textRate}>
                        4.6
                    </Text>
                </View>
            </View>
            <View style={StyleHomeStore.boxLocate}>
                <Image source={require('../../images/locate.png')} />
                <Text style={{ marginLeft: 20, color: 'black'}}>
                    Natar, Selatan (Jam Buka 08:00-21:00)
                </Text>
            </View>
            <View style={StyleHomeStore.boxProductStore}>
                <View>
                    <Text style={StyleHomeStore.textTitleProduct}>
                        Pengikut
                    </Text>
                    <Text style={StyleHomeStore.textCountProduct}>
                        23 Rb
                    </Text>
                </View>
                <View>
                    <Text style={StyleHomeStore.textTitleProduct}>
                        Số lượng
                    </Text>
                    <Text style={StyleHomeStore.textCountProduct}>
                        150 item
                    </Text>
                </View>
                <View>
                    <Text style={StyleHomeStore.textTitleProduct}>
                        Ngày mở
                    </Text>
                    <Text style={StyleHomeStore.textCountProduct}>
                        23/09/2023
                    </Text>
                </View>
            </View>
            <View style={[StyleHomeStore.line, { marginLeft: 30, marginRight: 30 }]}>
            </View>
            <View style={StyleHomeStore.productSelling}>
                <Text style={StyleHomeStore.textitleProductSelling}>
                    Sản phẩm đang bán
                </Text>
            </View>
            <View style={StyleHomeStore.boxSelling}>               
                    <FlatList
                    showsVerticalScrollIndicator
                    data={dataProduct00}
                    numColumns={columns}
                    nestedScrollEnabled={true}
                    renderItem={({ item }) => <ItemHomeStore dulieu={item} />}
                    keyExtractor={item => item._idProduct}
                />           
            </View>
            </ScrollView>
        </View>
    )
}

export default HomeStore;
const dataProduct00 = [
    {
        _idProduct: 1,
        nameProduct: "Bánh gạo",
        priceProduct: 30000,
        rationProduct: 4.6,
        reviewsProduct: 86
    },
    {
        _idProduct: 2,
        nameProduct: "Bánh gạo",
        priceProduct: 30000,
        rationProduct: 4.6,
        reviewsProduct: 44
    },
    {
        _idProduct: 3,
        nameProduct: "Bánh gạo",
        priceProduct: 30000,
        rationProduct: 4.6,
        reviewsProduct: 22
    },
    {
        _idProduct: 4,
        nameProduct: "Bánh gạo",
        priceProduct: 30000,
        rationProduct: 4.6,
        reviewsProduct: 22
    },
    {
        _idProduct: 5,
        nameProduct: "Bánh gạo",
        priceProduct: 30000,
        rationProduct: 4.6,
        reviewsProduct: 22
    },
    {
        _idProduct: 5,
        nameProduct: "Bánh gạo",
        priceProduct: 30000,
        rationProduct: 4.6,
        reviewsProduct: 22
    },
    {
        _idProduct: 5,
        nameProduct: "Bánh gạo",
        priceProduct: 30000,
        rationProduct: 4.6,
        reviewsProduct: 22
    },
    {
        _idProduct: 5,
        nameProduct: "Bánh gạo",
        priceProduct: 30000,
        rationProduct: 4.6,
        reviewsProduct: 22
    }
]