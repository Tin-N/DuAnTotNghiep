import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const Item = props => {
  const {data, indexP, setNewIndex} = props;
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
    <View
      style={{
        borderColor: 'black',
        borderWidth: 0.8,
        padding: 2.5,
        borderRadius: 5,
        backgroundColor: 'white',
        margin: 5
      }}>
      <Text
        onPress={() => {
          onHandlePress(data.id);
        }}
        style={{
          height:23,
          color: 'black',
          padding: 1,
          width: viewWidth * 10.5,
          textAlign: 'center',
          textAlignVertical:'center',
          fontSize: 15,
        }}>
        {data.name}
      </Text>
    </View>
  );
};

export default Item;
