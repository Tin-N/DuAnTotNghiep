import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { StyleOrder } from '../css/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const OrderItem = (props) => {
    const { dulieu1 } = props

    const Delete = () => {
        console.log("Đã xóa");
    }

    const Add = () => {
        console.log("Thêm");
    }
    const [isCheck, setisCheck] = useState([]);
    const options = [""];
    function pickOption(selectedCheck) {
        if (isCheck.includes(selectedCheck)) {
            setisCheck(isCheck.filter(isCheck => isCheck !== selectedCheck));
            return;
        }
        setisCheck(isCheck => isCheck.concat(selectedCheck))
    }
    return (
        <View style={StyleOrder.header}>
            <View style={StyleOrder.header}>
                {options.map(option => (
                    <View key={option} >
                        <View style={StyleOrder.checkBoxOrder}>
                            <TouchableOpacity onPress={() => pickOption(option)}>
                                {isCheck.includes(option) == true ? <MaterialIcons name='check-box' size={24} color={'green'} /> : <MaterialIcons name='check-box-outline-blank' size={24} color={'black'} />}
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                <Image style={StyleOrder.imageFlatList} source={require('../images/iphone14.png')} />

                <View>
                    <Text style={[StyleOrder.textNameFlatList,]} numberOfLines={2}>{dulieu1.name}</Text>
                    <Text style={[StyleOrder.textInfoFlatList]} numberOfLines={2}>{dulieu1.firm}</Text>
                    <Text style={[StyleOrder.textInfoFlatList]}>${dulieu1.cost}</Text>
                </View>
            </View>

            <View style={[StyleOrder.header, StyleOrder.function]}>
                <Pressable onPress={Delete}>
                    <Icon name='trash-outline' size={24} />
                </Pressable>
                <Text>1</Text>
                <Pressable onPress={Add}>
                    <Icon name='add' size={24} />
                </Pressable>
            </View>

            <View style={[StyleOrder.header, StyleOrder.function,{marginRight: 5}]}>
                <Text>$10000000000000000000000000000000000000000000</Text>
            </View>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({})