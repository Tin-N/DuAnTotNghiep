import { StyleSheet, Text, View, Pressable, TextInput, FlatList, Modal, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { StyleCategory, StyleOrder } from '../../css/Styles'
import Sorting2 from './Sorting';
import Icon from 'react-native-vector-icons/Ionicons'
// import Feather from 'react-native-vector-icons/Feather'
// import CategoryItem from './CategoryItem'


const SearchFilter = (props) => {
    const {onSubmit,setModalVisible,modalVisible} = props;
    // const [modalVisible, setModalVisible] = useState(false);

    //sorting2
    const [sortType, setSortType] = useState({});
    const [role, setRole] = useState({});

    const handleSubmit =()=>{
        const values = [sortType,role];
        onSubmit(values);
    }

    return (
        <View>

            <View  >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}>
                    <View style={StyleCategory.centeredView}>
                        <View style={StyleCategory.modalView}>
                            <View style={StyleOrder.header}>
                                <Text style={StyleCategory.textHeader}>Sorting</Text>
                                <Pressable
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Icon name='close' size={24} color={'black'} />
                                </Pressable>
                            </View>


                            <View style={{ borderBottomWidth: 0.5, marginTop: 5 }}>
                                <Text>Sắp xếp theo tên</Text>
                            </View>
                                {                           
                                 <Sorting2 
                                    sortType={sortType} 
                                    setSortType={setSortType}
                                    role={role}
                                    setRole={setRole}
                                 /> 
                                }
                                
                            <View style={StyleOrder.header}>
                                <Pressable style={StyleCategory.pressableModal} onPress={()=>{setModalVisible(!modalVisible)}}>
                                    <Text style={StyleCategory.textPressable}>Reset</Text>
                                </Pressable>
                                <Pressable style={[StyleCategory.pressableModal, { backgroundColor: '#3669C9' }]}  onPress={()=>{handleSubmit();setModalVisible(!modalVisible)}}>
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