import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Item = props => {
  const { data, indexP, setNewIndex } = props;
  const [index, setindex] = useState();
  const [viewWidth, setViewWidth] = useState(0);
  const [isChosen, setIsChosen] = useState(false);
  const onHandlePress = index => {
    setNewIndex(index);
    // Gọi hàm callback để truyền dữ liệu lên cha
  };
  useEffect(() => {
    // Đợi đến khi đoạn văn bản đã được hiển thị và có kích thước thật sự.
    if (data.name.length > 0) {
      setViewWidth(data.name.length);
    }
    if (data.name.length > 15) {
      setViewWidth(data.name.length - 5);
    }
  }, [data.name.length]);

  return (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity style={{
        padding:20, backgroundColor: data.color, borderRadius:15
      }}>
        <Image source={require('../../images/star.png')}/>
      </TouchableOpacity>
      <Text style={{fontFamily:'TiltNeon-Regular', 
      marginTop:5, color:'black'}}>{data.name}</Text>
    </View>
  );
};

export default Item;
