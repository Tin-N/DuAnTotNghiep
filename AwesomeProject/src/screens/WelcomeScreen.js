import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styleWelcome } from '../css/Styles'
import Slideshow from '../component/Slideshow/Slideshow'
const WelcomeScreen = () => {
  return (
    <View style={styleWelcome.view}>
      <Text style={styleWelcome.text}>Buy everything what you want</Text>
         <Slideshow
        isAutoSroll={true}
        width={'80%'}
        flex={0.8}
        heightRate={0.7}
        paginationEnabled={true}
      />
        <TouchableOpacity
        style={[styleWelcome.TextInput]}>
            <Text
            style={styleWelcome.MiniTextInput}
            >Get Started</Text>
        </TouchableOpacity>
     
    </View>
  )
}

export default WelcomeScreen