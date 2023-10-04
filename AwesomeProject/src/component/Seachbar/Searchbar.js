import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSearch } from '../../css/Styles'
const Searchbar = () => {
  return (
    <View style={StyleSearch.viewSearchbar}>
      <TextInput style={StyleSearch.textInput} placeholder='Searching for...'>
      </TextInput>
      <Image style={StyleSearch.iconSearch} source={require('../../images/Searchbar/search.png')} />

    </View>
  )
}

export default Searchbar