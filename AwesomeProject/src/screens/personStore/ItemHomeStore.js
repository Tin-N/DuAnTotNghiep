import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleHomeStore } from '../../css/Styles'
import { formatPrice } from '../../../Agro'
import AxiosIntance from '../../utils/AxiosIntance'
import { LogBox } from 'react-native';
import { TextWithLimit } from '../../component/SearchSuggestions/SearchItem'
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
    <View style={[StyleHomeStore.boxProduct]}>
      <TouchableOpacity onPress={handleOnClick}>
        <Image source={{ uri: dulieu.image[0] }} style={{ height: 150, width: 140, borderRadius: 10, borderWidth: 1 }} />
        {/* <Text style={{
          fontFamily: 'DM Sans',
          maxWidth: 200,
          flex: 1,
          flexWrap: 'nowrap'
        }}>
          {dulieu.name}
        </Text> */}
        <TextWithLimit text={dulieu.name} limit={17}/>
        <Text>
          Kho: {dulieu.quantity}
        </Text>
        <View>
          <Text style={{
            fontFamily: 'TiltNeon-Regular',
            maxWidth: 200,
            flex: 1,
            flexWrap: 'nowrap',
            fontSize: 15,
            marginTop: 4, color:'black'
          }}>
            {dulieu.sold} đã bán
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ItemHomeStore;