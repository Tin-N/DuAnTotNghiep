import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { images } from './images';
import SlideItems from './SlideItems';
import Pagination from './pagination';

const Slideshow = (props) => {
  // Props 
  const { width, flex, heightRate, widthRate, paginationEnabled } = props;

  // useState
  const [widthR, setWidthR] = useState('80%');
  const [flexH, setflexH] = useState(0.8);
  const [hRate, sethRate] = useState(0.4);
  const [wRate, setwRate] = useState(1);
  const [enablePagination, setEnablePagination] = useState(false)

  // Custom setting slideshow
  useEffect(() => {
    const customSlideshow = () => {

      if (typeof width !== 'undefined')
        setWidthR(width)
      else
        setWidthR('80%');


      if (typeof flex !== 'undefined')
        setflexH(flex)
      else
        setflexH(0.8);


      if (typeof heightRate !== 'undefined')
        sethRate(heightRate)
      else
        sethRate(0.4)


      if (typeof widthRate !== 'undefined')
        setwRate(widthRate)
      else
        setwRate(1);


      if (typeof paginationEnabled !== 'undefined')
        setEnablePagination(paginationEnabled)
      else
        setEnablePagination(false);
    }

    customSlideshow();
    // return () => {

    // }
  }, [width, flex, heightRate, widthRate, paginationEnabled])

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
        renderItem={({ item }) => (
          <SlideItems
            item={item}
            widthR={widthR}
            flexH={flexH}
            heightRate={hRate}
            widthRate={wRate}
          />
        )}
      />
      <Pagination
        data={images}
        indexP={index}
        // Hàm setnewIndex đã được gắn trước
        setNewIndex={scrollToIndex}
        enablePagination={enablePagination}
      />
    </View>
  );
};

export default Slideshow;

