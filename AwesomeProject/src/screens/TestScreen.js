// import {View, Text, TouchableOpacity,ImageBackground, Alert,Image, TextInput, Easing} from 'react-native';
// import React, {useState,useEffect} from 'react';
// import Slideshow from '../component/Slideshow/Slideshow';
// import SearchSuggestion from '../component/SearchSuggestions/SearchSuggestions';
// import NoResult from '../component/SearchSuggestions/NoResult';
// import {FetchData} from '../component/ProductList/data';
// import ProductList from '../component/ProductList/ProductList';
// import Searchbar from '../component/Seachbar/Searchbar';
// import Item from '../component/CategoryList/Item';
// import CategoryList from '../component/CategoryList/CategoryList';
// import Swiper from 'react-native-swiper';

// import Banner from '../component/Banner/Banner';
// import {useNavigation} from '@react-navigation/native';
// import {launchImageLibrary} from 'react-native-image-picker';
// import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
// import StarRating, { StarRatingDisplay } from 'react-native-star-rating-widget';
// import DialogShopping from './personStore/DialogShopping';
// import DialogFeedback from '../component/DialogFeedback/DialogFeedback';
// // import useNavi
// const TestScreen = props => {
//   // const navigation= useNavigation();
//   // const [column, setcolumn] = useState(2);
//   // useEffect(() => {
//   //   navigation.getParent()?.setOptions({
//   //     tabBarStyle: {
//   //       display: "none"
//   //     }
//   //   });
//   //   return () => navigation.getParent()?.setOptions({
//   //     tabBarStyle: undefined
//   //   });
//   // }, [navigation]);
//   const [modalVisible, setModalVisible] = useState(false);

//   const [imageLink, setimageLink] = useState([]);
//   const [star, setStar] = useState(0)
//   const [checkimgLink, setcheckimgLink] = useState(false);
//   const [image, setimage] = useState([]);

//   // ReviewText
//   const [text, setText] = useState("");

//   // Cho bat anh mot lan ,tranh spam




//   return (
//     <View>
//       {/* <Slideshow
//         width={'80%'}
//         flex={0.8}
//         heightRate={0.4}
//         paginationEnabled={true}
//       /> */}
//       {/* <SearchSuggestion
//         src={require('../images/Searchbar/search.png')}
//         deleteEnabled={true}
//       /> */}
//       {/* <NoResult/> */}
//       {/* <ProductList 
//       data={FetchData()}   
//       styleView={{width:'100%',paddingTop:10}}
//       horizontal 
//       showsHorizontalScrollIndicator={false}
           
//       /> */}
//       {/* <Searchbar/> */}
//       {/* <CategoryList/> */}
//       {/* <Banner/> */}

    
//     </View>
//   );
// };

// export default TestScreen;
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';
import { StyleSheet,Text,View,TouchableOpacity } from 'react-native';
export default function SwipeButtonCustom() {

    const leftButton = (
        <SwipeButtonsContainer
            style={{
                alignSelf: 'center',
                aspectRatio: 1,
                flexDirection: 'column',
                padding: 10,
            }}
            
        >
            <TouchableOpacity
                onPress={() => console.log('left button clicked')}
            >
                <Text>Click me !</Text>
            </TouchableOpacity>
        </SwipeButtonsContainer>
    );
  
    return (
        <SwipeProvider>
            <SwipeItem
                style={styles.button}
                swipeContainerStyle={styles.swipeContentContainerStyle}
                rightButtons={leftButton}
            >
                <Text>
                    Swipe me!
                </Text>
            </SwipeItem>
            
        </SwipeProvider>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 100,
        alignSelf: 'center',
        marginVertical: 5,
    },
    swipeContentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderColor: '#e3e3e3',
        borderWidth: 1,
    }
});
