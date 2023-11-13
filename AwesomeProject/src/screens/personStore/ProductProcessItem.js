import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
const ProductProcessItem = () => {
    return (
        <View style={{ width: 45 * width / 100, borderWidth: 0.2, margin: 10, padding: 10, backgroundColor: '#F6F6F6', borderRadius: 3 }}>
            <Pressable style={{position: 'absolute', zIndex: 5, right: 5, top: 5}}>
                <MaterialIcons name='cancel' size={28} />
            </Pressable>

            <Image source={{uri: "http://nhatminhdecor.com/wp-content/uploads/2019/01/chup-anh-voi-phong-nen-vai-trang-1.jpg"}} style={{ alignSelf: 'center', width: 130, height: 150, backgroundColor: 'red', zIndex: 4 }} />
            
            <Text style={{color: 'black', fontSize: 15, marginBottom: 5, marginTop: 5}} numberOfLines={2}>Dây nịch Chất lượng, thời trang hàng hiệu, phiên bản giới hạn chỉ có tại Việt Nam</Text>
            <Text style={{color: '#305DFE', marginBottom: 3, marginTop: 3}}>30.000đ</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
                <View style={{flexDirection: 'row', marginBottom: 3, marginTop: 3,}}>
                    <MaterialIcons name='star' size={10} style={{alignSelf: 'center'}}/>
                    <Text style={{color: 'black', marginRight: 5, fontSize: 13}}>0</Text>
                    <Text style={{color: 'black', fontSize: 13}}>0 Reviews</Text>
                </View>
                <Text style={{color: 'black'}}>Đã bán: 0</Text>
            </View>
            <Pressable style={{alignItems: 'center', borderWidth: 0.5, borderRadius: 5, borderColor: '#3669C9', backgroundColor: '#6495ED', padding: 3}}>
                <Text style={{color: 'white', fontStyle: 'bold', fontSize: 16, fontWeight: '370'}}>ĐẨY SẢN PHẨM</Text>
            </Pressable>
        </View>
    )
}

export default ProductProcessItem

const styles = StyleSheet.create({})