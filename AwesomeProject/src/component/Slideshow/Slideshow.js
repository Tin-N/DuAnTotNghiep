import { StyleSheet, View, FlatList } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { images } from './images';
import Pagination from './pagination';
import SlideItems from './SlideItems';
const Slideshow = props => {
  // Props
  const {
    imagesource,
    isAutoSroll,
    width,
    flex,
    heightRate,
    widthRate,
    paginationEnabled,
    styleItem,
    styleViewWelcome
  } = props;
  // Vị trí trong flatlist
  const [index, setIndex] = useState(0);
  // useState
  const [imageSource, setImageSource] = useState([]);
  const [autoScroll, setAutoScroll] = useState(false);
  const [widthR, setWidthR] = useState('80%');
  const [flexH, setflexH] = useState(0.8);
  const [hRate, sethRate] = useState(0.4);
  const [wRate, setwRate] = useState(1);
  const [enablePagination, setEnablePagination] = useState(false);

  // Custom setting slideshow
  useEffect(() => {
    const customSlideshow = () => {
      if (typeof imagesource !== 'undefined') {
        setImageSource(imagesource);
      } else {
        setImageSource(images);
      }

      if (typeof isAutoSroll !== 'undefined') {
        setAutoScroll(isAutoSroll);
      } else {
        setAutoScroll(false);
      }

      if (typeof width !== 'undefined') {
        setWidthR(width);
      } else {
        setWidthR('80%');
      }

      if (typeof flex !== 'undefined') {
        setflexH(flex);
      } else {
        setflexH(0.8);
      }

      if (typeof heightRate !== 'undefined') {
        sethRate(heightRate);
      } else {
        sethRate(0.4);
      }

      if (typeof widthRate !== 'undefined') {
        setwRate(widthRate);
      } else {
        setwRate(1);
      }

      if (typeof paginationEnabled !== 'undefined') {
        setEnablePagination(paginationEnabled);
      } else {
        setEnablePagination(false);
      }
    };

    customSlideshow();
    // return () => {

    // }
  }, [
    imagesource,
    isAutoSroll,
    width,
    flex,
    heightRate,
    widthRate,
    paginationEnabled,
  ]);

  // slide by time
  const [running, setrunning] = useState(false);

  useEffect(() => {
    if (autoScroll) {
      const timeoutId = setTimeout(() => {
        if (index < imageSource.length - 1) {
          setIndex(prevIndex => prevIndex + 1);
          flatListRef.current.scrollToIndex({ animated: true, index: index + 1 });
        } else {
          setIndex(0);
          flatListRef.current.scrollToIndex({ animated: true, index: 0 });
        }
        setrunning(!running);
      }, 3000); // Thời gian đặt trong milliseconds (ở đây là 3 giây)

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [running, autoScroll]);

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
    <View style={styleViewWelcome ? styleViewWelcome: {}}>
      <FlatList
        ref={flatListRef}
        data={imageSource}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <SlideItems
            styleItem={styleItem}
            item={item}
            widthR={widthR}
            flexH={flexH}
            heightRate={hRate}
            widthRate={wRate}
          />
        )}
      />
      <Pagination
        data={imageSource}
        indexP={index}
        // Hàm setnewIndex đã được gắn trước
        setNewIndex={scrollToIndex}
        enablePagination={enablePagination}
      />
    </View>
  );
};

export default Slideshow;
