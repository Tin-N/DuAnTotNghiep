import { View, Text, ScrollView, Image, TouchableOpacity, ToastAndroid, ActivityIndicator, LogBox, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductList from '../component/ProductList/ProductList'
import SearchFilter from '../component/Filter/SearchFilter'
import { styleHome, styleSearchScreen } from '../css/Styles'
import NoResult from '../component/SearchSuggestions/NoResult';
import { useNavigation, useRoute } from '@react-navigation/native'
import AxiosIntance from '../utils/AxiosIntance'
import { formatString } from '../../Agro'
export const FilterScreenStore = (props) => {
  const route = useRoute();
  const { searchText, userID } = route.params;
  const navigation = useNavigation();

  const [page, setPage] = useState(1)
  const [columns, setcolumns] = useState(2);
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  const [valueFilter, setValueFilter] = useState([{}, [0, 10000000], ""]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoadingmini, setisLoadingmini] = useState(false);
  const [countData, setcountData] = useState(0)
  const [totalPage, setTotalPage] = useState(1);

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
  function createURLstring(objValue, arrValue, stringValue) {
    // if (typeof objValue !== 'object' || !Array.isArray(arrValue) || typeof stringValue !== 'string') {
    //   throw new Error('Giá trị không hợp lệ');
    // }

    let url = "";
    // name
    url = url + "name=" + searchText + "&"
    // price

    url = url + "lte=" + arrValue[1] + "&";

    url = url + "gte=" + arrValue[0];
    if (userID.length > 0 && typeof userID !== "undefined")
      url = url + "&userID=" + userID;
    // Category
    if (stringValue.length > 0)
      url = url + "&categoryID=" + stringValue;

    // sort 
    if (Object.keys(objValue).length === 0) {
      console.log('Đối tượng rỗng');
    } else {
      if (objValue.name.includes("Tên"))
        url = url + "&sortName=" + objValue.value;
      if (objValue.name.includes("Giá"))
        url = url + "&sortPrice=" + objValue.value;
      // if(objValue.name.includes("Bán chạy"))
      //   url=url+"sortPrice="+objValue.value;
      if (objValue.name.includes("Đánh giá tốt nhất"))
        url = url + "&sortRating=" + objValue.value;

    }

    return url;
  }

  useEffect(() => {
    LogBox.ignoreAllLogs();
    Load();
    console.log(page);

    return () => {

    }
  }, [page])

  const loadMoreData = async () => {
    if ((totalPage > page)) {
      setPage(page + 1);
      console.log("Hellooaaaa", page);
      setisLoadingmini(true);
      return true;

    }
    return false
  }
  const Load = async () => {

    if (!true)
      setisLoading(true);


    try {
      const response = await AxiosIntance().get("/productAPI/searchByName?" + createURLstring(valueFilter[0], valueFilter[1], valueFilter[2]) + "&skipData=" + page);
      if (response.result && response.products.length > 0) {
        console.log(response);
        if (page == 1) {
          console.log(response + "   " + createURLstring(valueFilter[0], valueFilter[1], valueFilter[2]));
          setTotalPage(response.totalPage)
          setData(response.products);
          setcountData(response.count)
          console.log("Hellooo");
        }
        else if (page > 1) {
          setData([...data, ...response.products]);
        }

        setisLoading(false);

      } else {
        // setData([]);
        setisLoading(false);
        ToastAndroid.show("Đã hết sản phẩm ", ToastAndroid.SHORT);
      }
      setisLoadingmini(false);
    } catch (error) {
      console.error("Error:", error);
      setisLoading(false);
      setisLoadingmini(false);

    }
  }

  useEffect(() => {

    if ((Object.keys(valueFilter[0]).length > 0) || valueFilter[1].length > 0 || valueFilter[2] > 0) {
      // console.log('Đối tượng rỗng');
      // Load();
      console.log((Object.keys(valueFilter[0]).length > 0) + "   " + valueFilter[1].length > 0 + "   " + valueFilter[2] > 0 + "                " + valueFilter[1][1] + "                 " + valueFilter[2]);
      if (page == 1)
        Load();
      setPage(1);
    }
    return () => {

    }
  }, [valueFilter]);
  return (

    <View>
      <View style={[styleHome.topBarView, {
        justifyContent: 'space-between', alignItems: 'center'
      }]}>
        <TouchableOpacity onPress={handleClick}>
          <Image
            style={styleSearchScreen.icons}
            source={require('../images/icon/previous-ic.png')}
          />
        </TouchableOpacity>
        <Text style={[styleHome.title, { color: "black", marginHorizontal: 12, width: "75%" }, { fontSize: 18 }]}
          numberOfLines={3}

          ellipsizeMode='head'
        >
          Từ khóa: {searchText.slice(0, 17) + "..."}
        </Text>
        <View>
          <TouchableOpacity style={styleHome.icons} onPress={() => setModalVisible((!modalVisible))}>
            <Image
              style={[styleHome.icons, { width: 25, height: 25 }]}
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
          isLoading == true ?
            <ActivityIndicator
              color={"blue"}
              size={'large'} />
            :
            <View style={{}}>
              {
                data.length > 0 ?
                  <View
                    style={{
                      alignItems: 'center',
                      marginLeft: 30
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
                        marginBottom: 110,
                        paddingBottom: 0,
                      }}
                      numColumns={columns}
                      showsVerticalScrollIndicator={false}
                    />
                  </View>
                  : <View style={{ justifyContent: 'center', alignItems: 'center', height: "100%" }}>
                    <NoResult />
                  </View>

              }
            </View>
        }
      </View>
    </View>
  )
}
export default FilterScreenStore;

