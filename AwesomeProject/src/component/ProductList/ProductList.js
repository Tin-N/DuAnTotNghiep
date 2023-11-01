import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { Dimensions } from 'react-native'
import ItemList from './Item';
const ProductList = (props) => {
    const { count,data,styleView,infinitiveScroll,loadMoreData,isLoadingmini, ...customSetting} = props
    const [data1, setData] = useState(data); // Sử dụng trực tiếp data
    const [isLoading, setIsLoading] = useState(false);


    const handleLoadMore = () => {
      if(count.length>=data.length){
        if (!isLoading&&infinitiveScroll) {
          setIsLoading(true);
          loadMoreData()
          };
      }
      
      
    };
  return (
    <View style={[styleView]}>
      <FlatList
      {...customSetting}
      data={data} // data sẽ truyền thằng vào nếu data1 rỗng
      renderItem={({item})=>(<ItemList data={item}/>)}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={1}
      />
     {
        (isLoadingmini&&infinitiveScroll) ?
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator
                color={"blue"}
                size={'small'}
                />
              <Text style={{marginLeft:5}}>Loading...</Text>
              </View>
              :
          <View/>
      }           
 
</View>
                    


  )
}

export default ProductList