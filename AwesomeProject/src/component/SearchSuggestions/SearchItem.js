import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSearchSuggestions } from '../../css/Styles';
import AxiosIntance from '../../utils/AxiosIntance';
const SearchItem = props => {
  const { source, enableDelete, item, getText, handleCheck } = props;
  const limit = 27;
  const setTextSlice = (text) => {
    if (text.length > limit)
      return text.slice(0, limit) + "...";

    return text;
  }



  // const TextWithLimit = ({ text, limit }) => {
  //   // Kiểm tra xem văn bản có vượt quá giới hạn không
  //   if (text.length > limit) {
  //     // Nếu vượt quá, cắt văn bản và thêm dấu ba chấm
  //     const truncatedText = text.keyword.slice(0, limit) + '...';
  //     return (
  //       <TouchableOpacity onPress={()=>{handleTextClick(truncatedText);console.log(truncatedText);}}>
  //         <Text style={StyleSearchSuggestions.text} >
  //         {truncatedText}
  //       </Text>
  //       </TouchableOpacity>
  //     );
  //   }

  //   // Nếu không vượt quá, hiển thị văn bản gốc
  //   return <Text style={StyleSearchSuggestions.text}>{text}</Text>;
  // };
  const handleTextClick = () => {
    getText(item.keyword);
  }

  const deleteHistory = async () => {
    const response = await AxiosIntance().post("/historySearchAPI/deleteHistorySearch?id=" + item._id);
    if (response.result) {
      console.log("Xóa thành công" + item.keyword);
      handleCheck();
    }
  }

  return (
    <View style={StyleSearchSuggestions.WholeViewInItem}>
      <TouchableOpacity onPress={handleTextClick}>
        <View style={StyleSearchSuggestions.viewInside}>
          <Image source={source} style={StyleSearchSuggestions.image} />
          <Text


          style={{
            textAlignVertical:'center'
          }}
          >
            {setTextSlice(item.keyword)}
          </Text>
        </View>
      </TouchableOpacity>
      {enableDelete === true ? (
        <TouchableOpacity onPress={deleteHistory}>
          <Image
            style={StyleSearchSuggestions.image}
            source={require('../../images/Searchbar/x.png')}
          ></Image>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}

export const TextWithLimit = ({ text, limit, styleView }) => {
  // Kiểm tra xem văn bản có vượt quá giới hạn không
  if (text.length > limit) {
    // Nếu vượt quá, cắt văn bản và thêm dấu ba chấm
    const truncatedText = text.slice(0, limit) + "..."
    return (

      <Text style={[StyleSearchSuggestions.text, { fontSize: 15, fontWeight: '400' }]} >

        {truncatedText}
      </Text>

    );
  }

  // Nếu không vượt quá, hiển thị văn bản gốc
  return <Text style={[StyleSearchSuggestions.text, { fontSize: 15, fontWeight: '400' }]}>{text}</Text>;
};
export default SearchItem;

