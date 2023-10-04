import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleHomeStore } from '../../css/Styles'
const ItemHomeStore = (props) => {
  const { dulieu } = props;
  return (
    <View style={StyleHomeStore.boxProduct}>
      <Image source={require('../../images/food.png')} />
      <Text style={{color:'black', fontWeight:'bold', fontFamily:'DM Sans'}}>
        {dulieu.nameProduct}
      </Text>
      <Text style={{marginTop:5}}>
        Giá: {dulieu.priceProduct} đ
      </Text>
      <View style={StyleHomeStore.reviewsProduct}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../../images/star.png')}/>
        <Text style={{fontSize:13, color:'black'}}>
          {dulieu.rationProduct}
        </Text>
        </View> 
        <Text style={{width:90, fontSize:12, paddingLeft:15, color:'black'}}>{dulieu.reviewsProduct} Reviews</Text>
        <Image style={{marginLeft:0}} source={require('../../images/productoptions.png')}/>
      </View>
    </View>
  )
}

export default ItemHomeStore