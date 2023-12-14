import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ToastAndroid,
  ImageBackground, Modal
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AxiosIntance from '../../utils/AxiosIntance';
import { ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import BounceModal from '../../component/BounceDialog/BounceDialog';
import { launchImageLibrary } from 'react-native-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../utils/FirebaseConfig';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { StyleDialogShopping } from '../../css/Styles';
import { TriangleColorPicker } from 'react-native-color-picker';
import { fromHsv } from 'react-native-color-picker';
const TabUpdateProduct = ({ route }) => {
  const { productID } = route.params;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items2, setItems2] = useState([
       
  ]);
  const [dataProduct, setDataProduct] = useState({});
  const [editQuantity, setEditQuantity] = useState(false);
  const [boderTextInputQuantity, setBodertTextInputQuantity] =
    useState('#CCCCCC');
  const [valueQuantity, setValueQuantity] = useState();
  const [textButtonUpdateQuantity, setTextButtonUpdateQuantity] =
    useState('Cập nhật');
  const [displayButtonSave, setDislayButtonSave] = useState('none');
  const [productName, setProductName] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [productPrice, setProductPrice] = useState();
  const [productCategory, setProductCategory] = useState('');
  const [heightTextInputDetail, setHeightTextInputDetail] = useState(0);

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  // Size color
  const [sizeID, setsizeID] = useState('');
  const [colorID, setColorID] = useState('');
  const [sizeModels, setSizeModels] = useState([]);
  const [colorModels, setColorModels] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [checkimgLink2, setcheckimgLink2] = useState(false);
  const [newVariationColor, setnewVariationColor] = useState([])
  // Dialog add variations Color

  useEffect(() => {
    const getCategory = async () => {
        const response = await AxiosIntance().get('/category/getCategoryNotDelete')
        console.log(">>>>>>>>categories: " + response.categories[0].name);
        if(response.result == true) {
            ToastAndroid.show('Lấy category thành công', ToastAndroid.SHORT)
            setItems2(prevItems => [
                ...prevItems,
                ...response.categories.map(category => ({
                    label: category.name,
                    value: category._id
                }))
            ]);
            
            for (let i = 0; i < response.categories.length; i++) {
                console.log(">>>>item categories: " + response.categories[i].name);
            }
        }
    }
    getCategory();
  return () => {
    
  }
}, [])


  const MyDialog = ({ isVisible, onClose }) => {
    const [colorVariations, setColorVariations] = useState('');
    const [hexColor, setHexColor] = useState('');
    const [imageVariations, setimgVariations] = useState('');
    const displayImg = () => {
      if (imageVariations)
        return 'flex';
      return 'none'
    }
    const colorPickerRef = useRef(null);

    const handleColorSelected = (color) => {
      // Copy the color to the clipboard 
      setHexColor(fromHsv(color));
      // Alert the user 
    };
    const doneworkHandler = () => {
      if (imageVariations && colorVariations && hexColor)
        return false
      return true
    }
    const getImageFromLibrary2 = async () => {
      const result = await launchImageLibrary();
      if (!result.didCancel) {
        const selectedImage = result.assets[0].uri;
        setimgVariations(selectedImage);
      }
    }
    const addVariationsNew = () => {
      setnewVariationColor([...newVariationColor, { productID: productID, title: colorVariations, color: hexColor, image: imageVariations }])
    }
    const addVariations = () => {
      setColorModels([...colorModels, { productID: productID, title: colorVariations, color: hexColor, image: imageVariations }]);
    }
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          onClose();
        }}
      >
        <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
          <View style={StyleDialogShopping.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
              <Text style={{ color: 'black' }}>Màu của biến thể sản phẩm</Text>
              <TouchableOpacity onPress={onClose}>
                <Image style={{ width: 20, height: 20 }} source={require('../../images/deleteimg1.png')} />
              </TouchableOpacity>
            </View>
            <View style={{ padding: 5, borderWidth: 0.2, marginTop: 10 }}>
              <TextInput onChangeText={(text) => setColorVariations(text)}
                value={colorVariations} style={{ borderBottomWidth: 0.2 }} placeholder='Tên màu' />
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TextInput style={{
                  width: 150, borderWidth: 1,
                  borderColor: 'black', marginTop: 5, height: 50, paddingLeft: 10, borderRadius: 5
                }} onChangeText={(text) => setHexColor(text)}
                  value={hexColor} placeholder='Mã màu' />
                <TriangleColorPicker
                  ref={colorPickerRef}
                  onColorChange={handleColorSelected}
                  style={{ width: 100, height: 100 }}
                />
              </View>
            </View>
            <View style={{ padding: 5 }}>
              <TouchableOpacity onPress={getImageFromLibrary2}>
                <Text style={{ fonteight: 'bold', color: '#3669C9' }}>+ Thêm ảnh</Text>
              </TouchableOpacity>
              <Image style={{ width: 120, height: 120, display: displayImg(), borderRadius: 8 }} source={imageVariations ? { uri: imageVariations } : null} />
            </View>
            <View style={StyleDialogShopping.line}>
            </View>
            <View style={{
              flexDirection: 'row', position: 'absolute',
              bottom: 0, right: 0, margin: 10, width: 150, justifyContent: 'space-between'
            }}>
              <TouchableOpacity disabled={doneworkHandler()} onPress={() => {
                addVariations(); // thêm vào mảng hiển thị trong list
                addVariationsNew(); // thêm vào mảng để đưa lên mongo
                onClose();
              }} style={{
                backgroundColor: '#3669C9', padding: 5,
                width: 70, borderRadius: 5
              }}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                  Thêm
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} disabled={true} style={{
                borderWidth: 1, padding: 5,
                width: 70, borderRadius: 5, borderColor: '#3669C9'
              }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#3669C9' }}>
                  Huỷ
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Modal>
    );
  };
  // thêm color sản phẩm
  const addVariationsToDb = async () => {
    const request = await AxiosIntance().post('/Options/colorAPI/addColor', { colorArray: newVariationColor });
    if (request.result) {
      ToastAndroid.show('Thêm màu thành công', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Thêm màu thất bại', ToastAndroid.SHORT);
    }
    Upload2();
    setcheckimgLink2(false);
    setnewVariationColor([]);
  }
  
  const Upload2 = async () => {
    const img = [];
    for (i = 0; i < newVariationColor.length; i++) {
      const response = await fetch(newVariationColor[i].image);
      const blob = await response.blob();
      const filename = Date.now() + ".jpg";
      const storageRef = ref(storage, filename);
      const snapshot = await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(snapshot.ref);
      newVariationColor[i].image = url;
      // them productID
      console.log(img);
    }
    setcheckimgLink2(true);
  }

  useEffect(() => {
    if (checkimgLink2) {
        addVariationsToDb();
    }

}, [checkimgLink2])

  const checkQuantity = () => {
    if (!isNaN(valueQuantity) && valueQuantity != '') {
      submitQuantity();
    } else {
      Alert.alert('Vui lòng nhập số', 'Số lượng không thể nhập chữ');
    }
  };

  const submitQuantity = async () => {
    try {

      setisLoading(true);
      const request = await AxiosIntance().post('/productAPI/updateQuantity', {
        productID: productID,
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
    let object = { productID: productID };

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
      console.log(">>>>>object: " + object);

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
        const itemProduct = {
          name,
          quantity,
          price,
          image,
        };
        setDataProduct(itemProduct);
      }
    };
    const getColorsForUpdate = async () => {
      const response = await AxiosIntance().get(
        '/Options/colorApi/getColorByProductId?productID=' + productID,
      );
      if (response.result == false) {
        ToastAndroid.show('Lấy dữ liệu thất bại', ToastAndroid.SHORT);
      } else {
        setColorModels(response.color);
      }
    };
    const getSizeForUpdate = async () => {
      const response = await AxiosIntance().get(
        '/Options/sizeAPI/getSizeByProductId?productID=' + productID,
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
    <View>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: '#F1F5F8' }}>

        <KeyboardAwareScrollView>
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              zIndex: 1,
              backgroundColor: 'white',
              paddingBottom: 15, marginRight: 10, marginLeft: 10, marginTop: 10
            }}>
            <Text
              style={{
                fontFamily: 'TiltNeon-Regular',
                color: 'black',
                fontSize: 20,
              }}>
              Thông tin mới cho sản phẩm
            </Text>
            <View>
              <Text style={{ fontSize: 15 }}>Tên sản phẩm*</Text>
              <TextInput
                onChangeText={setProductName}
                style={{
                  fontSize: 20,
                  borderColor: '#CCCCCC',
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingLeft: 10,
                  fontFamily: 'TiltNeon-Regular',
                  marginTop: 5,
                }}
              />
            </View>
            <View>
              <Text style={{ fontSize: 15 }}>Giá sản phẩm*</Text>
              <TextInput
                keyboardType='numeric'
                onChangeText={setProductPrice}
                style={{
                  fontSize: 20,
                  borderColor: '#CCCCCC',
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingLeft: 10,
                  fontFamily: 'TiltNeon-Regular',
                  marginTop: 5,
                }}
              />
            </View>
            <View>
              <Text style={{ fontSize: 15 }}>Mô tả*</Text>
              <View style={{ width: '100%', flexDirection: 'row' }}>
                <TextInput
                  maxLength={200}
                  onChangeText={setProductDetail}
                  onContentSizeChange={event => {
                    setHeightTextInputDetail(event.nativeEvent.contentSize.height);
                  }}
                  style={{
                    width: '100%',
                    fontSize: 15,
                    borderColor: '#CCCCCC',
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingLeft: 10,
                    fontFamily: 'TiltNeon-Regular',
                    marginTop: 5,
                    textAlignVertical: 'top',
                    height: Math.max(100, heightTextInputDetail),
                  }}
                  multiline={true}
                />
                <Text style={{ fontSize: 15, position: 'absolute', right: 0, padding: 10 }}>{productDetail.length}/200</Text>
              </View>

            </View>
            <View style={{ marginTop: 5, zIndex: 1 }}>
              <Text style={{ fontSize: 15 }}>Danh mục hiển thị*</Text>
              <View
                style={{
                  flexDirection: 'row',
                  zIndex: 1,
                  marginTop: 5
                }}>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items2}
                  zIndex={1000}
                  zIndexInverse={3000}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems2}
                  placeholder={'Chưa chọn'}
                  props={{
                    activeOpacity: 1,
                  }}
                  dropDownContainerStyle={{
                    borderColor: '#CCCCCC',
                    backgroundColor: 'white',
                    elevation: 1000,
                  }}
                  style={{ borderColor: '#CCCCCC', zIndex: 1 }}
                />
                <Image
                  style={{
                    marginTop: 10,
                    marginLeft: -55,
                    zIndex: 1,
                    width: 25,
                    height: 25,
                  }}
                  source={require('../../images/category.png')}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ display: 'none' }}>
                  Danh mục: {value === null ? 'chưa có' : value}
                </Text>
              </View>
              <View style={{}}>
                {value || productName || productDetail || productPrice ? (
                  <TouchableOpacity
                    onPress={() => updateInfoProduct()}
                    style={{
                      flexDirection: 'row',
                      zIndex: 0,
                      alignItems: 'center',
                      marginTop: 5,
                      padding: 6,
                      borderRadius: 5,
                      backgroundColor: '#3669C9',
                      justifyContent: 'center',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        marginLeft: 5,
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 18,
                      }}>
                      XÁC NHẬN
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View />
                )}
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              zIndex: 0,
              backgroundColor: 'white',
              marginTop: 15,
              paddingBottom: 15, marginRight: 10, marginLeft: 10, marginTop: 10
            }}>
            <Text
              style={{
                fontFamily: 'TiltNeon-Regular',
                color: 'black',
                fontSize: 20,
              }}>
              Cập nhật kho hàng
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TextInput
                onChangeText={setValueQuantity}
                editable={editQuantity}
                keyboardType="numeric"
                style={{
                  fontSize: 15,
                  borderColor: boderTextInputQuantity,
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingLeft: 10,
                  fontFamily: 'TiltNeon-Regular',
                  marginTop: 5,
                  width: '60%',
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  updateQuantityHandler();
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 17,
                  borderWidth: 1,
                  marginTop: 5,
                  padding: 7,
                  borderRadius: 5,
                  borderColor: '#3669C9',
                  width: 107,
                }}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require('../../images/upgrade.png')}
                />
                <Text style={{ marginLeft: 5 }}>{textButtonUpdateQuantity}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={checkQuantity}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
                padding: 6,
                borderRadius: 5,
                backgroundColor: '#3669C9',
                justifyContent: 'center',
                marginTop: 10,
                display: displayButtonSave,
              }}>
              <Text
                style={{
                  marginLeft: 5,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 18,
                }}>
                XÁC NHẬN
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              marginLeft: 10,
              marginRight: 10,
              padding: 10,
              borderWidth: 1,
              borderColor: '#030303',
              borderRadius: 5,
              marginTop: 20,
              backgroundColor: 'white',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontFamily: 'TiltNeon-Regular',
                color: 'black',
                fontSize: 20,
              }}>
              Cập nhật giảm giá cho sản phẩm
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{ color: '#3669C9', fontSize: 20 }}>Mức giảm</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '50%',
                }}>
                <TextInput
                  defaultValue={saleOff}
                  onChangeText={text => {
                    const num = parseInt(text);
                    if (!isNaN(num)) {
                      if (num <= 100) {
                        setSaleOff(num);
                      } else {
                        setSaleOff(100);
                      }
                    }
                  }}
                  style={{
                    fontSize: 20,
                    borderColor: '#CCCCCC',
                    color: 'black',
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingLeft: 10,
                    fontFamily: 'TiltNeon-Regular',
                    marginTop: 5,
                    width: '100%',
                    paddingLeft: 58,
                  }}
                />
                <Text style={{ marginLeft: -80, fontSize: 18, marginTop: 5 }}>
                  % Giảm
                </Text>
              </View>
            </View>
            <View>
              <TextInput
                onChangeText={setTitleSale}
                style={{
                  fontSize: 15,
                  borderColor: '#CCCCCC',
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingLeft: 10,
                  fontFamily: 'TiltNeon-Regular',
                  marginTop: 5,
                }}
                placeholder="Tên chương trình sale"
              />
            </View>
            <Text
              style={{
                fontFamily: 'TiltNeon-Regular',
                color: '#3669C9',
                fontSize: 20,
                marginTop: 10,
              }}>
              Thiết lập thời gian sale
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 5,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                marginTop: 10,
                borderColor: '#CCCCCC',
              }}>
              <Text style={{ color: 'black', fontSize: 18 }}>Ngày bắt đầu</Text>
              <TouchableOpacity
                style={{ width: '35%' }}
                onPress={() => setOpenDialogStartDate(true)}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <View style={{ width: '90%' }}>
                    {onSelectedStartDate.day ? (
                      <Text style={{ color: 'black', fontSize: 18 }}>
                        {' '}
                        {onSelectedStartDate.day}/{onSelectedStartDate.month}{' '}
                        {onSelectedStartDate.hour}:{onSelectedStartDate.minute}
                      </Text>
                    ) : (
                      <View>
                        <Text style={{ textAlign: 'center' }}>Nhấp chọn</Text>
                      </View>
                    )}
                  </View>
                  <Icon1 name="chevron-forward-outline" size={23}></Icon1>
                </View>
              </TouchableOpacity>
            </View>
            <DatePicker
              modal={true}
              open={openDialogStartDate}
              date={startDate}
              locale="vi_VN"
              title="Bắt đầu giảm giá"
              minimumDate={new Date()}
              onConfirm={date => {
                setOpenDialogStartDate(false);
                setStartDate(date);
                const day = date.getDate().toString().padStart(2, '0');
                const month = date.getMonth().toString().padStart(2, '0');
                const hour = date.getHours().toString().padStart(2, '0');
                const minute = date.getMinutes().toString().padStart(2, '0');
                const dateFormat = {
                  day,
                  month,
                  hour,
                  minute,
                };
                setonSelectedStartDate(dateFormat);
              }}
              onCancel={() => {
                setOpenDialogStartDate(false);
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 5,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#CCCCCC',
              }}>
              <Text style={{ color: 'black', fontSize: 18 }}>Ngày kết thúc</Text>
              <TouchableOpacity
                style={{ width: '35%' }}
                onPress={() => setOpenDialogEndDate(true)}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <View style={{ width: '90%' }}>
                    {onSelectedEndDate.day ? (
                      <Text style={{ color: 'black', fontSize: 18 }}>
                        {' '}
                        {onSelectedEndDate.day}/{onSelectedEndDate.month}{' '}
                        {onSelectedEndDate.hour}:{onSelectedEndDate.minute}
                      </Text>
                    ) : (
                      <View>
                        <Text style={{ textAlign: 'center' }}>Nhấp chọn</Text>
                      </View>
                    )}
                  </View>
                  <Icon1 name="chevron-forward-outline" size={23}></Icon1>
                </View>
              </TouchableOpacity>
            </View>
            <DatePicker
              modal={true}
              open={openDialogEndDate}
              date={endDate}
              minimumDate={new Date()}
              title="Kết thúc giảm giá"
              onConfirm={date => {
                setOpenDialogEndDate(false);
                setEndDate(date);
                const day = date.getDate().toString().padStart(2, '0');
                const month = date.getMonth().toString().padStart(2, '0');
                const hour = date.getHours().toString().padStart(2, '0');
                const minute = date.getMinutes().toString().padStart(2, '0');
                const dateFormat = {
                  day,
                  month,
                  hour,
                  minute,
                };
                setonSelectedEndDate(dateFormat);
              }}
              onCancel={() => {
                setOpenDialogEndDate(false);
              }}
            />
            <TouchableOpacity
              onPress={addSale}
              style={{
                alignItems: 'center',
                marginTop: 5,
                padding: 6,
                borderRadius: 5,
                backgroundColor: '#3669C9',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  marginLeft: 5,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 18,
                }}>
                XÁC NHẬN
              </Text>
            </TouchableOpacity>
          </View> */}
          <View style={{
            backgroundColor: 'white', marginLeft: 10,
            marginRight: 10, marginTop: 15, borderRadius: 10, padding: 10
          }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontFamily: 'TiltNeon-Regular',
              }}>
              Các biến thể có sẵn
            </Text>
            <View
              style={{
                borderColor: '#CCCCCC',
                borderRadius: 5,
              }}>
              <View>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: 'black' }}>Nhóm màu</Text>
                  <TouchableOpacity onPress={() => setDialogVisible(true)}>
                    <Text style={{ color: 'black' }}>+ Thêm</Text>
                  </TouchableOpacity>
                  <MyDialog isVisible={isDialogVisible} onClose={() => setDialogVisible(false)} />
                  <TouchableOpacity onPress={Upload2}>
                    <Text style={{ color: 'black' }}>Lưu</Text>
                  </TouchableOpacity>
                </View>
                <View></View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  {colorModels.length > 0 ? (
                    colorModels.map(item => (
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 5,
                          overflow: 'hidden',
                          margin: 4,
                        }}>
                        <ImageBackground
                          style={{ width: 70, height: 70 }}
                          source={{ uri: item.image }}>
                          <TouchableOpacity
                            onPress={() => {
                              setVisible(true);
                              setColorID(item._id);
                            }}>
                            <Image
                              style={{
                                position: 'absolute',
                                top: 0,
                                margin: 4,
                                width: 25,
                                height: 25,
                                right: 0,
                                backgroundColor: 'white',
                                borderRadius: 12.5,
                              }}
                              source={require('../../images/deleteimg1.png')}
                            />
                          </TouchableOpacity>
                        </ImageBackground>
                        <Text
                          style={{
                            padding: 3,
                            margin: 2,
                            marginTop: 6,
                          }}>
                          {item.title}
                        </Text>
                      </View>
                    ))
                  ) : (
                    <View></View>
                  )}
                  <BounceModal
                    isVisible={visible}
                    onSubmit={onSubmitColor}
                    onClose={() => {
                      setVisible(false);
                      setColorID('');
                    }}
                    itemToDelete={'ảnh'}
                  />
                </View>
              </View>
              <View>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: 'black', marginBottom: 10 }}>Kích cỡ</Text>
                  <TouchableOpacity>
                    <Text style={{ color: 'black' }}>+ Thêm</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  {sizeModels.length > 0 ? (
                    sizeModels.map(item => (
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderColor: 'gray',
                          borderRadius: 5,
                          marginHorizontal: 6,
                          margin: 4,
                          borderWidth: 1,
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            setVisible1(true);
                            setsizeID(item._id);
                          }}
                          style={{ position: 'absolute', top: -10, right: -10 }}>
                          <Image
                            style={{
                              width: 18,
                              height: 18,
                              backgroundColor: 'white',
                              borderRadius: 12.5,
                            }}
                            source={require('../../images/deleteimg1.png')}
                          />
                        </TouchableOpacity>
                        <Text
                          style={{
                            padding: 4,
                            margin: 4,
                            marginTop: 6,
                            color: 'black',
                            fontWeight: '700',
                          }}>
                          {item.size}
                        </Text>
                      </View>
                    ))
                  ) : (
                    <View></View>
                  )}
                  <BounceModal
                    isVisible={visible1}
                    onSubmit={onSubmitSize}
                    onClose={() => {
                      setVisible1(false);
                      setsizeID('');
                    }}
                    itemToDelete={'kích cỡ'}
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>

      </ScrollView>
    </View>
  )
}

export default TabUpdateProduct