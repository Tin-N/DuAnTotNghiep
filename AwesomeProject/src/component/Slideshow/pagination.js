import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const Pagination = (props) => {
  const {data, indexP, setNewIndex,enablePagination}= props;
  const onHandlePress = index => {
    setNewIndex(index); // Gọi hàm callback để truyền dữ liệu lên cha
  };

  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        return (
          <TouchableOpacity

            key={index.toString()}
            style={[
              enablePagination == true ? styles.dot : { display: 'none' },
              { opacity: index === indexP ? 1 : 0.5 },
            ]}
            
            onPress={() => onHandlePress(index)} // Gọi hàm khi TouchableOpacity được nhấn (Truyền vị trí dots)
          ></TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = {
  dot: {
    backgroundColor: '#ffffff',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  container: {
    // Looix 
    marginTop:-130,
    marginBottom:50,
    // 
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
