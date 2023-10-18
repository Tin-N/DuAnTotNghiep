import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState,useEffect } from 'react'
import React, { useState, useEffect } from 'react'
import { StyleDetailProduct } from '../../css/Styles'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen')
import LinearGradient from 'react-native-linear-gradient';
import AxiosIntance from '../../utils/AxiosIntance';
const image = { uri: 'http://prices.vn/storage/photo/product/giay-the-thao-nam-1645556039033_0.png' };
import { formatPrice } from '../../../Agro';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


   

const DetailProduct = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { params } = route;
    const [productPrice, setProductPrice] = useState('');
    const [dataProduct, setDataProduct] = useState({});
    const [imageProduct, setImageProduct] = useState('');
    // const [produtPrice, setProductPrice] = useState(145000);
    // const navigation= useNavigation();
  const [column, setcolumn] = useState(2);
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none"
      }
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: undefined
    });
  }, [navigation]);
    console.log(params.itemId+'aaaaaaaaaaaaaaaa');
    const back = () => {
        navigation.goBack();
    }
    useEffect(() => {
        const getDetails = async () => {
            const response = await AxiosIntance().get('/productAPI/getProductByID?id=' + params.itemId);
            if (response.result == false) {
                ToastAndroid.show('Lấy dữ liệu thất bại', ToastAndroid.SHORT);
            } else {
                setDataProduct(response.products);
                setProductPrice(response.products.price);
                setImageProduct(response.products.image[0]);
                console.log(response.products.image[0]);
            }
        }
        const getFeedback = async () => {
            const response = await AxiosIntance.get('/feedbackAPI/getFeedbackByProductID?ProductID=' + params.itemId);
            if (response.result == true) {
                ToastAndroid.show('getFeedback thành công', ToastAndroid.SHORT);          
            } else {
                ToastAndroid.show('getFeedback thất bại', ToastAndroid.SHORT);
            }
        }
        getFeedback();
        getDetails();
        return () => {

        }
    }, [params.itemId])
    return (
        <View style={{ height: 785 }}>
            <View style={StyleDetailProduct.menu}>
                <TouchableOpacity onPress={back}>
                    <Image source={require('../../images/backic.png')} />
                </TouchableOpacity>
                <Text style={StyleDetailProduct.textTitle}>
                    T.Tin Sản Phẩm
                </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                overScrollMode='never'>
                <ImageBackground source={{uri: imageProduct}} resizeMode='cover' style={{ width: width, height: 320, marginTop: 20 }}>
                </ImageBackground>
                <LinearGradient
                    start={{ x: 0, y: 0.5 }} // Điểm bắt đầu của gradient (trái)
                    end={{ x: 1.2, y: 0.5 }}   // Điểm kết thúc của gradient (phải)
                    colors={['#000033', '#3669C9']}
                    style={StyleDetailProduct.banner}
                >
                    <Text style={[StyleDetailProduct.titleBanner,]}>SavvyFlash Sale</Text>
                </LinearGradient>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text style={StyleDetailProduct.textd}>
                        đ
                    </Text>
                    <Text style={StyleDetailProduct.textPrice}>
                        {formatPrice(productPrice)}
                    </Text>
                    <Text style={StyleDetailProduct.textSalePrice}>
                        đ230,000
                    </Text>
                    <Text style={StyleDetailProduct.textBoxSale}>
                        -37%
                    </Text>
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={{ color: 'black', fontFamily: 'TiltNeon-Regular', fontSize: 20 }}>
                        BUMDES Sasori - Giày thể thao Nam thời thượng siêu đẹp có 2 màu xanh và đen
                    </Text>
                </View>

            </ScrollView>
            <View style={StyleDetailProduct.bottom}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ paddingLeft: 10, paddingRight: 10, }}>
                        <Image style={StyleDetailProduct.image} source={require('../../images/avatarPersonStore.png')} />
                        <Text style={{ fontSize: 12, textAlign: 'center' }}>Store</Text>
                    </View>
                    <Image style={{ height: 45, marginTop: -4 }} source={require('../../images/lineheight.png')} />
                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <Image style={StyleDetailProduct.image} source={require('../../images/iconchat1.png')} />
                        <Text style={{ fontSize: 12, textAlign: 'center' }}>Chat</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <TouchableOpacity style={StyleDetailProduct.touchOpa}>
                        <Text style={StyleDetailProduct.textButton}>
                            Buy Now
                        </Text>
                    </TouchableOpacity>
                    <LinearGradient
                        start={{ x: 0, y: 0.5 }} // Điểm bắt đầu của gradient (trái)
                        end={{ x: 0.8, y: 0.5 }}   // Điểm kết thúc của gradient (phải)
                        colors={['#3669C9', '#070723']}
                        style={{ padding: 8, width: 130, borderRadius: 25, marginLeft: 5 }}
                    >
                        <TouchableOpacity >
                            <Text style={StyleDetailProduct.textButton}>
                                Add to Cart
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}

export default DetailProduct;