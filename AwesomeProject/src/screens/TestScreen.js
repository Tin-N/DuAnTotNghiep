import {View, Text} from 'react-native';
import React, { useState } from 'react';
import Slideshow from '../component/Slideshow/Slideshow';
import SearchSuggestion from '../component/SearchSuggestions/SearchSuggestions';
import NoResult from '../component/SearchSuggestions/NoResult';
import { FetchData } from '../component/ProductList/data';
import ProductList from '../component/ProductList/ProductList';
import Searchbar from '../component/Seachbar/Searchbar';
import Item from '../component/CategoryList/Item';
import CategoryList from '../component/CategoryList/CategoryList';
import Banner from '../component/Banner/Banner';
import Pagination from '../component/Pagination/Pagination';
import SearchFilter from '../component/Filter/SearchFilter';
const TestScreen = () => {
  const [column, setcolumn] = useState(2)
  const[page,setPage]=useState(1);
  return (
    <View  style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
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
      {/* <Searchbar/> */}
      {/* <CategoryList/> */}
{/* <Banner/> */}
{/* <Pagination
totalPages={10}
 currentPage={page} 
onPageChange={setPage}
maxVisiblePages={4}
/> */}
<SearchFilter/>
    </View>
  );
};

export default TestScreen;
