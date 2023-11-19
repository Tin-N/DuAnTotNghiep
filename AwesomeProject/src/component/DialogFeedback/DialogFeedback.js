import {
  View,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Image,
  ToastAndroid,
  TextInput,
  Easing,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import AxiosIntance from '../../utils/AxiosIntance';
import {storage} from '../../utils/FirebaseConfig';

const DialogFeedback = props => {
  const {
    productID,
    userID,
    setStar,

    modalVisible,
    setModalVisible,
    star,
  } = props;
  const [imageLink, setimageLink] = useState([]);
  const [checkimgLink, setcheckimgLink] = useState(false);
  const [image, setimage] = useState([]);

  // ReviewText
  const [text, setText] = useState('');

  // Cho bat anh mot lan ,tranh spam

  const [isImagePickerVisible, setImagePickerVisible] = useState(false);
  const [canOpenImagePicker, setCanOpenImagePicker] = useState(true);

  //
  const [textInputHeight, setTextInputHeight] = useState(null);
  const textInputRef = useRef();
  const previousHeight = useRef(null);

  //  Hammm
  const HandleMarginDialog = marginTop => {
    if (textInputHeight > marginTop) {
      marginTop -= 15;
    }
    return marginTop;
  };

  const handleLayout = e => {
    const {height} = e.nativeEvent.layout;
    setTextInputHeight(height);
  };

  const removeImageFromImageArray = imageToRemove => {
    const updatedImageArray = image.filter(image => image !== imageToRemove);
    setimage(updatedImageArray);
  };

  const checkSendData = () => {
    if (text.length > 0) {
      if (image.length > 0) {
        Upload();
      } else {
        addFeedback();
        console.log('HELOOOOOOOOOOOOOOOO');
      }
    } else {
      Alert.alert('Chú ý', 'Cần nhập bình luận.');
    }
  };
  const Upload = async () => {
    if (image.length > 0) {
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
    }
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
        if (image.length <= 7) {
          let imgArr = [];
          for (let i = 0; i < selectedImages.length; i++) {
            imgArr.push(selectedImages[i].uri);
          }
          if (image.length > 5) imgArr = imgArr.slice(0, image.length - 5);
          else if (image.length > 2 && image.length < 5)
            imgArr = imgArr.slice(0, 7 - image.length);

          setimage([...image, ...imgArr]);
        } else {
        }
      }
      setImagePickerVisible(false);
      setCanOpenImagePicker(true);
    }
  };
  useEffect(() => {
    HandleMarginDialog(200);

    return () => {};
  }, [textInputHeight]);

  const addFeedback = async () => {
    let options = {
      productID: productID,
      userID: userID,
      rating: star,
      feedback: text,
    };
    if (imageLink.length > 0) {
      options = {...options, image: imageLink};
    }
    try {
      const request = await AxiosIntance().post(
        '/feedbackAPI/addFeedback',
        options,
      );
      if (request.result) {
        ToastAndroid.show('Thêm bình luận thành công', ToastAndroid.SHORT);
        setModalVisible(false);

      }
      setcheckimgLink(false);
      setimageLink();
    } catch (error) {
      console.log(error);
      ToastAndroid.show('Thêm thất bại', ToastAndroid.SHORT);
      setModalVisible(false);
    }
  };
  useEffect(() => {
    if (checkimgLink) addFeedback();
    return () => {};
  }, [checkimgLink]);

  return (
    <Modal
      style={{
        height: 300,
        width: 300,
        borderRadius: 0,
        // alignSelf:'center'
      }}
      animationType="slide"
      transparent={true}
      visible={modalVisible}>
      <View>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: 'white',
            // Giá trị borderRadius, có thể điều chỉnh theo ý muốn
            // backgroundColor: 'red',
            borderRadius: 10,
            borderWidth: 1,
            // elevation:1,
            borderColor: '#b1b1b1ff',
            margin: 10,
            marginTop: HandleMarginDialog(200),
            // alignSelf:'center',
            margin: 20,

            padding: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* <Text>{image.length}</Text> */}
            <View />
            <Text style={{fontSize: 20, marginVertical: 6}}>
              Đánh giá sản phẩm
            </Text>
            <Pressable onPress={() => {setStar(0);setModalVisible(false)}}>
              <Icon name="close" size={24} color={'black'} />
            </Pressable>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* <Text>{image.length}</Text> */}
            <View />

            {/* <Text>{textInputHeight}</Text> */}
            <View
              style={{width: '100%', flexWrap: 'wrap', flexDirection: 'row'}}>
              {image.length > 0 ? (
                image.map(item => (
                  <View
                    style={{borderRadius: 5, overflow: 'hidden', margin: 5}}>
                    <ImageBackground
                      style={{width: 70, height: 70, borderRadius: 10}}
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
                          source={require('../../images/deleteimg1.png')}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>
                ))
              ) : (
                <View />
              )}
              </View>
              
            
           
          </View>
          <View>
          <TextInput
              style={{
                borderWidth: 1.5,
                // elevation:1,
                borderColor: '#b2b2b2ff',
                margin: 10,
                borderRadius: 10,
                padding: 15,
              }}
              onLayout={handleLayout}
              onChangeText={setText}
              multiline={true}
              scrollEnabled={true}
              numberOfLines={8}
              textAlignVertical="top"
              placeholder="Nhập ý kiến của bạn ở đây"
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width:'100%',
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => getImageFromLibrary()}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../images/gallery.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    marginHorizontal: 10,
                    backgroundColor: '#3669C9',
                    borderRadius: 10,
                    padding: 10,
                  }}
                  onPress={() => checkSendData()}>
                  <Text style={{fontSize: 18, color: 'white'}}>
                    Gửi đánh giá
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
      </View>
    </Modal>
  );
};
export default DialogFeedback;
