import { Pressable, StyleSheet, Text, View, Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosIntance from '../utils/AxiosIntance';
import { StyleCategory, StyleCensorshipProduct } from '../css/Styles';
import CensorshipDetailProduct from './CensorshipDetailProduct';

const CensorshipProductItem = (props) => {
  const { dulieu1, navigation } = props;
  const [user, setuser] = useState([]);

  const onDetailProduct = () => {
    navigation.navigate("CensorshipDetailProduct", {
      productId: dulieu1._id, userId: dulieu1.userID,
      changeCensorshipProduct: props.changeCensorshipProduct,
      setchangeCensorshipProduct: props.setchangeCensorshipProduct
    });
  }

  useEffect(() => {
    const getInfoUser = async () => {
      const reponse = await AxiosIntance().get('/UserApi/get-by-id/?id=' + dulieu1.userID);
      if (reponse) {
        setuser(reponse.user);
      }
    }
    getInfoUser();
    return () => {
    }
  }, [])

  const censorshipProduct = async () => {
    const reponse = await AxiosIntance().post('/productAPI/check-product-by-id/' + dulieu1._id);
    if (reponse) {
      props.changeCensorshipProductFun();
      ToastAndroid.show('Sản phẩm đã được kiểm duyệt', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('kiểm duyệt sản phẩm bị lỗi', ToastAndroid.SHORT);
    }
  }

  return (
    <View style={StyleCensorshipProduct.viewBorder}>
      <View style={StyleCensorshipProduct.viewInfoShop}>
        <Image source={{ uri: user.avatar }} style={StyleCensorshipProduct.imageShop} />
        <View style={{ marginLeft: 20 }}>
          <Text style={StyleCensorshipProduct.textName}>{user.fullname}</Text>
        </View>
      </View>

      <View style={StyleCensorshipProduct.line} />

      <View style={{ flexDirection: 'row', }}>
        <Image source={{ uri: dulieu1.image[0] }} style={StyleCensorshipProduct.imageProduct} />
        <View style={StyleCensorshipProduct.infoProduct}>
          <View>
            <Text style={[StyleCensorshipProduct.textInfoProduct, {fontWeight: '700'}]}>{dulieu1.name}</Text>
            <Text style={StyleCensorshipProduct.textInfoProduct}>Giá: {dulieu1.price}</Text>
            <Text style={StyleCensorshipProduct.textInfoProduct}>Loại: {dulieu1.categoryID}</Text>
          </View>
          <Pressable onPress={onDetailProduct}>
            <Text style={StyleCensorshipProduct.textItemDetail}>Xem chi tiết</Text>
          </Pressable>
        </View>
      </View>

      <View style={StyleCensorshipProduct.line} />

      <View style={StyleCensorshipProduct.viewButtonFuncItem}>
        {/* <Pressable style={{borderWidth: 0.2, borderRadius: 5, padding: 10, alignSelf: 'center'}}>
          <Text>Từ chối</Text>
        </Pressable> */}
        <Pressable onPress={censorshipProduct} style={StyleCensorshipProduct.pressable}>
          <Text style={StyleCensorshipProduct.textPressable}>Duyệt</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CensorshipProductItem

const styles = StyleSheet.create({})