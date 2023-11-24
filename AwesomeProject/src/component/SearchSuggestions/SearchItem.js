import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSearchSuggestions } from '../../css/Styles';
import AxiosIntance from '../../utils/AxiosIntance';
const SearchItem = props => {
  const { source, enableDelete, item, getText, handleCheck } = props;
  const [text, settext] = useState("");
  const limit = 27;
  useEffect(() => {
    const setText = () => {
      if (item.keyword.length > limit)
        settext(item.keyword.slice(0, limit) + '...')
      else
        settext(item.keyword)
    }
    setText();
    return () => {

    }
  }, [])

  // const TextWithLimit = ({ text, limit }) => {
  //   // Kiểm tra xem văn bản có vượt quá giới hạn không
  //   if (text.length > limit) {
  //     // Nếu vượt quá, cắt văn bản và thêm dấu ba chấm
  //     const truncatedText = 
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
    getText(text);
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
          >{text}</Text>
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

export default SearchItem;

