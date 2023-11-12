import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StyleHomeStore, StyleLogin } from '../../css/Styles'
import { FlatList } from 'react-native';
import ItemHomeStore from './ItemHomeStore';
import { ScrollView } from 'react-native';
import AxiosIntance from '../../utils/AxiosIntance'; import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const HomeStore = (props) => {
    const { navigation } = props;
    const [dataProduct, setDataProduct] = useState([]);
    const [productID, setProductID] = useState('');
    const [sold, setSold] = useState(0);
    const [columns, setColumns] = useState(2);
    useEffect(() => {
        try {
            const getAllProductByUserID = async () => {
                const response = await AxiosIntance().get("/productAPI/getListProductSelling?id=" + '113' + '&isShow=true');
                if (response.result) {
                    setDataProduct(response.products);
                    setProductID(response.products._id);
                    setSold(response.products.sold)
                }
            }
            getAllProductByUserID();
        } catch (error) {
            throw error
        }
        return () => {
        }
    }, [])
    const createHandler = () => {
        navigation.navigate('CreateProduct');
    }
    const sellerManageHandler = () => {
        navigation.navigate('ManageProduct');
    }
    return (
        <View>
            <TouchableOpacity onPress={createHandler} style={{
                height: 50, width: 50,
                borderRadius: 25, backgroundColor: '#3669C9',
                position: 'absolute', bottom: 80, zIndex: 5, alignItems: 'center',
                justifyContent: 'center', right: 0, margin: 10
            }}>
                <Text style={{ fontSize: 30, color: 'white' }}>+</Text>
            </TouchableOpacity>
            <View style={StyleHomeStore.menu}>
                <TouchableOpacity onPress={sellerManageHandler}>
                    <Image source={require('../../images/backic.png')} />
                </TouchableOpacity>
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
                alwaysBounceVertical={false}
                bounces={false}
                overScrollMode='never'
                style={{ marginBottom: 70 }}
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
                    <Text style={{ marginLeft: 20, color: 'black' }}>
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
                        data={dataProduct}
                        numColumns={columns}
                        bounces={false}
                        nestedScrollEnabled={true}
                        renderItem={({ item }) => <ItemHomeStore dulieu={item} navigation={navigation} />}
                        keyExtractor={item => item._id}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeStore;
