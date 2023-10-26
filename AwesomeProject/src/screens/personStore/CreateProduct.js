import { View, Text, Image, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen')
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native';
import AxiosIntance from '../../utils/AxiosIntance';
import { ImageBackground } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../utils/FirebaseConfig';
const imageWeb = { uri: 'http://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/03/21/z4199400023619_8381a74835ea005df73f48ac1d4437db.jpg' }
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
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [uerID, setUserID] = useState('');
    const [detail, setDetail] = useState('');
    const [imageLink, setimageLink] = useState([])
    const [checkimgLink, setcheckimgLink] = useState(false);
    const addProduct = async () => {
        try {
            const request = await AxiosIntance().post('/productAPI/addProduct',
                { name: name, price: price, quantity: quantity, categoryID: value, detail: detail, userID: '113', image: imageLink });
            if (request.result)
                ToastAndroid.show("Thêm thành công", ToastAndroid.SHORT);
            setcheckimgLink(false);
            setimageLink();
        } catch (error) {
            console.log(error)
            ToastAndroid.show("Thêm thất bại", ToastAndroid.SHORT);
        }

    }
    useEffect(() => {
        if (checkimgLink) {
            addProduct();
        }
        return () => {

        }
    }, [checkimgLink])

    const getImageFromLibrary = async () => {
        const result = await launchImageLibrary();
        if (!result.didCancel) {
            const selectedImage = result.assets[0].uri;
            // Thực hiện xử lý với ảnh đã chọn ở đây
            // Ví dụ: lưu vào mảng
            setimage([...image, selectedImage]);
        }
    }
    // Upload image to firebase
    const Upload = async () => {
        const img = [];
        for (i = 0; i < image.length; i++) {
            const response = await fetch(image[i]);
            const blob = await response.blob();
            const filename = Date.now() + ".jpg";
            const storageRef = ref(storage, filename);
            const snapshot = await uploadBytes(storageRef, blob);
            const url = await getDownloadURL(snapshot.ref);
            img.push(url);
            console.log(img);
        }
        setimageLink(img);
        setcheckimgLink(true);
    }
    const buttonImg = () => {
        if (image.length > 0)
            return 'none'
        return 'flex';
    }
    const buttonImg2 = () => {
        if (image.length > 0)
            return 'flex'
        return 'none';
    }
    const removeImageFromImageArray = (imageToRemove) => {
        const updatedImageArray = image.filter((image) => image !== imageToRemove);
        setimage(updatedImageArray);
    };
    return (
        <View>
            <View style={{ padding: 20 }}>
                <Image source={require('../../images/close.png')} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                overScrollMode='never'
                style={{ paddingBottom: 100 }}>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', width: width, flexWrap: 'wrap' }}>
                        {image.map(item => (
                            <View style={{ borderRadius: 5, overflow: 'hidden', margin: 5 }}>
                                <ImageBackground style={{ width: 110, height: 110, borderRadius: 10 }} source={{ uri: item }}>
                                    <TouchableOpacity onPress={() => removeImageFromImageArray(item)}>
                                        <Image style={{
                                            position: 'absolute', top: 0, margin: 4,
                                            width: 25, height: 25, right: 0,
                                            backgroundColor: 'white', borderRadius: 12.5
                                        }} source={require('../../images/deleteimg1.png')} />
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        ))}
                        <TouchableOpacity onPress={getImageFromLibrary} style={{
                            height: 110, width: 110, borderColor: '#3669C9',
                            borderWidth: 1, borderRadius: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#EEEEEE', margin: 5, display: buttonImg2()
                        }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/icimage.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 10, display: buttonImg() }}>
                        <TouchableOpacity onPress={getImageFromLibrary} style={{
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
                        <Text style={{ fontSize: 20, color: 'black', fontFamily: 'TiltNeon-Regular' }}>
                            Giá thành và số lượng
                        </Text>
                    </View>

                    <View style={{
                        marginLeft: 30, marginRight: 30, padding: 5,
                        borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput onChangeText={setPrice} style={{
                                fontSize: 15, borderColor: '#CCCCCC',
                                borderBottomWidth: 1, borderRadius: 8, paddingLeft: 10,
                                fontFamily: 'TiltNeon-Regular', width: 260
                            }}></TextInput>
                            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>
                                Giá
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput onChangeText={setQuantity} style={{
                                fontSize: 15, borderColor: '#CCCCCC',
                                borderRadius: 8, paddingLeft: 10,
                                fontFamily: 'TiltNeon-Regular', width: 260
                            }}></TextInput>
                            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>
                                S.lượng
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingBottom: 100 }}>
                    <View style={{ marginLeft: 30, marginRight: 30, padding: 10 }}>
                        <Text style={{ fontSize: 20, color: 'black', fontFamily: 'TiltNeon-Regular' }}>
                            Các biến thể sản phẩm
                        </Text>
                    </View>

                    <View style={{ marginLeft: 30, marginRight: 30 }}>
                        <TouchableOpacity onPress={Upload} style={{
                            padding: 10, borderWidth: 1,
                            backgroundColor: '#3669C9', borderRadius: 5
                        }}>
                            <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}>
                                Trưng bày sản phẩm
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            padding: 8, borderWidth: 1,
                            borderColor: '#3669C9', borderRadius: 5, marginTop: 10
                        }}>
                            <Text style={{ textAlign: 'center', fontSize: 15, color: '#3669C9' }}>
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