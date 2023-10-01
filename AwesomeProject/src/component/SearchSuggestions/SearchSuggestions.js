import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {StyleSearchSuggestions} from '../../css/Styles';
import {fetchingData} from './FetchSearchSuggestion';
import SearchItem from './SearchItem';
import {StyleSearchSuggestions} from '../../css/Styles';

const SearchSuggestion = (props) => {
  // Props
  const {src, deleteEnabled,data} = props;

  // useState
  const [source, setSource] = useState(
    require('../../images/Searchbar/light-search.png'),
  );
  const [enableDelete, setEnableDelete] = useState(false);

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
        <Text style={StyleSearchSuggestions.title}>Search suggestion </Text>
        <FlatList
        style={{marginBottom: 40}}
          nestedScrollEnabled={true}
          data={fetchingData()}
          renderItem={({item}) => (
            <SearchItem
              SearchItem={item}
              source={source}
              enableDelete={enableDelete}
            />
          )}
        />
      </View>
    //  </ScrollView>
  );
};

export default SearchSuggestion;
