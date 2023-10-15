import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StyleDetailFeedback } from '../../css/Styles'
import ProgressBar from 'react-native-progress/Bar';
import * as Progress from 'react-native-progress';
import { FlatList } from 'react-native';
import ItemFeedBack from './ItemFeedBack';
import { ScrollView } from 'react-native';
const DetailFeedback = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { params } = route;
    const [star11, setStar11] = useState(0);
    const [star22, setStar22] = useState(0);
    const [star33, setStar33] = useState(0);
    const [star44, setStar44] = useState(0);
    const [star55, setStar55] = useState(0);
    const [lengthFeedback, setlengthFeedback] = useState(0);
    const [percentRating, setpercentRating] = useState(0);
    const [percentRating1, setpercentRating1] = useState(0);
    const [percentRating2, setpercentRating2] = useState(0);
    const [percentRating3, setpercentRating3] = useState(0);
    const [percentRating4, setpercentRating4] = useState(0);
    const [percentRating5, setpercentRating5] = useState(0);
    useEffect(() => {
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
            // const result = percentRating+"";
            // const lastResult = result.slice(0,3);
            // const islastResult = parseFloat(lastResult);
            // setpercentRating(islastResult);
            // console.log(percentRating+"   "+ islastResult);

            // setpercentRating(result);
            //  setpercentRating(result);
            setlengthFeedback(dataFeedback.length);
        }
        countRating();
        return () => {
        }
    }, [percentRating])
    return (
        <View>
            <View style={StyleDetailFeedback.menu}>
                <Image source={require('../../images/backic.png')} />
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
                showsVerticalScrollIndicator={false}>
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
                <View style={{ paddingBottom: 90 }}>
                    <FlatList
                        data={dataFeedback}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <ItemFeedBack dataFeedback={item} />}
                        keyExtractor={item => item.userID} />
                    <TouchableOpacity style={StyleDetailFeedback.touchOpa}>
                        <Text style={{ fontWeight: 'bold' }}>
                            See more
                        </Text>
                    </TouchableOpacity>
                </View>
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
        feedbackText: 'Dcm hang dom vai lit, moi xai duoc co 1 ngay ma hu cmnnr  \nDanh gia shop 5 sao =))       \nMong shop xem lai tin nhan minh gui cho shop ',
        rating: 5,
        dataReplyFeedback: [
            {
                userID:2,
                replyFeedbackId: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                userID:3,
                replyFeedbackId: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 2,
        productID: 1,
        userID: 2,
        feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 1,
        dataReplyFeedback: [
            {
                feedbackID: 1,
                replyFeedbackId: 3,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                feedbackID: 2,
                replyFeedbackId: 4,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 3,
        productID: 1,
        userID: 3,
        feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 4,
        dataReplyFeedback: [
            {
                feedbackID: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                feedbackID: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 4,
        productID: 1,
        userID: 4,
        feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 2,
        dataReplyFeedback: [
            {
                feedbackID: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                feedbackID: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 5,
        productID: 1,
        userID: 5,
        feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 2,
        dataReplyFeedback: [
            {
                feedbackID: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                feedbackID: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 5,
        productID: 1,
        userID: 6,
        feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 2,
        dataReplyFeedback: [
            {
                feedbackID: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                feedbackID: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 6,
        productID: 1,
        userID: 7,
        feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 3,
        dataReplyFeedback: [
            {
                feedbackID: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                feedbackID: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 7,
        productID: 1,
        userID: 8,
        feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 5,
        dataReplyFeedback: [
            {
                feedbackID: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                feedbackID: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 8,
        productID: 1,
        userID: 9,
        feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 5,
        dataReplyFeedback: [
            {
                feedbackID: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                feedbackID: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 9,
        productID: 1,
        userID: 10,
        feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 3,
        dataReplyFeedback: [
            {
                feedbackID: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                feedbackID: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 10,
        productID: 1,
        userID: 11,
        feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 3,
        dataReplyFeedback: [
            {
                feedbackID: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                feedbackID: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    },
    {
        feedbackID: 11,
        productID: 1,
        userID: 12,
        feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 5,
        dataReplyFeedback: [
            {
                feedbackID: 1,
                title: 'Cảm ơn bạn rất nhiều!'
            },
            {
                feedbackID: 2,
                title: 'Cảm ơn bạn rất nhiều!'
            }
        ]
    }
]

