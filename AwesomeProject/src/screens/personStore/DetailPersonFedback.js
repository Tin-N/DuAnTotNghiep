import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleDetailPersonFeedback } from '../../css/Styles'
const DetailPersonFedback = () => {
    return (
        <View>
            <View style={StyleDetailPersonFeedback.menu}>
                <Image source={require('../../images/backic.png')} />
                <Text style={StyleDetailPersonFeedback.textTitle}>
                    Chi tiết
                </Text>
                <TouchableOpacity style={StyleDetailPersonFeedback.touchOpa}>
                    <Image source={require('../../images/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 10 }}>
                    <Image source={require('../../images/cardic.png')} />
                </TouchableOpacity>
            </View>
            <View style={StyleDetailPersonFeedback.line}>
            </View>
        </View>
    )
}

export default DetailPersonFedback