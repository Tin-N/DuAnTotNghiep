
import {  Text, View, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StyleCategory, StyleOrder } from '../../css/Styles'
import Icon from 'react-native-vector-icons/Ionicons'

const Sorting2 = (props) => {
    const {sortType, setSortType,role,setRole}=props

    const options = [
        {
            name:"Tất cả",
            value:0 
        },
        {
            name:"Tên (A - Z)",
            value:1
        },
        {
            name:"Tên (Z - A)",
            value:-1
        },
        {
            name:"Tên tài khoản (A - Z)",
            value:1
        },
        {
            name:"Tên tài khoản (Z - A)",
            value:-1
        }, 
        {
            name:"Email (A - Z)",
            value:1
        }, {
            name:"Email (Z - A)",
            value:-1
        }, 
    ];
    const optionsRole = [
        {
            name:"Tất cả",
            value:0 
        },
        {
            name:"Người bán",
            value:"seller"
        },
        {
            name:"Khách hàng",
            value:"user"
        }
    ];
    function pickOption(selectedCheck) {
        setSortType(selectedCheck)
    }
    function pickOptionRole(selectedCheck) {
        setRole(selectedCheck)
    }
    return (
        <ScrollView style={{padding:10}}>
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

            <Text style={[{marginRight:-10,marginVertical:10}]}>Sắp xếp theo vai trò</Text>

            {optionsRole.map(option => (
                <View key={option.name} >
                    <View style={StyleOrder.header}>
                        <Text style={StyleCategory.textPressable}>{option.name}</Text>
                        <TouchableOpacity onPress={() => {pickOptionRole(option)}}>
                            {role.name==option.name ? <Icon name='checkmark-circle-sharp' size={24} color={'green'} /> : <Icon name='checkmark-circle-outline' size={24} color={'black'} />}
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 1, marginBottom: 5, borderBottomColor: '#EDEDED' }}></View>
                </View>
            ))}
        </ScrollView>
    )
}
export default Sorting2;