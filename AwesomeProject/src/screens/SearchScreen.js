import { View, Text,Image, TouchableOpacity,ScrollView, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect,useState } from 'react'
import { styleSearchScreen } from '../css/Styles'
import Searchbar from '../component/Seachbar/Searchbar'
import SearchSuggestion from '../component/SearchSuggestions/SearchSuggestions'
import NoResult from '../component/SearchSuggestions/NoResult';
import AxiosIntance from '../utils/AxiosIntance'
import ProductList from '../component/ProductList/ProductList'
import {useNavigation} from '@react-navigation/native'

const SearchScreen = () => {
  const navigation=useNavigation();

    const [textSearch, setTextSearch] = useState("");
    const [isSearch,setIsSearch] = useState(false);
    const [data, setData] = useState([]);
    const [columns, setcolumns] = useState(2)
    const [isLoading, setisLoading] = useState(false);


    const handleClick=()=>{
      navigation.goBack();
    }
    const onChangeText = (text)=>
    {

        setTextSearch(text);
        setIsSearch(true);
    }
    
    const onSubmitText = async () => {
     console.log(textSearch.length);
     if(textSearch.length>0)
      navigation.navigate("FilterScreen",{searchText:textSearch});
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
         <TouchableOpacity onPress={handleClick}>
            <Image
                style={[styleSearchScreen.icons,{marginLeft:10}]}
                source={require('../images/icon/previous-ic.png')}
                />
         </TouchableOpacity>
          <Text style={styleSearchScreen.title}>Search</Text>
            
        </View>
        {/* Search bar */}
        <Searchbar onChangeText={onChangeText}onClick={false} onSubmitText={onSubmitText}/>


    {
        isSearch == true?<SearchSuggestion/>:<View/>
    }

  
     
      
    </ScrollView>

  )
}

export default SearchScreen