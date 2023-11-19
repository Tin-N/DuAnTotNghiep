import React from 'react'
import { View, Image, TouchableOpacity, TextInput, Text } from 'react-native';

import { StyleSearch } from '../../css/Styles'
const Searchbar = (props) => {
  const { onChangeText, onSubmitText, onClick, isSearch, handleClick, text, styleInput, ...customSetting } = props;
  const handleClickTO = () => {
    handleClick();
  }
  return (

    <View style={StyleSearch.viewSearchbar}>
      <View style={StyleSearch.boxSearch}>
        <TextInput
          style={[StyleSearch.textInput2, styleInput]}
          placeholder='Tìm kiếm...'
          onChangeText={onChangeText}
          onTouchStart={() => {
            if (onClick)
              handleClickTO()
          }}
          onSubmitEditing={onSubmitText}
          value={text}
          {...customSetting}
        />
      </View>
      <TouchableOpacity
        onPress={onSubmitText}
        style={[StyleSearch.TouchableOpacity, { display: isSearch == true ? 'flex' : 'none' }]}>
        <Image style={StyleSearch.iconSearch} source={require('../../images/Searchbar/search.png')} />
      </TouchableOpacity>

    </View>
  );
};
export default Searchbar;
