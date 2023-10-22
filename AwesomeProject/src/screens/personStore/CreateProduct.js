import { View, Text, Image, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen')
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native';
import AxiosIntance from '../../utils/AxiosIntance';
const CreateProduct = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Snaker', value: 'Snaker' },
        { label: 'Clothing', value: 'Clothing' },
        { label: 'Shirt', value: 'Shirt' },
    ]);
    const [image, setimage] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState();
    const [uerID, setUserID] = useState('');
    const [detail, setDetail] = useState('');
    const addProduct = async () => {
        setCategory(value)
        try {
            const request = await AxiosIntance().post('/productAPI/addProduct', 
            {name: name, price: price, quantity: quantity, categoryID: category, detail: detail, userID: '113'})
            if (request.result)
            ToastAndroid.show("Thêm thành công", ToastAndroid.SHORT);
        } catch (error) {
            ToastAndroid.show("Thêm thất bại", ToastAndroid.SHORT);
        }
    }
    return (
        <View>
            <View style={{ padding: 20 }}>
                <Image source={require('../../images/close.png')} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            overScrollMode='never'
            style={{paddingBottom:100}}>
                <View style={{ padding: 20 }}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={{
                            height: 150, width: 150, borderColor: '#3669C9',
                            borderWidth: 1, borderRadius: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#EEEEEE'
                        }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/icimage.png')} />
                            <Text style={{ color: '#3669C9', fontWeight: 'bold' }}>+ Thêm hình</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{
                            color: '#3669C9', textAlign: 'center',
                            marginTop: 10, fontFamily: 'TiltNeon-Regular'
                        }}>(Ảnh đầu tiên sẽ là ảnh đại diện sản phẩm)</Text>
                    </View>
                </View>
                <View style={{
                    marginLeft: 30, marginRight: 30, padding: 10,
                    borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5
                }}>

                    <TextInput style={{
                        fontSize: 15, borderColor: '#CCCCCC',
                        borderWidth: 1, borderRadius: 8, paddingLeft: 10,
                        fontFamily: 'TiltNeon-Regular'
                    }} placeholder='Tên sản phẩm' onChangeText={setName}></TextInput>
                    <View style={{ marginTop: 10, zIndex: 0 }}>
                        <View
                            style={{
                            }}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder={'Danh mục'}
                                style={{ borderColor: '#CCCCCC' }}
                            />
                        </View>

                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 0
                        }}>
                            <Text style={{ zIndex: 0, display: 'none' }}>Danh mục: {value === null ? 'chưa có' : value}</Text>
                        </View>
                        <View style={{
                            padding: 10,
                            borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5, marginTop: 20
                        }}>
                            <TextInput onChangeText={setDetail} placeholder='Mô tả sản phẩm' multiline={true} numberOfLines={5}></TextInput>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ marginLeft: 30, marginRight: 30, padding: 10 }}>
                        <Text style={{fontSize:20, color:'black', fontFamily:'TiltNeon-Regular'}}>
                            Giá thành và số lượng
                        </Text>
                    </View>

                    <View style={{
                        marginLeft: 30, marginRight: 30, padding: 5,
                        borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5
                    }}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TextInput onChangeText={setPrice} style={{
                            fontSize: 15, borderColor: '#CCCCCC',
                            borderBottomWidth: 1, borderRadius: 8, paddingLeft: 10,
                            fontFamily: 'TiltNeon-Regular', width:260
                        }}></TextInput>
                        <Text style={{fontSize:15, color:'black', textAlign:'center'}}>
                            Giá
                        </Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TextInput onChangeText={setQuantity} style={{
                            fontSize: 15, borderColor: '#CCCCCC',
                            borderRadius: 8, paddingLeft: 10,
                            fontFamily: 'TiltNeon-Regular', width:260
                        }}></TextInput>
                        <Text style={{fontSize:15, color:'black', textAlign:'center'}}>
                            S.lượng
                        </Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingBottom:100}}>
                    <View style={{ marginLeft: 30, marginRight: 30, padding: 10 }}>
                        <Text style={{fontSize:20, color:'black', fontFamily:'TiltNeon-Regular'}}>
                            Các biến thể sản phẩm
                        </Text>
                    </View>

                    <View style={{marginLeft:30, marginRight:30}}>
                    <TouchableOpacity onPress={addProduct} style={{padding:10, borderWidth:1, 
                            backgroundColor:'#3669C9', borderRadius:5}}>
                            <Text style={{textAlign:'center', fontSize:15, color:'white'}}>
                                Trưng bày sản phẩm
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:8, borderWidth:1, 
                            borderColor:'#3669C9', borderRadius:5, marginTop:10}}>
                            <Text style={{textAlign:'center', fontSize:15, color:'#3669C9'}}>
                                Thêm vào
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default CreateProduct