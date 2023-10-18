import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'
import React, { useState } from 'react'
import { StyleSearch } from '../../css/Styles'
import { TextInput, ScrollView, FlatList } from 'react-native'
import ItemHomeStore from './ItemHomeStore'
const SearchStore = () => {
    const [columns, setColumns] = useState(2);
    return (
        <View>
            <View style={StyleSearch.menu}>
                <Image source={require('../../images/backic.png')} />
                <Text style={StyleSearch.textTitle}>
                    Search in Store
                </Text>
            </View>
            <View style={StyleSearch.line}>
            </View>
            <View style={StyleSearch.inputSearch}>
                {/* <TextInput style={StyleSearch.textInput} placeholder='Searching for...'></TextInput>
                <TouchableOpacity>
                    <Image style={StyleSearch.iconSearch} source={require('../../images/search.png')} />
                </TouchableOpacity> */}
                <TextInput style={[StyleSearch.textInput,{}]} placeholder='Bàn phím cơ gaming' />
                <TouchableOpacity style={StyleSearch.searchButton}>
                    <Text style={{ color: 'white',fontSize:15, marginLeft: 18, marginRight: 18 }}>
                        Tìm Kiếm
                    </Text>
                </TouchableOpacity>

            </View>
            {/* <ScrollView 
            style={{marginBottom:90, marginTop:5}}
            showsVerticalScrollIndicator={false}>
            <View style={StyleSearch.boxSeller}>
                <View>
                    <Image source={require('../../images/avatarPersonStore.png')} />
                </View>
                <View style={StyleSearch.boxNameSeller}>
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
                <View style={StyleSearch.boxRate}>
                    <Image source={require('../../images/star.png')} />
                    <Text style={StyleSearch.textRate}>
                        4.6
                    </Text>
                </View>
            </View>
            <View style={StyleSearch.boxSelling}>
                
                    <FlatList
                    showsVerticalScrollIndicator
                    data={dataProduct00}
                    numColumns={columns}
                    nestedScrollEnabled={true}
                    renderItem={({ item }) => <ItemHomeStore dulieu={item} />}
                    keyExtractor={item => item._idProduct}
                />
               
                
            </View>
            </ScrollView> */}
            <View style={StyleSearch.flatlistHistory}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                    color: 'black',
                    marginLeft: 30
                }}>
                    Lịch sử tìm kiếm
                </Text>
                {/* <FlatList
                    horizontal
                    data={dataHistorySearch}
                    scrollEnabled={true}
                    style={{ paddingLeft: 30 }}
                    bouncesZoom={false} // Tắt hiệu ứng zoom khi vuốt
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <View style={styles.item}>
                        <Text>{item.title}</Text>
                    </View>}
                    keyExtractor={item => item.title}
                /> */}

                <View style={{ flexWrap: 'wrap', 
                flexDirection: 'row', 
                paddingLeft: 28,
                marginTop:15 }}>
                    {dataHistorySearch.map(item => (
                        <View>
                            <TouchableOpacity>
                                <Text style={{
                                    padding: 8,
                                    backgroundColor: '#EEEEEE',
                                    margin: 2,
                                    borderRadius: 10,
                                    marginTop:6
                                }}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
            <View style={StyleSearch.flatlistHistory}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                    color: 'black',
                    marginLeft: 30
                }}>
                    Đề xuất tìm kiếm
                </Text>
                {/* <FlatList
                    horizontal
                    data={dataHistorySearch}
                    scrollEnabled={true}
                    style={{ paddingLeft: 30 }}
                    bouncesZoom={false} // Tắt hiệu ứng zoom khi vuốt
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <View style={styles.item}>
                        <Text>{item.title}</Text>
                    </View>}
                    keyExtractor={item => item.title}
                /> */}

                <View style={{ flexWrap: 'wrap', 
                flexDirection: 'row', 
                paddingLeft: 28,
                marginTop:15 }}>
                    {dataRemindSearch.map(item => (
                        <View>
                            <TouchableOpacity>
                                <Text style={{
                                    padding: 8,
                                    backgroundColor: '#EEEEEE',
                                    margin: 2,
                                    borderRadius: 10,
                                    marginTop:6
                                }}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default SearchStore
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
const dataHistorySearch = [
    {
        title: 'Bàn phím cơ gaming'
    },
    {
        title: 'Chuột không dây múp rụp'
    },
    {
        title: 'Lót chuột'
    },
    {
        title: 'Lót chuột'
    },
    {
        title: 'Máy tính Gaming'
    },
    {
        title: 'Máy tính Gaming'
    }
]
const dataRemindSearch = [
    {
        title: 'Bàn phím cơ gaming'
    },
    {
        title: 'Chuột không dây múp rụp'
    },
    {
        title: 'Thức ăn nhanh'
    },
    {
        title: 'Chuột không dây'
    },
    {
        title: 'Laptop gaming Asus'
    },
    {
        title: 'Lót chuột LOL'
    },
]
const ITEM_WIDTH = 100;
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#EEEEEE',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'gray',
        margin: 5
    },
});