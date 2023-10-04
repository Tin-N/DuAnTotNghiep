import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const ItemFeedBack = (props) => {
    const { dataFeedback } = props;
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
        <View style={{ margin: 20 }}>
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
        </View>
    )
}

export default ItemFeedBack