import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect,useState } from 'react';
import {styleHome} from '../css/Styles';
import Searchbar from '../component/Seachbar/Searchbar';
import Slideshow from '../component/Slideshow/Slideshow';
import CategoryList from '../component/CategoryList/CategoryList';
import Banner from '../component/Banner/Banner';
import {FetchData} from '../component/ProductList/data';
import ProductList from '../component/ProductList/ProductList';
import AxiosIntance from '../utils/AxiosIntance';
const HomeScreen = () => {

  const [categoryData1, setcategoryData1] = useState([])
  const [categoryData2, setcategoryData2] = useState([])
  const [categoryData3, setcategoryData3] = useState([])


  useEffect(() => {
    const getcategoryData1 = async()=>{
      const response = await AxiosIntance().get("/productAPI/getProductByCategoryID?id="+"clothing"+"&limitData="+2+"&skipData="+0);
      console.log(response+"CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCc");

      if(response.result)
      {
        setcategoryData1(response.products);
      }
    }
    const getcategoryData2 = async()=>{
      const response = await AxiosIntance().get("/productAPI/getProductByCategoryID?id="+"hello"+"&limitData="+2+"&skipData="+0);
      console.log(response+"BBBBBBBBBBBBBBBBBBBBBBBBB");

      if(response.result)
      {
        setcategoryData2(response.products);
      }
    }
    const getcategoryData3 = async()=>{
      const response = await AxiosIntance().get("/productAPI/getProductByCategoryID?id="+"pants"+"&limitData="+2+"&skipData="+0);
      console.log(response+"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      if(response.result)
      {
        setcategoryData3(response.products);
      }
    }
    getcategoryData1();
    getcategoryData2();
    getcategoryData3();
  }, [])
  

  return (
    <View>
      <ScrollView>
        {/* Top bar View */}
        <View style={styleHome.topBarView}>
          <Text style={styleHome.title}>Savvy shopping</Text>
          <View style={styleHome.viewIcons}>
            <Image
              style={styleHome.icons}
              source={require('../images/icon/notification.png')}
            />
            <Image
              style={styleHome.icons}
              source={require('../images/icon/shopping-cart.png')}
            />
          </View>
        </View>
        {/* Search bar */}
        <Searchbar />

        {/* Slideshow */}

        <Slideshow
          imagesource={images}
          paginationEnabled={false}
          isAutoSroll={false}
          width={'90%'}
          flex={0.7}
          heightRate={0.3}
          widthRate={0.8}
        />
        {/* Category */}
        <View style={styleHome.CategoryView}>
          <Text style={styleHome.titleCategory}>Category</Text>
          <Text style={styleHome.text}>See all</Text>
        </View>
        <CategoryList />

        <View>{/* May be get a list when u click the category */}</View>

        {/* Feature product */}
        <View>
                <View style={styleHome.CategoryView}>
                    <Text style={styleHome.titleCategory}>Featured Product</Text>
                    <Text style={styleHome.text}>See all</Text>
                </View>
                <Banner
                    BackgroundColor={'#3669C9'}
                    Text1={'Giảm giá \nBao gạo 5kg'}
                    Source={require('../images/Banner/rice-bag.png')}
                    PrimaryTextColor={'white'}
                    SecondTextColor={'white'}
                    OpacitySecondText={0.5}
                />
                <ProductList
                    data={categoryData3}
                    styleView={{
                    width: '100%',
                    padding: 10,
                    margin: 20,
                  }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
        </View>
        <View>
          {/* BestSeller View */}
          <View style={styleHome.CategoryView}>
            <Text style={styleHome.titleCategory}>Best Sellers</Text>
            <Text style={styleHome.text}>See all</Text>
          </View>
          <Banner
            BackgroundColor={'#3669C9'}
            Text1={'Chuối sấy \nCao cấp'}
            Source={require('../images/Banner/banana-chips.png')}
            PrimaryTextColor={'white'}
            SecondTextColor={'white'}
            OpacitySecondText={0.5}
          />
          <ProductList
            data={categoryData1}
            styleView={{
              width: '100%',
              margin: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          {/* New Product */}
          <View style={styleHome.CategoryView}>
            <Text style={styleHome.titleCategory}>New Product</Text>
            <Text style={styleHome.text}>See all</Text>
          </View>
          <ProductList
            data={categoryData1}
            styleView={{
              width: '100%',
              margin: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          {/* Top Product */}

          <View style={styleHome.CategoryView}>
            <Text style={styleHome.titleCategory}>Top Product</Text>
            <Text style={styleHome.text}>See all</Text>
          </View>
          <ProductList
            data={categoryData2}
            styleView={{
              width: '100%',
              margin: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          {/* Discount Product */}

          <View style={styleHome.CategoryView}>
            <Text style={styleHome.titleCategory}>Discount Product</Text>
            <Text style={styleHome.text}>See all</Text>
          </View>
          <ProductList
            data={categoryData3}
            styleView={{
              width: '100%',
              margin: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

export const images = [
  {name: require('../images/Banner/Banner.png')},
  {name: require('../images/Banner/Banner1.png')},
  // {name:require('../../images/Slideshow/male3.png')},
  // {name:require('../../images/Slideshow/female1.png')}
];
