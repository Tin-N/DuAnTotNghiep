import { Pressable, StyleSheet, Text, View, Image, ToastAndroid } from 'react-native'
import React from 'react'
import AxiosIntance from '../utils/AxiosIntance';
import { StyleCategory } from '../css/Styles';

const CensorshipProductItem = (props) => {
    const {dulieu1} = props;
    
    const censorshipProduct = async () =>{
        const reponse = await AxiosIntance().post('/productAPI/check-product-by-id/' + dulieu1._id);
        if (reponse) {
            props.changeCensorshipProductFun();
            ToastAndroid.show('Sản phẩm đã được kiểm duyệt', ToastAndroid.SHORT);
        }else{
            ToastAndroid.show('kiểm duyệt sản phẩm bị lỗi', ToastAndroid.SHORT);
        }
    }
  return (
    <View>
      <Image source={{uri: dulieu1.image[0]}} style={{width: 50, height: 50,}}/>
      <Text>{dulieu1.name}</Text>
      <Text>{dulieu1.price}</Text>
      <Text>{dulieu1.categoryID}</Text>

      <Pressable >
        <Text>Từ chối</Text>
      </Pressable>
      <Pressable onPress={censorshipProduct} style={StyleCategory.pressable}>
        <Text>Duyệt</Text>
      </Pressable>
    </View>
  )
}

export default CensorshipProductItem

const styles = StyleSheet.create({})