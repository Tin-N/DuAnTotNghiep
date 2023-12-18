import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, ToastAndroid, ActivityIndicator } from 'react-native'
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
import Icon1 from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react'
import { AppContext } from '../../utils/AppContext'
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
    <View style={{ height: height, backgroundColor: 'white' }}>
      <View style={[StyleDetailProduct.menu]}>
        <TouchableOpacity onPress={back}>
          <Image source={require('../../images/backic.png')} />
        </TouchableOpacity>
        <Text style={StyleDetailProduct.textTitle}>
          Sản phẩm của tôi
        </Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabBarItemStyle: { flexDirection: 'row', flex: 1 },
          tabBarStyle: { backgroundColor: 'white' },
          tabBarActiveTintColor: '#3669c9',
          tabBarInactiveTintColor: '#a2a0a0',
          tabBarIndicatorStyle: { width: 70, marginLeft: 30 }
          // tabBarActiveTintColor: paperTheme.colors.primary,
          // tabBarInactiveTintColor: paperTheme.colors.primary,
          // tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          // tabBarStyle: { backgroundColor: 'white', elevation: 0 },
          // tabBarIndicatorStyle: { backgroundColor: paperTheme.colors.primary },
        }}>
        <Tab.Screen name="Đang bán" component={ListProduct} />
        <Tab.Screen name="Hết hàng" component={ListProductSoldOut} />
        <Tab.Screen name="S.Phẩm Ẩn" component={ListProductNoDisplay} />
      </Tab.Navigator>
    </View>
  )
}
const ListProduct = (props) => {
  const {userID} = useContext(AppContext)
  const [dataProduct, setDataProduct] = useState([])
  const [loadData, setLoadData] = useState(true)
  // const [page, setPage] = useState(0)
  const [size, setSize] = useState(6)
  const { navigation } = props;
  const [loading, isLoading] = useState(true);
  const createHandler = () => {
    navigation.navigate('CreateProduct');
  }

  const updateProductHandler = (productID) => {
    navigation.navigate('UpdateProduct', { itemId: productID })
  }

  const checkLoadData = () => {
    setLoadData(!loadData);
  }

  const deleteProduct = (productID) => {
    console.log(productID);
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
        });
      },
      style: 'cancel',
    }])
  }

  useEffect(() => {
    try {
      const getAllProductByUserID = async () => {
        isLoading(true)
        const response = await AxiosIntance().get(
          "/productAPI/getListProductSelling?id=" + userID + '&isShow=true&size=' + size);
        if (response.result) {
          setDataProduct(response.products)
          setTimeout(() => {
            isLoading(false);
          }, 700);
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
    <View style={{ backgroundColor: '#F1F5F8', width: '100%' }}>
      <View style={styles.viewLoadAndAdd}>
        <TouchableOpacity style={styles.touchReload}
          onPress={() => checkLoadData()}>
          <Image style={styles.imageReload} source={require('../../images/reload1.png')} />
          <Text style={styles.textReload}>Làm mới</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchAdd}
          onPress={createHandler}>
          <Icon1 name="add-outline" size={20} color='white'></Icon1>
          <Text style={styles.textAdd}>Thêm mới</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode='never'
        style={{ height: 620 }}>
        {
          loading == false ?
            dataProduct.length > 0 ?
              <View style={{ marginTop: -10, backgroundColor: '#f4f4f4' }}>
                {
                  dataProduct.map(item => (
                    <View style={styles.boxProductMap}>
                      <Image style={styles.imageProductMap}
                        source={item.image[0] ? { uri: item.image[0] } : null} />
                      <View style={{ marginLeft: 10, width: 150 }}>
                        <TextWithLimit limit={15} text={item.name}
                          style={{ fontSize: 15, color: 'black' }} />
                        <Text style={{ color: '#3669C9' }}>{formatPrice(item.price)}đ</Text>
                        <Text>Kho: {item.quantity}</Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() => updateProductHandler(item._id)}
                          style={styles.touchUpdate}>
                          <Text style={styles.textUpdate}>
                            Cập nhật
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteProduct(item._id)}
                          style={styles.touchDelete}>
                          <Text style={styles.textDelete}>
                            Ẩn
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                <View>
                  {
                    dataProduct.length >= 6 ?
                      <TouchableOpacity
                        onPress={() => { setSize(size + 6), checkLoadData() }}
                        style={styles.touchShowMore}>
                        <Text style={styles.textShowMore}>Xem Thêm</Text>
                      </TouchableOpacity> : <View />
                  }
                </View>
              </View> : <View style={{alignItems:'center'}}>
                <Text>Không có sản phẩm nào</Text>
              </View> : <ActivityIndicator size={40} color="#3669c9" style={{ marginTop: 200 }}>

            </ActivityIndicator>
        }
      </ScrollView>
    </View >
  )
}
const ListProductNoDisplay = (props) => {
  const {userID} = useContext(AppContext)
  const { navigation } = props;
  const [dataProduct, setDataProduct] = useState([]);
  const [loadData, setLoadData] = useState();
  const [size, setSize] = useState(6)
  const [loading, isLoading] = useState(true);
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
        isLoading(true);
        const response = await AxiosIntance().get("/productAPI/getListProductSelling?id=" + userID + '&isShow=false&size=' + size);
        if (response.result) {
          setDataProduct(response.products);
          setTimeout(() => {
            isLoading(false);
          }, 700);
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
    <View style={{ backgroundColor: '#F1F5F8', width: '100%' }}>
      <TouchableOpacity style={styles.touchReload}
        onPress={() => { checkLoadData(), console.log(">>>loadData: " + loadData); }}>
        <Image style={styles.imageReload} source={require('../../images/reload1.png')} />
        <Text style={styles.textReload}>Làm mới</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode='never'
        style={{ height: 620 }}>
        {
          loading == false ?
            dataProduct.length > 0 ?
              <View style={{ marginTop: -10, backgroundColor: '#f4f4f4' }}>
                {
                  dataProduct.map(item => (
                    <View style={styles.boxProductMap}>
                      <Image style={styles.imageProductMap}
                        source={item.image[0] ? { uri: item.image[0] } : null} />
                      <View style={{ marginLeft: 10, width: 150 }}>
                        <TextWithLimit limit={15} text={item.name}
                          style={{ fontSize: 15, color: 'black' }} />
                        <Text style={{ color: '#3669C9' }}>{formatPrice(item.price)}đ</Text>
                        <Text>Kho: {item.quantity}</Text>
                      </View>
                      <View>
                        <TouchableOpacity onPress={() => showProduct(item._id)}
                          style={styles.touchUpdate}>
                          <Text style={styles.textUpdate}>
                            Trưng bày
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                <View>
                  {
                    dataProduct.length >= 6 ?
                      <TouchableOpacity
                        onPress={() => { setSize(size + 6), checkLoadData() }}
                        style={styles.touchShowMore}>
                        <Text style={styles.textShowMore}>Xem Thêm</Text>
                      </TouchableOpacity> : <View />
                  }
                </View>
              </View> : <View style={{alignItems:'center'}}>
                <Text>Không có sản phẩm nào</Text>
              </View>
            : <ActivityIndicator size={40} color="#3669c9" style={{ marginTop: 200 }}>

            </ActivityIndicator>
        }
      </ScrollView>
    </View >
  )
}
const ListProductSoldOut = (props) => {
  const {userID} = useContext(AppContext)
  const [dataProduct, setDataProduct] = useState([])
  const [loadData, setLoadData] = useState(true)
  // const [page, setPage] = useState(0)
  const [size, setSize] = useState(6)
  const { navigation } = props;
  const [loading, isLoading] = useState(true);
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
        isLoading(true)
        const response = await AxiosIntance().get(
          "/productAPI/getAllProductByUserIDAndQuantity?id=" + userID);
        if (response.result) {
          setDataProduct(response.products)
          setTimeout(() => {
            isLoading(false);
          }, 700);
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
    <View style={{ backgroundColor: '#F1F5F8', width: '100%' }}>
      <View style={styles.viewLoadAndAdd}>
        <TouchableOpacity style={styles.touchReload}
          onPress={() => { checkLoadData(), console.log(">>>loadData: " + loadData); }}>
          <Image style={styles.imageReload} source={require('../../images/reload1.png')} />
          <Text style={styles.textReload}>Làm mới</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode='never'
        style={{ height: 620 }}>
        {
          loading == false ?
            dataProduct.length > 0 ?
              <View style={{ marginTop: -10, backgroundColor: '#f4f4f4' }}>
                {
                  dataProduct.map(item => (
                    <View style={styles.boxProductMap}>
                      <Image style={styles.imageProductMap} source={item.image[0] ? { uri: item.image[0] } : null} />
                      <View style={{ marginLeft: 10, width: 150 }}>
                        <TextWithLimit limit={15} text={item.name}
                          style={{ fontSize: 15, color: 'black' }} />
                        <Text style={{ color: '#3669C9' }}>{formatPrice(item.price)}đ</Text>
                        <Text>Kho: {item.quantity}</Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() => updateProductHandler(item._id)}
                          style={styles.touchUpdate}>
                          <Text style={styles.textUpdate}>
                            Cập nhật
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteProduct(item._id)}
                          style={styles.touchDelete}>
                          <Text style={styles.textDelete}>
                            Ẩn
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                <View>
                  {
                    dataProduct.length >= 6 ?
                      <TouchableOpacity
                        onPress={() => { setSize(size + 6), checkLoadData() }}
                        style={styles.touchShowMore}>
                        <Text style={styles.textShowMore}>Xem Thêm</Text>
                      </TouchableOpacity> : <View />
                  }
                </View>
              </View> : <View style={{alignItems:'center'}}>
                <Text>Không có sản phẩm nào</Text>
              </View> : <ActivityIndicator size={40} color="#3669c9" style={{ marginTop: 200 }}>

            </ActivityIndicator>
        }
      </ScrollView>
    </View >
  )
}
export default ManageProduct
const styles = StyleSheet.create({
  viewLoadAndAdd: {
    backgroundColor: '#F1F5F8', width: '100%',
    flexDirection: 'row', justifyContent: 'space-between'
  },
  touchReload: {
    flexDirection: 'row',
    alignItems: 'center', padding: 5, margin: 5, width: '30%'
  },
  imageReload: {
    width: 18, height: 18
  },
  textReload: {
    fontSize: 17, color: '#3669C9', marginLeft: 10
  },
  touchAdd: {
    flexDirection: 'row',
    alignItems: 'center', padding: 5, margin: 5,
    width: '50%', backgroundColor: '#3669c9', justifyContent: 'center', borderRadius: 5
  },
  textAdd: {
    fontSize: 17, color: 'white', marginLeft: 10
  },
  boxProductMap: {
    marginTop: 10, paddingLeft: 20, paddingRight: 20,
    backgroundColor: '#ffffff', paddingTop: 20,
    paddingBottom: 20, flexDirection: 'row'
  },
  imageProductMap: {
    width: 100, height: 100,
    borderRadius: 5
  },
  touchUpdate: {
    backgroundColor: '#3669C9', width: 100, padding: 5, borderRadius:4
  },
  textUpdate: {
    textAlign: 'center', color: 'white'
  },
  touchDelete: {
    borderWidth: 2,
    borderColor: '#3669C9', width: 100,
    padding: 5, marginTop: 15, borderRadius:4
  },
  textDelete: {
    textAlign: 'center', color: '#3669C9'
  },
  touchShowMore: {
    marginLeft: 20, marginRight: 20,
    alignItems: 'center', marginTop: 5, borderWidth: 2,
    padding: 6, borderRadius: 5, borderColor: '#3669C9',
    justifyContent: 'center', marginTop: 10
  },
  textShowMore: {
    marginLeft: 5, textAlign: 'center',
    color: '#3669C9', fontSize: 18
  }
})