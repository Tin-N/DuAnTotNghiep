import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {StyleSearchSuggestions} from '../../css/Styles';
import {fetchingData} from './FetchSearchSuggestion';
import SearchItem from './SearchItem';
import {StyleSearchSuggestions} from '../../css/Styles';
import AxiosIntance from '../../utils/AxiosIntance';

const SearchSuggestion = (props) => {
  // Props
  const {src, deleteEnabled,data,setItem,getText,setCheck,check} = props;
  // const [check, setCheck1] = useState(false)

  // useState
  const [source, setSource] = useState(
    require('../../images/Searchbar/light-search.png'),
  );
  const [enableDelete, setEnableDelete] = useState(false);
   
  const handleTextClick = (truncatedText) => {
    // Truyền giá trị truncatedText lên SearchScreen
    getText(truncatedText);
  };

  const handleCheck=()=>{
    setCheck(!check)
  }
  // Custom setting Search Item
  useEffect(() => {
    const getHooks = () => {
      if (typeof src == 'undefined')
        setSource(require('../../images/Searchbar/light-search.png'));
      else setSource(src);

      if (typeof deleteEnabled == 'undefined') setEnableDelete(false);
      else setEnableDelete(deleteEnabled);
    };

    getHooks();
    // return () => {

    // }
  }, [src, deleteEnabled]);

  return (
    // <ScrollView>
      <View style={{margin: 10}}>
        <Text style={StyleSearchSuggestions.title}>Lịch sử tìm kiếm </Text>
        <FlatList
      keyExtractor={(item) => item._id.toString()} // Đảm bảo keyExtractor đủ duy nhất cho mỗi mục
        style={{marginBottom: 40}}
          nestedScrollEnabled={true}
          data={data?data:fetchingData()}
          renderItem={({item}) => (
            <SearchItem
              item={item}
              source={source}
              enableDelete={enableDelete}
              clickItem={setItem}
              getText={handleTextClick}
              handleCheck={handleCheck}
            />
          )}
        />
      </View>
    //  </ScrollView>
  );
};

export default SearchSuggestion;
