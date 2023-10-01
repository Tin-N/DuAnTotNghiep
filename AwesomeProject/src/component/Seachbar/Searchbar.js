import { View, Text, TextInput,Image } from 'react-native'
import React from 'react'

const Searchbar = () => {
  return (
    <View>
      <TextInput/>
      <Image
      source={require('../../images/Searchbar/search.png')}/>
    </View>
  )
}

export default Searchbar