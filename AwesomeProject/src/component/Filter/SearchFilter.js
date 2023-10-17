import { StyleSheet, Text, View, Pressable, TextInput, FlatList, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleCategory, StyleOrder } from '../../css/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
// import Feather from 'react-native-vector-icons/Feather'
// import CategoryItem from './CategoryItem'


const SearchFilter = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isFilter, setisFilter] = useState(false);

    const click = () => {
        setisFilter(true);
    }

    const click1 = () => {
        setisFilter(false);
    }

    return (
        <View>


            <View>
                <Pressable style={StyleCategory.pressable} onPress={() => setModalVisible(true)}>
                    <Text style={StyleCategory.textPressable}>Filter & Sorting</Text>
                </Pressable>
            </View>

            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}>
                    <View style={StyleCategory.centeredView}>
                        <View style={StyleCategory.modalView}>
                            <View style={StyleOrder.header}>
                                <Text style={StyleCategory.textHeader}>Filter & Sorting</Text>
                                <Pressable
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Icon name='close' size={24} color={'black'} />
                                </Pressable>
                            </View>

                            <View style={StyleCategory.filterSorting}>
                                <Pressable onPress={click}>
                                    <Text style={StyleCategory.textHeader}>Filter</Text>
                                </Pressable>
                                <Pressable onPress={click1}>
                                    <Text style={StyleCategory.textHeader}>Sorting</Text>
                                </Pressable>
                            </View>

                            <View style={{ borderBottomWidth: 0.5, marginTop: 5 }}>

                            </View>
                            {
                                isFilter == false ? <Sorting2 /> : <Filter />
                            }
                            <View style={StyleOrder.header}>
                                <Pressable style={StyleCategory.pressableModal}>
                                    <Text style={StyleCategory.textPressable}>Reset</Text>
                                </Pressable>
                                <Pressable style={[StyleCategory.pressableModal, { backgroundColor: '#3669C9' }]}>
                                    <Text style={StyleCategory.textPressable}>Apply</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}



const Filter = () => {
    const [isCheck, setisCheck] = useState([]);
    const options = ["Semua Sub Kategori", "Keripik", "Kue", "Nasi"];
    function pickOption(selectedCheck) {
        if (isCheck.includes(selectedCheck)) {
            setisCheck(isCheck.filter(isCheck => isCheck !== selectedCheck));
            return;
        }
        setisCheck(isCheck => isCheck.concat(selectedCheck))
    }
    return (
        <View>
            <Text style={StyleCategory.textRang}>Range Harga</Text>
            <View style={StyleOrder.header}>
            <Text style={StyleCategory.textPressable}>Rp 50.000</Text>
            <Text style={StyleCategory.textPressable}>Rp 100.000</Text>
            </View>
            {options.map(option => (
                <View key={option} >
                    <View style={StyleOrder.header}>
                        <Text style={StyleCategory.textPressable}>{option}</Text>
                        <TouchableOpacity onPress={() => pickOption(option)}>
                            {isCheck.includes(option) == true ? <Icon name='checkmark-circle-sharp' size={24} color={'green'} /> : <Icon name='checkmark-circle-outline' size={24} color={'black'} />}
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 1, marginBottom: 5, borderBottomColor: '#EDEDED' }}></View>
                </View>
            ))}
        </View>

    )
}

// const Sorting = () => {
//     return (
//         <View>
//             <View style={StyleOrder.header}>
//                 <Text style={StyleCategory.textPressable}>Name (A - Z)</Text>

//                 <Icon name='checkmark-circle-outline' size={20} color={'black'} />

//             </View>
//             <View style={StyleOrder.header}>
//                 <Text style={StyleCategory.textPressable}>Name (Z - A) </Text>
//                 <Icon name='checkmark-circle-outline' size={20} color={'black'} />
//             </View>
//             <View style={StyleOrder.header}>
//                 <Text style={StyleCategory.textPressable}>Harga (Rendah-Tinggi)</Text>
//                 <Icon name='checkmark-circle-outline' size={20} color={'black'} />
//             </View>
//             <View style={StyleOrder.header}>
//                 <Text style={StyleCategory.textPressable}>Lokasi</Text>
//                 <Icon name='checkmark-circle-outline' size={20} color={'black'} />
//             </View>
//         </View>
//     )
// }

const Sorting2 = () => {
    const [isCheck, setisCheck] = useState([]);
    const options = ["Name (A - Z)", "Name (Z - A)", "Harga (Rendah-Tinggi)", "Lokasi"];
    function pickOption(selectedCheck) {
        if (isCheck.includes(selectedCheck)) {
            setisCheck(isCheck.filter(isCheck => isCheck !== selectedCheck));
            return;
        }
        setisCheck(isCheck => isCheck.concat(selectedCheck))
    }
    return (
        <View>
            {options.map(option => (
                <View key={option} >
                    <View style={StyleOrder.header}>
                        <Text style={StyleCategory.textPressable}>{option}</Text>
                        <TouchableOpacity onPress={() => pickOption(option)}>
                            {isCheck.includes(option) == true ? <Icon name='checkmark-circle-sharp' size={24} color={'green'} /> : <Icon name='checkmark-circle-outline' size={24} color={'black'} />}
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 1, marginBottom: 5, borderBottomColor: '#EDEDED' }}></View>
                </View>
            ))}
        </View>
    )
}

export default SearchFilter


var data = [
    {
        "_id": "1",
        "name": "Keripik Pisang",
        "cost": 30000,
        "star": "4.6",
        "reviews": 86
    },
    {
        "_id": "2",
        "name": "Keripik Pisang",
        "cost": 30000,
        "star": "4.6",
        "reviews": 86
    },
    {
        "_id": "3",
        "name": "Keripik Pisang",
        "cost": 30000,
        "star": "4.6",
        "reviews": 86
    },
    {
        "_id": "4",
        "name": "Keripik Pisang",
        "cost": 30000,
        "star": "4.6",
        "reviews": 86
    },
    {
        "_id": "5",
        "name": "Keripik Pisang",
        "cost": 30000,
        "star": "4.6",
        "reviews": 86
    },
    {
        "_id": "6",
        "name": "Keripik Pisang",
        "cost": 30000,
        "star": "4.6",
        "reviews": 86
    },
    {
        "_id": "7",
        "name": "Keripik Pisang",
        "cost": 30000,
        "star": "4.6",
        "reviews": 86
    },
    {
        "_id": "8",
        "name": "Keripik Pisang",
        "cost": 30000,
        "star": "4.6",
        "reviews": 86
    },
    {
        "_id": "9",
        "name": "Keripik Pisang",
        "cost": 30000,
        "star": "4.6",
        "reviews": 86
    },

]