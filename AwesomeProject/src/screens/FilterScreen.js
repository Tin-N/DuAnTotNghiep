import { View, Text, ScrollView,Image, TouchableOpacity,ToastAndroid, ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import ProductList from '../component/ProductList/ProductList'
import SearchFilter from '../component/Filter/SearchFilter'
import { styleHome,styleSearchScreen } from '../css/Styles'
import NoResult from '../component/SearchSuggestions/NoResult';
import {useNavigation,useRoute} from '@react-navigation/native'
import AxiosIntance from '../utils/AxiosIntance'
const FilterScreen = (props) => {
  const route =useRoute();
  const { searchText } = route.params;
  const navigation= useNavigation();
  const [page, setPage] = useState(1)
  // const {params}=route;
  const [columns, setcolumns] = useState(2);
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  const [valueFilter, setValueFilter] = useState([{},[0,10000000],""]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleClick=()=>{
    navigation.goBack();
  }

  function createURLstring(objValue, arrValue, stringValue) {
    // if (typeof objValue !== 'object' || !Array.isArray(arrValue) || typeof stringValue !== 'string') {
    //   throw new Error('Giá trị không hợp lệ');
    // }
    
    let url="";
      // name
      url=url+"name="+searchText+"&"
      // price

      url=url+"lte="+arrValue[1]+"&";

      url=url+"gte="+arrValue[0];

  // Category
      if(stringValue.length>0)
      url=url+"categoryID="+stringValue;
  
      // sort 
      if (Object.keys(objValue).length === 0) {
        console.log('Đối tượng rỗng');
      } else {
        if(objValue.name.includes("Tên"))
          url=url+"&sortName="+objValue.value;
        if(objValue.name.includes("Giá"))
          url=url+"&sortPrice="+objValue.value;
        // if(objValue.name.includes("Bán chạy"))
        //   url=url+"sortPrice="+objValue.value;
        if(objValue.name.includes("Đánh giá tốt nhất"))
          url=url+"&sortRating="+objValue.value;
        
      }
    
    return url;
  }

  const loadMoreData = async ()=>{
        try {
          
          console.log("co chay ");

          const response = await AxiosIntance().get("/productAPI/searchByName?"+createURLstring(valueFilter[0],valueFilter[1],valueFilter[2])+"&skipData="+page);
              setPage(page+1);

              if(response.result)
              {
                if(response.totalPage>=page){
                  console.log("load....");
                  return response.products

                }else{
                  setPage(1);
                   return []; 
                }

              }

              return [];
        } catch (error) {
          console.log(error);
          return [];
        }
    }
    const Load = async ()=>{
      setisLoading(true);
      
      try {
        // setPage(page+1);
        const response = await AxiosIntance().get("/productAPI/searchByName?"+createURLstring(valueFilter[0],valueFilter[1],valueFilter[2])+"&skipData="+page);
        console.log(response +"   " + createURLstring(valueFilter[0],valueFilter[1],valueFilter[2]));
        if (response.result&&response.products.length>0) {
          console.log(response);
          setData(response.products);
          setisLoading(false);

        } else {
          setisLoading(false);
          ToastAndroid.show("Đã hết sản phẩm ",ToastAndroid.SHORT);
        }
        setPage(page+1)
      } catch (error) {
        console.error("Error:", error);
        setisLoading(false);
      }
    }
  
  useEffect(() => {

  Load();
    return () => {
      
    }
  }, [valueFilter]);
  return (
    <ScrollView>
      <View style={styleHome.topBarView}>
      <TouchableOpacity onPress={handleClick}>
            <Image
                style={styleSearchScreen.icons}
                source={require('../images/icon/previous-ic.png')}
                />
         </TouchableOpacity>
            <Text style={styleHome.title}>
              Kết quả tìm kiếm: {searchText} 
              </Text>
            <View style={styleHome.viewIcons}>
            <TouchableOpacity  style={styleHome.icons} onPress={()=>setModalVisible((!modalVisible))}>
              <Image
                  style={styleHome.icons}
                  source={require('../images/icon/filter.png')}
                />
            </TouchableOpacity>
            </View>
          </View>
          <SearchFilter 
            onSubmit={setValueFilter}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />

    <View>
     {
      isLoading == true?
      <ActivityIndicator
      color={"blue"}
      size={'large'}/>
      :
      <View>
        {
          (typeof data!=='undefined')?
            <View>
                    <ProductList
                  data={data}
                  infinitiveScroll={true}
                  loadMoreData={loadMoreData}
                  styleView={{
                    width: '100%',
                    margin: 10,
                  }}
                  numColumns={columns}
                  showsVerticalScrollIndicator={false}
                />
                
            </View>
            :<View style={{justifyContent:'center',alignItems:'center',height:"100%"}}>
              <NoResult/>
              </View>
            
        }
      </View>
    }
     </View>
    </ScrollView>
  )
}

export default FilterScreen