import {
  StyleSheet,
  Animated,
  Dimensions,
  Text,
  View,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {images} from './images';
import SlideItems from './SlideItems';
import Pagination from './pagination';

const Slideshow = () => {
  // Vị trí trong flatlist
  const [index, setIndex] = useState(0);

  // Lấy vị trí hiện tại của phần tử trong flatlist
  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].index);
  }).current;

  const flatListRef = useRef(null);
  // Hàm ref cuộn flatlist tới vị trí được chọn từ pagination
  const scrollToIndex = index => {
    // Sử dụng flatListRef để cuộn đến mục ở vị trí cụ thể
    flatListRef.current.scrollToIndex({index, animated: true});
  };

  // Slideshow view
  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={images}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <SlideItems
            item={item}
            widthR={'80%'}
            flexH={0.8}
            heightRate={0.4}
            widthRate={1}
          />
        )}
      />
      <Pagination
        data={images}
        indexP={index}
        // Hàm setnewIndex đã được gắn trước
        setNewIndex={scrollToIndex}
      />
    </View>
  );
};

export default Slideshow;

const styles = StyleSheet.create({});
