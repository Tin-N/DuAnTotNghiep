import { View, Text, Image, TextInput,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'


const ItemFeedBack = (props) => {
    const { dataFeedback } = props;
    const [shopFeedBack, setShopFeedBack] = useState("wsdf")
    const [roleId, setRoleId] = useState(1)

    useEffect(() => {
        setShopFeedBack("2");
        setRoleId(2);
    }, [dataFeedback])

    const [imageStar, setimageStar] = useState(require('../../images/close.png'))
    useEffect(() => {
        const starImage = () => {
            if (dataFeedback.rating == 1) {
                setimageStar(require('../../images/1star.png'))
                return
            }
            if (dataFeedback.rating == 2) {
                setimageStar(require('../../images/2star.png'))
                return
            } if (dataFeedback.rating == 3) {
                setimageStar(require('../../images/3star.png'))
                return
            } if (dataFeedback.rating == 4) {
                setimageStar(require('../../images/4star.png'))
                return
            } if (dataFeedback.rating == 5) {
                setimageStar(require('../../images/5star.png'))
                return
            }
        }
        starImage();
        return () => {
        }
    }, [])


    return (
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../images/avatarPersonStore.png')} />
                <View style={{ marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'black', width: 100 }}>
                            Nguyễn Văn Tin
                        </Text>
                        <Text style={{ marginLeft: 50 }}>
                            ngày 10 tháng 3 2023
                        </Text>
                    </View>
                    <Image style={{ marginTop: 10 }} source={imageStar} />
                </View>
            </View>
            <View style={{ paddingLeft: 57 }}>
                <Text style={{ letterSpacing: 0.3 }}>
                    {dataFeedback.feedbackText}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 30 }}>
                <View style={{ marginLeft: 50, flexDirection: 'row', width: '33%', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Image source={require('../../images/like.png')} style={{ width: 17, height: 17 }}></Image>
                    <Text>50 lượt thích</Text>
                </View>
                <Text >Trả lời</Text>
            </View>
            <View style={{ marginLeft: 55, marginTop: 5, backgroundColor: '#eaeaea', padding: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black', width: 120 }}>
                                Chủ shop bố đời
                            </Text>
                            <Text style={{ marginLeft: 20 }}>
                                ngày 10 tháng 3 2023
                            </Text>
                        </View>
                        <View>
                            {
                                (roleId == 1) && (shopFeedBack !== null) ?
                                    <Text style={{ fontSize: 13, padding: 5 }}>
                                        Ke mm chu, ngu thi chet chu toi tinh gi =))
                                    </Text>
                                    :
                                     <View/>
                                       
                            }

{
                                (roleId == 2) && (shopFeedBack !== null) ?
                                    <Text style={{ fontSize: 13, padding: 5 }}>
                                        Ke mm chu, ngu thi chet chu toi tinh gi =))
                                    </Text>
                                    :
                                     <View>
                                        <TextInput
                                            multiline={true} 
                                            placeholder='Hay dien thong tin'
                                            style={{ 
                                                justifyContent: 'flex-start', 
                                                widtth: 100 }}
                                        />
                                        <TouchableOpacity style={{alignSelf:'flex-end',padding:2,margin:2}}>
                                            <Text style={{fontSize:16,fontWeight:'500'}}>Đăng</Text>
                                        </TouchableOpacity>
                                    </View>
                            }
























                                    </View>
                        </View>
                    </View>

                </View>
            </View>
            )
}

            export default ItemFeedBack