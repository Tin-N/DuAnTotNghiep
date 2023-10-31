import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {StyleSearchSuggestions} from '../../css/Styles';
const SearchItem = props => {
  const {source, SearchItem, enableDelete} = props;
  const TextWithLimit=({ text, limit }) => {
    // Kiểm tra xem văn bản có vượt quá giới hạn không
    if (text.length > limit) {
      // Nếu vượt quá, cắt văn bản và thêm dấu ba chấm
      const truncatedText = text.slice(0, limit) + '...';
      
      return <Text style={StyleSearchSuggestions.text}>{truncatedText}</Text>;
    }
  
    // Nếu không vượt quá, hiển thị văn bản gốc
    return <Text style={StyleSearchSuggestions.text}>{text}</Text>;
  }
  return (
    <View style={StyleSearchSuggestions.WholeViewInItem}>
      <View style={StyleSearchSuggestions.viewInside}>
        <Image source={source} style={StyleSearchSuggestions.image} />
        <TextWithLimit 
          text={SearchItem}
          limit={27}
        />
        {/* <Text style={StyleSearchSuggestions.text} numberOfLines={2}  >
          {SearchItem}
        </Text> */}
      </View>
      {enableDelete == true ? (
        <Image
          style={StyleSearchSuggestions.image}
          source={require('../../images/Searchbar/x.png')}></Image>
      ) : (
        <View />
      )}
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({});
