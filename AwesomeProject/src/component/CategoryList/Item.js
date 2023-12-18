import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'

const Item = props => {
  const navigation=useNavigation();
  const { data, indexP, setNewIndex } = props;
  const [index, setindex] = useState();
  const [viewWidth, setViewWidth] = useState(0);
  const [isChosen, setIsChosen] = useState(false);
  // const onHandlePress = index => {
  //   setNewIndex(index);
  //   // Gọi hàm callback để truyền dữ liệu lên cha
  // };

  const handleClick = ()=>{
    navigation.navigate("CategoryDetailList",{categoryID:data._id,name:data.name});
    console.log(data._id+data.name);
  }
  return (
    <View style={{alignItems:'center',paddingRight:20}}>
      <TouchableOpacity 
      onPress={handleClick}
      style={{
        width:60,height:60, backgroundColor: data.color, borderRadius:15
      }}
      // onPress={()=>onHandlePress(data._id)}
      >
        <View
        style={{
          alignItems:'center',width:"100%"
        }}
        >
        <Image source={{uri:data.images}} style={{marginTop:10,width:40,height:40}}/>

        </View>
      </TouchableOpacity>
      <Text style={{fontFamily:'TiltNeon-Regular', 
      marginTop:5, color:'black'}}>{data.name}</Text>
    </View>
  );
};

export default Item;
