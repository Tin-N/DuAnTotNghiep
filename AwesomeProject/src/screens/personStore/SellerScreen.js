import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const SellerScreen = () => {
  return (
    <View style={{marginHorizontal: 15}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,

        }}>
        <TouchableOpacity
        style={{
        }}>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: '#b7e6f98a',
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="chevron-back" size={30} color="#36abd9" />
          </View>
        </TouchableOpacity>
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
              marginVertical:20

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
      </View>
    </View>
  );
};

export default SellerScreen;

const styles = StyleSheet.create({});
