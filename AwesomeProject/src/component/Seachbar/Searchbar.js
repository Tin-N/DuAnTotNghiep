import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSearch } from '../../css/Styles'
const Searchbar = (props) => {
  const {onChangeText}=props;
  return (
    <View style={StyleSearch.viewSearchbar}>
      <TextInput style={StyleSearch.textInput} placeholder='Tìm kiếm bằng tên thực phẩm' onChangeText={onChangeText}>
      </TextInput>
      <Image style={StyleSearch.iconSearch} source={require('../../images/Searchbar/search.png')} />
    </View>
  )
}

export default Searchbar