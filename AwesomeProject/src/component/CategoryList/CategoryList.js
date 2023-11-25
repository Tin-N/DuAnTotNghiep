import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { fetchingData } from './data'
import Item from './Item'
import { useEffect } from 'react'
import AxiosIntance from '../../utils/AxiosIntance'
const CategoryList = () => {
  // Vị trí trong flatlist
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([])
  useEffect(() => {
    const getCategory= async () =>{
      const response= await AxiosIntance().get("/Category/getCategory");
      if(response.result)
      setData(response.categories);
      else
      ToastAndroid.show("Lỗi lấy category...",ToastAndroid.SHORT);
    }
    getCategory();
    return () => {
      
    }
  }, [])
  
  // Lấy vị trí hiện tại của phần tử trong flatlist
  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const flatListRef = useRef(null);
  // Hàm ref cuộn flatlist tới vị trí được chọn từ pagination
  const scrollToIndex = index => {
    // Sử dụng flatListRef để cuộn đến mục ở vị trí cụ thể
    flatListRef.current.scrollToIndex({ index, animated: true });
  };
  // tạo khoảng trống cho các item trong FlatList
  const SeparatorComponent = () => {
    return <View style={{ width: 5, backgroundColor: 'white' }} />;
  };

  return (
    <View style={{ width: '100%' }}>
      <View style={{ padding:10 }}>
        <Text style={{ paddingLeft: 10, color: 'black', fontSize: 20 }}>
          Danh mục
        </Text>
      </View>
      {data.length>0?
      <FlatList
        
        overScrollMode='never'
        style={{ paddingLeft:10, backgroundColor: 'white'}}
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        snapToAlignment="center"
        horizontal
        scrollEnabled={true}
        ItemSeparatorComponent={SeparatorComponent}
        data={data}
        renderItem={({ item }) => (<Item data={item} setNewIndex={scrollToIndex} />)}
      />:<View/>}
    </View>
  )
}

export default CategoryList

