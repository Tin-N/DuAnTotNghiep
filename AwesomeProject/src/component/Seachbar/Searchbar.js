import React from 'react'
import {View, Image,TouchableOpacity,TextInput} from 'react-native';

import { StyleSearch } from '../../css/Styles'
const Searchbar = (props) => {
  const {onChangeText,onSubmitText}=props;

  return (

    <View style={StyleSearch.viewSearchbar}>
      <TextInput 
      style={StyleSearch.textInput2} 
      placeholder='Tìm kiếm bằng tên thực phẩm' 
      onChangeText={onChangeText} 
      />
      <TouchableOpacity 
      onPress={onSubmitText}
      style={StyleSearch.TouchableOpacity}>
      <Image style={StyleSearch.iconSearch} source={require('../../images/Searchbar/search.png')} />

      </TouchableOpacity>
    </View>
  );
};
export default Searchbar;
