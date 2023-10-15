import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleHomeStore } from '../../css/Styles'
import { formatPrice } from '../../../Agro'
const ItemHomeStore = (props) => {
<<<<<<< HEAD
  const { dulieu,navigation } = props;
=======
  const { dulieu, navigation } = props;
>>>>>>> devTin
  const [priceProduct, setPriceProduct] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const detailProduct = () => {
      navigation.navigate("DetailFeedBack", {ProductID: dulieu._id});
  }
  useEffect(() => {
    var salePricee = dulieu.price;
    setPriceProduct(formatPrice(dulieu.price));
    setSalePrice(formatPrice(salePricee * 0.9)); 
    return () => {
    }
  }, [dulieu]);
  const handleOnClick = () => {
    navigation.navigate("ProductDetail", { itemId: dulieu._id });
  }
  
  return (
<<<<<<< HEAD
   <TouchableOpacity onPress={handleOnClick}>
     <View style={StyleHomeStore.boxProduct}>
=======
    <View style={StyleHomeStore.boxProduct}>
      <TouchableOpacity onPress={detailProduct}>
>>>>>>> devTin
      <Image source={{ uri: dulieu.image[0] }} style={{ height: 150, width: 140, borderRadius: 10, borderWidth: 1 }} />
      <Text style={{
        fontFamily: 'DM Sans',
        maxWidth: 200,
        flex: 1,
        flexWrap: 'nowrap'
      }}>
        {dulieu.name}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{
          marginTop: 5, color: 'grey',
          textDecorationLine: 'line-through', width: 90
        }}>
          {priceProduct}đ
        </Text>
        <Text style={{
          fontFamily: 'DM Sans',
          maxWidth: 200,
          flex: 1,
          marginTop: 7,
          flexWrap: 'nowrap',
          fontSize:12
        }}>
          {dulieu.sold} sold
        </Text>
      </View>
      <Text style={{ marginTop: 5, color: 'red' }}>
        Giá: {salePrice}đ
      </Text>
      <View style={StyleHomeStore.reviewsProduct}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../../images/star.png')} />
          <Text style={{ fontSize: 13, color: 'black' }}>
            {dulieu.rating}
          </Text>
        </View>
        <Text style={{
          width: 90, fontSize: 12,
          paddingLeft: 15,
          color: 'black',
          width: 110
        }}>30 Reviews</Text>
        <Image style={{ marginLeft: 0 }} source={require('../../images/productoptions.png')} />
      </View>
      </TouchableOpacity>
    </View>
   </TouchableOpacity>
  )
}

export default ItemHomeStore