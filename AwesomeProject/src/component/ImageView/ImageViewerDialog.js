import React, { useState } from 'react';
import { View, Image, TouchableOpacity,Text } from 'react-native';
import Modal from 'react-native-modal';

const  ImageViewer=({ imageUrl,isModalVisible,setModalVisible }) =>{

  const toggleModal = () => {
    setModalVisible(false);
  };

  return (
    <View>

      <Modal 
      animationIn={"zoomIn"}
      
      isVisible={isModalVisible}
      backdropOpacity={1}
      >

         <TouchableOpacity style={{
            position:'absolute',
            top:0,
            right:0,
            backgroundColor:'white',
            borderRadius:30
            }} onPress={toggleModal}>
                <Image 
                style={{width:30,height:30}}
                source={require('../../images/deleteimg1.png')}/>

             
          </TouchableOpacity>
        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{ uri: imageUrl }} style={{ width: '100%', height: '100%' }} />
          
        </View>
        
      </Modal>
    </View>
  );
}

export default ImageViewer;