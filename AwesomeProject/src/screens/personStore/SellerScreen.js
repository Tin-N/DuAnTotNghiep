import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react';
import { AppContext } from '../../utils/AppContext';

const SellerScreen = () => {
  const navigation = useNavigation();
  const { isLogin, setisLogin, isOrder, setisOrder, userInfo, setuserInfo, userID, setuserID, userAddress, setuserAddress, userRole, setuserRole } = useContext(AppContext);
  const logOut = () => {
    setisLogin(false)
    setuserID('')
    setuserAddress('')
    setuserInfo('')
    setuserRole(0)
  }
  return (
    <View style={{ marginHorizontal: 15 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,

        }}>
        <Text
          style={{
            marginHorizontal: 10,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Xin chào {userInfo.fullname}
        </Text>
      </View>
      <View style={{ width: '100%' }}>
        <TouchableOpacity onPress={() => { navigation.navigate("OrderHistoryStack") }}>
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
        <TouchableOpacity onPress={() => { navigation.navigate("ProfileSeller", { userID: userInfo._id, navigation: navigation }) }}>
          <View
            style={{
              marginVertical: 20
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
                Chỉnh sửa thông tin
              </Text>
            </View>
            <Icon name="chevron-forward" size={30} color="#36abd9" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
                  onPress={() => { navigation.navigate("FavoriteScreen", { userID: userInfo._id, navigation: navigation }); console.log(userInfo._id) }}

        >

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
        <TouchableOpacity onPress={() => navigation.navigate("ManageProduct")}>
          <View
            style={{
              marginVertical: 20
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
                marginVertical: 5
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
        <TouchableOpacity onPress={() => navigation.navigate("Prod Process")}>
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
                marginBottom: 20
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
        <TouchableOpacity onPress={() => { navigation.navigate("StatisticScreen", { navigation: navigation, shopId: userInfo._id }); console.log("sdfsdfaas"); }}>
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
        <TouchableOpacity onPress={() => logOut()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 20
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
    </View>
  );
};

export default SellerScreen;

