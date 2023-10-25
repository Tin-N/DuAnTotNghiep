import { StyleSheet, Text, View, Pressable, TextInput, Modal, ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import AxiosIntance from '../utils/AxiosIntance';
import { StyleCategory } from '../css/Styles';

const CategoryManagerItem = (props) => {
  const { dulieu1 } = props;
  const [params] = dulieu1;

  const [categoryManagerNameItem, setcategoryManagerNameItem] = useState({})
  const [modalVisible, setModalVisible] = useState(false);

  const updateCategoryManager = async () => {
    setModalVisible(false);
    const reponse = await AxiosIntance().post('/Category/' + params._id + '/update-by-id', {name: categoryManagerNameItem});
    if (reponse) {
      props.changeCategoryManager();
      ToastAndroid.show('Cập nhật thành công', ToastAndroid.SHORT);
    }else{
      ToastAndroid.show('Cập nhật thất bại', ToastAndroid.SHORT);
    }
  }

  const deleteCategoryManager = async () =>{
    const reponse = await AxiosIntance().post('/Category/' + params._id + '/delete');
    if (reponse) {
      props.changeCategoryManager();
      ToastAndroid.show('Xóa thành công', ToastAndroid.SHORT);
    }else{
      ToastAndroid.show('Xóa thất bại', ToastAndroid.SHORT);
    }
  }

  return (
    <View>
      <Text>{params.name}</Text>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Icon name='pencil' />
      </Pressable>
      
      <Pressable onPress={deleteCategoryManager}>
        <Icon name='trash-outline' />
      </Pressable>

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={StyleCategory.centeredView}>
            <View style={StyleCategory.modalView}>
              <TextInput placeholder='Danh mục' onChangeText={setcategoryManagerNameItem}/>

              <Pressable style={StyleCategory.pressableModal} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={StyleCategory.textPressable}>Hủy</Text>
              </Pressable>

              <Pressable style={[StyleCategory.pressableModal, { backgroundColor: '#3669C9' }]} onPress={updateCategoryManager}>
                <Text style={StyleCategory.textPressable}>Cập nhật</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>

  )
}

export default CategoryManagerItem

const styles = StyleSheet.create({})