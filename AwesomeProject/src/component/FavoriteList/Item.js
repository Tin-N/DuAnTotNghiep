import {View, Text, Image, TouchableOpacity,ToastAndroid} from 'react-native';
import React, {useEffect, useState,memo} from 'react';
import {StyleHomeStore} from '../../css/Styles';
import { formatPrice } from '../../../Agro';
import { TextWithLimit } from '../SearchSuggestions/SearchItem';
import { useNavigation } from '@react-navigation/native';
import AxiosIntance from '../../utils/AxiosIntance';
const ItemList = props => {
const navigation=useNavigation()
  const {data,setCheck,check} = props;
  const item=data.productInfo[0];
  const [name, setName] = useState('');

  const deleteFavorite = async()=>{
    const response = await AxiosIntance().post("/favoriteApi/deleteFavorite?id=" + data._id);
    if (response.result) {
        ToastAndroid.show("Gỡ khỏi ưu thích thành công", ToastAndroid.SHORT);
        setCheck(true);
    } else {
        ToastAndroid.show("Gỡ khỏi ưu thích không thành công", ToastAndroid.SHORT);
    }
  }


  useEffect(() => {
    const formatString = (lineBreakLimit, cutoffLimit) => {
      if (typeof item.nameProduct !== 'undefined') {
        let name1 = item.nameProduct;
        if (name1.length > lineBreakLimit) {
          const lineBreakPosition = name1.lastIndexOf(' ', lineBreakLimit);
          if (lineBreakPosition !== -1) {
            let name2 =
              name1.slice(0, lineBreakPosition) +
              '\n' +
              name1.slice(lineBreakPosition + 1);
            if (name2.length > cutoffLimit) {
              console.log(name2.length)
              setName(name2.slice(0, cutoffLimit) + '...');
              return
            }
            setName(name2);
            return;
          }
        } else {
          setName(name1);
        }
      }
      return
    };
    formatString(20, 35);
  }, []);

  return (
    <TouchableOpacity 
    onPress={()=>{navigation.navigate("DetailProduct",{itemId:item._id})}}
    style={{padding:10, borderRadius:15 ,backgroundColor:'white' ,margin:10}}>

      <Image style={{padding:5,width:150,height:150, borderRadius:12}} source={{uri:item.image[0]}} />
      <TextWithLimit text={item.name} limit={14} 
          />
      <Text style={{color:'red',fontWeight:'700',fontSize:17,padding:3}}>đ {formatPrice(item.price)} </Text>
      <View style={StyleHomeStore.reviewsProduct}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../images/ProductList/star.png')} />
          <Text style={{fontSize: 12, color: 'black'}}>
            {item.rating}
          </Text>
        </View>
        <Text
          style={{width: 90, fontSize: 12, paddingLeft: 18, color: 'black'}}>
          {item.sold} Reviews
        </Text>
       <TouchableOpacity onPress={()=>{deleteFavorite()}}>
        <Image
            style={{marginLeft: 10,width:20,height:20}}
            source={require('../../images/heart.jpg')}
          />
       </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ItemList);
