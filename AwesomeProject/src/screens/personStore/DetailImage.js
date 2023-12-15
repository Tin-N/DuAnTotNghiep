import { View, Text, Image, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
const DetailImage = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { params } = route
    const [imgArray, setimgArray] = useState([])
    const [linkImageSelected, setlinkImageSelected] = useState(null)
    console.log(params.dataImage[0]);
    useEffect(() => {

        setimgArray(params.dataImage)
        setlinkImageSelected(params.dataImage[0])
        return () => {

        }
    }, [])
    const back = () => {
        navigation.goBack()
    }
    return (
        <View style={{ height: '100%', backgroundColor: '#151515' }}>
            <StatusBar backgroundColor='#151515' />
            <View style={{ height: '25%', backgroundColor: '#151515' }}>
                <TouchableOpacity style={{ position: 'absolute', bottom: 40, right: 0, margin: 20 }} onPress={back}>
                    <Icon1 name="close-outline" color='white' size={25} />
                </TouchableOpacity>
            </View>
            <ImageBackground style={{ backgroundColor: '', height: 400 }} source={linkImageSelected == null ? { uri: params.dataImage[0] } : { uri: linkImageSelected }}
                resizeMode='cover'>

            </ImageBackground>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 30 }}>
                {
                    Object.keys(imgArray).length > 0 ?
                        imgArray.map(item => (
                            <TouchableOpacity
                                activeOpacity={1}
                                style={[{
                                    borderRadius: 5, borderWidth: 2, margin: 4, overflow: 'hidden', borderColor:'#151515'
                                }, linkImageSelected === item && { borderColor: '#3669c9' }]}
                                key={item} onPress={() => setlinkImageSelected(item)}>

                                <Image style={{ width: 80, height: 80 }} source={{ uri: item }} />

                            </TouchableOpacity>

                        )) : <View />
                }
            </View>
        </View>
    )
}

export default DetailImage