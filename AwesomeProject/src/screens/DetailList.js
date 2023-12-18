import { View, Text, ScrollView, Image, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductList from '../component/ProductList/ProductList'
import SearchFilter from '../component/Filter/SearchFilter'
import { styleHome, styleSearchScreen } from '../css/Styles'
import NoResult from '../component/SearchSuggestions/NoResult';
import { useNavigation, useRoute } from '@react-navigation/native'
import AxiosIntance from '../utils/AxiosIntance'
import Searchbar from '../component/Seachbar/Searchbar'
const DetailList = (props) => {
  const route = useRoute();
  const { params } = route;
  const { item } = params;
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  const [page, setPage] = useState(1)
  // const {params}=route;
  const [columns, setcolumns] = useState(2);
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isLoadingmini, setisLoadingmini] = useState(false);
  const [countData, setcountData] = useState(0);
  const [totalPage, settotalPage] = useState(0)
  const handleClick = () => {
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
  function createURLstring(name, object) {
    // if (typeof objValue !== 'object' || !Array.isArray(arrValue) || typeof stringValue !== 'string') {
    //   throw new Error('Giá trị không hợp lệ');
    // }

    let url = "";
    // name
    if (name.length > 0)
      url = url + "name=" + name + "&";

    // sort 
    if (Object.keys(object).length === 0) {
      console.log('Đối tượng rỗng');
    } else {
      url = url + object.name + "=" + object.value;

    }

    return url;
  }

  useEffect(() => {
    Load();
    return () => {
    }
  }, [page])

  const loadMoreData = async () => {
    if ((totalPage > page)) {
      setPage(page + 1);
      console.log("Hellooaaaa", page);
      setisLoadingmini(!isLoadingmini);
      return true;

    }
    return false
  }

  const onChangeText = text => {
    setSearchText(text);
    // setIsSearch(true);
    console.log(text, 'SearchScreen');
  };

  const onSubmitText = () => {
    console.log(searchText.length);
    if (searchText.length > 0) {
      if (page == 1)
        Load();
      setPage(1);
    } else if (searchText.length == 0) {
      setPage(1);
      if (page == 1)
        Load();
    }
  };
  const Load = async () => {

    if (!isLoadingmini)
      setisLoading(true);
    try {
      const response = await AxiosIntance().get("/productAPI/filterProductByName?" + createURLstring(searchText, item) + "&skipData=" + page);
      console.log(response + "   " + createURLstring(searchText, item));
      if (response.result && response.products.length > 0) {
        console.log(response);
        if (page == 1) {
          setData(response.products);
          setcountData(response.count);
          settotalPage(response.totalPage);
          console.log("Hellooo");
          console.log(isLoading + "ELLOOO1");

        }
        else if (page > 1)
          setData([...data, ...response.products]);
        if (isLoadingmini)
          setisLoadingmini(!isLoadingmini);
      } else {
        // setData([]);
        setisLoading(false);
        ToastAndroid.show("Đã hết sản phẩm ", ToastAndroid.SHORT);
      }



      if (!isLoadingmini) {
        setisLoading(false);
        console.log(isLoading + "ELLOOO222");

      }

    } catch (error) {
      console.error("Error:", error);
      setisLoading(false);
    }

  }

  return (

    <View style={{marginBottom:50}}>
      {/*<Text style={{color:'black'}}>{isLoading.toString()}</Text>*/}
      <View style={[styleHome.topBarView]}>
        <TouchableOpacity
          style={{ justifyContent: 'center' }}
          onPress={handleClick}>
          <Image
            style={[styleSearchScreen.icons, { alignSelf: 'center' }]}
            source={require('../images/icon/previous-ic.png')}
          />
        </TouchableOpacity>
        <View style={{ width: "100%" }}>
          <Searchbar
            onChangeText={onChangeText}
            onClick={false}
            onSubmitText={onSubmitText}
          />
        </View>
        <View style={styleHome.viewIcons}>
          <TouchableOpacity activeOpacity={1} />

        </View>
      </View>

      <View style={{backgroundColor:'#f2f1f1'}}>
        {

          isLoading == true ?
            <ActivityIndicator
              style={{marginTop:300}}
              color={"blue"}
              size={'large'} />
            :
            <View style={{paddingBottom:30}}>
              {
                data.length > 0 ?
                  <View
                    style={{ 
                      alignSelf:'center'
                      }}
                  >
                    <ProductList
                      count={countData}
                      data={data}
                      isLoadingmini={isLoadingmini}
                      infinitiveScroll={true}
                      loadMoreData={loadMoreData}
                      styleView={{
                        width: '100%',
                        margin: 10,
                        marginBottom: 110
                      }}
                      numColumns={columns}
                      showsVerticalScrollIndicator={false}
                    />
                  </View>
                  : <View style={{alignItems: 'center', height: "100%" }}>
                    <NoResult />
                  </View>

              }
            </View>
        }
      </View>
    </View>
  )
}

export default DetailList