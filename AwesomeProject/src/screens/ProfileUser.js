import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ImageBackground,
} from 'react-native';
import React, { useState, useEffect, useContext, ToastAndroid } from 'react';
import { COLOR } from '../css/Theme';
import { Image } from 'react-native';
const { width } = Dimensions.get('window');
import { StyleSheet } from 'react-native';
import { StyleLogin } from '../css/Styles.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AxiosIntance from '../utils/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../utils/Context';
import { useNavigation } from '@react-navigation/native';
// import {AppContext} from '../utils/AppContext';thuan
import SearchStore from './personStore/SearchStore.js';
import { StyleProfile } from '../css/Styles.js';
import { AppContext } from '../utils/AppContext';
import { launchImageLibrary } from 'react-native-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../utils/FirebaseConfig.js';
// import { useContext } from 'react';
const ProfileUser = () => {
  const [img, setImg] = useState("");
  const [ImgLink, setImgLink] = useState("");

  const { userInfo } = useContext(AppContext);
  // const [email, setEmai] = useState(userInfo.email);
  const [address, setAddress] = useState(userInfo.address);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
  const [fullname, setFullName] = useState(userInfo.fullname);
  const getImageFromLibrary = async () => {
    const result = await launchImageLibrary();
    if (!result.didCancel) {
      const selectedImage = result.assets[0].uri;
      setImg(selectedImage);
    }
  }

  const Upload = async () => {

    const response = await fetch(img);
    const blob = await response.blob();
    const filename = Date.now() + ".jpg";
    const storageRef = ref(storage, filename);
    const snapshot = await uploadBytes(storageRef, blob);
    const url = await getDownloadURL(snapshot.ref);
    setImgLink(url);
  }

  useEffect(() => {

    if (ImgLink.length > 0)
      UpdateProfile();

    return () => {

    }
  }, [ImgLink])

  const UpdateProfile = async () => {



    try {
      // http://localhost:3000/api/UserApi/changeUserInfo?id=654627d67137a3bf678fb544&address=Tran Phu&phoneNumber=0933067567&fullname=Nguyen Trung Thuan
      const response = await AxiosIntance().post("/UserApi/changeUserInfo?id=" + userInfo._id + "&address=" + address + "&phoneNumber=" + phoneNumber + "&fullname=" + fullname + "&avatar=" + ImgLink);

      console.log(userInfo._id, phoneNumber, fullname, address, ImgLink);
      if (response.user) {
        console.log("Sửa thành công");
        setImgLink("");
        navigation.navigate('Home');

      } else {
        // console.log("Sửa thất bại" );
      }

    } catch (error) {
      console.log(error);
    }

  }
  return (
    <View style={StyleProfile.ProfileContainer}>
      <View style={StyleProfile.NavTab}>
        <TouchableOpacity style={StyleProfile.IconShapeStart}>
          <Image
            style={StyleProfile.Icon}
            source={require('../images/icon/Search_icon.png')}
          />
        </TouchableOpacity>
        <Text style={StyleProfile.TextIcon}>Thông tin người bán</Text>
        <TouchableOpacity style={StyleProfile.IconShapeEnd} >
          <Image
            style={StyleProfile.IconSetting}
            source={require('../images/icon/setting.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={StyleProfile.Heading}>
        <TouchableOpacity style={StyleProfile.Avatar} onPress={() => getImageFromLibrary()}>
          <Image
            style={StyleProfile.iconProfile}
            source={img.length > 0 ? { uri: img } : require('../images/icon/user.png')}
          />
        </TouchableOpacity>
        <View style={StyleProfile.TextProfile}>
          <Text style={StyleProfile.Name}>Thuận Nguyễn</Text>
          <Text style={StyleProfile.Email}>
            {/* {userInfo.email} */} thuannt160603@gmail.com
            </Text>
          <TouchableOpacity style={StyleProfile.iconEditContainer}>
            <Image
              style={StyleProfile.iconEdit}
              source={require('../images/icon/pencil.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={StyleProfile.Line} /> */}
      {/* <View style={StyleProfile.ListProduct}>
        <TouchableOpacity style={StyleProfile.ListProductItem}>
          <Image
            style={StyleProfile.ListProductIcon}
            source={require('../images/icon/heart.png')}
          />
          <Text style={StyleProfile.ListProductText}>Favorite</Text>
        </TouchableOpacity>

        <Image
          style={StyleProfile.ListProductIconEnd}
          source={require('../images/icon/right-arrow.png')}
        />
      </View> */}
      <View style={StyleProfile.Line} />
      <View style={StyleProfile.Form}>
        <View style={StyleProfile.FormItem}>
          <View style={StyleProfile.FormItemText}>
            <Text style={StyleProfile.FormItemTextAddress}>Địa chỉ</Text><Text style={StyleProfile.FormItemStart}>*</Text>
          </View>
          <TextInput style={StyleProfile.FormItemInputAddress} onChangeText={setAddress} placeholder=
          // {userInfo.address} 
          {"số 69, Ql50, Quận 8, Tp.HCM"}
          />
        </View>
        <View style={StyleProfile.FormItem}>
          <View style={StyleProfile.FormItemText}>
            <Text style={StyleProfile.FormItemTextAddress}>Số điện thoại</Text><Text style={StyleProfile.FormItemStart}>*</Text>
          </View>
          <TextInput style={StyleProfile.FormItemInputAddress} onChangeText={setPhoneNumber} placeholder=
          // {userInfo.phoneNumber} 
           {"0933067567"} 
          />
        </View>
        <View style={StyleProfile.FormItem}>
          <View style={StyleProfile.FormItemText}>
            <Text style={StyleProfile.FormItemTextAddress}>Họ và tên</Text><Text style={StyleProfile.FormItemStart}>*</Text>
          </View>
          <TextInput style={StyleProfile.FormItemInputAddress} onChangeText={setFullName} placeholder=
          // {userInfo.fullname} 
          {"Nguyễn Trần Trung Quân"}
          />
        </View>
        <View style={styles.btContainer} >
          <TouchableOpacity style={[StyleProfile.ButtonCP,{backgroundColor: 'white', borderWidth:0.5, borderColor: COLOR.background}]} onPress={() => Upload()}>
            <Text style={[StyleProfile.TextButton, {color: COLOR.background}]}>Đặt lại</Text>
          </TouchableOpacity>
          <TouchableOpacity style={StyleProfile.ButtonCP} onPress={() => Upload()}>
            <Text style={[StyleProfile.TextButton, {color: 'white'}]}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btContainer:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal:"10%"
  },
  
});
export default ProfileUser;
