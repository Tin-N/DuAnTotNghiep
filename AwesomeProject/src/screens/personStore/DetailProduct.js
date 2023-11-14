import { View, Text, Image, TouchableOpacity, ImageBackground, Modal } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { StyleDetailProduct } from '../../css/Styles'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('screen')
import LinearGradient from 'react-native-linear-gradient';
import AxiosIntance from '../../utils/AxiosIntance';
import { formatPrice } from '../../../Agro';
import { ScrollView, FlatList } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import ItemFeedBack from './ItemFeedBack';
import { StyleDialogShopping } from '../../css/Styles';
import { Animated } from 'react-native';
import { calculateTimeDifference } from '../../../Agro';
import { LogBox } from 'react-native';
import { log } from 'console';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const DetailProduct = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { params } = route;

    // Product
    const [productPrice, setProductPrice] = useState('');
    const [dataProduct, setDataProduct] = useState({});
    const [imageProduct, setImageProduct] = useState('');
    const [dataFeedback, setDataFeedback] = useState([]);
    const [dataColor, setDataColor] = useState([]);
    const [dataSize, setDataSize] = useState([]);
    
    const [detail, setDetail] = useState('');
    const [percentRating, setPercentRating] = useState(0);

    // Feedback
    const [feedbackLength, setFeedbackLenght] = useState();

    // Favorite
    const [heart, setHeart] = useState(false);
    const [isDialogVisible, setDialogVisible] = useState(false);
    const [check, setCheck] = useState(null);
    // Sales
    const [bannerSale, setBannerSale] = useState('none');
    const [sale,setSale]=useState("");
    //data sale 
    const [sales,setSales]=useState([]);
    const slideAnim = useRef(new Animated.Value(-100)).current;
    useEffect(() => {
        Animated.timing(
            slideAnim,
            {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true
            }
        ).start();
    }, [slideAnim]);
    const TextTime = (props) => {
        const { startDay, endDay } = props;
        const [Time, setTime] = useState("");
        const [remainingTime] = useState("")
        const now = new Date(); // Lấy thời gian hiện tại
        const threeDaysFromNow = new Date(now);
        threeDaysFromNow.setDate(now.getDate() + 3); // Thêm 3 ngày
        useEffect(() => {
            // Sử dụng setTimeout để thay đổi giá trị text sau 1 giây
            // Xóa timer khi component unmount hoặc dependency thay đổi (nếu cần)
            let timer = setInterval(() => {
                const onSaleTime = calculateTimeDifference(parseFloat(sales[0].startDay), new Date().getTime(), parseFloat(sales[0].endDay));               

                    setTime(onSaleTime);
                
            }, 1000);
            return () => clearTimeout(timer);
        }, []);
        return (
            <View style={{ justifyContent: 'center', alignContent: 'center', marginLeft: 100  }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight:'bold',fontSize:15  }}>{Time}</Text>
            </View>
        )
    }
    const opacityBackground = () => {
        if (isDialogVisible == true)
            return 0.5
        return 1
    }
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
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none"
            }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarStyle: undefined
        });
    }, [navigation]);
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
        const getSizeByProductID = async () => {
            const response = await AxiosIntance().get('/Options/sizeAPI/getSizeByProductId?productID=' + params.itemId)
            if (response.result == true) {
                setDataSize(response.size)
            }
        }
        const getSalesCurrent = async () => {
             const response = await AxiosIntance().get('/saleOffAPI/getSaleOffCurrent?productID=' + params.itemId);
            if (response.result == true) {
                setSales(response.saleOff);
                setBannerSale("flex");
                console.log(response.saleOff,params.itemId);
            }
        }
        getSalesCurrent();
        getColorByProductID();
        getDetails();
        getFeedback();
        getSizeByProductID();
        return () => {
        }
    }, [])
    const MyDialog = ({ isVisible, onClose }) => {
        const [selectedColor, setSelectedColor] = useState(null);
        const [selectedSize, setSelectedSize] = useState(null);
        const [colorChoosen, setColorChoosen] = useState('');
        const [sizeChoosen, setSizeChoosen] = useState('');
        const [imageColor, setimageColor] = useState('')
        const [quantity, setQuantity] = useState(1);
        const quantityHandler = (updateQuantity) => {
            if (updateQuantity == "+") {
                setQuantity(quantity + 1);
            } else if (updateQuantity == "-" && quantity >= 2) {
                setQuantity(quantity - 1);
            }
        }
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    onClose();
                }}
            >
                <View style={StyleDialogShopping.containerShopping}>
                    <TouchableOpacity onPress={onClose} style={{ right: 0, margin: 10, position: 'absolute', top: 0 }} >
                        <Image source={require('../../images/close.png')} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Image style={{ width: 100, height: 100, borderRadius: 5 }} source={imageColor != '' ? { uri: imageColor } : { uri: imageProduct }} />
                        <View style={{ marginLeft: 10 }}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        marginLeft: 0, fontSize: 30,
                                        color: '#3669C9', fontWeight: 'bold'
                                    }}>
                                        {formatPrice(productPrice)}
                                    </Text>
                                    <Text style={{ marginLeft: 0, fontSize: 20, color: '#3669C9', marginLeft: 4, paddingTop: 8 }}>
                                        đ
                                    </Text>
                                </View>
                                <Text style={{ fontSize: 20, textDecorationLine: 'line-through' }}>
                                    199.000 đ
                                </Text>
                                <View>
                                    {
                                        colorChoosen != '' || sizeChoosen != '' ?
                                            <View>
                                                <Text>Kích cỡ: {sizeChoosen} {colorChoosen}</Text>
                                            </View>
                                            : <View>
                                            </View>
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={StyleDialogShopping.line}>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        overScrollMode='never'>
                        <View>
                            {
                                dataColor.length > 0 ?
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ fontSize: 21, color: 'black' }}>Nhóm màu</Text>
                                        <View style={{ flexDirection: 'row', marginTop: 10, flexWrap: 'wrap', marginLeft: -5 }}>
                                            {dataColor.map(item => (
                                                <TouchableOpacity activeOpacity={1} key={item._id} onPress={() => {
                                                    setSelectedColor(item._id);
                                                    setColorChoosen(item.title);
                                                    setimageColor(item.image)
                                                }}
                                                    style={[
                                                        {
                                                            margin: 5,
                                                            justifyContent: 'center',
                                                            alignItems: 'center', borderWidth: 1.5, borderRadius: 5, overflow: 'hidden',
                                                            backgroundColor: '#f7f5f5', borderColor: '#EEEEEE'
                                                        },
                                                        selectedColor === item._id && { borderColor: item.color }
                                                    ]}>
                                                    <Image style={{ width: 105, height: 100 }} source={item.image ? { uri: item.image } : null} />
                                                    <Text style={{
                                                        height: 30, textAlign: 'center',
                                                        paddingTop: 5, width: 'auto'
                                                    }}>{item.title}
                                                    </Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                        <View style={StyleDialogShopping.line}>
                                        </View>
                                    </View>
                                    : <View />
                            }
                        </View>
                        <View>
                            {
                                dataSize.length > 0 ?
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ fontSize: 21, color: '#000000' }}>Kích cỡ</Text>
                                        <View style={{ flexDirection: 'row', marginTop: 10, flexWrap: 'wrap', marginLeft: -5 }}>
                                            {dataSize.map(item => (
                                                <TouchableOpacity activeOpacity={1} key={item._id} onPress={() => {
                                                    setSelectedSize(item._id);
                                                    setSizeChoosen(item.size)
                                                }}
                                                    style={[
                                                        {
                                                            margin: 5,
                                                            justifyContent: 'center',
                                                            alignItems: 'center', borderWidth: 0.5, borderRadius: 5, overflow: 'hidden',
                                                            backgroundColor: '#f7f5f5', borderColor: '#EEEEEE'
                                                        },
                                                        selectedSize === item._id && { borderColor: '#4c4b4b' }
                                                    ]}>
                                                    <Text style={{
                                                        backgroundColor: '#EEEEEE', width: 70,
                                                        padding: 8, textAlign: 'center'
                                                    }}>{item.size}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                        <View style={StyleDialogShopping.line}>
                                        </View>
                                    </View>
                                    : <View />
                            }
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 250 }}>
                            <TouchableOpacity onPress={() => quantityHandler("-")} style={{
                                width: 35, height: 30,
                                backgroundColor: '#EEEEEE', alignItems: 'center',
                            }}>
                                <Text style={{ fontSize: 20 }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ padding: 5, fontSize: 20 }}>{quantity}</Text>
                            <TouchableOpacity onPress={() => quantityHandler("+")} style={{
                                width: 35, height: 30,
                                backgroundColor: '#EEEEEE', alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: 20 }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View style={{ padding: 10, position: 'absolute', bottom: 0, flex: 1 }}>
                        {
                            check == true ? <TouchableOpacity style={StyleDetailProduct.touchOpa2}>
                                <Text style={StyleDetailProduct.textButton}>Mua ngay</Text>
                            </TouchableOpacity>
                                :
                                <LinearGradient
                                    start={{ x: 0, y: 0.5 }} // Điểm bắt đầu của gradient (trái)
                                    end={{ x: 1, y: 0.5 }}   // Điểm kết thúc của gradient (phải)
                                    colors={['#3669C9', '#070723']}
                                    style={{ padding: 8, borderRadius: 25, flex: 1 }}
                                >
                                    <TouchableOpacity style={{ width: 355 }}>
                                        <Text style={StyleDetailProduct.textButton}>
                                            Thêm vào giỏ hàng
                                        </Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                        }
                    </View>
                </View>
            </Modal>
        );
    };
    return (
        <View style={{ flex: 1, backgroundColor: 'white', opacity: opacityBackground() }}>
            <View style={StyleDetailProduct.menu}>
                <TouchableOpacity onPress={back}>
                    <Image source={require('../../images/backic.png')} />
                </TouchableOpacity>
                <Text style={StyleDetailProduct.textTitle}>
                    T. Tin Sản Phẩm
                </Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                overScrollMode='never'>
                <ImageBackground source={imageProduct ? { uri: imageProduct } : null} resizeMode='cover' style={{ width: width, height: 320 }}>
                </ImageBackground>
                <Animated.View
                    style={{
                        ...StyleDetailProduct.banner,
                        display: bannerSale,
                        transform: [{ translateY: slideAnim }] // Sử dụng giá trị Animated cho thuộc tính transform
                    }}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1.2, y: 0.5 }}
                        colors={['#000033', '#3669C9']}
                        style={[StyleDetailProduct.banner,]}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[StyleDetailProduct.titleBanner,]}>SavvyFlash Sale</Text>
                            <TextTime
                                startDay={1699592400000}
                                endDay={1699678800000}
                            />
                        </View>
                    </LinearGradient>
                </Animated.View>
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
                <View style={{ marginBottom: 100 }}>
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
                    <TouchableOpacity onPress={() => {
                        setDialogVisible(true);
                        setCheck(true)
                    }} style={StyleDetailProduct.touchOpa}>
                        <Text style={StyleDetailProduct.textButton}>
                            Mua ngay
                        </Text>
                        <MyDialog isVisible={isDialogVisible} onClose={() => setDialogVisible(false)} />
                    </TouchableOpacity>
                    <LinearGradient
                        start={{ x: 0, y: 0.5 }} // Điểm bắt đầu của gradient (trái)
                        end={{ x: 0.8, y: 0.5 }}   // Điểm kết thúc của gradient (phải)
                        colors={['#3669C9', '#070723']}
                        style={{ padding: 8, width: 130, borderRadius: 25, marginLeft: 5 }}
                    >
                        <TouchableOpacity onPress={() => {
                            setDialogVisible(true);
                            setCheck(false)
                        }}>
                            <Text style={StyleDetailProduct.textButton}>
                                Giỏ hàng
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </View >
    )
}

export default DetailProduct