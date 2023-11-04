import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import AxiosIntance from '../utils/AxiosIntance';
import { StyleCensorshipProduct } from '../css/Styles';

const CensorshipDetailProduct = (props) => {
  console.log(props);
  const { route, navigation } = props;
  const { params } = route;
  const [productDetail, setproductDetail] = useState([]);
  console.log(params.itemId);

  useEffect(() => {
    const getProductDetail = async () =>{
      const reponse = await AxiosIntance().get('/productAPI/getProductByID?id=' + params.itemId);
      if (reponse) {
        setproductDetail(reponse.products);
      }
    }
    getProductDetail();
    return () => {
      
    }
  }, [])
  
  const censorshipProduct = async () => {
    const reponse = await AxiosIntance().post('/productAPI/check-product-by-id/' + params.itemId);
    if (reponse) {
      props.changeCensorshipProductFun();
      navigation.navigate("CensorshipProduct");
      ToastAndroid.show('Sản phẩm đã được kiểm duyệt', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('kiểm duyệt sản phẩm bị lỗi', ToastAndroid.SHORT);
    }
  }

  const onBack = () =>{
    navigation.navigate("CensorshipProduct",);
  }

  return (
    <View style={StyleCensorshipProduct.container}>
      <View style={StyleCensorshipProduct.viewHeader}>
        <Pressable onPress={onBack}>
          <Icon name='chevron-back-outline' size={24} color={'black'} />
        </Pressable>
        <Text style={StyleCensorshipProduct.textHeader}>Chi tiết sản phẩm</Text>
        <View/>
      </View>

      <View style={StyleCensorshipProduct.viewInfo}>
        <View>
          <Image style={StyleCensorshipProduct.imageDetailProduct} source={{ uri: 'http://nhatminhdecor.com/wp-content/uploads/2019/01/chup-anh-voi-phong-nen-vai-trang-1.jpg' }} />
          <Text style={StyleCensorshipProduct.textDetail}>{productDetail.detail}</Text>
        </View>

        <View style={StyleCensorshipProduct.viewButtonFuncDetail}>
          <Pressable style={StyleCensorshipProduct.pressableDetailProduct}>
            <Text style={StyleCensorshipProduct.textPressableDetail}>Từ chối</Text>
          </Pressable>
          <Pressable style={StyleCensorshipProduct.pressableDetailProduct}>
            <Text style={StyleCensorshipProduct.textPressableDetail} onPress={censorshipProduct}>Duyệt</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default CensorshipDetailProduct

const styles = StyleSheet.create({})