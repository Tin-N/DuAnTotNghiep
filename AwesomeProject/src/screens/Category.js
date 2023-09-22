import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native'
import React from 'react'
import { StyleCategory, StyleOrder } from '../css/Styles'
import Icon from 'react-native-vector-icons/Ionicons'

const Category = () => {
    return (
        <View style={StyleOrder.container}>

            <View style={StyleOrder.header}>
                <Image />
                <Text style={StyleCategory.textHeader}>Categori</Text>
                <Image />
            </View>

            <Text style={StyleCategory.textTillte}>Đồ ăn</Text>

            <View style={StyleCategory.search}>
                <TextInput style={StyleCategory.textInput} placeholder='Search Product Name' />
                <Icon name='search' size={24} style={StyleCategory.icon} />
            </View>

            <Pressable style={StyleCategory.pressable}>
                <Text style={StyleCategory.textPressable}>Filter & Sorting</Text>
            </Pressable>
        </View>
    )
}

export default Category
