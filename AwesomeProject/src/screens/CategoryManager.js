import { StyleSheet, Text, View, FlatList, TextInput, Pressable, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryManagerItem from './CategoryManagerItem'
import AxiosIntance from '../utils/AxiosIntance';
import { StyleOrder, SytleCategoryManager } from '../css/Styles';


const CategoryManager = () => {
  const [categoryManager, setcategoryManager] = useState([]);
  const [categoryManagerNameAdd, setcategoryManagerNameAdd] = useState({});
  const [changeCategoryManager, setchangeCategoryManager] = useState(false);
  const name = [];
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

  for (let i = 0; i < categoryManager.length; i++) {
    const category = categoryManager[i].name;
    name.push(category);
  }

  const addCategoryManager = async () => { 
    if (categoryManagerNameAdd != "" && name.includes(categoryManagerNameAdd) == false) {
      const reponse = await AxiosIntance().post('/Category/addCategory', { name: categoryManagerNameAdd });
      if (reponse) {
        changeCategoryManagerFun();
        ToastAndroid.show('Thêm thành công', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Thêm thất bại', ToastAndroid.SHORT);
      }
    }else{
      ToastAndroid.show('Bạn đang bỏ trống hoặc đã có danh mục này', ToastAndroid.SHORT);
    }
    changeCategoryManagerFun();
  }

  function changeCategoryManagerFun() {
    setchangeCategoryManager(!changeCategoryManager);
  }

  return (
    <View style={SytleCategoryManager.container}>
      <View style={SytleCategoryManager.viewTop}>
        <TextInput placeholder= 'Danh mục' onChangeText={setcategoryManagerNameAdd} style={SytleCategoryManager.textInput}/>
        <Pressable onPress={addCategoryManager} style={SytleCategoryManager.pressable} >
          <Text style={SytleCategoryManager.textPressable}>Thêm</Text>
        </Pressable>
      </View>

      <View>
        <FlatList
          data={categoryManager}
          renderItem={({ item }) => <CategoryManagerItem dulieu1={[item]} changeCategoryManager={changeCategoryManagerFun} />}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  )
}

export default CategoryManager

const styles = StyleSheet.create({})

