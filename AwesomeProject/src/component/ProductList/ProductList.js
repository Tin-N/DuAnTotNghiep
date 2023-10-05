import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import ItemList from './Item';
const ProductList = (props) => {
    const { data,styleView , ...customSetting} = props
  return (
    <View style={[styleView]}>
      <FlatList
      {...customSetting}
      data={data}
      renderItem={({item})=>(<ItemList data={item}/>)}
      
      />
    </View>
  )
}

export default ProductList