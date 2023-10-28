import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { Dimensions } from 'react-native'
import ItemList from './Item';
const ProductList = (props) => {
    const { data,styleView,infinitiveScroll,loadMoreData, ...customSetting} = props
    const [data1, setData] = useState(data); // Sử dụng trực tiếp data
    const [isLoading, setIsLoading] = useState(false);


    const handleLoadMore = () => {
      if (!isLoading&&infinitiveScroll) {
        setIsLoading(true);
        loadMoreData().then((newData) => {
          setTimeout(() => {
            if(newData!==data1){
              setData([...data1, ...newData]);
              setIsLoading(false);
              console.log("Co chay maaaas  ",newData,data1 );

            }
            
          }, 2000);
        });
      }
    };
  return (
    <View style={[styleView]}>
      <FlatList
      {...customSetting}
      data={data1.length>0?data1:data} // data sẽ truyền thằng vào nếu data1 rỗng
      renderItem={({item})=>(<ItemList data={item}/>)}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={1}
      />
     {
        (isLoading) ?
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