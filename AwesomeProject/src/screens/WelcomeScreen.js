import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styleWelcome } from '../css/Styles'
import {images} from '../component/Slideshow/images';
import Slideshow from '../component/Slideshow/Slideshow'
const WelcomeScreen = () => {
  return (
    <View style={styleWelcome.view}>
      <Text style={styleWelcome.text}>Hãy mua những thứ bạn muốn</Text>
         <Slideshow
        isAutoSroll={true}
        width={'80%'}
        imagesource={images}
        flex={0.8}
        image
        heightRate={0.7}
        paginationEnabled={true}
      />
        <TouchableOpacity
        activeOpacity={0.7}
        style={[styleWelcome.TextInput]}>
            <Text
            style={styleWelcome.MiniTextInput}
            >Bắt đầu</Text>
        </TouchableOpacity>
     
    </View>
  )
}

export default WelcomeScreen