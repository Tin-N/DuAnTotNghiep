import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native';
import ProductProcessItem from './ProductProcessItem';
const { width, height } = Dimensions.get('screen');

const ProductProcess = () => {
    const [data, setdata] = useState(['123', '1123']);
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#3669C9', height: 5 * height / 100,alignItems: 'center', padding: 5}}>
                <Icon name='arrow-back' size={20} />
                <View style={{ flexDirection: 'row',}}>
                    <Icon name='settings-sharp' size={20} />
                    <Icon name='chatbox-ellipses-outline' size={20} />
                </View>
            </View>
            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                data={data}
                renderItem={({ item }) => <ProductProcessItem dulieu1={item} />}
                keyExtractor={item => item._id} />
        </View >
    )
}

export default ProductProcess

const styles = StyleSheet.create({})
