import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon  from 'react-native-vector-icons/Ionicons';
import AxiosIntance from '../utils/AxiosIntance';
import CensorshipProductItem from './CensorshipProductItem';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const {height} = Dimensions.get('screen')
const CensorshipProduct = (props) => {
    const { navigation } = props;
    const [censorshipProduct, setcensorshipProduct] = useState([]);
    const [changeCensorshipProduct, setchangeCensorshipProduct] = useState(false);

    useEffect(() => {
        const getCensorshipProduct = async () => {
            const reponse = await AxiosIntance().get('/productAPI/get-product-censorship');
            if (reponse) {
                setcensorshipProduct(reponse.product);
            }
        }
        getCensorshipProduct();
        return () => {

        }
    }, [changeCensorshipProduct])

    function changeCensorshipProductFun() {
        setchangeCensorshipProduct(!changeCensorshipProduct);
    }

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                <Icon name='arrow-back' size={25} color={'black'} />
                <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>Kiểm duyệt sản phẩm</Text>
                <View></View>
            </View>

            <FlatList
            style={{height: height*80/100}}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                data={censorshipProduct}
                renderItem={({ item }) => <CensorshipProductItem dulieu1={item} navigation={navigation}
                    changeCensorshipProductFun={changeCensorshipProductFun}
                    changeCensorshipProduct={changeCensorshipProduct}
                    setchangeCensorshipProduct={setchangeCensorshipProduct} />}
                keyExtractor={item => item._id}
            />
        </View>
    )
}

export default CensorshipProduct

const styles = StyleSheet.create({})