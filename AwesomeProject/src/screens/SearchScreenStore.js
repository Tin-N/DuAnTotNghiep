import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {styleSearchScreen} from '../css/Styles';
import Searchbar from '../component/Seachbar/Searchbar';
import SearchSuggestion from '../component/SearchSuggestions/SearchSuggestions';
import NoResult from '../component/SearchSuggestions/NoResult';
import AxiosIntance from '../utils/AxiosIntance';
import ProductList from '../component/ProductList/ProductList';
import {useNavigation,useRoute} from '@react-navigation/native';
import { AppContext } from '../utils/AppContext';

const SearchScreenStore = () => {
  const {userInfo,isLogin}=useContext(AppContext)
  const navigation = useNavigation();
  const route= useRoute();
  const {params}=route;
  const [textSearch, setTextSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const addHistorySearch = async () => {
   if(isLogin){
    const response = await AxiosIntance().post(
      '/historySearchAPI/addNewHistory?idUser=' +
      userInfo._id+
        '&keyword=' +
        textSearch,
    );
    console.log(textSearch.length);

    if (response.result) {
      console.log('Them lich su thanh cong');
    }
    if (userID) {
      const response2 = await AxiosIntance().post(
        '/historySearchAPI/addNewSearchCount?searchType=' +
        userID +
          '&keyword=' +
          textSearch,
      );
      if (response2.result) {
        console.log('Them lich su thanh cong');
      }
    }
   }
  };

  const handleClick = () => {
    navigation.goBack();
  };
  const onChangeText = text => {
    setTextSearch(text);
    setIsSearch(true);
    console.log(text, 'SearchScreen');
  };

  const onSubmitText = () => {
    console.log(textSearch.length);
    if (textSearch.length > 0) {
      addHistorySearch();
      if(typeof params.userID !=='undefined')
      navigation.navigate('FilterScreen', {searchText: textSearch,userID:params.userID});
      else
      navigation.navigate('FilterScreen', {searchText: textSearch});

    }
  };
  const getHistorySearch = async () => {
    const response = await AxiosIntance().get(
      '/historySearchAPI/getHistorySearch?idUser=' + userInfo._id + '&limitData=' + 10,
    );
    if (response.result) {
      console.log(response.data);
      setData(response.data);
    }
  };
  const getSearchCount = async () => {
    const response = await AxiosIntance().get(
      '/historySearchAPI/getSearchPopular?searchTypes=' +
      userID +
        '&limitData=' +
        10,
    );
    if (response.result) {
      setData(response.data);
    }
  };


  useEffect(() => {
    setCheck(!check)

  }, [])
  
  

  useEffect(() => {
   
    console.log(check);
    if (typeof userID !== 'undefined') getSearchCount();
    else getHistorySearch();
    return () => {};
  }, [check]);

  useEffect(() => {
    const checkText = () => {
      if (textSearch.length > 0) setIsSearch(true);
      else setIsSearch(false);
    };
    checkText();
    return () => {};
  }, [textSearch]);

  return (
    <ScrollView>
      <View style={styleSearchScreen.topBarView}>
        <TouchableOpacity onPress={handleClick}>
          <Image
            style={[styleSearchScreen.icons, {marginLeft: 10}]}
            source={require('../images/icon/previous-ic.png')}
          />
        </TouchableOpacity>
        <Text style={styleSearchScreen.title}>Tìm kiếm</Text>
      </View>
      {/* Search bar */}
      <Searchbar
        onChangeText={onChangeText}
        onClick={false}
        onSubmitText={onSubmitText}
        text={textSearch}
      />

      {isSearch == true ? (
        <SearchSuggestion
          deleteEnabled={true}
          data={data}
          getText={onChangeText}
          setCheck={setCheck}
          check={check}
        />
      ) : (
        <View />
      )}
    </ScrollView>
  );
};

export default SearchScreenStore;
