import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CreateProduct from './CreateProduct'
import Order from '../Order'
import { Dimensions } from 'react-native'
const { height } = Dimensions.get('screen')
import AxiosIntance from '../../utils/AxiosIntance'
import { StyleDetailProduct } from '../../css/Styles'
import { ScrollView } from 'react-native'
import { formatPrice } from '../../../Agro'
import { TextWithLimit } from '../../component/SearchSuggestions/SearchItem'
const ManageProduct = (props) => {
  const { navigation } = props;
  const Tab = createMaterialTopTabNavigator();
  const back = () => {
    navigation.goBack();
  }
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none"
      }
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: undefined
    });
  }, [navigation]);
  return (
    <View style={{ height: height }}>
      <View style={[StyleDetailProduct.menu]}>
        <TouchableOpacity onPress={back}>
          <Image source={require('../../images/backic.png')} />
        </TouchableOpacity>
        <Text style={StyleDetailProduct.textTitle}>
          Quản lí gian hàng
        </Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16, color: 'white', fontWeight: 'bold' },
          tabBarItemStyle: { flexDirection: 'row', flex: 1 },
          tabBarStyle: { backgroundColor: '#3669C9' },

        }}>
        <Tab.Screen name="Sản phẩm" component={ListProduct} />
        <Tab.Screen name="Order" component={Order} />
        <Tab.Screen name="Kho" component={ListProductNoDisplay} />
      </Tab.Navigator>
    </View>
  )
}
const ListProduct = (props) => {
  const [dataProduct, setDataProduct] = useState([])
  const [loadData, setLoadData] = useState(true)
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(6)
  const { navigation } = props;
  const updateProductHandler = (productID) => {
    navigation.navigate('UpdateProduct', { itemId: productID })
  }
  const checkLoadData = () => {
    setLoadData(!loadData);
  }
  const deleteProduct = (productID) => {
    const selectProduct = async () => {
      const request = await AxiosIntance().post('/productAPI/deleteProduct', { productID: productID, isShow: false })
      if (request.result == true) {
        ToastAndroid.show('Đã xoá sản phẩm', ToastAndroid.SHORT);
        checkLoadData();
      } else {
        ToastAndroid.show('Không xoá được', ToastAndroid.SHORT)
      }
    }
    Alert.alert('Xác nhận xoá sản phẩm?', 'Sản phẩm sẽ không được trưng bày', [{
      text: 'OK', onPress: selectProduct
    }, {
      text: 'Huỷ',
      onPress: () => {
        // Sử dụng requestAnimationFrame để đóng cửa sổ sau khi người dùng bấm nút Huỷ
        requestAnimationFrame(() => {
          // Đoạn mã để đóng cửa sổ Alert
          Alert.alert('Thông báo', 'Bạn đã huỷ thao tác xoá sản phẩm.');
        });
      },
      style: 'cancel',
    }])
  }
  useEffect(() => {
    try {
      const getAllProductByUserID = async () => {
        const response = await AxiosIntance().get(
          "/productAPI/getListProductSelling?id=" + '113' + '&isShow=true&page=' + page + '&size=' + size);
          console.log(">>>size: " + size);
          console.log(">>>page: " + page);
          if (response.result) {
          setDataProduct([...dataProduct, ...response.products]);
        }
      }
      getAllProductByUserID();
    } catch (error) {
      throw error
    }
    return () => {
    }
  }, [loadData])
  return (
    <View style={{ backgroundColor: 'white' }}>
      <TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center', padding: 5, margin: 5, width: 200
      }} onPress={checkLoadData}>
        <Image style={{ width: 25, height: 25 }} source={require('../../images/icreload.png')} />
        <Text style={{ fontSize: 20, color: '#3669C9', marginLeft: 10 }}>Làm mới</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode='never'
        style={{ marginBottom: 100 }}>
        {
          dataProduct.length > 0 ?
            <View style={{ marginTop: -10 }}>
              {
                dataProduct.map(item => (
                  <View style={{
                    marginTop: 10, paddingLeft: 20, paddingRight: 20,
                    backgroundColor: '#f5f4f4', paddingTop: 20,
                    paddingBottom: 20, flexDirection: 'row'
                  }}>
                    <Image style={{
                      width: 100, height: 100,
                      borderRadius: 5
                    }} source={item.image[0] ? { uri: item.image[0] } : null} />
                    <View style={{ marginLeft: 10, width: 150 }}>
                      <TextWithLimit limit={15} text={item.name}
                        style={{ fontSize: 15, color: 'black' }} />
                      <Text style={{ color: '#3669C9' }}>{formatPrice(item.price)}đ</Text>
                      <Text>Kho: {item.quantity}</Text>
                      <Text>Saleoff: {item.saleOff}</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => updateProductHandler(item._id)}
                        style={{ backgroundColor: '#3669C9', width: 100, padding: 5 }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>
                          Sửa thông tin
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => deleteProduct(item._id)} style={{
                        borderWidth: 2,
                        borderColor: '#3669C9', width: 100,
                        padding: 5, marginTop: 15
                      }}>
                        <Text style={{ textAlign: 'center', color: '#3669C9' }}>
                          Xoá
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
            </View> : <View />
        }
        <TouchableOpacity
          onPress={() => {setPage(page + 6), checkLoadData() }}
          style={{
            marginLeft: 20, marginRight: 20,
            alignItems: 'center', marginTop: 5, borderWidth: 2,
            padding: 6, borderRadius: 5, borderColor: '#3669C9',
            justifyContent: 'center', marginTop: 10
          }}>
          <Text style={{
            marginLeft: 5, textAlign: 'center',
            color: '#3669C9', fontSize: 18
          }}>Xem Thêm</Text>
        </TouchableOpacity>
      </ScrollView>
    </View >
  )
}
const ListProductNoDisplay = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [loadData, setLoadData] = useState();
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(6)
  const checkLoadData = () => {
    setLoadData(!loadData);
  }
  const showProduct = (productID) => {
    const selectProduct = async () => {
      const request = await AxiosIntance().post('/productAPI/deleteProduct', { productID: productID, isShow: true })
      if (request.result == true) {
        ToastAndroid.show('Đã trưng bày lại sản phẩm', ToastAndroid.SHORT);
        checkLoadData();
      } else {
        ToastAndroid.show('Lỗi', ToastAndroid.SHORT)
      }
    }
    Alert.alert('Phục hồi sản phẩm?', 'Sản phẩm sẽ được bày bán trở lại', [{
      text: 'OK', onPress: selectProduct
    }, {
      text: 'Huỷ',
      onPress: () => {
        // Sử dụng requestAnimationFrame để đóng cửa sổ sau khi người dùng bấm nút Huỷ
        requestAnimationFrame(() => {
          // Đoạn mã để đóng cửa sổ Alert
          Alert.alert('Thông báo', 'Bạn đã huỷ thao tác phục hồi.');
        });
      },
      style: 'cancel',
    }])
  }
  useEffect(() => {
    try {
      const getAllProductByUserID = async () => {
        const response = await AxiosIntance().get("/productAPI/getListProductSelling?id=" + '113' + '&isShow=false&page=' + page + '&size=' + size);
        if (response.result) {
          setDataProduct([...dataProduct, ...response.products]);
        }
      }
      getAllProductByUserID();
    } catch (error) {
      throw error
    }
    return () => {
    }
  }, [loadData])
  return (
    <View style={{ backgroundColor: 'white' }}>
      <TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center', padding: 5, margin: 5, width: 200
      }} onPress={checkLoadData}>
        <Image style={{ width: 25, height: 25 }} source={require('../../images/icreload.png')} />
        <Text style={{ fontSize: 20, color: '#3669C9', marginLeft: 10 }}>Làm mới</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode='never'
        style={{ marginBottom: 100 }}>
        {
          dataProduct.length > 0 ?
            <View>
              {
                dataProduct.map(item => (
                  <View style={{
                    marginTop: 10, paddingLeft: 20, paddingRight: 20,
                    backgroundColor: '#f5f4f4', paddingTop: 20,
                    paddingBottom: 20, flexDirection: 'row'
                  }}>
                    <Image style={{
                      width: 100, height: 100,
                      borderRadius: 5
                    }} source={item.image[0] ? { uri: item.image[0] } : null} />
                    <View style={{ marginLeft: 10, width: 150 }}>
                      <TextWithLimit limit={15} text={item.name}
                        style={{ fontSize: 15, color: 'black' }} />
                      <Text style={{ color: '#3669C9' }}>{formatPrice(item.price)}đ</Text>
                      <Text>Kho: {item.quantity}</Text>
                      <Text>Saleoff: {item.saleOff}</Text>
                    </View>
                    <View>
                      <TouchableOpacity onPress={() => showProduct(item._id)} style={{ backgroundColor: '#3669C9', width: 100, padding: 5 }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>
                          Trưng bày
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
            </View> : <View />
        }
        <TouchableOpacity
          onPress={() => { setPage(page+6), checkLoadData() }}
          style={{
            marginLeft: 20, marginRight: 20,
            alignItems: 'center', marginTop: 5, borderWidth: 2,
            padding: 6, borderRadius: 5, borderColor: '#3669C9',
            justifyContent: 'center', marginTop: 10
          }}>
          <Text style={{
            marginLeft: 5, textAlign: 'center',
            color: '#3669C9', fontSize: 18
          }}>Xem Thêm</Text>
        </TouchableOpacity>
      </ScrollView>
    </View >
  )
}
export default ManageProduct