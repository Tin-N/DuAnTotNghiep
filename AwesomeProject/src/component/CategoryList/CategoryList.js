import { FlatList, StyleSheet, Text, View } from 'react-native'
import React ,{useState,useRef} from 'react'
import { fetchingData } from './data'
import Item from './Item'
const CategoryList = () => {
// Vị trí trong flatlist
const [index, setIndex] = useState(0);

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

  return (
    <View style={{marginTop:20, width:'100%'}}>
        <FlatList
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
            onViewableItemsChanged={handleOnViewableItemsChanged}
            snapToAlignment="center"
            horizontal
            data={fetchingData()}
            renderItem={({item})=>(<Item data={item} setNewIndex={scrollToIndex}/>)}
        />
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({})