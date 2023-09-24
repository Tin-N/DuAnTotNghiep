import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get("window");
const CategoryItem = (props) => {
    const { dulieu1 } = props;

    return (
        <View style={{ width: width * 0.5, marginLeft: 10, }}>
            <Image style={{ alignSelf: 'center' }} source={require('../images/product.png')} />
            <Text style={{
                fontSize: 14,
                fontStyle: 'bold',
                color: 'black',
            }}>{dulieu1.name}</Text>
            <Text style={{
                fontSize: 14,
                fontStyle: 'bold',
                color: 'red',
            }}>${dulieu1.cost}</Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10
            }}>
                <View style={{flexDirection: 'row'}}>
                    <Pressable >
                        <Icon name='star' size={14} color={"yellow"} />
                    </Pressable>
                    <Text>{dulieu1.star}</Text>
                </View>

                <Text>{dulieu1.reviews} Reviews</Text>
                <Pressable >
                    <Icon name='ellipsis-vertical' size={14} color={"black"} />
                </Pressable>
            </View>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({})