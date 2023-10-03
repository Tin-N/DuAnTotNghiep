import {View, Text} from 'react-native';
import React, { useState } from 'react';
import Slideshow from '../component/Slideshow/Slideshow';
import SearchSuggestion from '../component/SearchSuggestions/SearchSuggestions';
import NoResult from '../component/SearchSuggestions/NoResult';
import { FetchData } from '../component/ProductList/data';
import ProductList from '../component/ProductList/ProductList';
const TestScreen = () => {
  const [column, setcolumn] = useState(2)
  return (
    <View>
      {/* <Slideshow
        width={'80%'}
        flex={0.8}
        heightRate={0.4}
        paginationEnabled={true}
      /> */}
      {/* <SearchSuggestion
        src={require('../images/Searchbar/search.png')}
        deleteEnabled={true}
      /> */}
      {/* <NoResult/> */}
      {/* <ProductList 
      data={FetchData()}   
      styleView={{width:'100%',paddingTop:10}}
      horizontal 
      showsHorizontalScrollIndicator={false}
           
      /> */}
      
    </View>
  );
};

export default TestScreen;
