import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleDetailProduct } from '../../css/Styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import AxiosIntance from '../../utils/AxiosIntance';
import { ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextWithLimit } from '../../component/SearchSuggestions/SearchItem';
import { formatPrice } from '../../../Agro';
import BounceModal from '../../component/BounceDialog/BounceDialog';
import { async } from '@firebase/util';
import { log } from 'console';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabUpdateProduct from './TabUpdateProduct';
import TabSaleProduct from './TabSaleProduct';
import HomeStore from './HomeStore';
import Order from '../Order';
import Icon1 from 'react-native-vector-icons/Ionicons';
const UpdateProduct = props => {
  const Tab = createMaterialTopTabNavigator()
  const { navigation } = props;
  const { route } = props;
  const { params } = route;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Snaker', value: 'Snaker' },
    { label: 'Clothing', value: 'Clothing' },
    { label: 'Shirt', value: 'Shirt' },
  ]);
  const [dataProduct, setDataProduct] = useState({});
  const [editQuantity, setEditQuantity] = useState(false);
  const [boderTextInputQuantity, setBodertTextInputQuantity] =
    useState('#CCCCCC');
  const [valueQuantity, setValueQuantity] = useState();
  const [textButtonUpdateQuantity, setTextButtonUpdateQuantity] =
    useState('Cập nhật');
  const [displayButtonSave, setDislayButtonSave] = useState('none');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [saleOff, setSaleOff] = useState('0');
  const [productName, setProductName] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [productPrice, setProductPrice] = useState();
  const [titleSale, setTitleSale] = useState('');
  // Size color

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const [sizeID, setsizeID] = useState('');
  const [colorID, setColorID] = useState('');
  const [sizeModels, setSizeModels] = useState([]);
  const [colorModels, setColorModels] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const checkQuantity = () => {
    if (!isNaN(valueQuantity)) {
      Alert.alert('Đây là số');
      submitQuantity();
    } else {
      Alert.alert('Sai định dạng');
    }
  };

  const submitQuantity = async () => {
    try {

      setisLoading(true);
      const request = await AxiosIntance().post('/productAPI/updateQuantity', {
        productID: params.itemId,
        quantity: valueQuantity
      });
      if (request.result == true) {
        setisLoading(false);
        ToastAndroid.show('Sửa số lượng thành công!', ToastAndroid.SHORT);
      } else {
        setisLoading(false);
        ToastAndroid.show('Không sửa được số lượng!', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log("Lỗi số lượng: " + error);
    }
  }

  const addSale = async () => {
    const request = await AxiosIntance().post('/saleOffAPI/addSaleOff', {
      userID: '113',
      titleSale: 'Sale sập sàn tháng cô hồn',
      title: titleSale,
      productID: params.itemId,
      saleOff: (saleOff / 100),
      startDay: startDate.getTime(),
      endDay: endDate.getTime(),
    });
  };

  const back = () => {
    navigation.goBack();
  };

  const updateQuantityHandler = () => {
    setEditQuantity(!editQuantity);
    editQuantity == false
      ? (setBodertTextInputQuantity('black'),
        setTextButtonUpdateQuantity('Huỷ bỏ'),
        setDislayButtonSave('flex'))
      : (setBodertTextInputQuantity('#CCCCCC'),
        setTextButtonUpdateQuantity('Cập nhật'),
        setDislayButtonSave('none'));
  };

  const updateInfoProduct = async () => {
    let object = { productID: params.itemId };

    if (productName)
      object = { ...object, name: productName }
    if (value !== null)
      object = { ...object, categoryID: value }
    if (productDetail)
      object = { ...object, detail: productDetail }
    if (typeof productPrice !== 'undefined')
      object = { ...object, price: productPrice }

    // name: productName,
    // price: productPrice,
    // detail: productDetail,
    // category: productCategory,
    if (Object.keys(object).length > 0) {
      setisLoading(true);
      console.log(object);

      const request = await AxiosIntance().post('/productAPI/updateProduct', object);
      if (request.result == true) {
        setisLoading(false);
        ToastAndroid.show('Sửa thông tin thành công!', ToastAndroid.SHORT);
      } else {
        setisLoading(false);
        ToastAndroid.show('Không sửa được thông tin!', ToastAndroid.SHORT);
      }
    }
  };

  const removeColorFromColorModels = id => {
    const updatedImageArray = colorModels.filter(
      item => item._id !== id,
    );
    setColorModels(updatedImageArray);


  };

  const removeSizeFromSizeModels = id => {
    const updatedImageArray = sizeModels.filter(
      item => item._id !== id,
    );

    setSizeModels(updatedImageArray);
  };

  useEffect(() => {
    const getProductForUpdate = async () => {
      const response = await AxiosIntance().get(
        '/productAPI/getProductByID?id=' + params.itemId,
      );
      if (response.result == false) {
        ToastAndroid.show('Lấy dữ liệu thất bại', ToastAndroid.SHORT);
      } else {
        let name = response.products.name;
        let price = response.products.price;
        let quantity = response.products.quantity;
        let image = response.products.image[0];
        let saleOffID = response.products.saleOffID
        const itemProduct = {
          name,
          quantity,
          price,
          image,
          saleOffID
        };
        setDataProduct(itemProduct);
      }
    };
    const getColorsForUpdate = async () => {
      const response = await AxiosIntance().get(
        '/Options/colorApi/getColorByProductId?productID=' + params.itemId,
      );
      if (response.result == false) {
        ToastAndroid.show('Lấy dữ liệu thất bại', ToastAndroid.SHORT);
      } else {
        setColorModels(response.color);
      }
    };
    const getSizeForUpdate = async () => {
      const response = await AxiosIntance().get(
        '/Options/sizeAPI/getSizeByProductId?productID=' + params.itemId,
      );
      if (response.result == false) {
        ToastAndroid.show('Lấy dữ liệu thất bại', ToastAndroid.SHORT);
      } else {
        setSizeModels(response.size);
      }
    };
    getColorsForUpdate();
    getSizeForUpdate();
    getProductForUpdate();
    return () => { };
  }, []);

  const onSubmitColor = async () => {
    try {
      const response = await AxiosIntance().post(
        '/Options/ColorApi/deleteColor?id=' + colorID,
      );
      if (response.result) {
        setVisible(false);
        removeColorFromColorModels(colorID)

        setColorID('');
      }
    } catch (error) {
      console.log('Lỗi ở submitColor: ' + error);
    }
  };

  const onSubmitSize = async () => {
    try {
      const response = await AxiosIntance().post(
        '/Options/sizeAPI/deleteSize?id=' + sizeID,
      );

      if (response.result) {
        setVisible1(false);
        removeSizeFromSizeModels(sizeID)

        setsizeID('');
      }
    } catch (error) {
      console.log('Lỗi ở submitSize: ' + error);
    }
  };

  return (
    <View style={{ height: '100%' }}>
      <View style={{ backgroundColor: '#F1F5F8', borderBottomWidth: 0.5, paddingBottom: 20 }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            borderBottomWidth: 0.5,
            borderColor: '#CCCCCC',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              alignItems: 'center',
              height: 50,
            }}>
            <TouchableOpacity onPress={back}>
              <Image source={require('../../images/backic.png')} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontFamily: 'TiltNeon-Regular',
                marginLeft: 20,
              }}>
              Cập nhật sản phẩm
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
            backgroundColor: '#F1F5F8',
          }}>
          <Image
            style={{ width: 120, height: 120, borderRadius: 10 }}
            source={{ uri: dataProduct.image }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontFamily: 'TiltNeon-Regular',
              }}>
              {dataProduct.name}{' '}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {Object.keys(dataProduct).length > 0
                ? formatPrice(dataProduct.price)
                : ''}{' '}
              đ
            </Text>
            <Text style={{ fontSize: 15 }}>Kho: {dataProduct.quantity}</Text>
          </View>
        </View>
      </View>

      {
        Object.keys(dataProduct).length > 0 ?
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
              tabBarItemStyle: { flexDirection: 'row', flex: 1 },
              tabBarStyle: { backgroundColor: 'white' },
              tabBarActiveTintColor: '#3669c9',
              tabBarInactiveTintColor: '#a2a0a0',
              tabBarIndicatorStyle: { width: 70, marginLeft: 65 }

            }}>
            <Tab.Screen initialParams={{ productID: params.itemId, saleOffID: dataProduct.saleOffID }} name="Sửa thông tin" component={TabUpdateProduct} />
            <Tab.Screen initialParams={{ productID: params.itemId, saleOffID: dataProduct.saleOffID }} name="Cập nhật sale" component={TabSaleProduct} />
          </Tab.Navigator>
          :
          <View />
      }



    </View>
  );
};

export default UpdateProduct;
