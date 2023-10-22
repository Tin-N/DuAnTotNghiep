import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleHomeStore } from '../../css/Styles'
import { formatPrice } from '../../../Agro'
import AxiosIntance from '../../utils/AxiosIntance'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const ItemHomeStore = (props) => {
  const { dulieu, navigation } = props;
  const [priceProduct, setPriceProduct] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [countFeedback, setCountFeedback] = useState();

  useEffect(() => {
    var salePricee = dulieu.price;
    setPriceProduct(formatPrice(salePricee));
    setSalePrice(formatPrice(Math.round(salePricee * 0.9)));
    // const getFeedback = async () => {
    //   const response = await AxiosIntance.get('/feedbackAPI/getFeedbackByProductID?ProductID=' + dulieu.id);
    //   console.log(dulieu._id + "xxxxxxxxxxxxxx");
    //   if (response.result == true) {
    //     ToastAndroid.show('getFeedback thành công', ToastAndroid.SHORT);
    //     setCountFeedback(response.feedbacks.lenght)
    //   } else {
    //     ToastAndroid.show('getFeedback thất bại', ToastAndroid.SHORT);
    //   }
    // }
    // getFeedback();
    return () => {
    }
  }, [dulieu]);
  const handleOnClick = () => {
    navigation.navigate("DetailProduct", { itemId: dulieu._id });
  }
  return (
    <View style={StyleHomeStore.boxProduct}>
      <TouchableOpacity onPress={handleOnClick}>
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
        </View>
        <Text style={{ marginTop: 5, color: '#3669C9' }}>
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
          }}>15 Reviews</Text>
        </View>
        <Text style={{
            fontFamily: 'TiltNeon-Regular',
            maxWidth: 200,
            flex: 1,
            flexWrap: 'nowrap',
            fontSize: 13,
            marginTop:7
          }}>
            {dulieu.sold} đã bán
          </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ItemHomeStore;