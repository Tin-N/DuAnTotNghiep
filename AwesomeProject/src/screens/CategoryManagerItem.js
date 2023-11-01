import { StyleSheet, Text, View, Pressable, TextInput, Modal, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import AxiosIntance from '../utils/AxiosIntance';
import { StyleCategory, SytleCategoryManager } from '../css/Styles';

const CategoryManagerItem = (props) => {
  const { dulieu1 } = props;
  const [params] = dulieu1;

  const [categoryManagerNameItem, setcategoryManagerNameItem] = useState({})
  const [modalVisible, setModalVisible] = useState(false);

  const updateCategoryManager = async () => {
    setModalVisible(false);
    const reponse = await AxiosIntance().post('/Category/' + params._id + '/update-by-id', { name: categoryManagerNameItem });
    if (reponse) {
      props.changeCategoryManager();
      ToastAndroid.show('Cập nhật thành công', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Cập nhật thất bại', ToastAndroid.SHORT);
    }
  }

  const deleteCategoryManager = async () => {
    const reponse = await AxiosIntance().post('/Category/' + params._id + '/delete');
    if (reponse) {
      props.changeCategoryManager();
      ToastAndroid.show('Xóa thành công', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Xóa thất bại', ToastAndroid.SHORT);
    }
  }

  return (
    <View>
      <View style={SytleCategoryManager.containerItem}>
        <Text style={SytleCategoryManager.textNameItem}>{params.name}</Text>
        <View>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Icon name='pencil' size={18}/>
          </Pressable>

          <Pressable onPress={deleteCategoryManager}>
            <Icon name='trash-outline' size={18}/>
          </Pressable>
        </View>
      </View>

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={StyleCategory.centeredView}>
            <View style={StyleCategory.modalView}>
              <TextInput placeholder='Danh mục' onChangeText={setcategoryManagerNameItem} style={SytleCategoryManager.textInput} />

              <View style={SytleCategoryManager.viewPressableModal}>
                <Pressable style={SytleCategoryManager.pressableModal} onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={SytleCategoryManager.textPressableModal}>Hủy</Text>
                </Pressable>

                <Pressable style={[SytleCategoryManager.pressableModal, { backgroundColor: '#3669C9' }]} onPress={updateCategoryManager}>
                  <Text style={SytleCategoryManager.textPressableModal}>Cập nhật</Text>
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