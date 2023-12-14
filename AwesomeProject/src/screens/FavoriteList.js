import { View, Text, ScrollView,Image, TouchableOpacity,ToastAndroid, ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import ProductList from '../component/FavoriteList/ProductList'
import SearchFilter from '../component/Filter/SearchFilter'
import { styleHome,styleSearchScreen } from '../css/Styles'
import NoResult from '../component/SearchSuggestions/NoResult';
import {useNavigation,useRoute} from '@react-navigation/native'
import AxiosIntance from '../utils/AxiosIntance'
import Searchbar from '../component/Seachbar/Searchbar'
const FavoriteScreen = (props) => {
  const {navigation,route}=props;
  const {params}=route;
  const {userID}=params;
  const  [searchText,setSearchText]  = useState("");
  // const navigation= useNavigation();
  const [page, setPage] = useState(1)
  // const {params}=route;
  const [check, setCheck] = useState(false)
  const [columns, setcolumns] = useState(2);
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isLoadingmini,setisLoadingmini]=useState(false);
  const [countData, setcountData] = useState(0);
  const [totalPage, settotalPage] = useState(0)
  const handleClick=()=>{
    navigation.goBack();
  }
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none"
      }
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: undefined
    });
  }, [navigation]);


  useEffect(() => {   
        Load();
    return () => {      
    }
  }, [page])


  useEffect(() => {   
    if(check){
      if(page==1)
        Load();
      else
      setPage(1)
    }
    return () => {      
    }
    }, [check])
  const loadMoreData = async ()=>{
    if((totalPage>page)){
        setPage(page+1);
        console.log("Hellooaaaa",page);
        setisLoadingmini(!isLoadingmini);
        return true;

    }
    return false
    }

    const Load = async ()=>{
      if(!isLoadingmini)
        setisLoading(true);   
      try {
        const response = await AxiosIntance().get("/favoriteApi/getFavoriteByUserID?userID="+userID+"&skipData="+page);
        console.log(response);
        if (response.result&&response.favorite.length>0) {
          console.log(response);
          if(page==1){
            setData(response.favorite);
            setcountData(response.countData);
            settotalPage(response.totalPages);
            console.log("Hellooo");
            console.log(isLoading+"ELLOOO1");
            
          }
          else if(page>1)
          setData([...data,...response.products]);
          if(isLoadingmini)
          setisLoadingmini(!isLoadingmini);
        } else {
          // setData([]);
          setisLoading(false);
          ToastAndroid.show("Đã hết sản phẩm ",ToastAndroid.SHORT);
        }

        

            if(!isLoadingmini)
            {
                setisLoading(false);
                console.log(isLoading+"ELLOOO222");

            }
        
      } catch (error) {
        console.error("Error:", error);
        setisLoading(false);
      }
     
    }
  
  return (
    <View>
        {/*<Text style={{color:'black'}}>{isLoading.toString()}</Text>*/}
      <View style={[styleHome.topBarView,{}]}>
      <TouchableOpacity
      style={{marginLeft:-10}}
      onPress={handleClick}>
            <Image
                style={styleSearchScreen.icons}
                source={require('../images/icon/previous-ic.png')}
                />
         </TouchableOpacity>
            <View style={{marginLeft:5,width:"90%"}}>
            <Text style={[styleHome.title,{fontSize:20, textAlign:'center',color:'black'}]}>Danh sách yêu thích</Text>
            </View>
            <View style={styleHome.viewIcons}>
            <TouchableOpacity activeOpacity={1}/>
              
            </View>
          </View>

        <View>
        {
          isLoading == true?
          <ActivityIndicator
          color={"blue"}
          size={'large'}/>
          :
          <View
            style={{
                width:'100%',
                backgroundColor:'#ecebeb'
            }}
          >
            {
              data.length>0?
                <View
                style={{paddingBottom:30}}
            >
                        <ProductList
                        count={countData}
                      data={data}
                      isLoadingmini={isLoadingmini}
                      infinitiveScroll={true}
                      loadMoreData={loadMoreData}
                      setCheck={setCheck}
                      check={check}
                      styleView={{
                        margin: 10,
                        marginBottom:110
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

export default FavoriteScreen