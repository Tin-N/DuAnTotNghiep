import { StyleSheet, Text, View, FlatList, TextInput, Pressable, ToastAndroid, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryManagerItem from './CategoryManagerItem'
import AxiosIntance from '../utils/AxiosIntance';
import { StyleCategory, StyleOrder, SytleCategoryManager } from '../css/Styles';
import { launchImageLibrary } from 'react-native-image-picker'
import { storage } from '../utils/FirebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker';
import Icon from 'react-native-vector-icons/Ionicons'

const CategoryManager = () => {
  const [categoryManagerAll, setcategoryManagerAll] = useState([]);
  const [categoryManagerNotDelete, setcategoryManagerNotDelete] = useState([]);
  const [categoryManagerNameAdd, setcategoryManagerNameAdd] = useState({});
  const [changeCategoryManager, setchangeCategoryManager] = useState(false);
  const name = [];
  const [img, setImg] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [modalVisibleColor, setModalVisibleColor] = useState(false);
  const [colorCategory, setcolorCategory] = useState({});


  //Hinh
  const getImageFromLibrary = async () => {
    const result = await launchImageLibrary();
    if (!result.didCancel) {
      const selectedImage = result.assets[0].uri;
      setImg(selectedImage);
    }
  }

  const Upload = async () => {
    const response = await fetch(img);
    const blob = await response.blob();
    const filename = Date.now() + ".jpg";
    const storageRef = ref(storage, filename);
    const snapshot = await uploadBytes(storageRef, blob);
    const url = await getDownloadURL(snapshot.ref);
    setImgLink(url);
  }

  //chon mau nen category
  const getColorCategory = (color) => {
    setcolorCategory(color);
    setModalVisibleColor(!modalVisibleColor);
  }


  useEffect(() => {
    if (imgLink.length > 0)
      addCategoryManager();
    return () => {

    }
  }, [imgLink])

  useEffect(() => {
    //lay het category
    const getCategoryManagerAll = async () => {
      const reponse = await AxiosIntance().get('/Category/getCategory');
      if (reponse) {
        setcategoryManagerAll(reponse.categories);
      }
    }

    //lay cac categoty chua bi xoa
    const getCategoryManagerNotDelete = async () => {
      const reponse = await AxiosIntance().get('/Category/getCategoryNotDelete');
      if (reponse) {
        setcategoryManagerNotDelete(reponse.categories);
      }
    }
    getCategoryManagerNotDelete();
    getCategoryManagerAll();
    return () => {
    }
  }, [changeCategoryManager])

  //push vo array de kiem tra luc them category da co chua
  for (let i = 0; i < categoryManagerAll.length; i++) {
    const category = categoryManagerAll[i].name;
    name.push(category);
  }

  const addCategoryManager = async () => {
    //them category khong duoc de trong va trung voi category co san
    if (categoryManagerNameAdd != "" && name.includes(categoryManagerNameAdd) == false) {
      const reponse = await AxiosIntance().post('/Category/addCategory', { images: imgLink, color: colorCategory.color, name: categoryManagerNameAdd });
      if (reponse) {
        changeCategoryManagerFun();
        ToastAndroid.show('Thêm thành công', ToastAndroid.SHORT);
        setImgLink("");
        setImg("");
        setcolorCategory("");
      } else {
        ToastAndroid.show('Thêm thất bại', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Bạn đang bỏ trống hoặc đã có danh mục này', ToastAndroid.SHORT);
    }
    changeCategoryManagerFun();
  }

  //thu doi du lieu thi se render lai du lieu
  function changeCategoryManagerFun() {
    setchangeCategoryManager(!changeCategoryManager);
  }


  return (
    <View style={SytleCategoryManager.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
        <Icon name='arrow-back' size={25} color={'black'}/>
        <Text style={SytleCategoryManager.textHeader}>Quản lí danh mục</Text>
        <View></View>
      </View>

      <TouchableOpacity style={SytleCategoryManager.touchableOpacity} onPress={() => getImageFromLibrary()}>
        <Image style={[SytleCategoryManager.imageTouchableOpacity, {backgroundColor: colorCategory.color}]} source={img.length > 0 ? { uri: img } : require('../images/camera.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={SytleCategoryManager.touchableOpacity} onPress={() => setModalVisibleColor(!modalVisibleColor)}>
        <Icon name='color-filter' size={40} color={colorCategory.color}/>
      </TouchableOpacity>

      <View style={SytleCategoryManager.viewTop}>
        <TextInput placeholder='Danh mục' onChangeText={setcategoryManagerNameAdd} style={SytleCategoryManager.textInput} />
        <Pressable onPress={() => Upload()} style={SytleCategoryManager.pressable} >
          <Text style={SytleCategoryManager.textPressable}>Thêm</Text>
        </Pressable>
      </View>

      {/* <View style={{ position: 'relative' }}>
        <TextInput style={SytleCategoryManager.textInputSearch} placeholder='Tìm kiếm' />
        <Icon name='search-outline' size={25} color={'black'} style={SytleCategoryManager.iconSearch} />
      </View>
      <View elevation={5} style={SytleCategoryManager.viewSeprate} /> */}

      <View>
        <FlatList
          style={{ height: 500 }}
          showsVerticalScrollIndicator={false}
          overScrollMode='never'
          data={categoryManagerNotDelete}
          renderItem={({ item }) => <CategoryManagerItem dulieu1={[item]} changeCategoryManager={changeCategoryManagerFun} category={name} />}
          keyExtractor={item => item._id}
        />
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleColor}>
          <View style={StyleCategory.centeredView}>
            <View style={StyleCategory.modalView}>
              <TriangleColorPicker
                onColorSelected={color => getColorCategory({ color })}
                style={{ height: 200, width: 300 }}
              />
              <View style={SytleCategoryManager.viewPressableModal}>
                <Pressable style={SytleCategoryManager.pressableModal} onPress={() => setModalVisibleColor(!modalVisibleColor)}>
                  <Text style={SytleCategoryManager.textPressableModal}>Hủy</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export default CategoryManager

const styles = StyleSheet.create({})

