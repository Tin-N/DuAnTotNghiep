import {StyleSheet, Text, TouchableOpacity, View,ScrollView,Dimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native'
import { useContext } from 'react';
import { AppContext } from '../../utils/AppContext';
const {height}=Dimensions.get("screen");

const SellerScreen = () => {
  const navigation = useNavigation();
  const {userInfo}=useContext(AppContext)
  return (
    <ScrollView 
    style={{marginHorizontal: 15,paddingBottom:"30%",height:"90.5%"}}
    showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10

        }}>
        <Text
          style={{
            marginHorizontal: 10,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Hi, User20321
        </Text>
      </View>
      <View style={{width: '100%'}}>
        <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginVertical:20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',
            }}>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#b7e6f98a',
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="cart" size={30} color="#36abd9" />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Giỏ hàng
            </Text>
          </View>
          <Icon name="chevron-forward" size={30} color="#36abd9" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',
            }}>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#b7e6f98a',
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="wallet" size={30} color="#36abd9" />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Đơn hàng
            </Text>
          </View>
          <Icon name="chevron-forward" size={30} color="#36abd9" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity
       onPress={()=>{navigation.navigate("ProfileSeller",{userID:userInfo._id,navigation:navigation})}}
     
        >
        <View
          style={{
            marginVertical:20
,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',

            }}>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#b7e6f98a',
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="person" size={30} color="#36abd9" />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Chỉnh sửa thông tin người dùng
            </Text>
          </View>
          <Icon name="chevron-forward" size={30} color="#36abd9" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',
            }}>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#b7e6f98a',
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="bookmark" size={30} color="#36abd9" />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Danh sách yêu thích
            </Text>
          </View>
          <Icon name="chevron-forward" size={30} color="#36abd9" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={
          ()=>navigation.navigate("Prod Process")
        }
        >
        <View
          style={{
            marginTop:20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',
            }}>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#b7e6f98a',
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="list-circle" size={30} color="#36abd9" />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Quản lí cửa hàng của tôi
            </Text>
          </View>
          <Icon name="chevron-forward" size={30} color="#36abd9" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={
          ()=>navigation.navigate("Prod Process")
        }
        >
        <View
          style={{
            marginTop:10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',
              marginVertical:10
            }}>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#b7e6f98a',
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="list-circle" size={30} color="#36abd9" />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Xử lý xác nhận đơn hàng
            </Text>
          </View>
          <Icon name="chevron-forward" size={30} color="#36abd9" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={
          ()=>{navigation.navigate("StatisticScreen",{navigation:navigation,shopId:userInfo._id});console.log("sdfsdfaas");}
        }
        >
        <View
          style={{
            marginTop:10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',
            }}>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#b7e6f98a',
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="list-circle" size={30} color="#36abd9" />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Thống kê 
            </Text>
          </View>
          <Icon name="chevron-forward" size={30} color="#36abd9" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        
        >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical:20
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',
            }}>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#b7e6f98a',
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="log-out" size={30} color="#36abd9" />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Đăng xuất
            </Text>
          </View>
          <Icon name="chevron-forward" size={30} color="#36abd9" />
        </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SellerScreen;

const styles = StyleSheet.create({});
