import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getStorage, ref, deleteObject } from "firebase/storage";
import { storage } from '../../utils/FirebaseConfig';
import { FlatList } from 'react-native';
import { LogBox } from 'react-native';
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';

import ImageViewer from '../../component/ImageView/ImageViewerDialog';
import AxiosIntance from '../../utils/AxiosIntance';
import { useContext } from 'react';
import { AppContext } from '../../utils/AppContext';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const ItemFeedBack = (props) => {
    const {userInfo}=useContext(AppContext)
    const { dataFeedback, setCheck, check } = props;
    const [shopFeedBack, setShopFeedBack] = useState("wsdf")
    const [roleId, setRoleId] = useState(1);
    const [image, setimage] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const deleteFeedback = async () => {
        const response = await AxiosIntance().post("/feedbackAPI/deleteFeedback?id=" + dataFeedback._id);
        if (response.result) {
            setCheck(!check);
        }
    }


    const deleteImageArr = async () => {
        if (dataFeedback.image.length > 0) {
            for (let i = 0; i < dataFeedback.image.length; i++) {
                deleteObject(ref(storage, dataFeedback.image[i]));
                console.log("Ok r ddos");
            }
            deleteFeedback();
        }
    }
    useEffect(() => {
        setShopFeedBack("2");
        setRoleId(2);
    }, [dataFeedback])

    const [imageStar, setimageStar] = useState(require('../../images/close.png'))
    useEffect(() => {
        try {
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
        } catch (error) {
        }

        return () => {
        }
    }, [])

    let string = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";


    return (

        <View

            style={{
                 backgroundColor:'#f0efef', borderRadius:15, padding:10, marginLeft:10, marginRight:10
            }}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../images/avatarPersonStore.png')} />
                    <View style={{ marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black', width: 100 }}>
                                Nguyễn Văn Tin
                            </Text>
                            <Text style={{ marginLeft: 50, paddingRight: 10 }}>
                                ngày 10 tháng 3 2023
                            </Text>

                        </View>
                        <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>


                            <Image style={{ marginTop: 5 }} source={imageStar} />
                            {
                                dataFeedback.userID == userInfo._id ?
                                    <TouchableOpacity onPress={() => deleteImageArr()}>
                                        <Image source={require('../../images/bin.png')} style={{ width: 20, height: 20 }}></Image>
                                    </TouchableOpacity> : <View />
                            }
                        </View>
                    </View>
                </View>
                <View style={{ paddingLeft: 57 }}>
                    <Text style={{ letterSpacing: 0.3, fontFamily: 'TiltNeon-Regular' }}>
                        {dataFeedback.feedback}

                    </Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {dataFeedback.image.length > 0 ? (
                            dataFeedback.image.map(item => (
                                <View style={{ borderRadius: 5, overflow: 'hidden', margin: 5 }}>
                                    <TouchableOpacity onPress={() => { setimage(item); setModalVisible(true) }}>
                                        <Image
                                            style={{ width: 80, height: 80, borderRadius: 10 }}
                                            source={{ uri: item }}>

                                        </Image>
                                    </TouchableOpacity>

                                </View>
                            ))
                        ) : (
                            <View />
                        )}


                    </View>

                    {
                        (image.length > 0) && (isModalVisible) ? <ImageViewer imageUrl={image} isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
                            : <View />

                    }


                </View>

            </View>


        </View>
    )
}
export default ItemFeedBack;