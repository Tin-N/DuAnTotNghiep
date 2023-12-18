import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styleHome } from '../css/Styles';
import Searchbar from '../component/Seachbar/Searchbar';
import Slideshow from '../component/Slideshow/Slideshow';
import CategoryList from '../component/CategoryList/CategoryList';
import Banner from '../component/Banner/Banner';
import { FetchData } from '../component/ProductList/data';
import ProductList from '../component/ProductList/ProductList';
import AxiosIntance from '../utils/AxiosIntance';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = props => {
  const navigation = useNavigation();
  const [categoryData1, setcategoryData1] = useState([]);
  const [categoryData2, setcategoryData2] = useState([]);
  const [categoryData3, setcategoryData3] = useState([]);
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'flex',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: "flex",
      });
  }, [navigation]);
  const handleClick = () => {
    navigation.navigate('SearchScreen');
  };
  useEffect(() => {
    const getcategoryData1 = async () => {
      const response = await AxiosIntance().get(
        '/productAPI/filterProductByName?sortPrice=' +
        'clothing' +
        '&limitData=' +
        2 +
        '&skipData=' +
        1,
      );
      console.log(response);

      if (response.result) {
        setcategoryData1(response.products);
      }
    };
    const getcategoryData2 = async () => {
      const response = await AxiosIntance().get(
        '/productAPI/filterProductByName?sortNew=' +
        'true' +
        '&limitData=' +
        2 +
        '&skipData=' +
        1,
      );
      console.log(response + 'BBBBBBBBBBBBBBBBBBBBBBBBB');

      if (response.result) {
        setcategoryData2(response.products);
      }
    };
    const getcategoryData3 = async () => {
      const response = await AxiosIntance().get(
        '/productAPI/filterProductByName?sortRating=' +
        'true' +
        '&limitData=' +
        2 +
        '&skipData=' +
        1,
      );
      console.log(response + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
      if (response.result) {
        setcategoryData3(response.products);
      }
    };
    getcategoryData1();
    getcategoryData2();
    getcategoryData3();
  }, []);

  return (
    <ScrollView stickyHeaderIndices={[0]}
      showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
      overScrollMode='never' style={{ backgroundColor: 'white' }}>

      {/*searchBar*/}
      <View style={{
        padding: 15,
        backgroundColor: '#3669c9', alignItems: 'center'
      }}>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#3669c9', alignItems: 'center', width: '80%'
        }}>
          <Text style={styleHome.title}>Savvy</Text>
          <View style={{}}>
            <Searchbar
              onClick={true}
              handleClick={handleClick}
              isSearch={false}
              placeholderTextColor={"black"}
            />
          </View>
        </View>

      </View>
      {/*searchBar*/}
      {/* Slideshow */}
      <StatusBar backgroundColor={"#3669C9"} animated={true} />
      <View style={{ height: 190 }}>
        <Slideshow
          styleViewWelcome={styles.imgWelcome}
          styleItem={styles.imgSlide}
          imagesource={images}
          paginationEnabled={false}
          isAutoSroll={true}
          width={'90%'}
          flex={0.8}
          heightRate={0.25}
          widthRate={1}
          widthR={200}
          flexH={1}
        />
      </View>
      {/*category*/}
      <CategoryList />
      {/*Container all category*/}


      <View style={{backgroundColor:'#F5F5F5', marginTop:30, borderTopRightRadius:30, borderTopLeftRadius:30}}>
        <View style={{backgroundColor:'white',
                  margin:10,
                  borderRadius:10,}}>


          {/* BestSeller View */}
          <View style={styleHome.CategoryView}>
            <Text style={styleHome.titleCategory}>Bán chạy</Text>
            {/* Text See all with next error */}
            {/* <TouchableOpacity style={styleHome.touchSeeAll}
              activeOpacity={1}
              onPress={() => {
                navigation.navigate('DetailList', {
                  item: {
                    name: 'sortPrice',
                    value: true,
                  },
                });
              }}>
              <Text style={styleHome.text}>See all</Text>
              <Image style={{width:10, height:18, marginTop:2}} source={require('../images/nextic.png')}/>
            </TouchableOpacity> */}
            {/* Text See all with button */}
            <TouchableOpacity style={styleHome.touchSeeAll}
              activeOpacity={1}
              onPress={() => {
                navigation.navigate('DetailList', {
                  item: {
                    name: 'sortPrice',
                    value: true,
                  },
                });
              }}>
              <Text style={styleHome.text}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
          {/* <Banner
          BackgroundColor={'#3669C9'}
          Text1={'Chuối sấy \nCao cấp'}
          Source={require('../images/Banner/banana-chips.png')}
          PrimaryTextColor={'white'}
          SecondTextColor={'white'}
          OpacitySecondText={0.5}
        /> */}
          <ProductList
            infinitiveScroll={false}
            data={categoryData1}
            styleView={{
              width: '100%',
              margin: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View
         style={{
                  backgroundColor:'white',
                  margin:10,
                  borderRadius:10,
        }}
        >
          {/* New Product */}
          <View style={styleHome.CategoryView}>
            <Text style={styleHome.titleCategory}>Mới nhất</Text>
            <TouchableOpacity
              style={styleHome.touchSeeAll}
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('DetailList', {
                  item: {
                    name: 'sortNew',
                    value: true,
                  },
                });
              }}>
              <Text style={styleHome.text}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
          <ProductList
            infinitiveScroll={false}
            data={categoryData2}
            styleView={{
              width: '90%',
              margin: 20,
              alignItems:'center'
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View
         style={{
          backgroundColor:'white',
          margin:10,
          borderRadius:10,
          // marginBottom:80
}}
        >
          {/* Top Product */}

          <View style={styleHome.CategoryView}>
            <Text style={styleHome.titleCategory}>Hàng đầu</Text>
            <TouchableOpacity
              style={styleHome.touchSeeAll}
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('DetailList', {
                  item: {
                    name: 'sortRating',
                    value: true,
                  },
                });
              }}>
              <Text style={styleHome.text}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
          <ProductList
            infinitiveScroll={false}
            data={categoryData3}
            styleView={{
              width: '90%',
              margin: 20,
              alignItems:'center'
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View 
        style={{
                  backgroundColor:'white',
                  margin:10,
                  borderRadius:10,
                  marginBottom:80
        }}
        >
          {/* Discount Product */}

          {/* <View style={styleHome.CategoryView}>
            <Text style={styleHome.titleCategory}>Đang giảm giá</Text>
            <TouchableOpacity style={styleHome.touchSeeAll} activeOpacity={0.6}>
              <Text style={styleHome.text}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
          <ProductList
            data={categoryData3}
            styleView={{
              width: '90%',
              margin: 20,
              alignItems:'center'
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          /> */}
        </View>
      </View>

    </ScrollView >
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  imgSlide: {
    width: 350,
    height: 200, marginTop: 0,
    transform: [{ translateY: 20, }],
    borderRadius: 25
  },
  imgWelcome: {
    backgroundColor: '#3669C9', borderBottomLeftRadius: 30, height: 120,
    borderBottomRightRadius: 30, zIndex: 3
  }
})
export const images = [
  { name: require('../images/Banner/1.png') },
  { name: require('../images/Banner/2.png') },
  { name: require('../images/Banner/3.png') },
  { name: require('../images/Banner/4.png') },
  { name: require('../images/Banner/5.png') },
  // {name:require('../../images/Slideshow/male3.png')},
  // {name:require('../../images/Slideshow/female1.png')}
];
