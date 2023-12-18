import { View, Text, Image, TouchableOpacity, TextInput, ToastAndroid, Modal, StyleSheet } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen')
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native';
import AxiosIntance from '../../utils/AxiosIntance';
import { ImageBackground } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../utils/FirebaseConfig';
import { StyleDialogShopping } from '../../css/Styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { fromHsv } from 'react-native-color-picker';
import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker';
import Icon1 from 'react-native-vector-icons/Ionicons';
// import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker'
import { Axios } from 'axios';
import { useContext } from 'react';
import { AppContext } from '../../utils/AppContext';
const CreateProduct = (props) => {
    const { navigation } = props;
    const {userID} = useContext(AppContext)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const [items2, setItems2] = useState([
       
    ]);
    const [image, setimage] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [uerID, setUserID] = useState('');
    const [detail, setDetail] = useState('');
    const [heightTextInputDetail, setHeightTextInputDetail] = useState(0);
    const [imageLink, setimageLink] = useState([])
    const [imageLink2, setimageLink2] = useState([])
    const [checkimgLink, setcheckimgLink] = useState(false);
    const [checkimgLink2, setcheckimgLink2] = useState(false);
    const [productID, setProductID] = useState('');
    const [isDialogVisible, setDialogVisible] = useState(false);
    const [isDialogVisible2, setDialogVisible2] = useState(false);
    const [sizeModels, setSizeModels] = useState([]);
    const [colorModels, setColorModels] = useState([]);



    useEffect(() => {
        const getCategory = async () => {
            const response = await AxiosIntance().get('/category/getCategoryNotDelete')
            console.log(">>>>>>>>categories: " + response.categories[0].name);
            if(response.result == true) {
                setItems2(prevItems => [
                    ...prevItems,
                    ...response.categories.map(category => ({
                        label: category.name,
                        value: category._id
                    }))
                ]);
                
                for (let i = 0; i < response.categories.length; i++) {
                    console.log(">>>>item categories: " + response.categories[i].name);
                }
            }
        }
        getCategory();
      return () => {
        
      }
    }, [])
    


    const opacityBackground = () => {
        if (isDialogVisible == true || isDialogVisible2 == true)
            return 0.4
        return 1
    }


    const MyDialog = ({ isVisible, onClose }) => {
        const [colorVariations, setColorVariations] = useState('');
        const [hexColor, setHexColor] = useState('');
        const [imageVariations, setimgVariations] = useState('');
        const displayImg = () => {
            if (imageVariations)
                return 'flex';
            return 'none'
        }
        const colorPickerRef = useRef(null);

        const handleColorSelected = (color) => {
            // Copy the color to the clipboard 
            setHexColor(fromHsv(color));
            // Alert the user 
        };
        const doneworkHandler = () => {
            if (imageVariations && colorVariations && hexColor)
                return false
            return true
        }
        const getImageFromLibrary2 = async () => {
            const result = await launchImageLibrary();
            if (!result.didCancel) {
                const selectedImage = result.assets[0].uri;
                setimgVariations(selectedImage);
            }
        }
        const addVariations = () => {
            setColorModels([...colorModels, { productID: productID, title: colorVariations, color: hexColor, image: imageVariations }]);
        }
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    onClose();
                }}
            >
                <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
                    <View style={StyleDialogShopping.container}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                            <Text style={{ color: 'black', fontSize:18 }}>Màu biến thể</Text>
                            <TouchableOpacity onPress={onClose}>
                                <Image style={{ width: 20, height: 20 }} source={require('../../images/deleteimg1.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 5, marginTop: 10 }}>
                            <TextInput onChangeText={(text) => setColorVariations(text)}
                                value={colorVariations} style={{ borderBottomWidth: 0.2 }} placeholder='Tên màu' />
                            <View style={{ flexDirection: 'row', alignItems:'center', 
                            marginLeft:20, marginRight:20, justifyContent:'space-between' }}>
                                <TextInput editable={false} style={{
                                    width: 150, borderWidth: 1,
                                    borderColor: 'black', marginTop: 5, height: 50, paddingLeft: 10, borderRadius: 5
                                }} onChangeText={(text) => setHexColor(text)}
                                    value={hexColor} placeholder='Mã màu' />
                                <TriangleColorPicker
                                    ref={colorPickerRef}
                                    onColorChange={handleColorSelected}
                                    style={{ width: 100, height: 100 }}
                                />
                            </View>
                        </View>
                        <View style={{ padding: 5 }}>
                            <TouchableOpacity onPress={getImageFromLibrary2}>
                                <Text style={{ fonteight: 'bold', color: '#3669C9' }}>+ Thêm ảnh</Text>
                            </TouchableOpacity>
                            <Image style={{ width: 120, height: 120, display: displayImg(), borderRadius: 8 }} source={imageVariations ? { uri: imageVariations } : null} />
                        </View>
                        <View style={StyleDialogShopping.line}>
                        </View>
                        <View style={{
                            flexDirection: 'row', position: 'absolute',
                            bottom: 0, right: 0, margin: 10, width: 150, justifyContent: 'space-between'
                        }}>
                            <TouchableOpacity disabled={doneworkHandler()} onPress={() => {
                                addVariations(); // Gọi hàm addVariations() để thêm dữ liệu
                                onClose(); // Gọi hàm onClose() để đóng dialog
                            }} style={{
                                backgroundColor: '#3669C9', padding: 5,
                                width: 70, borderRadius: 5
                            }}>
                                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                                    Thêm
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onClose} disabled={true} style={{
                                borderWidth: 1, padding: 5,
                                width: 70, borderRadius: 5, borderColor: '#3669C9'
                            }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#3669C9' }}>
                                    Huỷ
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </Modal>
        );
    };


    const MyDialog2 = ({ isVisible2, onClose2 }) => {
        const [sizeVariations, setSizeVariations] = useState('');
        const addVariations2 = () => {
            setSizeModels([...sizeModels, { productID: productID, size: sizeVariations }])
        }
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible2}
                onRequestClose={() => {
                    onClose2();
                }}
            >
                <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
                    <View style={StyleDialogShopping.container2}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Thêm kích cỡ</Text>
                            <TouchableOpacity onPress={onClose2}>
                                <Image style={{ width: 20, height: 20 }} source={require('../../images/deleteimg1.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10, 
                            borderWidth:0.5, borderColor:'#9a9898', borderRadius:5 }}>
                            <TextInput onChangeText={(text) => setSizeVariations(text)}
                                value={sizeVariations} />
                        </View>
                        <View style={{
                            flexDirection: 'row', position: 'absolute',
                            bottom: 0, right: 0, margin: 10, width: 150,
                            justifyContent: 'space-between', marginTop: 40
                        }}>
                            <TouchableOpacity onPress={() => {
                                addVariations2();
                                onClose2();
                            }} style={{ backgroundColor: '#3669C9', padding: 5, width: 70, borderRadius: 5 }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>
                                    Thêm
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onClose2} style={{
                                borderWidth: 1, padding: 5,
                                width: 70, borderRadius: 5, borderColor: '#3669C9'
                            }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#3669C9' }}>
                                    Huỷ
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </Modal>
        );
    };


    const goBack = () => {
        navigation.goBack();
    }


    const addVariationsToDb = async () => {
        // Thêm productID cho tung phan tu
        const updatedArray = colorModels.map(item => {
            return { ...item, productID: productID };
        });
        // 
        const request = await AxiosIntance().post('/Options/colorAPI/addColor', { colorArray: updatedArray });
        if (request.result) {
            ToastAndroid.show('Thêm màu thành công', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('Thêm màu thất bại', ToastAndroid.SHORT);
        }
        setcheckimgLink2(false);
        setColorModels([]);
    }


    const addVariationsToDb2 = async () => {
        const updatedArray = sizeModels.map(item => {
            return { ...item, productID: productID };
        });
        const request = await AxiosIntance().post('/Options/sizeAPI/addSize', { sizeArray: updatedArray });
        if (request.result) {
            ToastAndroid.show('Thêm size thành công', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('Thêm size thất bại', ToastAndroid.SHORT);
        }
        setSizeModels([]);
    }


    const addProduct = async () => {
        try {
            const request = await AxiosIntance().post('/productAPI/addProduct',
                { name: name, price: price, quantity: quantity, categoryID: value, detail: detail, userID: userID, image: imageLink });
            if (request.result) {
                ToastAndroid.show("Thêm thành công", ToastAndroid.SHORT);
                Upload2();
                setProductID(request.productID);
            }
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
        if (checkimgLink2) {
            addVariationsToDb();
            addVariationsToDb2();
        }

    }, [checkimgLink, checkimgLink2])


    const getImageFromLibrary = async () => {
        const result = await launchImageLibrary();
        if (!result.didCancel) {
            const selectedImage = result.assets[0].uri;
            // Thực hiện xử lý với ảnh đã chọn ở đây
            // Ví dụ: lưu vào mảng
            setimage([...image, selectedImage]);
        }
    }


    const Upload2 = async () => {
        const img = [];
        for (i = 0; i < colorModels.length; i++) {
            const response = await fetch(colorModels[i].image);
            const blob = await response.blob();
            const filename = Date.now() + ".jpg";
            const storageRef = ref(storage, filename);
            const snapshot = await uploadBytes(storageRef, blob);
            const url = await getDownloadURL(snapshot.ref);
            colorModels[i].image = url;
            // them productID
            console.log(img);
        }
        setcheckimgLink2(true);
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


    const removeColorFromColorModels = (imageToRemove) => {
        const updatedImageArray = colorModels.filter((image) => image !== imageToRemove);
        setColorModels(updatedImageArray);
    }


    return (
        <View style={{
            opacity: opacityBackground(), backgroundColor: 'white',
            width: '100%', height: '100%'
        }}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={goBack}>
                    <Icon1 name="chevron-back-outline" size={23}></Icon1>
                </TouchableOpacity>
                <Text style={styles.titleMenu}>
                    Thêm sản phẩm mới
                </Text>
            </View>
            <KeyboardAwareScrollView overScrollMode='never'
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
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
                                <Icon1 name="images-outline" size={25} color='#3669c9'></Icon1>
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
                                <Icon1 name="images-outline" size={25} color='#3669c9'></Icon1>
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
                    <View style={{ backgroundColor: '#f3f3f3' }}>
                        <Text style={styles.titleBox}>
                            Thông tin cho sản phẩm
                        </Text>
                    </View>
                    <View style={{
                        marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 5
                    }}>
                        <View>
                            <Text style={{ fontSize: 15 }}>Tên sản phẩm*</Text>
                            <TextInput
                                onChangeText={setName}
                                style={styles.textInput}
                            />
                        </View>
                        <View style={{ marginTop: 10, zIndex: 0 }}>
                            <Text style={{ fontSize: 15 }}>Danh mục hiển th*</Text>
                            <View
                                style={{
                                    zIndex: 3, flexDirection: 'row', marginTop: 5
                                }}>
                                <DropDownPicker
                                    open={open}
                                    value={value}
                                    items={items2}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems2}
                                    placeholder={'Chưa chọn'}
                                    props={{
                                        activeOpacity: 1
                                    }}
                                    dropDownContainerStyle={{ borderColor: '#CCCCCC' }}
                                    style={{ borderColor: '#CCCCCC', zIndex: 0 }}
                                />
                                <Image style={{ marginTop: 10, marginLeft: -55, zIndex: 1, width: 25, height: 25 }} source={require('../../images/category.png')} />
                            </View>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{ display: 'none' }}>Danh mục: {value === null ? 'chưa có' : value}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, marginTop: 10 }}>Mô tả*</Text>
                                <View style={{ width: '100%', flexDirection: 'row' }}>
                                    <TextInput
                                        maxLength={200}
                                        onChangeText={setDetail}
                                        onContentSizeChange={event => {
                                            setHeightTextInputDetail(event.nativeEvent.contentSize.height);
                                        }}
                                        style={[
                                            styles.textInputDetail,
                                            { height: Math.max(100, heightTextInputDetail) },
                                        ]}
                                        multiline={true}
                                    />
                                    <Text style={{ fontSize: 15, position: 'absolute', right: 0, padding: 10 }}>{detail.length}/200</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                    <Text style={{ paddingLeft: 20 }}>Giá thành và số lượng*</Text>
                    <View style={{
                        marginLeft: 20, marginRight: 20, padding: 10,
                        borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5, marginTop: 5, marginBottom: 20
                    }}>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput onChangeText={setPrice} style={{
                                    fontSize: 15, borderColor: '#CCCCCC',
                                    borderBottomWidth: 1, borderRadius: 8, paddingLeft: 10,
                                    fontFamily: 'TiltNeon-Regular', width: 280
                                }}></TextInput>
                                <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>
                                    đ Giá
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput onChangeText={setQuantity} style={{
                                    fontSize: 15, borderColor: '#CCCCCC',
                                    borderRadius: 8, paddingLeft: 10,
                                    fontFamily: 'TiltNeon-Regular', width: 280
                                }}></TextInput>
                                <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>
                                    S.lượng
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#f3f3f3' }}>
                        <Text style={styles.titleBox}>
                            Thêm biến thể cho sản phẩm
                        </Text>
                    </View>
                    <View style={{
                        marginLeft: 20, marginRight: 20, padding: 10,
                        borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5,
                        marginTop: 20
                    }}>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'black', fontSize: 18 }}>
                                    Nhóm màu
                                </Text>
                                <TouchableOpacity onPress={() => setDialogVisible(true)}>
                                    <Text>Thêm vào</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <MyDialog isVisible={isDialogVisible} onClose={() => setDialogVisible(false)} />
                            </View>
                            <Text>Đã thêm: {colorModels.length}</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {
                                    colorModels.length > 0 ?
                                        colorModels.map(item => (
                                            <View style={{
                                                justifyContent: 'center', alignItems: 'center',
                                                borderRadius: 5, overflow: 'hidden', margin: 4
                                            }}>
                                                <ImageBackground style={{ width: 70, height: 70 }} source={{ uri: item.image }}>
                                                    <TouchableOpacity onPress={() => removeColorFromColorModels(item)}>
                                                        <Image style={{
                                                            position: 'absolute', top: 0, margin: 4,
                                                            width: 25, height: 25, right: 0,
                                                            backgroundColor: 'white', borderRadius: 12.5
                                                        }} source={require('../../images/deleteimg1.png')} />
                                                    </TouchableOpacity>
                                                </ImageBackground>
                                                <Text style={{
                                                    padding: 3,
                                                    margin: 2,
                                                    marginTop: 6
                                                }}>{item.title}</Text>
                                            </View>
                                        )) : <View></View>
                                }
                            </View>

                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'black', fontSize: 18 }}>
                                    Kích cỡ
                                </Text>
                                <TouchableOpacity onPress={() => setDialogVisible2(true)}>
                                    <Text>Thêm vào</Text>
                                </TouchableOpacity>
                                <MyDialog2 isVisible2={isDialogVisible2} onClose2={() => setDialogVisible2(false)} />
                            </View>
                            <Text>Đã thêm: {sizeModels.length}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={Upload} style={{
                            padding: 5,
                            backgroundColor: '#3669C9',
                            marginTop: 10, marginLeft: 20, marginRight: 20, borderRadius: 5
                        }}>
                            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', fontFamily: 'TiltNeon-Regular' }}>
                                Thêm sản phẩm
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default CreateProduct
const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row', alignItems: 'center',
        borderBottomWidth: 0.2, padding: 10
    },
    titleMenu: {
        fontSize: 20, fontFamily: 'TiltNeon-Regular', color: 'black', marginLeft: 15
    },
    titleBox: {
        color: 'black', fontSize: 20,
        fontFamily: 'TiltNeon-Regular', textAlign: 'left', padding: 5, paddingLeft: 20
    },
    textInput: {
        fontSize: 20,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        fontFamily: 'TiltNeon-Regular',
        marginTop: 5,
    },
    textInputDetail: {
        width: '100%',
        fontSize: 15,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        fontFamily: 'TiltNeon-Regular',
        marginTop: 5,
        textAlignVertical: 'top',
        paddingTop: 15
    }
})