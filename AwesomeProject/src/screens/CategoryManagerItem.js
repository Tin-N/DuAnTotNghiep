import { StyleSheet, Text, View, Pressable, TextInput, Modal, ToastAndroid, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import AxiosIntance from '../utils/AxiosIntance';
import { StyleCategory, SytleCategoryManager } from '../css/Styles';
import { launchImageLibrary } from 'react-native-image-picker'
import { storage } from '../utils/FirebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker';

const CategoryManagerItem = (props) => {
  const { dulieu1 } = props;
  const [params] = dulieu1;
  const [categoryManagerNameItem, setcategoryManagerNameItem] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [img, setImg] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [modalVisibleColor, setModalVisibleColor] = useState(false);
  const [colorCategory, setcolorCategory] = useState({});


  const updateCategoryManager = async () => {
      if (props.category.includes(categoryManagerNameItem) == false) {
        setModalVisible(false);
        const reponse = await AxiosIntance().post('/Category/' + params._id + '/update-by-id', { name: categoryManagerNameItem, images: imgLink, color: colorCategory.color });
        if (reponse) {
          props.changeCategoryManager();
          setImgLink("");
          setImg("");
          setcolorCategory("");
          setcategoryManagerNameItem("");
          ToastAndroid.show('Cập nhật thành công', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show('Cập nhật thất bại', ToastAndroid.SHORT);
        }
    }else ToastAndroid.show('Trùng danh mục', ToastAndroid.SHORT);
  }

// console.log(categoryManagerNameItem);
//   const checkUpdateCategoryManager = async () => {
//     if (img.length > 0) {
//       //thay ca 3
//       if (props.category.includes(categoryManagerNameItem) == false && categoryManagerNameItem != "") {
//         updateCategoryManager(categoryManagerNameItem, imgLink, colorCategory.color);
//       } else{
//         //doi anh voi mau
        
//       }
//     } else {
//       //name
//       if (props.category.includes(categoryManagerNameItem) == false) {
//         updateCategoryManager(categoryManagerNameItem, params.images, params.color);
//       }
//     }
//   }

  const deleteCategoryManager = async () => {
    const reponse = await AxiosIntance().post('/Category/' + params._id + '/delete');
    if (reponse) {
      props.changeCategoryManager();
      ToastAndroid.show('Xóa thành công', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Xóa thất bại', ToastAndroid.SHORT);
    }
  }

  //hinh
  const getImageFromLibrary = async () => {
    const result = await launchImageLibrary();
    if (!result.didCancel) {
      const selectedImage = result.assets[0].uri;
      setImg(selectedImage);
    }
  }

  const Upload = async () => {
    if (img.length > 0) {
      const response = await fetch(img);
      const blob = await response.blob();
      const filename = Date.now() + ".jpg";
      const storageRef = ref(storage, filename);
      const snapshot = await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(snapshot.ref);
      setImgLink(url);
    } updateCategoryManager();
  }


  useEffect(() => {
    if (imgLink.length > 0) {
      updateCategoryManager();
    } updateCategoryManager();
    return () => {

    }
  }, [imgLink])

  //lay mau da chon
  const getColorCategory = (color) => {
    setcolorCategory(color);
    setModalVisibleColor(!modalVisibleColor);
  }

  return (
    <View>
      <View style={SytleCategoryManager.containerItem}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: params.images }} style={{ width: 50, height: 50, backgroundColor: params.color }} />
          <Text style={[SytleCategoryManager.textNameItem, { marginLeft: 15, alignSelf: 'center' }]}>{params.name}</Text>
        </View>
        <View>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Icon name='pencil' size={20} />
          </Pressable>

          <Pressable onPress={deleteCategoryManager}>
            <Icon name='trash-outline' size={20} />
          </Pressable>
        </View>
      </View>

      <View>
        {/* dialog sua category*/}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={StyleCategory.centeredView}>
            <View style={StyleCategory.modalView}>
              <TouchableOpacity style={{ backgroundColor: "white", alignItems: 'center', marginTop: 10, marginBottom: 15 }} onPress={() => getImageFromLibrary()}>
                <Image style={{ width: 150, height: 150, }} source={img.length > 0 ? { uri: img } : { uri: params.images }} />
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: "white", alignItems: 'center', marginTop: 5, marginBottom: 5 }} onPress={() => setModalVisibleColor(!modalVisibleColor)}>
                <Icon name='color-filter' size={40} color={colorCategory.color} />
              </TouchableOpacity>
              <TextInput placeholder={params.name} onChangeText={setcategoryManagerNameItem} style={SytleCategoryManager.textInput} />
              <View style={SytleCategoryManager.viewPressableModal}>
                <Pressable style={SytleCategoryManager.pressableModal} onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={SytleCategoryManager.textPressableModal}>Hủy</Text>
                </Pressable>
                <Pressable style={[SytleCategoryManager.pressableModal, { backgroundColor: '#3669C9' }]} onPress={() => Upload()}>
                  <Text style={SytleCategoryManager.textPressableModal}>Cập nhật</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        {/* dialog chon lai mau */}
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

export default CategoryManagerItem

const styles = StyleSheet.create({})