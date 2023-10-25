import { StyleSheet, Text, View, FlatList, TextInput, Pressable, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryManagerItem from './CategoryManagerItem'
import AxiosIntance from '../utils/AxiosIntance';
import { StyleOrder } from '../css/Styles';


const CategoryManager = () => {
  const [categoryManager, setcategoryManager] = useState([]);
  const [categoryManagerName, setcategoryManagerName] = useState({});
  const [changeCategoryManager, setchangeCategoryManager] = useState(false);
  useEffect(() => {
    const getCategoryManager = async () => {
      const reponse = await AxiosIntance().get('/Category/getCategory');
      if (reponse) {
        setcategoryManager(reponse.categories);
      }
    }
    getCategoryManager();
    return () => {
    }
  }, [changeCategoryManager])

  const addCategoryManager = async () => {
    if (categoryManagerName != "") {
      const reponse = await AxiosIntance().post('/Category/addCategory', { name: categoryManagerName });
      if (reponse) {
        changeCategoryManagerFun();
        ToastAndroid.show('Thêm thành công', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Thêm thất bại', ToastAndroid.SHORT);
      }
    }
    changeCategoryManagerFun();
  }

  function changeCategoryManagerFun() {
    setchangeCategoryManager(!changeCategoryManager);
  }

  return (
    <View style={{ flexDirection: 'column', height: 760, justifyContent: 'space-between', }}>
      <View style={{borderWidth: 0.2, borderRadius: 5,  margin: 5, padding: 5}}>
        <FlatList
          data={categoryManager}
          renderItem={({ item }) => <CategoryManagerItem dulieu1={[item]} changeCategoryManager={changeCategoryManagerFun} />}
          keyExtractor={item => item._id}
        />
      </View>

      <View style={{flexDirection: 'row',}}>
        <TextInput placeholder='Danh mục' onChangeText={setcategoryManagerName} style={{width:'75%', borderWidth: 0.2, borderRadius: 5, padding: 0.2}}/>
        <Pressable onPress={addCategoryManager} style={StyleOrder.pressable} >
          <Text>Thêm</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CategoryManager

const styles = StyleSheet.create({})

