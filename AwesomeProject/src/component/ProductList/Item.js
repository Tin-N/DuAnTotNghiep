import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleHomeStore } from '../../css/Styles'
const ItemList = (props) => {
  const { data } = props;
  return (
    <View style={StyleHomeStore.boxProduct}>
      <Image source={require('../../images/ProductList/food.png')} />
      <Text style={{color:'black', fontWeight:'bold', fontSize:13,letterSpacing:0.5,lineHeight:17}}>
        {data.nameProduct}
      </Text>
      <Text style={{marginTop:5}}>
        Giá: {data.priceProduct} đ
      </Text>
      <View style={StyleHomeStore.reviewsProduct}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../../images/ProductList/star.png')}/>
        <Text style={{fontSize:13, color:'black'}}>
          {data.rationProduct}
        </Text>
        </View> 
        <Text style={{width:90, fontSize:12, paddingLeft:15, color:'black'}}>{data.reviewsProduct} Reviews</Text>
        <Image style={{marginLeft:0}} source={require('../../images/ProductList/productoptions.png')}/>
      </View>
    </View>
  )
}

export default ItemList;