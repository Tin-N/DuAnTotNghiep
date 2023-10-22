import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StyleDetailProduct } from '../../css/Styles'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen')
import LinearGradient from 'react-native-linear-gradient';
import AxiosIntance from '../../utils/AxiosIntance';
import { formatPrice } from '../../../Agro';
import { ScrollView, FlatList } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import StarRatingDisplay from 'react-native-star-rating-widget';
import ItemFeedBack from './ItemFeedBack';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const DetailProduct = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { params } = route;
    const [productPrice, setProductPrice] = useState('');
    const [dataProduct, setDataProduct] = useState({});
    const [imageProduct, setImageProduct] = useState('');
    const [dataFeedback, setDataFeedback] = useState([]);
    const [dataColor, setDataColor] = useState([]);
    const [detail, setDetail] = useState('');
    const [feedbackLength, setFeedbackLenght] = useState();
    const [percentRating, setPercentRating] = useState(0);
    const [heart, setHeart] = useState(false);
    const heartHandler = () => {
        setHeart(!heart);
    }
    const handlerDetail = () => {
        navigation.navigate("DetailFeedback", { itemId: params.itemId })
    }
    const back = () => {
        navigation.goBack();
    }
    const Separator = () => {
        return <View style={StyleDetailProduct.separator} />;
    };
    useEffect(() => {
        const getDetails = async () => {
            const response = await AxiosIntance().get('/productAPI/getProductByID?id=' + params.itemId);
            if (response.result == false) {
                ToastAndroid.show('Lấy dữ liệu thất bại', ToastAndroid.SHORT);
            } else {
                setDataProduct(response.products);
                setProductPrice(response.products.price);
                setImageProduct(response.products.image[0]);
                setDetail(response.products.detail);
            }
        }
        const getFeedback = async () => {
            const response = await AxiosIntance().get('/feedbackAPI/getFeedbackByProductID?id=' + params.itemId);
            if (response.result == true) {
                setDataFeedback(response.feedbacks);
                setFeedbackLenght(response.feedbacks.length);
            } else {
                ToastAndroid.show('getFeedback thất bại', ToastAndroid.SHORT);
            } if (response.feedbacks.length > 0) {
                const countRating = () => {
                    var star1 = 0;
                    var star2 = 0;
                    var star3 = 0;
                    var star4 = 0;
                    var star5 = 0;
                    var isrealRating = 0;
                    for (i = 0; i < response.feedbacks.length; i++) {
                        if (response.feedbacks[i].rating == 1) {
                            star1++;
                        } else if (response.feedbacks[i].rating == 2) {
                            star2++;
                        } else if (response.feedbacks[i].rating == 3) {
                            star3++;
                        } else if (response.feedbacks[i].rating == 4) {
                            star4++;
                        } else if (response.feedbacks[i].rating == 5) {
                            star5++;
                        }
                    }
                    /*
                    Thuật toán tính tổng số lượng feedBack, phần trăm sao đánh giá theo từng loại
                    */
                    isrealRating = (star1 * 1 + star2 * 2 + star3 * 3 + star4 * 4 + star5 * 5);
                    setPercentRating(((isrealRating / (response.feedbacks.length * 5)) * 5).toFixed(1));
                }
                countRating();
            } else {
                return;
            }
        }
        const getColorByProductID = async () => {
            const response = await AxiosIntance().get('/Options/colorAPI/getColorByProductId?productID=' + params.itemId)
            if (response.result == true) {
                setDataColor(response.color)
            }
        }
        getColorByProductID();
        getDetails();
        getFeedback();
        return () => {
        }
    }, [])
    return (
        <View style={{ height: 785, backgroundColor: 'white' }}>
            <View style={StyleDetailProduct.menu}>
                <TouchableOpacity onPress={back}>
                    <Image source={require('../../images/backic.png')} />
                </TouchableOpacity>
                <Text style={StyleDetailProduct.textTitle}>
                    T. Tin Sản Phẩm
                </Text>
            </View>
            <ScrollView
                stickyHeaderIndices={[1]}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'>
                <ImageBackground source={imageProduct ? { uri: imageProduct } : null} resizeMode='cover' style={{ width: width, height: 320 }}>
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
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 15 }}>
                    <View pointerEvents="none" style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                        <StarRating
                            rating={percentRating}
                            starSize={16}
                            starStyle={{ width: 4 }}
                            enableSwiping={false}
                        />
                        <Text style={{ marginLeft: 12 }}>
                            {percentRating} ({feedbackLength})
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={heartHandler}>
                            <Image style={{ width: 30, height: 30, marginRight: 15 }}
                                source={
                                    heart == true ?
                                        require('../../images/heart.png') : require('../../images/unheart.png')
                                } />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ width: 25, height: 25, marginTop: 3 }} source={require('../../images/messenger.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={StyleDetailProduct.line}></View>
                <View>
                    <View style={{
                        height: 50, alignItems: 'center',
                        backgroundColor: '#f5f5f5',
                        justifyContent: 'center',
                        flexDirection: 'row',
                    }}>
                        <View style={{ borderWidth: 0.2, width: 30 }}></View>
                        <Text style={{ textAlign: 'center', fontSize: 18 }}>  Chi tiết sản phẩm  </Text>
                        <View style={{ borderWidth: 0.2, width: 30 }}></View>
                    </View>
                    <Text style={{ padding: 15, fontSize: 20, fontFamily: 'TiltNeon-Regular' }}>{detail}</Text>
                </View>
                <View style={StyleDetailProduct.line}></View>
                <View style={{marginBottom:100}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ margin: 10, fontSize: 18 }}>
                            Đánh giá ({feedbackLength})
                        </Text>
                        <TouchableOpacity onPress={handlerDetail}>
                            <Text style={{ margin: 10, fontSize: 15 }}>
                                Xem tất cả
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={dataFeedback.slice(0, 3)}
                        showsHorzontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <ItemFeedBack dataFeedback={item} />}
                        keyExtractor={item => item.feedbackID}
                        ItemSeparatorComponent={Separator} />
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailProduct