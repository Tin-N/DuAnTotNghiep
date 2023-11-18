import { View, Text, ScrollView,Image, TouchableOpacity,ToastAndroid, ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import ProductList from '../component/ProductList/ProductList'
import SearchFilter from '../component/Filter/SearchFilter'
import { styleHome,styleSearchScreen } from '../css/Styles'
import NoResult from '../component/SearchSuggestions/NoResult';
import {useNavigation,useRoute} from '@react-navigation/native'
import AxiosIntance from '../utils/AxiosIntance'
const CategoryScreen = (props) => {
  const route =useRoute();
  const {params}=route;
  const { searchText } = route.params;
  const navigation= useNavigation();
  const [page, setPage] = useState(1)
  const [columns, setcolumns] = useState(2);
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  const [valueFilter, setValueFilter] = useState([{},[0,10000000],""]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoadingmini,setisLoadingmini]=useState(false);
  const [countData, setcountData] = useState(0)
  const handleClick=()=>{
    navigation.goBack();
  }

  function createURLstring(objValue, arrValue, stringValue) {
    // if (typeof objValue !== 'object' || !Array.isArray(arrValue) || typeof stringValue !== 'string') {
    //   throw new Error('Giá trị không hợp lệ');
    // }
    
    let url="";
      // name
      // price

      url=url+"lte="+arrValue[1]+"&";

      url=url+"gte="+arrValue[0];

  // Category
      if(stringValue.length>0)
      url=url+"&categoryID="+stringValue;
  
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

  useEffect(() => {
    
    Load();
    console.log(page);

    return () => {
      
    }
  }, [page])
  
  const loadMoreData = async ()=>{
    setPage(page+1);
    setisLoadingmini(!isLoadingmini)
    }
    const Load = async ()=>{
      
      if(isLoadingmini)
        setisLoading(true);
      
      
      try {
        if(typeof params!=='undefined'){
            const response = await AxiosIntance().get("/productAPI/filterProduct?"+createURLstring(valueFilter[0],valueFilter[1],params.id)+"&skipData="+page);
                console.log(response +"   " + createURLstring(valueFilter[0],valueFilter[1],valueFilter[2]));
                if (response.result&&response.products.length>0) {
                console.log(response);
                if(page==1){
                    setData(response.products);
                    setcountData(response.count)
                    console.log("Hellooo");
                }
                else if(page>1)
                setData([...data,...response.products]);
                
                setisLoading(false);

                } else {
                setData([]);
                setisLoading(false);
                ToastAndroid.show("Đã hết sản phẩm ",ToastAndroid.SHORT);
        }
        }
        setisLoadingmini(!isLoadingmini);
      } catch (error) {
        console.error("Error:", error);
        setisLoading(false);
      }
    }
  
  useEffect(() => {

    if ((Object.keys(valueFilter[0]).length > 0)||valueFilter[1].length > 0||params.id>0) {
      // console.log('Đối tượng rỗng');
      // Load();
      if(page==1)
        Load();
      setPage(1);
  }
    return () => {
      
    }
  }, [valueFilter]);
  return (
    <View>
      <View style={styleHome.topBarView}>
      <TouchableOpacity onPress={handleClick}>
            <Image
                style={styleSearchScreen.icons}
                source={require('../images/icon/previous-ic.png')}
                />
         </TouchableOpacity>
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
              data.length>0?
                <View>
                        <ProductList
                        count={countData}
                      data={data}
                      isLoadingmini={isLoadingmini}
                      infinitiveScroll={true}
                      loadMoreData={loadMoreData}
                      styleView={{
                        width: '100%',
                        margin: 10,
                        marginBottom:150,
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
    </View>
  )
}

export default CategoryScreen