import { View, Text, FlatList, ActivityIndicator  } from 'react-native'
import React,{useState} from 'react'
import Item from './Item';

const UserList = (props) => {
    const { data,styleView,infinitiveScroll,loadMoreData,isDisableUser,totalPage, ...customSetting} = props
    const [data1, setData] = useState(data); // Sử dụng trực tiếp data
    const [isLoading, setIsLoading] = useState(false);
    // const [totalPage1, settotalPage1] = useState(totalPage)
    let totalPage1=totalPage;
    const renderFooter = ()=>{
        return(
            
                isLoading ?
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <ActivityIndicator
                        color={"blue"}
                        size={'small'}
                        />
                      <Text style={{marginLeft:5}}>Loading...</Text>
                      </View>
                      :
                  <View/>
              
        )
    }

    const handleLoadMore = () => {
        // if(data.length<totalPage){
            if (!isLoading&&infinitiveScroll) {
                setIsLoading(true);
                if(loadMoreData());
                {console.log("loadMoreData",data);
                    setData(data);
                    setIsLoading(false);
                }
            
                // .then((newData) => {
                //     if((newData!==data1)){
                //       setData([...data1,...newData]);
                      
                //       console.log("Ua sao van chay"+totalPage1);
                //       setIsLoading(false); 
                //     }
                    
                // });
        // }
       
        }
      };
      let i=0;
  return (
    <View>
    <View style={[styleView]}>
        {/* <Text>{data1.length +" "+totalPage1+" "+totalPage}</Text> */}
    <FlatList
    nestedScrollEnabled={true}
    keyExtractor={(item) => item._id.toString()}
    {...customSetting}
    data={data1.length>0?data1:data} // data sẽ truyền thằng vào nếu data1 rỗng
    renderItem={({item})=>(<Item isDisableUser={isDisableUser} data={item} i={i++}/>)}
    onEndReached={() => {handleLoadMore()}}
    onEndReachedThreshold={1}
    ListFooterComponent={renderFooter}
    // ListHeaderComponent={headerComponent?headerComponent:<View/>}
    />
         

</View>

  </View>     
  )
}

export default UserList


