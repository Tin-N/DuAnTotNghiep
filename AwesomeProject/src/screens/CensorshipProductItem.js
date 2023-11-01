import { Pressable, StyleSheet, Text, View, Image, ToastAndroid } from 'react-native'
import React from 'react'
import AxiosIntance from '../utils/AxiosIntance';
import { StyleCategory } from '../css/Styles';

const CensorshipProductItem = (props) => {
  const { dulieu1 } = props;
  console.log(dulieu1.userID);

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
    <View style={{ margin: 10, borderWidth: 0.2, borderRadius: 15, padding: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={{ uri: dulieu1.image[0] }} style={{ width: 50, height: 50, }} />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: 'black', fontSize: 18 }}>{dulieu1.name}</Text>
        </View>
      </View>

      <View style={{ borderWidth: 0.2, color: '#FFFFFF', marginBottom: 15, marginTop: 15 }} />

      <View style={{ flexDirection: 'row',}}>
        <Image source={{ uri: dulieu1.image[0] }} style={{ width: 150, height: 150, }} />
        <View style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ color: 'black', fontSize: 18 }}>{dulieu1.name}</Text>
            <Text style={{ color: 'black', fontSize: 14 }}>Giá: {dulieu1.price}</Text>
            <Text style={{ color: 'black', fontSize: 14 }}>Loại: {dulieu1.categoryID}</Text>
          </View>
          <Text style={{ color: '#3669C9', fontSize: 14, left: '100%' }}>Xem chi tiết</Text>
        </View>
      </View>

      <View style={{ borderWidth: 0.2, color: '#FFFFFF', marginBottom: 15, marginTop: 15 }} />

      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
        {/* <Pressable style={{borderWidth: 0.2, borderRadius: 5, padding: 10, alignSelf: 'center'}}>
          <Text>Từ chối</Text>
        </Pressable> */}
        <Pressable onPress={censorshipProduct} style={{ borderWidth: 0.2, borderRadius: 5, padding: 10, alignSelf: 'center', backgroundColor: '#3669C9' }}>
          <Text style={{ color: 'white' }}>Duyệt</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CensorshipProductItem

const styles = StyleSheet.create({})