
import { View, Text, Image, TouchableOpacity, ImageBackground, Modal, ToastAndroid, Easing, Alert } from 'react-native'
import React, { useState, useEffect, useContext, useRef } from 'react'


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
import Icon1 from 'react-native-vector-icons/Ionicons';
import { LogBox } from 'react-native';

import DialogFeedback from '../../component/DialogFeedback/DialogFeedback';
import { AppContext } from '../../utils/AppContext';
const ObjectID = require('bson-objectid');



LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const DetailProduct = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { isLogin,userInfo } = useContext(AppContext);
    const { params } = route;

    console.log(params)


    // Product

    const [productPrice, setProductPrice] = useState('');
    const [dataProduct, setDataProduct] = useState({});
    const [imageProduct, setImageProduct] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [star, setStar] = useState(0);

    const { userID } = useContext(AppContext);
    const { userAddress } = useContext(AppContext);
    const [ownerID, setownerID] = useState()

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

    const [productQuantity, setproductQuantity] = useState(0)

    // favoriteID
    const [favorite, setFavorite] = useState({})

    const checkStar = () => {
        if (star > 0) {
            // console.log(text);
            setModalVisible(true);
        }
    }
    const [check, setCheck] = useState(null);
    // Sales
    const [bannerSale, setBannerSale] = useState('none');
    const [sales, setSales] = useState({});
    const [percentSales, setPercentSales] = useState(0);
    const [endDate, setendDate] = useState();
    const [startDate, setstartDate] = useState();
    const [saleOffID, setsaleOffID] = useState();
    const [onProductSaleOff, setonProductSaleOff] = useState(false);
    const [isVisibleRating, setIsVisibleRating] = useState(false);

    //data sale 
    const slideAnim = useRef(new Animated.Value(-100)).current;
    useEffect(() => {
        Animated.timing(
            slideAnim,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    }, [slideAnim]);
    const TextTime = (props) => {
        const { startDay, endDay } = props;
        const [Time, setTime] = useState("");
        const [remainingTime] = useState("");
        const now = new Date(); // Lấy thời gian hiện tại
        const threeDaysFromNow = new Date(now);
        threeDaysFromNow.setDate(now.getDate() + 3); // Thêm 3 ngày
        useEffect(() => {
            if (sales.length != 0 && sales.endDay > new Date().getTime()) {
                console.log(">>>>sale: " + sales[0].endDay);
                let timer = setInterval(() => {
                    const onSaleTime = calculateTimeDifference(parseFloat(sales.startDay), new Date().getTime(), parseFloat(sales.endDay));
                    setTime(onSaleTime)
                    console.log(">>>>>dawdawdaw " + sales[0].startDay + " " + new Date().getTime())
                    // if (sales[0].startDay > new Date().getTime()){
                    //     setonProductSaleOff(false)
                    //         setonProductSaleOff(true)
                    // }
                    if (typeof onSaleTime === "undefined") {
                        setBannerSale('none')
                    }
                }, 1000);
                return () => clearTimeout(timer);
            }
        }, [])
        return (
            <View style={{ justifyContent: 'center', alignContent: 'center', marginLeft: 100 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>{Time}</Text>
            </View>
        )
    }
    useEffect(() => {
        const getSalesCurrent = async () => {
            const response = await AxiosIntance().get('/saleOffAPI/getSaleApplyBySaleID?saleID=' + saleOffID);
            if (response.result == true && response.saleOff.length != 0) {
                setSales(response.saleOff);
                setendDate(response.saleOff.endDay);
                setstartDate(response.saleOff.startDay);
                setPercentSales(response.saleOff.saleOff);
                setBannerSale("flex");
            } else {

            }
        }
        getSalesCurrent();
        return () => {
        }
    }, [])
    const opacityBackground = () => {
        if (isDialogVisible == true)
            return 0.5
        return 1
    }
    const heartHandler = async () => {
        console.log(favorite);
        if (!isLogin) {
            Alert.alert(
                'Thông báo',
                'Bạn chưa đăng nhập', // Nội dung thông báo
                [
                    {
                        text: 'Cancel', // Chữ hiển thị trên nút Cancel
                    },
                    {
                        text: 'OK', // Chữ hiển thị trên nút OK
                        onPress: () => {
                            // Xử lý khi người dùng chọn "OK"
                            navigation.navigate('Login')
                        },
                    },
                ]
            );
        }else{
            if (heart) {
                const response = await AxiosIntance().post("/favoriteApi/deleteFavorite?id=" + favorite._id);
                if (response.result) {
                    setFavorite({});
                    ToastAndroid.show("Gỡ khỏi ưu thích thành công", ToastAndroid.SHORT);
                    setHeart(!heart);
                } else {
                    ToastAndroid.show("Gỡ khỏi ưu thích không thành công", ToastAndroid.SHORT);
                }
            } else {
                const response = await AxiosIntance().post("/favoriteApi/addFavorite?userID=" + userInfo._id + "&productID=" + params.itemId);
                if (response.result) {
                    ToastAndroid.show("Thích thành công", ToastAndroid.SHORT);
                    setHeart(!heart);
                    setFavorite(response.favorite);
                } else {
                    ToastAndroid.show("Thêm vào ưu thích không thành công", ToastAndroid.SHORT);
                }
            }
        }
        
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
    const homeStoreHandler = () => {
        navigation.navigate('HomeStore')
    }

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
            try {
                const response = await AxiosIntance().get('/productAPI/getProductByID?id=' + params.itemId);
                console.log(">>>>>>productID for detail: " + params.itemId);
                if (response.result == true) {
                    setDataProduct(response.products);
                    setProductPrice(response.products.price);
                    setImageProduct(response.products.image[0]);
                    setDetail(response.products.detail);
                    setownerID(response.products.userID);
                    setproductQuantity(response.products.quantity);
                    setsaleOffID(response.products.saleOff);

                }
            } catch (error) {
                console.log("Product Detail: lỗi lấy dữ liệu: " + error)
            }
        }
        const checkProductsInOrderdetail = async () => {
           if(isLogin){
                try {
                    const response = await AxiosIntance().get(`/orderdetail/check-product-in-orderDetail/${userID}/${params.itemId}`);
                    console.log(">>>>>>productID for detail: " + params.itemId);
                    if (response.result == true) {
                       setIsVisibleRating(response.result)

                    }
                } catch (error) {
                    console.log("Product Detail: lỗi lấy dữ liệu: " + error)
                }
           }
        }
        // Get favorite 
        const getFavorite = async () => {
            const response = await AxiosIntance().get("/favoriteApi/getFavorite?userID=" + userInfo._id + "&productID=" + params.itemId);
            if (response.result) {
                if (Object.keys(response.favorite).length > 0) {
                    setHeart(!heart);
                    setFavorite(response.favorite);
                }
            }
        }
        const getFeedback = async () => {
            const response = await AxiosIntance().get('/feedbackAPI/getFeedbackByProductID?id=' + params.itemId+"&size="+1);
            if (response.result == true) {
                setDataFeedback(response.feedbacks);
                setFeedbackLenght(response.feedbacks.length);
                ToastAndroid.show('getFeedback thanhf cong', ToastAndroid.SHORT);

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

        getColorByProductID();
        getDetails();
        getFeedback();
        getSizeByProductID();
        checkProductsInOrderdetail();
        getFavorite();
        return () => {
        }
    }, [params.itemId])

    const MyDialog = ({ isVisible, onClose }) => {
        const [selectedColor, setSelectedColor] = useState(null);
        const [selectedSize, setSelectedSize] = useState(null);
        const [colorChoosen, setColorChoosen] = useState('');
        const [sizeChoosen, setSizeChoosen] = useState('');
        const [imageColor, setimageColor] = useState('')
        const [quantity, setQuantity] = useState(1);

        const [productID, setproductID] = useState(params.itemId)
        const [itemTotalCost, setitemTotalCost] = useState(0)
        const [productPrice, setproductPrice] = useState(0)



        useEffect(() => {
            (async () => {
                try {
                    const productResponse = await AxiosIntance().get(`/productAPI/getProductByID?id=${productID}`);
                    if (productResponse.result == true) {
                        setproductPrice(productResponse.products.price)
                        setitemTotalCost(quantity * productResponse.products.price)
                    }
                } catch (error) {
                    console.log("lỗi lấy dữ liệu: " + error)
                }
            })();
        }, []);


        const optionsInCart = {
            color: colorChoosen,
            size: sizeChoosen
        }

        const productsInCart = {
            ownerID,
            productID,
            quantity,
            optionsInCart,
            itemTotalCost
        }

        useEffect(() => {
            setitemTotalCost(quantity * productPrice)
        }, [quantity])



        const quantityHandler = (updateQuantity) => {
            if (updateQuantity == "+") {
                setQuantity(quantity + 1);
            } else if (updateQuantity == "-" && quantity >= 2) {
                setQuantity(quantity - 1);
            }
        }

        const addToCart = async () => {
            try {
                const response = await AxiosIntance().post('/cart/add',
                    { userID: userID, products: productsInCart, quantity })
                if (response) {
                    console.log("Thêm vào giỏ hàng thành công");
                    setDialogVisible(false)
                    ToastAndroid.show("Thêm vào giỏ hàng thành công", ToastAndroid.SHORT);
                }
            } catch (error) {
                console.log("Lỗi thêm vào giỏ hàng: " + error)
            }

        }

        const orderNow = async () => {
            const objectId = new ObjectID();
            console.log(objectId)
            console.log(">>>>isLogin: " + isLogin);
            if (!isLogin) {
                Alert.alert(
                    'Thông báo',
                    'Bạn chưa đăng nhập', // Nội dung thông báo
                    [
                        {
                            text: 'Cancel', // Chữ hiển thị trên nút Cancel
                        },
                        {
                            text: 'OK', // Chữ hiển thị trên nút OK
                            onPress: () => {
                                // Xử lý khi người dùng chọn "OK"
                                navigation.navigate('Login')
                            },
                        },
                    ]
                );
            }
            const productToOrder = {
                ownerID,
                productID,
                quantity,
                optionsInCart,
                itemTotalCost,
                deliveryStatus: 'Pending'
            }

            const orderDetailResponse = await AxiosIntance().post('/orderdetail/add',
                {
                    userID,
                    orderDetailID: objectId,
                    products: productToOrder,
                    totalCost: itemTotalCost
                });
            console.log("Order Detail ID: " + orderDetailResponse.data.orderDetailID)

            const OrderPost = async () => {
                if (orderDetailResponse.error == false) {
                    const orderResponse = await AxiosIntance().post('/order/add',
                        {
                            orderDetailID: objectId,
                            orderDate: new Date(),
                            deliveryStatus: 'Pending',
                            paymentStatus: 'Unpaid',
                            paymentMethods: 'COD',
                            ownerID: ownerID,
                            userAddress
                        });
                    setDialogVisible(false)
                    // console.log("Đặt hàng thành công, Order Detail ID: " + orderResponse.orderDetailID + " Order ID: " + orderResponse.orderID);
                    ToastAndroid.show("Đơn hàng của bạn đang chờ xử lý", ToastAndroid.SHORT);
                }
            }

            Alert.alert(
                'Thông báo',
                'Bạn có muốn mua sản phẩm này?', // Nội dung thông báo
                [
                    {
                        text: 'Cancel', // Chữ hiển thị trên nút Cancel
                        onPress: () => {
                            // Xử lý khi người dùng chọn "Cancel"
                            console.log('Bạn đã chọn Cancel');
                        }
                    },
                    {
                        text: 'OK', // Chữ hiển thị trên nút OK
                        onPress: () => {
                            // Xử lý khi người dùng chọn "OK"
                            OrderPost();

                            async () => {
                                try {
                                    await AxiosIntance().put(`productAPI/updateQuantityOrdered`, {
                                        productsToUpdate: productsSelected
                                    })
                                } catch (error) {

                                }
                            }
                        },
                    },
                ]
            );
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
                                <View>
                                    {
                                        sales.length > 0 ?
                                            <View>
                                                <Text style={StyleDetailProduct.textPrice}>
                                                    {formatPrice(productPrice - (productPrice * percentSales).toFixed(0))} đ
                                                </Text>
                                                <Text style={{ fontSize: 18, textDecorationLine: 'line-through' }}>
                                                    {formatPrice(productPrice)}đ
                                                </Text>
                                            </View>
                                            :
                                            <View style={{}}>
                                                <Text style={StyleDetailProduct.textPrice}>
                                                    {formatPrice(productPrice)} đ
                                                </Text>
                                            </View>
                                    }
                                </View>
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
                                                            alignItems: 'center', borderWidth: 0.5,
                                                            borderRadius: 5, overflow: 'hidden',
                                                            backgroundColor: '#f7f5f5', borderColor: '#EEEEEE',
                                                        },
                                                        selectedSize === item._id && { borderColor: '#4c4b4b' }
                                                    ]}>
                                                    <Text style={{
                                                        marginLeft: 20, marginRight: 20,
                                                        padding: 3, textAlign: 'center', marginTop: 5, marginBottom: 5
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

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center', marginTop: 10,
                                marginLeft: 10, width: 350, justifyContent: 'space-between'
                            }}>
                                <Text style={{ fontSize: 18, color: 'black' }}>Số lượng</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => quantityHandler("-")} style={{
                                        backgroundColor: '#EEEEEE'
                                    }}>
                                        <Icon1 name='remove-outline' size={15} style={{ padding: 3 }} />
                                    </TouchableOpacity>
                                    <Text style={{ padding: 5, fontSize: 20 }}>{quantity}</Text>
                                    <TouchableOpacity onPress={() => quantityHandler("+")} style={{
                                        backgroundColor: '#EEEEEE'
                                    }}>
                                        <Icon1 name='add-outline' size={15} style={{ padding: 3 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    <View style={{ padding: 10, position: 'absolute', bottom: 0, flex: 1 }}>
                        {
                            check == true ?
                                <TouchableOpacity onPress={orderNow} style={StyleDetailProduct.touchOpa2}>
                                    <Text style={StyleDetailProduct.textButton}>Mua ngay</Text>
                                </TouchableOpacity>
                                :

                                <TouchableOpacity
                                    onPress={addToCart}
                                    style={[{ width: 355 }, StyleDetailProduct.touchOpa2]}>
                                    <Text style={StyleDetailProduct.textButton}>Thêm vào giỏ hàng</Text>
                                </TouchableOpacity>
                        }

                    </View>
                </View>
            </Modal>
        );
    }
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
                            <Text style={[StyleDetailProduct.titleBanner,]}>Shopping Sale</Text>
                            <TextTime
                                startDay={startDate}
                                endDay={endDate}
                            />
                        </View>
                    </LinearGradient>
                </Animated.View>
                <View>
                    {
                        sales.length > 0 ?
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <Text style={StyleDetailProduct.textd}>
                                    đ
                                </Text>
                                <Text style={StyleDetailProduct.textPrice}>
                                    {formatPrice(productPrice - (productPrice * percentSales).toFixed(0))}
                                </Text>
                                <Text style={StyleDetailProduct.textSalePrice}>
                                    đ{productPrice}
                                </Text>
                                <Text style={StyleDetailProduct.textBoxSale}>
                                    {percentSales * 100}%
                                </Text>
                            </View>
                            :
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <Text style={StyleDetailProduct.textPrice}>
                                    {formatPrice(productPrice)}
                                </Text>
                            </View>
                    }
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
                                        require('../../images/heart.jpg') : require('../../images/unheart.jpg')
                                } />

                    
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ width: 25, height: 25, marginTop: 3 }} source={require('../../images/messenger.jpg')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={StyleDetailProduct.line}></View>
                            
                            <View style={{}}>

                            </View>

                <View style={StyleDetailProduct.line}></View>
                 <View style={{ marginBottom: 20 }}>
                 {isLogin? <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, marginVertical: 5, marginHorizontal: 10 }}>Thêm đánh giá</Text>
                        <StarRating
                            maxStars={5}
                            rating={star}
                            onChange={setStar}
                            enableHalfStar={false}
                            onRatingEnd={() => checkStar()}
                            starSize={25}
                            enableSwiping={true}
                            animationConfig={{
                                scale: 1.3, duration: 100,
                                easing: Easing.elastic(10)
                            }}
                        />
                    </View>:<View/>}

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
                <View style={StyleDetailProduct.line}></View>
                <View style={{marginBottom:100}}>
                    <View style={{
                        height: 50, alignItems: 'center',
                        backgroundColor: '#f5f5f5',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}>
                        <View style={{ borderWidth: 0.2, width: 30 }}></View>
                        <Text style={{ textAlign: 'center', fontSize: 18 }}>  Chi tiết sản phẩm  </Text>
                        <View style={{ borderWidth: 0.2, width: 30 }}></View>
                    </View>
                    <Text style={{ padding: 15, fontSize: 20, fontFamily: 'TiltNeon-Regular' }}>{detail}</Text>
                </View>
            </ScrollView>

            <View style={{
                width: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center',
            }}>
                <DialogFeedback
                    modalVisible={modalVisible} setModalVisible={setModalVisible} star={star} setStar={setStar}
                    productID={params.itemId} userID={userID}
                />
            </View>

            <View style={StyleDetailProduct.bottom}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={homeStoreHandler} style={{ paddingLeft: 10, paddingRight: 10, }}>
                        <Image style={StyleDetailProduct.image} source={require('../../images/avatarPersonStore.png')} />
                        <Text style={{ fontSize: 12, textAlign: 'center' }}>Store</Text>
                    </TouchableOpacity>
                    <Image style={{ height: 45, marginTop: -4 }} source={require('../../images/lineheight.png')} />
                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                        {/* <Image style={StyleDetailProduct.image} source={require('../../images/iconchat1.png')} /> */}
                        <Text style={{ fontSize: 12, textAlign: 'center' }}>Chat</Text>
                    </View>
                </View>
                {productQuantity != 0
                    ?
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => { setDialogVisible(true); setCheck(true); }} style={StyleDetailProduct.touchOpa}>
                            <Text style={StyleDetailProduct.textButton}>Mua ngay</Text>
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
                                console.log("Hello"+userID);
                                setCheck(false)
                            }}>
                                <Text style={StyleDetailProduct.textButton}>
                                    Giỏ hàng
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    :
                    <TouchableOpacity style={StyleDetailProduct.disabledTouchable} disabled={true}>
                        <Text style={StyleDetailProduct.outOfQuantityButon}>
                            Hết Hàng
                        </Text>
                    </TouchableOpacity>
                }

            </View>
        </View >
    );
}
export default DetailProduct;