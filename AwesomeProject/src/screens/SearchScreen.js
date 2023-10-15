import { View, Text,Image, TouchableOpacity,ScrollView, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect,useState } from 'react'
import { styleSearchScreen } from '../css/Styles'
import Searchbar from '../component/Seachbar/Searchbar'
import SearchSuggestion from '../component/SearchSuggestions/SearchSuggestions'
import NoResult from '../component/SearchSuggestions/NoResult';
import AxiosIntance from '../utils/AxiosIntance'
import ProductList from '../component/ProductList/ProductList'
const SearchScreen = () => {
    const [textSearch, setTextSearch] = useState("");
    const [isSearch,setIsSearch] = useState(false);
    const [data, setData] = useState([]);
    const [columns, setcolumns] = useState(2)
    const [isLoading, setisLoading] = useState(false);
    const onChangeText = (text)=>
    {

        setTextSearch(text);
        setIsSearch(true);
    }
    
    const onSubmitText = async () => {
      setIsSearch(false);
      setisLoading(true);
      ToastAndroid.show(textSearch, ToastAndroid.SHORT);
    
      try {
        const response = await AxiosIntance().get("/productAPI/searchByName?name=" + textSearch + "&limitData="+0);
        console.log(response);
        if (response.result) {
          setisLoading(false);
          setData(response.products);
          // setProductID(response.products._id);
          // setSold(response.products.sold);
        } else {
          setisLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setisLoading(false);
      }
    }

    useEffect(() => {
      
      
      
    }, [data])
    
    useEffect(() => {
      const checkText =() =>
      {
        if(textSearch.length>0)
            setIsSearch(true)
        else
            setIsSearch(false)
            
      }
        checkText();
      return () => {
      }
    }, [textSearch])
    
    
  return (
    <ScrollView>
         <View style={styleSearchScreen.topBarView}>
         <TouchableOpacity>
            <Image
                style={styleSearchScreen.icons}
                source={require('../images/icon/previous-ic.png')}
                />
         </TouchableOpacity>
          <Text style={styleSearchScreen.title}>Search</Text>
            
        </View>
        {/* Search bar */}
        <Searchbar onChangeText={onChangeText} onSubmitText={onSubmitText}/>


    {
        isSearch == true?<SearchSuggestion/>:<View/>
    }

    {
      isLoading == true?
      <ActivityIndicator
      style={{justifyContent:'center',alignItems:'center',height:"100%"}}/>
      :
      <View>
        {
          data.length>0?<ProductList
            data={data}
            styleView={{

              width: '100%',
              margin: 10,
            }}
            numColumns={columns}
            showsVerticalScrollIndicator={false}
          />:<NoResult/>
        }
      </View>
    }
    </ScrollView>

  )
}

export default SearchScreen