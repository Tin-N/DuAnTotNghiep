import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react'
import { styleSearchScreen } from '../css/Styles'
import Searchbar from '../component/Seachbar/Searchbar'
import SearchSuggestion from '../component/SearchSuggestions/SearchSuggestions'
import NoResult from '../component/SearchSuggestions/NoResult'
const SearchScreen = () => {
    const [textSearch, setTextSearch] = useState("");
    const [isSearch,setIsSearch] = useState(false);
    const onChangeText = (text)=>
    {
        setTextSearch(text);
    }

    useEffect(() => {
      const checkText =() =>
      {
        console.log(textSearch.length);
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
    <View>
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
        <Searchbar onChangeText={onChangeText}/>


    {
        isSearch == true?<SearchSuggestion/>:<NoResult/>
    }
    </View>
  )
}

export default SearchScreen