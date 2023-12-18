import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { Dimensions } from 'react-native'
import ItemList from './Item';
import ItemHomeStore from '../../screens/personStore/ItemHomeStore';
const ProductList = (props) => {
    const { count,data,styleView,infinitiveScroll,loadMoreData,isLoadingmini, ...customSetting} = props
    const [data1, setData] = useState(data); // Sử dụng trực tiếp data
    const [isLoading, setIsLoading] = useState(false);


    const handleLoadMore = () => {
     if(typeof count!=='undefined')
     {
      if(count>data.length){
        console.log("Aiyaaa1");

        if (infinitiveScroll&&loadMoreData()) {
          console.log("Aiyaaa2");
          
          // loadMoreData();
      }
     }
    }   
    };
    const FooterLoading = () => {


      return(
        <View style={{marginVertical:20}}>
            { 
            (isLoadingmini&&infinitiveScroll) ?
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator
                      color={"blue"}
                      size={'small'}
                      />
                    <Text style={{marginLeft:5}}>Loading... </Text>
                    </View>
                    :
                <View/>
                
                }
          </View>
          )
    }
  return (
    <View style={[styleView]}>
      <FlatList
      {...customSetting}
      data={data} // data sẽ truyền thằng vào nếu data1 rỗng
      renderItem={({item})=>(<ItemHomeStore dulieu={item}/>)}
      onEndReachedThreshold={1}
      ListFooterComponent={FooterLoading}
      onMomentumScrollBegin = {() => {this.onEndReachedCalledDuringMomentum = false;}}
      overScrollMode='never'
      onEndReached = {() => {
    if (!this.onEndReachedCalledDuringMomentum) {
      handleLoadMore();    // LOAD MORE DATA
      this.onEndReachedCalledDuringMomentum = true;
    }
  }}
      />
            
 
</View>
                    


  )
}

export default ProductList