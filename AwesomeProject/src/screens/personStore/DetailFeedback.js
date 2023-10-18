import { View, Text, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StyleDetailFeedback } from '../../css/Styles'
import ProgressBar from 'react-native-progress/Bar';
import * as Progress from 'react-native-progress';
import { FlatList } from 'react-native';
import ItemFeedBack from './ItemFeedBack';
import { ScrollView } from 'react-native';
import AxiosIntance from '../../utils/AxiosIntance';
import { Axios } from 'axios';
const DetailFeedback = (props) => {
    const { navigation } = props;
    const [star11, setStar11] = useState(0);
    const [star22, setStar22] = useState(0);
    const [star33, setStar33] = useState(0);
    const [star44, setStar44] = useState(0);
    const [star55, setStar55] = useState(0);
    // const [dataFeedback, setDataFeedback] = useState([]);
    // const [feedback, setFeedback] = useState('');
    const [lengthFeedback, setlengthFeedback] = useState(0);
    const [percentRating, setpercentRating] = useState(0);
    const [percentRating1, setpercentRating1] = useState(0);
    const [percentRating2, setpercentRating2] = useState(0);
    const [percentRating3, setpercentRating3] = useState(0);
    const [percentRating4, setpercentRating4] = useState(0);
    const [percentRating5, setpercentRating5] = useState(0);
    const onHandle = () => {
        navigation.navigate("HomeStore");
    }
    useEffect(() => {
        // const getFeedback = async () => {
        //     const response = await AxiosIntance.get('/feedbackAPI/getFeedbackByProductID?productID=' + params.itemId);
        //     console.log(response);
        //     if (response.result == true) {
        //         ToastAndroid('Lấy feedback thành công', ToastAndroid.SHORT);
        //         // setDataFeedback(response.feedbacks);
        //     } else {
        //         ToastAndroid('Lấy feedback thất bại', ToastAndroid.SHORT);
        //     }
        // }
        // getFeedback();       
        if (dataFeedback.length > 0) {
            const countRating = () => {
                var star1 = 0;
                var star2 = 0;
                var star3 = 0;
                var star4 = 0;
                var star5 = 0;
                var isrealRating = 0;
                for (i = 0; i < dataFeedback.length; i++) {
                    if (dataFeedback[i].rating == 1) {
                        star1++;
                        setStar11(star1);
                    } else if (dataFeedback[i].rating == 2) {
                        star2++;
                        setStar22(star2);
                    } else if (dataFeedback[i].rating == 3) {
                        star3++;
                        setStar33(star3);
                    } else if (dataFeedback[i].rating == 4) {
                        star4++;
                        setStar44(star4);
                    } else if (dataFeedback[i].rating == 5) {
                        star5++;
                        setStar55(star5);
                    }
                }
                /*
                Thuật toán tính tổng số lượng feedBack, phần trăm sao đánh giá theo từng loại
                */
                isrealRating = (star1 * 1 + star2 * 2 + star3 * 3 + star4 * 4 + star5 * 5)
                setpercentRating(((isrealRating / (dataFeedback.length * 5)) * 5).toFixed(1))
                setpercentRating1(star1 / dataFeedback.length)
                setpercentRating2(star2 / dataFeedback.length)
                setpercentRating3(star3 / dataFeedback.length)
                setpercentRating4(star4 / dataFeedback.length)
                setpercentRating5(star5 / dataFeedback.length)
                setlengthFeedback(dataFeedback.length);
                if (percentRating1 == 0)
                    setStar11(0);
                if (percentRating2 == 0)
                    setStar22(0);
                if (percentRating3 == 0)
                    setStar33(0);
                if (percentRating4 == 0)
                    setStar44(0);
                if (percentRating5 == 0)
                    setStar55(0);
            }
            countRating();
        } else if (dataFeedback.length == 0) {
            setpercentRating(0)
            setpercentRating1(0)
            setpercentRating2(0)
            setpercentRating3(0)
            setpercentRating4(0)
            setpercentRating5(0)
            setlengthFeedback(0)
            setStar11(0)
            setStar22(0)
            setStar33(0)
            setStar44(0)
            setStar55(0)
        }
        return () => {
        }
    }, [])
    return (
        <View>
            <View style={StyleDetailFeedback.menu}>
                <TouchableOpacity onPress={onHandle}>
                    <Image source={require('../../images/backic.png')} />
                </TouchableOpacity>

                <Text style={StyleDetailFeedback.textTitle}>
                    Đánh Giá
                </Text>
                <Image style={{ marginLeft: 80 }} source={require('../../images/star.png')} />
                <Text>
                    {percentRating}
                </Text>
            </View>

            <View style={StyleDetailFeedback.line}></View>
            <ScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'>
                <View style={StyleDetailFeedback.boxRate}>
                    <View style={StyleDetailFeedback.boxTextRate}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 23,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>
                                {percentRating}
                            </Text>
                            <Text style={{ marginTop: 6 }}>
                                /5
                            </Text>
                        </View>
                        <Text style={{
                            color: 'black',
                            marginTop: 5,
                            marginLeft: -9
                        }}>
                            {lengthFeedback} Reviews
                        </Text>
                    </View>
                    <Image style={{ height: 110, marginLeft: 15 }} source={require('../../images/lineheight.png')} />
                    <View style={StyleDetailFeedback.boxStarRate}>
                        <Image source={require('../../images/boxstar.png')} />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Progress.Bar color='#FFC120' marginTop={4} progress={percentRating5} width={115} height={5} />
                        <Progress.Bar color='#FFC120' marginTop={16} progress={percentRating4} width={115} height={5} />
                        <Progress.Bar color='#FFC120' marginTop={16} progress={percentRating3} width={115} height={5} />
                        <Progress.Bar color='#FFC120' marginTop={16} progress={percentRating2} width={115} height={5} />
                        <Progress.Bar color='#FFC120' marginTop={16} progress={percentRating1} width={115} height={5} />
                    </View>
                    <View style={{ marginLeft: 8 }}>
                        <Text style={{ marginTop: -2, color: 'black' }}>
                            {star55}
                        </Text>
                        <Text style={{ marginTop: 3, color: 'black' }}>
                            {star44}
                        </Text>
                        <Text style={{ marginTop: 4, color: 'black' }}>
                            {star33}
                        </Text>
                        <Text style={{ marginTop: 3, color: 'black' }}>
                            {star22}
                        </Text>
                        <Text style={{ marginTop: 3.5, color: 'black' }}>
                            {star11}
                        </Text>
                    </View>
                </View>
                {dataFeedback.length > 0 ? <View style={{ paddingBottom: 90 }}>
                    <FlatList
                        data={dataFeedback}
                        showsHorzontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <ItemFeedBack dataFeedback={item} />}
                        keyExtractor={item => item.feedbackID} />
                    <TouchableOpacity style={StyleDetailFeedback.touchOpa}>
                        <Text style={{ fontWeight: 'bold' }}>
                            See more
                        </Text>
                    </TouchableOpacity>
                </View> :
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 100 }}>
                            Không có bình luận nào
                        </Text>
                    </View>}
            </ScrollView>

        </View>
    )
}

