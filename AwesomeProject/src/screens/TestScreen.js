import {View, Text, TouchableOpacity,ImageBackground, Alert,Image, TextInput, Easing} from 'react-native';
import React, {useState} from 'react';
import Slideshow from '../component/Slideshow/Slideshow';
import SearchSuggestion from '../component/SearchSuggestions/SearchSuggestions';
import NoResult from '../component/SearchSuggestions/NoResult';
import {FetchData} from '../component/ProductList/data';
import ProductList from '../component/ProductList/ProductList';
import Searchbar from '../component/Seachbar/Searchbar';
import Item from '../component/CategoryList/Item';
import CategoryList from '../component/CategoryList/CategoryList';
import Banner from '../component/Banner/Banner';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import StarRating, { StarRatingDisplay } from 'react-native-star-rating-widget';
// import useNavi
const TestScreen = props => {
  // const navigation= useNavigation();
  // const [column, setcolumn] = useState(2);
  // useEffect(() => {
  //   navigation.getParent()?.setOptions({
  //     tabBarStyle: {
  //       display: "none"
  //     }
  //   });
  //   return () => navigation.getParent()?.setOptions({
  //     tabBarStyle: undefined
  //   });
  // }, [navigation]);

  const [imageLink, setimageLink] = useState([]);
  const [star, setStar] = useState(0)
  const [checkimgLink, setcheckimgLink] = useState(false);
  const [image, setimage] = useState([]);

  // ReviewText
  const [text, setText] = useState("");

  // Cho bat anh mot lan ,tranh spam

  const [isImagePickerVisible, setImagePickerVisible] = useState(false);
  const [canOpenImagePicker, setCanOpenImagePicker] = useState(true);

const checkStar=()=>{
  if(star==0){

    Alert.alert(
      'Chú ý',
      'Vui lòng bình chọn sao trước khi gửi đánh giá.'
      ,undefined
      ,{cancelable:false}    
      )

  }else{
    console.log(text);

  }
}
const removeImageFromImageArray = (imageToRemove) => {
  const updatedImageArray = image.filter((image) => image !== imageToRemove);
  setimage(updatedImageArray);
};
  const Upload = async () => {
    const img = [];
    for (i = 0; i < image.length; i++) {
      const response = await fetch(image[i]);
      const blob = await response.blob();
      const filename = Date.now() + '.jpg';
      const storageRef = ref(storage, filename);
      const snapshot = await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(snapshot.ref);
      img.push(url);
    }
    setimageLink(img);
    setcheckimgLink(true);
  };
  const getImageFromLibrary = async () => {
    if (canOpenImagePicker) {
      setImagePickerVisible(true);
      setCanOpenImagePicker(false);

    const options = {
      title: 'Chọn ảnh',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo',
      selectionLimit: 5, // Số lượng ảnh tối đa bạn muốn chọn
    };
    const result = await launchImageLibrary(options);
    if (!result.didCancel) {
      const selectedImage = result.assets[0].uri;
      const selectedImages = result.assets;

      // Thực hiện xử lý với ảnh đã chọn ở đây
      // Ví dụ: lưu vào mảng
      let imgArr=[]
      for(let i = 0; i<selectedImages.length;i++)
      {
        imgArr.push(selectedImages[i].uri)
      }
      setimage([...image,...imgArr]);
    }
    setImagePickerVisible(false);
    setCanOpenImagePicker(true);
  }
  };

  const addFeedback = async () => {
    try {
      const request = await AxiosIntance().post('/productAPI/addProduct', {
        name: name,
        price: price,
        quantity: quantity,
        categoryID: value,
        detail: detail,
        userID: '113',
        image: imageLink,
      });
      if (request.result) {
        ToastAndroid.show('Thêm bình luận thành công', ToastAndroid.SHORT);
      }
      setcheckimgLink(false);
      setimageLink();
    } catch (error) {
      console.log(error);
      ToastAndroid.show('Thêm thất bại', ToastAndroid.SHORT);
    }
  };
  return (
    <View>
      {/* <Slideshow
        width={'80%'}
        flex={0.8}
        heightRate={0.4}
        paginationEnabled={true}
      /> */}
      {/* <SearchSuggestion
        src={require('../images/Searchbar/search.png')}
        deleteEnabled={true}
      /> */}
      {/* <NoResult/> */}
      {/* <ProductList 
      data={FetchData()}   
      styleView={{width:'100%',paddingTop:10}}
      horizontal 
      showsHorizontalScrollIndicator={false}
           
      /> */}
      {/* <Searchbar/> */}
      {/* <CategoryList/> */}
      {/* <Banner/> */}

      <View style={{
        // backgroundColor: 'red',
        borderRadius:5,
        borderWidth:0.5,
        borderColor:'gray',
        margin:10,
        
         padding: 10}}>

          <View>
            <Text>{image.length}</Text>
            <Text style={{fontSize:20,marginVertical:10}}>Đánh giá sản phẩm</Text>
           <View style={{flexDirection:'row',marginVertical:10,alignItems:'center'}}>
           <StarRating
              maxStars={5}
              rating={star}
              onChange={setStar}
              enableHalfStar={false}
              starSize={25}
              enableSwiping={true}
              animationConfig={{
                scale:1.3,duration:100,
                easing:Easing.elastic(10)
              }}
              />
                <Text>({star})</Text>

           </View>
          </View>
         
        <View style={{width:"100%",flexWrap:'wrap',flexDirection:'row'}}>
          {image.length > 0 ? (
            image.map(item => (
              <View style={{borderRadius: 5, overflow: 'hidden', margin: 5}}>
                <ImageBackground
                  style={{width: 100, height: 110, borderRadius: 10}}
                  source={{uri: item}}>
                  {/* <Text>{item}</Text> */}
                  <TouchableOpacity
                    onPress={() => removeImageFromImageArray(item)}>
                    <Image
                      style={{
                        position: 'absolute',
                        top: 0,
                        margin: 4,
                        width: 20,
                        height: 20,
                        right: 0,
                        backgroundColor: 'white',
                        borderRadius: 12.5,
                      }}
                      source={require('../images/deleteimg1.png')}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            ))
          ) : (
            <View />
          )}
        </View>
        <TextInput
          style={{
            borderWidth:0.5,
            borderColor:'black',
            margin: 10,
            borderRadius: 10,
            padding: 15,
          }}
          onChangeText={setText}
          numberOfLines={5}
          multiline={true}
          textAlignVertical="top"
          placeholder="Nhập ý kiến của bạn ở đây"
        />
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>getImageFromLibrary()}
            >
              <Image
                style={{width: 30, height: 30}}
                source={require('../images/gallery.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
               activeOpacity={0.7}
              style={{
                marginHorizontal: 10,
                 backgroundColor: '#3669C9'
                 ,borderRadius:10,padding:10
                 }}
                 onPress={()=>{checkStar();}}
                 >
              <Text style={{fontSize: 18,color:'white'}}>Gửi đánh giá</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TestScreen;
