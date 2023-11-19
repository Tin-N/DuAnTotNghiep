import { StyleSheet, Text, View, Pressable, Image, ScrollView, ToastAndroid, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import AxiosIntance from '../utils/AxiosIntance';
import { StyleCensorshipProduct } from '../css/Styles';

const { width, height } = Dimensions.get('screen');

const CensorshipDetailProduct = (props) => {
  const { route, navigation } = props;
  const { params } = route;

  const [productDetail, setproductDetail] = useState([]);
  console.log(productDetail);
  useEffect(() => {
    const getProductDetail = async () => {
      const reponse = await AxiosIntance().get('/productAPI/getProductByID?id=' + params.productId);
      if (reponse) {
        setproductDetail(reponse.products);
      }
    }
    getProductDetail();
    return () => {

    }
  }, [])

  //thong bao dong y duyet san pham
  const acceptNotification = async () => {
    const reponse = await AxiosIntance().post('/notificationApi/notification', { userID: params.userID, productID: params.productId, notification: "Sản phẩm đã được kiểm duyệt" });
    if (reponse) {
      //navigation.navigate("CensorshipProduct");
    } else {
      ToastAndroid.show('Thong bao bi loi', ToastAndroid.SHORT);
    }
  }

  //Dong y duyet san pham
  const censorshipProduct = async () => {
    const reponse = await AxiosIntance().post('/productAPI/check-product-by-id/' + params.productId);
    if (reponse) {
      acceptNotification();
      params.setchangeCensorshipProduct(!params.changeCensorshipProduct);
      console.log(params.changeCensorshipProduct);
      navigation.navigate("CensorshipProduct");
      ToastAndroid.show('Sản phẩm đã được kiểm duyệt', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('kiểm duyệt sản phẩm bị lỗi', ToastAndroid.SHORT);
    }
  }

  //thong bao tu choi duyet san pham
  const rejectNotification = async () => {
    const reponse = await AxiosIntance().post('/notificationApi/notification', { userID: params.userID, productID: params.productId, notification: "Sản phẩm đã vi phạm quy định" });
    if (reponse) {
      //navigation.navigate("CensorshipProduct");
    } else {
      ToastAndroid.show('Thong bao bi loi', ToastAndroid.SHORT);
    }
  }

  // tu choi san pham => isApproved = 3
  const rejectProduct = async () => {
    const reponse = await AxiosIntance().post('/productAPI/rejectProduct-by-id/' + params.productId);
    if (reponse) {
      rejectNotification();
      params.setchangeCensorshipProduct(!params.changeCensorshipProduct);
      navigation.navigate("CensorshipProduct");
      ToastAndroid.show('Sản phẩm đã được từ chối', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Sản phẩm đã được từ chối', ToastAndroid.SHORT);
    }
  }

  const onBack = () => {
    params.setchangeCensorshipProduct(!params.changeCensorshipProduct);
    navigation.navigate("CensorshipProduct",);
  }

  return (
    <View style={StyleCensorshipProduct.container}>
      <View style={StyleCensorshipProduct.viewHeader}>
        <Pressable onPress={onBack}>
          <Icon name='chevron-back-outline' size={24} color={'black'} />
        </Pressable>
        <Text style={StyleCensorshipProduct.textHeader}>Chi tiết sản phẩm</Text>
        <View />
      </View>

      <View style={StyleCensorshipProduct.viewInfo}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode='never'
          style={{ height: '90%', marginBottom: 10 }}>
          <Image style={StyleCensorshipProduct.imageDetailProduct} source={{ uri: 'http://nhatminhdecor.com/wp-content/uploads/2019/01/chup-anh-voi-phong-nen-vai-trang-1.jpg' }} />
          
          <Text style={StyleCensorshipProduct.textDetailInfo}>Tên sản phẩm:</Text>
          <Text style={[StyleCensorshipProduct.textDetailInfo, { marginLeft: 15 }]}>{productDetail.name}</Text>
          
          <View style={[StyleCensorshipProduct.viewHeader, {backgroundColor: '#d9dadb'}]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name='pricetags-outline' size={20} color={'black'} />
              <Text style={[StyleCensorshipProduct.textDetailInfo, {margin: 5 }]}>Price</Text>
            </View>
            <Text style={{color: 'black', marginRight: 10, alignSelf: 'center'}}>{productDetail.price}</Text>
          </View>
          <View>
            <Text style={[StyleCensorshipProduct.textDetailInfo, { fontWeight: '500' }]}>Mô tả:</Text>
            <Text style={[StyleCensorshipProduct.textDetail, { marginLeft: 15 }]}>{productDetail.detail}</Text>
          </View>

        </ScrollView>

        <View style={StyleCensorshipProduct.viewButtonFuncDetail}>
          <Pressable style={StyleCensorshipProduct.pressableDetailProduct} onPress={rejectProduct}>
            <Text style={StyleCensorshipProduct.textPressableDetail}>Từ chối</Text>
          </Pressable>
          <Pressable style={StyleCensorshipProduct.pressableDetailProduct} onPress={censorshipProduct}>
            <Text style={StyleCensorshipProduct.textPressableDetail}>Duyệt</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default CensorshipDetailProduct

const styles = StyleSheet.create({})