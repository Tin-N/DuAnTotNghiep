import { View, Text, ScrollView, Image, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductList from '../component/ProductList/ProductList'
import SearchFilter from '../component/Filter copy/SearchFilter'
import { styleHome, styleSearchScreen } from '../css/Styles'
import NoResult from '../component/SearchSuggestions/NoResult';
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon1 from 'react-native-vector-icons/Ionicons';
import AxiosIntance from '../utils/AxiosIntance'
const CategoryScreen = (props) => {
  const route = useRoute();
  const { params } = route;
  const navigation = useNavigation();
  const [page, setPage] = useState(1)
  const [columns, setcolumns] = useState(2);
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  const [valueFilter, setValueFilter] = useState([{}, [0, 10000000], ""]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoadingmini, setisLoadingmini] = useState(false);
  const [countData, setcountData] = useState(0)
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
    // price

    url = url + "&lte=" + arrValue[1] + "&";

    url = url + "gte=" + arrValue[0];

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
    console.log(isLoadingmini,">>>>>>>>>>>>>>>fsdfasfasdsfwsd");
    return false
  }
  const Load = async () => {

    if (isLoadingmini)
      setisLoading(true);


    try {
      const response = await AxiosIntance().get("/productAPI/getProductByCategoryID?id=" + params.categoryID +createURLstring(valueFilter[0], valueFilter[1], valueFilter[2])+ "&skipData=" + page);
      console.log(response + "   " + createURLstring(valueFilter[0], valueFilter[1], valueFilter[2]));
      if (response.result && response.products.length > 0) {
        if (page == 1) {
          setData(response.products);
          setcountData(response.count)
          setTotalPage(response.totalPage)
        }
        else if (page > 1)
          setData([...data, ...response.products]);

        setisLoading(false);

      } else {
        setData([]);
        setisLoading(false);
        ToastAndroid.show("Đã hết sản phẩm ", ToastAndroid.SHORT);
      }
      setisLoadingmini(false);
    } catch (error) {
      console.error("Error:", error);
      setisLoading(false);
    }
  }

  useEffect(() => {

    if ((Object.keys(valueFilter[0]).length > 0)||valueFilter[1].length > 0||params.id>0) {
      // console.log('Đối tượng rỗng');
      // Load();
      console.log((Object.keys(valueFilter[0]).length > 0) +"   "+ valueFilter[1].length > 0 +"   "+ valueFilter[2]>0 +"                "+ valueFilter[1][1]+"                 "+valueFilter[2]);
      if(page==1)
        Load();
      setPage(1);
  }
    return () => {

    }
  }, [valueFilter]);
  return (
    <View>
      <View style={[styleHome.topBarView, { justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <TouchableOpacity onPress={handleClick}>
            <Icon1 name="chevron-back-outline" size={20} color='white'></Icon1>
          </TouchableOpacity>
          <Text style={[styleSearchScreen.title, {
            textAlign: 'center', marginLeft: 20,
            width: "75%", marginRight: 0, color: 'white'
          }]}>Danh mục: {params.name}</Text>

          <TouchableOpacity  onPress={() => setModalVisible((!modalVisible))}>
            <Icon1 style={{marginLeft:20}} name="funnel-outline" size={20} color='white'></Icon1>
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
            <View
              style={{
                alignItems: 'center'
              }}
            >
              {
                data.length > 0 ?
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
                        marginBottom: 150,
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

export default CategoryScreen