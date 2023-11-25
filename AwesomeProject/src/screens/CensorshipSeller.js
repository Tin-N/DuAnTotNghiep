import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import CensorshipSellerItem from './CensorshipSellerItem';
import AxiosIntance from '../utils/AxiosIntance';
const {height} = Dimensions.get('screen');

const CensorshipSeller = () => {
    const [censorshipSeller, setcensorshipSeller] = useState([]);
    const [changeCensorshipUser, setchangeCensorshipUser] = useState(false);
    useEffect(() => {
        const getInfoUser = async () => {
            const reponse = await AxiosIntance().get('/UserApi/get-seller-censorship');
            if (reponse) {
                setcensorshipSeller(reponse.user);
            }
        }
        getInfoUser();
        return () => {
        }
    }, [changeCensorshipUser])

    function changeCensorshipUserFun() {
        setchangeCensorshipUser(!changeCensorshipUser);
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                <Icon name='arrow-back' size={25} color={'black'} />
                <Text style={{ color: 'black', fontSize: 20, marginBottom: 10 }}>Kiểm duyệt người bán</Text>
                <View></View>
            </View>
            <FlatList
                style={{ height: height * 82 / 100, }}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                data={censorshipSeller}
                renderItem={({ item }) => <CensorshipSellerItem dulieu1={item}
                changeCensorshipUserFun={changeCensorshipUserFun}/>}
                keyExtractor={item => item._id}
            />
        </View>
    )
}

export default CensorshipSeller

const styles = StyleSheet.create({})