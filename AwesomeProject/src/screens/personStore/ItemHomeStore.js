import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleHomeStore } from '../../css/Styles'
import { formatPrice } from '../../../Agro'
import AxiosIntance from '../../utils/AxiosIntance'
import { useNavigation } from '@react-navigation/native';

import { LogBox } from 'react-native';
import { TextWithLimit } from '../../component/SearchSuggestions/SearchItem'
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const ItemHomeStore = (props) => {
  const { dulieu } = props;
  const navigation = useNavigation();
  const [priceProduct, setPriceProduct] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [countFeedback, setCountFeedback] = useState();
  const [name, setName] = useState('')
  useEffect(() => {
    var salePricee = dulieu.price;
    setPriceProduct(formatPrice(salePricee));
    setSalePrice(formatPrice(Math.round(salePricee * 0.9)));
    console.log(">>>nameProduct: " + dulieu.name);
    return () => {
    }
  }, [dulieu]);
  const handleOnClick = () => {
    navigation.navigate("DetailProduct", { itemId: dulieu._id });
  }
  return (
    <View style={[StyleHomeStore.boxProduct]}>
      <TouchableOpacity onPress={() => handleOnClick()}>
        <Image source={{ uri: dulieu.image[0] }} style={{ height: 160, width: 155, }} />
        {/* <Text style={{
          fontFamily: 'DM Sans',
          maxWidth: 200,
          flex: 1,
          flexWrap: 'nowrap'
        }}>
          {dulieu.name}
        </Text> */}
<<<<<<< HEAD
        <View style={{ padding: 5 }}>
          <View>
            {
              dulieu.name ? <TextWithLimit text={dulieu.name} limit={17} />
                : <View />
            }
          </View>
=======
        <View style={{padding:5}}>
          <TextWithLimit text={dulieu.name} limit={17} 
            styleView={{fontWeight:'bold',fontSize:30}}
          />
>>>>>>> 01a783cf2c5b567fb87bc5ad358aedcbca7f3440
          <Text>
            Kho: {dulieu.quantity}
          </Text>
        </View>
        <View>
          <Text style={{
            fontFamily: 'TiltNeon-Regular',
            maxWidth: 200,
            flex: 1,
            flexWrap: 'nowrap',
<<<<<<< HEAD
            fontSize: 15, color: 'black', marginLeft: 5
=======
            fontSize: 15, color: 'black', marginLeft:5,
            paddingVertical:1,paddingBottom:10
>>>>>>> 01a783cf2c5b567fb87bc5ad358aedcbca7f3440
          }}>
            {dulieu.sold} đã bán
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ItemHomeStore