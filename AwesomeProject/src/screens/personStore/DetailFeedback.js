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
    const { route } = props;
    const { params } = route;
  // const navigation= useNavigation();
  const [page, setPage] = useState(1)
  // const {params}=route;
  const [count,setCount]=useState(0);
  const [columns, setcolumns] = useState(2);
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isLoadingmini,setisLoadingmini]=useState(false);
  const [countData, setcountData] = useState(0);
  const [totalPage, settotalPage] = useState(0)
    const [star11, setStar11] = useState(0);
    const [star22, setStar22] = useState(0);
    const [star33, setStar33] = useState(0);
    const [star44, setStar44] = useState(0);
    const [star55, setStar55] = useState(0);
    const [dataFeedback, setDataFeedback] = useState([]);
    const [feedback, setFeedback] = useState('');
    const [check, setCheck] = useState(false)
    const [lengthFeedback, setlengthFeedback] = useState(0);
    const [percentRating, setpercentRating] = useState(0);
    const [percentRating1, setpercentRating1] = useState(0);
    const [percentRating2, setpercentRating2] = useState(0);
    const [percentRating3, setpercentRating3] = useState(0);
    const [percentRating4, setpercentRating4] = useState(0);
    const [percentRating5, setpercentRating5] = useState(0);
    const onHandle = () => {
        navigation.goBack();
    }
    const getFeedback = async () => {
        console.log(count);
        setCount((prev)=>prev+1);
        const response = await AxiosIntance().get('/feedbackAPI/getFeedbackByProductID?id=' + params.itemId+"&size="+page);
        if(response.result == true){
            ToastAndroid.show('Lấy feedback thành công', ToastAndroid.SHORT);
            if(page==1)
            {
                setDataFeedback(response.feedbacks);
                setcountData(response.countData);
                settotalPage(response.totalPages);
            }
            else if(page>1&&page<totalPage){
                setDataFeedback([...dataFeedback,...response.feedbacks]);

            }
        }else {
            ToastAndroid.show('Lấy feedback thất bại', ToastAndroid.SHORT);
        }
        setCheck(false)
    }
    useEffect(() => {
      getFeedback();
        console.log(23);
      return () => {
        
      }
    }, [page])
    
    useEffect(() => {
        if(check){
            if(page==1){
                getFeedback()
            }else{
                setPage(1)
            }
            setCheck(false)
        }
    }, [check])
    const handleMoreData=()=>{
        setPage((prev)=>prev+1)
    }
    useEffect(() => {
        
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

    }, [dataFeedback])
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
                <View style={{ paddingBottom: 90 }}>
                    <FlatList
                        data={dataFeedback}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <ItemFeedBack dataFeedback={item}  setCheck={setCheck} check={check}/>}
                        keyExtractor={item => item.userID} />
                    {
                        dataFeedback.length>=countData?<View/>:<TouchableOpacity style={StyleDetailFeedback.touchOpa} onPress={()=>{handleMoreData()}}>
                        <Text style={{ fontWeight: 'bold' }}>
                            See more
                        </Text>
                    </TouchableOpacity>
                    }
                </View>
            </ScrollView>

        </View>
    )
}

export default DetailFeedback;

