import React, {useRef, useEffect} from 'react';
import {Modal, Text, TouchableOpacity, View, Animated,Image} from 'react-native';
const BounceModal = ({isVisible, onSubmit, onClose, itemToDelete}) => {
  const bounceValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.spring(bounceValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      bounceValue.setValue(0);
    }
  }, [isVisible, bounceValue]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View
        style={{
         
          width: '100%',
          height: '90%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            backgroundColor: 'white',
            padding: 3,
            transform: [{scale: bounceValue}],
            borderRadius:10,
            borderWidth:1,
            borderColor:'gray'
          }}>
          <View style={{padding: 20}}>
            <Text
              style={{
                fontSize: 20,
                color:'black'
              }}>{`Bạn có chắc chắn xóa ${itemToDelete} không?`}</Text>
              <Image
              style={{width:100,height:100, alignSelf:'center'}}
                source={{uri:"https://cdn.dribbble.com/users/592004/screenshots/2953817/___.gif"}}
              />
           <View 
           style={{
            flexDirection:"row",
            justifyContent:'space-evenly'
           }}>
           <TouchableOpacity
           style={{
            
            padding:10,
            backgroundColor:'#0184ff',
            borderRadius:10,
           }}
           activeOpacity={0.7}
           onPress={onSubmit}>
              <Text
              style={{
                color:'white',

                fontSize:17

              }}
              >Xác nhận</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
              padding:10,
              backgroundColor:'#0184ff',
              borderRadius:10,
            }}
            activeOpacity={0.7}
            onPress={onClose}>
              <Text 
               style={{
                color:'white',
                fontSize:17,
                
              }}
              >Đóng</Text>
            </TouchableOpacity>
           </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BounceModal;
