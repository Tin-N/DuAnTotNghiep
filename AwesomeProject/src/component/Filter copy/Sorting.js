
import {  Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleCategory, StyleOrder } from '../../css/Styles'
import Icon from 'react-native-vector-icons/Ionicons'

const Sorting2 = (props) => {
    const { sortType, setSortType}=props

    const options = [
        
        {
            name:"Tên (A - Z)",
            value:1
        },
        {
            name:"Tên (Z - A)",
            value:-1
        },
        {
            name:"Giá (cao đến thấp)",
            value:-1
        },
        {
            name:"Giá (thấp đến cao)",
            value:1
        }
        ,
        {
            name:"Bán chạy",
            value:-1
        },
        {
            name:"Đánh giá tốt nhất",
            value:-1
        }
    ];
    function pickOption(selectedCheck) {
        setSortType(selectedCheck)
    }
    return (
        <View>
            {options.map(option => (
                <View key={option.name} >
                    <View style={StyleOrder.header}>
                        <Text style={StyleCategory.textPressable}>{option.name}</Text>
                        <TouchableOpacity onPress={() => {pickOption(option)}}>
                            {sortType.name==option.name ? <Icon name='checkmark-circle-sharp' size={24} color={'green'} /> : <Icon name='checkmark-circle-outline' size={24} color={'black'} />}
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 1, marginBottom: 5, borderBottomColor: '#EDEDED' }}></View>
                </View>
            ))}
        </View>
    )
}
export default Sorting2;