export default DetailFeedback
const dataFeedback = [
    {
        feedbackID: 1,
        productID: 1,
        userID: 1,
        feedbackText: 'Mới xài một ngày mà hư rồi nha  \nDanh gia shop 5 sao =))       \nMong shop xem lai tin nhan minh gui cho shop ',
        rating: 5,
        dataReplyFeedback: [
            {
                userID: 2,
                replyFeedbackId: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                userID: 3,
                replyFeedbackId: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 2,
        productID: 1,
        userID: 2,
        feedbackText: 'Mới xài một ngày mà hư rồi nha  \nDanh gia shop 5 sao =))       \nMong shop xem lai tin nhan minh gui cho shop ',
        rating: 4,
        dataReplyFeedback: [
            {
                userID: 2,
                replyFeedbackId: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                userID: 3,
                replyFeedbackId: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 3,
        productID: 1,
        userID: 3,
        feedbackText: 'Mới xài một ngày mà hư rồi nha  \nDanh gia shop 5 sao =))       \nMong shop xem lai tin nhan minh gui cho shop ',
        rating: 5,
        dataReplyFeedback: [
            {
                userID: 2,
                replyFeedbackId: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                userID: 3,
                replyFeedbackId: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 4,
        productID: 1,
        userID: 4,
        feedbackText: 'Mới xài một ngày mà hư rồi nha  \nDanh gia shop 5 sao =))       \nMong shop xem lai tin nhan minh gui cho shop ',
        rating: 3,
        dataReplyFeedback: [
            {
                userID: 2,
                replyFeedbackId: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                userID: 3,
                replyFeedbackId: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 4,
        productID: 1,
        userID: 4,
        feedbackText: 'Mới xài một ngày mà hư rồi nha  \nDanh gia shop 5 sao =))       \nMong shop xem lai tin nhan minh gui cho shop ',
        rating: 3,
        dataReplyFeedback: [
            {
                userID: 2,
                replyFeedbackId: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                userID: 3,
                replyFeedbackId: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        "productID": "1",
        "userID": "1",
        "feedbackText": "Sản phẩm quá tuyệt vời không thể tin nổi",
        "rating": 5
    },
    {
        "productID": "1",
        "userID": "2",
        "feedbackText": "Sản phẩm quá tuyệt vời không thể tin nổi",
        "rating": 2
    },
    {
        "productID": "1",
        "userID": "3",
        "feedbackText": "Sản phẩm quá tuyệt vời không thể tin nổi",
        "rating": 5
    },
    {
        "productID": "1",
        "userID": "4",
        "feedbackText": "Sản phẩm quá tuyệt vời không thể tin nổi",
        "rating": 5

    }

]

