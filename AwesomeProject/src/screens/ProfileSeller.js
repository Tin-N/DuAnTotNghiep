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
import React, {useState, useContext, ToastAndroid} from 'react';
import {COLOR} from '../css/Theme';
import {Image} from 'react-native';
const {width} = Dimensions.get('window');
import {StyleSheet} from 'react-native';
import {StyleLogin} from '../css/Styles.js';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AxiosIntance from '../utils/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../utils/Context';
import {useNavigation} from '@react-navigation/native';
// import {AppContext} from '../utils/AppContext';
import SearchStore from './personStore/SearchStore.js';
import {StyleProfile} from '../css/Styles.js';
import {AppContext} from '../utils/AppContext';
// import { useContext } from 'react';
const ProfileSeller = () => {

  const {userInfo} = useContext(AppContext);
  // const [email, setEmai] = useState(userInfo.email);
  const [address, setAddress] = useState(userInfo.address);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
  const [fullname, setFullName] = useState(userInfo.fullname);
  const UpdateProfile = async() => {
    try {
      // http://localhost:3000/api/UserApi/changeUserInfo?id=654627d67137a3bf678fb544&address=Tran Phu&phoneNumber=0933067567&fullname=Nguyen Trung Thuan
      const response= await AxiosIntance().post("/UserApi/changeUserInfo?id="+userInfo._id+"&address="+address+"&phoneNumber="+phoneNumber+"&fullname="+fullname);
      
      console.log(userInfo._id, phoneNumber,fullname,address );
      if(response.user )
      {
        console.log("Sửa thành công" );
        
      }else{
        console.log("Sửa thất bại" );
      }
      
    } catch (error) {
      console.log(error);
    }
  
  }
  return (
    <View style = {StyleProfile.ProfileContainer}>
    <View style={StyleProfile.NavTab}>
      <TouchableOpacity style={StyleProfile.IconShapeStart}>
        <Image
          style={StyleProfile.Icon}
          source={require('../images/icon/Search_icon.png')}
        />
      </TouchableOpacity>
      <Text style={StyleProfile.TextIcon}>Profile</Text>
      <TouchableOpacity style={StyleProfile.IconShapeEnd} >
        <Image
          style={StyleProfile.IconSetting}
          source={require('../images/icon/setting.png')}
        />
      </TouchableOpacity>
    </View>

    <View style={StyleProfile.Heading}>
      <TouchableOpacity style={StyleProfile.Avatar}>
        <Image
          style={StyleProfile.iconProfile}
          source={require('../images/icon/user.png')}
        />
      </TouchableOpacity>
      <View style={StyleProfile.TextProfile}>
        <Text style={StyleProfile.Name}>Name</Text>
        <Text style={StyleProfile.Email}>{userInfo.email}</Text>
        <TouchableOpacity style={StyleProfile.iconEditContainer}>
          <Image
            style={StyleProfile.iconEdit}
            source={require('../images/icon/pencil.png')}
          />
        </TouchableOpacity>
      </View>
    </View>

    {/* <View style={StyleProfile.Line} /> */}
    <View style={StyleProfile.ListProduct}>
      <TouchableOpacity style={StyleProfile.ListProductItem}>
        <Image
          style={StyleProfile.ListProductIcon}
          source={require('../images/icon/box.png')}
        />
        <Text style={StyleProfile.ListProductText}>My Product</Text>
      </TouchableOpacity>

      <Image
          style={StyleProfile.ListProductIconEndSeller}
          source={require('../images/icon/right-arrow.png')}
        />
    </View>
    <View style={StyleProfile.Line} />
    <View style={StyleProfile.Form}>
      <View style={StyleProfile.FormItem}>
        <View style={StyleProfile.FormItemText}>
          <Text style={StyleProfile.FormItemTextAddress}>Address</Text><Text style={StyleProfile.FormItemStart}>*</Text>
        </View>
          <TextInput value='AirBNB' style={StyleProfile.FormItemInputAddress} onChangeText={setAddress} placeholder={userInfo.address} />
      </View>
      <View style={StyleProfile.FormItem}>
        <View style={StyleProfile.FormItemText}>
          <Text style={StyleProfile.FormItemTextAddress}>Phone Number</Text><Text style={StyleProfile.FormItemStart}>*</Text>
        </View>
          <TextInput style={StyleProfile.FormItemInputAddress} onChangeText={setPhoneNumber} placeholder={userInfo.phoneNumber}  />
      </View>
      <View style={StyleProfile.FormItem}>
      <View style={StyleProfile.FormItemText}>
          <Text style={StyleProfile.FormItemTextAddress}>fullname</Text><Text style={StyleProfile.FormItemStart}>*</Text>
          </View>
          <TextInput style={StyleProfile.FormItemInputAddress} onChangeText={setFullName} placeholder={userInfo.fullname}  />
      </View>
      <TouchableOpacity style={StyleProfile.ButtonCP}>
          <Text style={StyleProfile.TextButton}>Update</Text> 
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({});
export default ProfileSeller;
