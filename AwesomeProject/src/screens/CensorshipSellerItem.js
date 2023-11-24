import { StyleSheet, Text, View, Image, Pressable, ToastAndroid } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AxiosIntance from '../utils/AxiosIntance';

const CensorshipSellerItem = (props) => {
    const { dulieu1 } = props;
    console.log(dulieu1);

    const censorshipSeller = async () => {
        const reponse = await AxiosIntance().post('UserApi/check-seller-by-id/' + dulieu1._id);
        if (reponse) {
            props.changeCensorshipUserFun();
            ToastAndroid.show('Seller đã được kiểm duyệt', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('kiểm duyệt seller bị lỗi', ToastAndroid.SHORT);
        }
    }

    const rejectProduct = async () => {
        const reponse = await AxiosIntance().post('UserApi/reject-seller-by-id/' + dulieu1._id);
        if (reponse) {
            props.changeCensorshipUserFun();
            ToastAndroid.show('User đã được từ chối', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('Sản phẩm user từ chối', ToastAndroid.SHORT);
        }
    }
    return (
        <View style={{ borderWidth: 0.2, padding: 5, margin: 5, marginTop: 55, borderRadius: 5, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', }}>
                <Image source={{ uri: dulieu1.avatar }} style={{ width: 120, height: 120, borderRadius: 120 / 2, position: 'relative', top: -50 }} />
                <View style={{ marginLeft: 25 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>{dulieu1.fullname}</Text>
                    <Text style={{ color: 'black', }}>{dulieu1.email}</Text>
                </View>
            </View>

            <View style={{ position: 'relative', top: -25, }}>
                <View style={{ flexDirection: 'row', }}>
                    <Icon name='location-outline' size={25} color={'black'} />
                    <Text style={{ color: 'black', marginLeft: 15, marginRight: 25 }} numberOfLines={2}>{dulieu1.address}</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <AntDesign name='idcard' size={25} color={'black'} />
                    <Text style={{ color: 'black', marginLeft: 15 }}>{dulieu1.CCCD}</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Feather name='phone' size={25} color={'black'} />
                    <Text style={{ color: 'black', marginLeft: 15 }}>{dulieu1.phoneNumber}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', }}>
                <Pressable style={{
                    borderWidth: 0.2,
                    borderRadius: 5,
                    padding: 10,
                    backgroundColor: '#3669C9',
                    marginRight: 5
                }} onPress={rejectProduct}>
                    <Text style={{ color: 'white' }}>Từ chối</Text>
                </Pressable>
                <Pressable style={{
                    borderWidth: 0.2,
                    borderRadius: 5,
                    padding: 10,
                    backgroundColor: '#3669C9',
                    marginRight: 5
                }} onPress={censorshipSeller}>
                    <Text style={{ color: 'white' }}>Duyệt</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default CensorshipSellerItem

const styles = StyleSheet.create({})