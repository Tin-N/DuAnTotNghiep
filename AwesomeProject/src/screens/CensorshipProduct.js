import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosIntance from '../utils/AxiosIntance';
import CensorshipProductItem from './CensorshipProductItem';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

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
            <FlatList
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