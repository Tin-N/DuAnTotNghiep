import { View, Text, Image, TouchableOpacity, TextInput, Alert, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StyleDetailProduct } from '../../css/Styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import AxiosIntance from '../../utils/AxiosIntance';
import { ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextWithLimit } from '../../component/SearchSuggestions/SearchItem';
import { formatPrice } from '../../../Agro';
const UpdateProduct = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { params } = route;
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Snaker', value: 'Snaker' },
        { label: 'Clothing', value: 'Clothing' },
        { label: 'Shirt', value: 'Shirt' },
    ]);
    const [dataProduct, setDataProduct] = useState({})
    const [editQuantity, setEditQuantity] = useState(false);
    const [boderTextInputQuantity, setBodertTextInputQuantity] = useState('#CCCCCC');
    const [valueQuantity, setValueQuantity] = useState();
    const [textButtonUpdateQuantity, setTextButtonUpdateQuantity] = useState('Cập nhật');
    const [displayButtonSave, setDislayButtonSave] = useState('none');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [openDialogStartDate, setOpenDialogStartDate] = useState(false)
    const [openDialogEndDate, setOpenDialogEndDate] = useState(false)
    const [saleOff, setSaleOff] = useState('0');
    const [onSelectedStartDate, setonSelectedStartDate] = useState({});
    const [onSelectedEndDate, setonSelectedEndDate] = useState({});
    const [productName, setProductName] = useState('');
    const [productDetail, setProductDetail] = useState('');
    const [productPrice, setProductPrice] = useState();
    const [productCategory, setProductCategory] = useState('');
    const [heightTextInputDetail, setHeightTextInputDetail] = useState(0);
    const [titleSale, setTitleSale] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const checkQuantity = () => {
        if (!isNaN(valueQuantity)) {
            Alert.alert('Đây là số')
        } else {
            Alert.alert('Sai định dạng')
        }
    }
    const addSale = async () => {
        const request = await AxiosIntance().post('/saleOffAPI/addSaleOff', {
            userID: '113', titleSale: 'Sale sập sàn tháng cô hồn',
            productID: '65291577c199df71b460f143', saleOff: saleOff, startDay: startDate.getTime(), endDay: endDate.getTime()
        })
    }
    const back = () => {
        navigation.goBack();
    }
    const updateQuantityHandler = () => {
        setEditQuantity(!editQuantity);
        editQuantity == false ?
            (
                setBodertTextInputQuantity('black'),
                setTextButtonUpdateQuantity('Huỷ bỏ'),
                setDislayButtonSave('flex')
            ) :
            (
                setBodertTextInputQuantity('#CCCCCC'),
                setTextButtonUpdateQuantity('Cập nhật'),
                setDislayButtonSave('none')
            )
    }
    const updateInfoProduct = async () => {
        setisLoading(true);
        const request = await AxiosIntance().post('/productAPI/updateProduct', { name: productName, price: productPrice, detal: productDetail, category: productCategory });
        if (request.result == true) {
            setisLoading(false);
            ToastAndroid.show('Sửa thông tin thành công!')
        } else {
            setisLoading(false);
            ToastAndroid.show('Không sửa được thông tin!')
        }

    }
    useEffect(() => {
        const getProductForUpdate = async () => {
            const response = await AxiosIntance().get('/productAPI/getProductByID?id=' + params.itemId);
            if (response.result == false) {
                ToastAndroid.show('Lấy dữ liệu thất bại', ToastAndroid.SHORT);
            } else {
                let name = response.products.name
                let price = response.products.price
                let quantity = response.products.quantity
                let image = response.products.image[0]
                const itemProduct = {
                    name, quantity, price, image
                }
                setDataProduct(itemProduct);
            }
        }
        getProductForUpdate();
        return () => {

        }
    }, [])
    return (
        <ScrollView stickyHeaderIndices={[0]}
            overScrollMode='never' showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ backgroundColor: 'white' }}>
            <View style={{ backgroundColor: 'white' }}>
                <View style={{
                    backgroundColor: 'white', height: 50,
                    borderBottomWidth: 0.5, borderColor: '#CCCCCC',
                }}>
                    <View style={{ flexDirection: 'row', marginLeft: 20, alignItems: 'center', height: 50 }}>
                        <TouchableOpacity onPress={back}>
                            <Image source={require('../../images/backic.png')} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: 'black', fontFamily: 'TiltNeon-Regular', marginLeft: 20 }}>
                            Cập nhật sản phẩm
                        </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row', marginLeft: 10,
                    marginRight: 10, marginTop: 20, backgroundColor: 'white'
                }}>
                    <Image style={{ width: 120, height: 120, borderRadius: 10 }} source={{ uri: dataProduct.image }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={{ fontSize: 20, color: 'black', fontFamily: 'TiltNeon-Regular' }}>{dataProduct.name} </Text>
                        <Text style={{ fontSize: 20 }}>{dataProduct.price} đ</Text>
                        <Text style={{ fontSize: 15 }}>Kho: {dataProduct.quantity}</Text>
                    </View>
                </View>
                <View style={StyleDetailProduct.line} />
            </View>

            <KeyboardAwareScrollView>
                <View style={{
                    marginLeft: 10, marginRight: 10, padding: 10,
                    borderWidth: 1, borderColor: '#030303',
                    borderRadius: 5, marginTop: 20, zIndex: 1, backgroundColor: 'white'
                }}>
                    <Text style={{ fontFamily: 'TiltNeon-Regular', color: 'black', fontSize: 20 }}>
                        Thông tin mới cho sản phẩm</Text>
                    <TextInput
                        onChangeText={setProductName}
                        style={{
                            fontSize: 15, borderColor: '#CCCCCC',
                            borderWidth: 1, borderRadius: 8, paddingLeft: 10,
                            fontFamily: 'TiltNeon-Regular', marginTop: 5
                        }} placeholder='Tên sản phẩm' />
                    <TextInput
                        onChangeText={setProductPrice}
                        style={{
                            fontSize: 15, borderColor: '#CCCCCC',
                            borderWidth: 1, borderRadius: 8, paddingLeft: 10,
                            fontFamily: 'TiltNeon-Regular', marginTop: 5
                        }} placeholder='Giá sản phẩm' />
                    <TextInput
                        onChangeText={setProductDetail}
                        onContentSizeChange={(event) => {
                            setHeightTextInputDetail(event.nativeEvent.contentSize.height);
                        }}
                        style={{
                            fontSize: 15, borderColor: '#CCCCCC',
                            borderWidth: 1, borderRadius: 8, paddingLeft: 10,
                            fontFamily: 'TiltNeon-Regular', marginTop: 5,
                            textAlignVertical: 'top', height: Math.max(100, heightTextInputDetail)
                        }} placeholder='Mô tả sản phẩm' multiline={true} />
                    <View style={{ marginTop: 10, zIndex: 1 }}>
                        <View
                            style={{
                                flexDirection: 'row', zIndex: 1
                            }}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                zIndex={1000}
                                zIndexInverse={3000}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder={'Danh mục'}
                                props={{
                                    activeOpacity: 1,
                                }}
                                dropDownContainerStyle={{
                                    borderColor: '#CCCCCC',
                                    backgroundColor: 'white', elevation: 1000
                                }}
                                style={{ borderColor: '#CCCCCC', zIndex: 1 }}
                            />
                            <Image style={{ marginTop: 10, marginLeft: -55, zIndex: 1, width: 25, height: 25 }} source={require('../../images/category.png')} />
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{ display: 'none' }}>Danh mục: {value === null ? 'chưa có' : value}</Text>
                        </View>
                        <View style={{}}>
                            {
                                value || productName || productDetail ?
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row', zIndex: 0,
                                            alignItems: 'center', marginTop: 5,
                                            padding: 6, borderRadius: 5, backgroundColor: '#3669C9',
                                            justifyContent: 'center', marginTop: 10
                                        }}>
                                        <Text style={{
                                            marginLeft: 5, textAlign: 'center',
                                            color: 'white', fontSize: 18
                                        }}>XÁC NHẬN</Text>
                                    </TouchableOpacity> : <View />
                            }
                        </View>

                    </View>
                </View>
                <View style={{
                    marginLeft: 10, marginRight: 10, padding: 10,
                    borderWidth: 1, borderColor: '#030303',
                    borderRadius: 5, marginTop: 20, zIndex: 0, backgroundColor: 'white'
                }}>
                    <Text style={{ fontFamily: 'TiltNeon-Regular', color: 'black', fontSize: 20 }}>
                        Cập nhật số lượng trong kho?</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TextInput
                            onChangeText={setValueQuantity}
                            editable={editQuantity}
                            keyboardType='numeric'
                            style={{
                                fontSize: 15, borderColor: boderTextInputQuantity,
                                borderWidth: 1, borderRadius: 8, paddingLeft: 10,
                                fontFamily: 'TiltNeon-Regular', marginTop: 5, width: '60%'
                            }} />
                        <TouchableOpacity
                            onPress={() => {
                                updateQuantityHandler()
                            }}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center', marginLeft: 17, borderWidth: 1, marginTop: 5,
                                padding: 7, borderRadius: 5, borderColor: '#3669C9', width: 107
                            }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/upgrade.png')} />
                            <Text style={{ marginLeft: 5 }}>{textButtonUpdateQuantity}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={checkQuantity}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center', marginTop: 5,
                            padding: 6, borderRadius: 5, backgroundColor: '#3669C9',
                            justifyContent: 'center', marginTop: 10, display: displayButtonSave
                        }}>
                        <Text style={{ marginLeft: 5, textAlign: 'center', color: 'white', fontSize: 18 }}>XÁC NHẬN</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginLeft: 10, marginRight: 10, padding: 10,
                    borderWidth: 1, borderColor: '#030303',
                    borderRadius: 5, marginTop: 20, backgroundColor: 'white'
                }}>
                    <Text style={{ fontFamily: 'TiltNeon-Regular', color: 'black', fontSize: 20 }}>
                        Cập nhật giảm giá cho sản phẩm</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#3669C9', fontSize: 20 }}>Mức giảm</Text>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            width: '50%'
                        }}>
                            <TextInput
                                defaultValue={saleOff}
                                onChangeText={(text) => {
                                    const num = parseInt(text);
                                    if (!isNaN(num)) {
                                        if (num <= 100) {
                                            setSaleOff(num);
                                        } else {
                                            setSaleOff(100);
                                        }
                                    }
                                }} style={{
                                    fontSize: 20, borderColor: '#CCCCCC', color: 'black',
                                    borderWidth: 1, borderRadius: 8, paddingLeft: 10,
                                    fontFamily: 'TiltNeon-Regular', marginTop: 5, width: '100%',
                                    paddingLeft: 58
                                }} />
                            <Text style={{ marginLeft: -80, fontSize: 18, marginTop: 5 }}>% Giảm</Text>
                        </View>
                    </View>
                    <View>
                        <TextInput onChangeText={setTitleSale} style={{
                            fontSize: 15, borderColor: '#CCCCCC',
                            borderWidth: 1, borderRadius: 8, paddingLeft: 10,
                            fontFamily: 'TiltNeon-Regular', marginTop: 5,
                        }} placeholder='Chủ đề sale' />
                    </View>
                    <Text style={{ fontFamily: 'TiltNeon-Regular', color: '#3669C9', fontSize: 20, marginTop: 10 }}>
                        Chọn mốc thời gian giảm giá
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 5, borderTopWidth: 1, borderBottomWidth: 1,
                        marginTop: 10, borderColor: '#CCCCCC'
                    }}>
                        <Text style={{ color: 'black', fontSize: 18 }}>Ngày bắt đầu</Text>
                        <TouchableOpacity style={{ width: '40%' }} onPress={() => setOpenDialogStartDate(true)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                                <View style={{ width: '90%' }}>
                                    {
                                        onSelectedStartDate.day ?
                                            <Text style={{ color: 'black', fontSize: 18 }}> {onSelectedStartDate.day}/{onSelectedStartDate.month}  {onSelectedStartDate.hour}:{onSelectedStartDate.minute}</Text>
                                            : <View>
                                                <Text style={{ textAlign: 'center' }}>
                                                    Nhấp chọn
                                                </Text>
                                            </View>
                                    }
                                </View>
                                <Image source={require('../../images/backic.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <DatePicker
                        modal={true}
                        open={openDialogStartDate}
                        date={startDate}
                        locale="vi_VN"
                        title='Bắt đầu giảm giá'
                        minimumDate={new Date()}
                        onConfirm={(date) => {
                            setOpenDialogStartDate(false)
                            setStartDate(date)
                            const day = date.getDate().toString().padStart(2, '0');
                            const month = date.getMonth().toString().padStart(2, '0');
                            const hour = date.getHours().toString().padStart(2, '0');
                            const minute = date.getMinutes().toString().padStart(2, '0');
                            const dateFormat =
                            {
                                day, month, hour, minute
                            }
                            setonSelectedStartDate(dateFormat);
                        }}
                        onCancel={() => {
                            setOpenDialogStartDate(false)
                        }}
                    />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 5, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC'
                    }}>
                        <Text style={{ color: 'black', fontSize: 18 }}>Ngày kết thúc</Text>
                        <TouchableOpacity style={{ width: '40%' }} onPress={() => setOpenDialogEndDate(true)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                                <View style={{ width: '90%' }}>
                                    {
                                        onSelectedEndDate.day ?
                                            <Text style={{ color: 'black', fontSize: 18 }}> {onSelectedEndDate.day}/{onSelectedEndDate.month}  {onSelectedEndDate.hour}:{onSelectedEndDate.minute}</Text>
                                            : <View>
                                                <Text style={{ textAlign: 'center' }}>
                                                    Nhấp chọn
                                                </Text>
                                            </View>
                                    }
                                </View>
                                <Image source={require('../../images/backic.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <DatePicker
                        modal={true}
                        open={openDialogEndDate}
                        date={endDate}
                        minimumDate={new Date()}
                        title='Kết thúc giảm giá'
                        onConfirm={(date) => {
                            setOpenDialogEndDate(false)
                            setEndDate(date)
                            const day = date.getDate().toString().padStart(2, '0');
                            const month = date.getMonth().toString().padStart(2, '0');
                            const hour = date.getHours().toString().padStart(2, '0');
                            const minute = date.getMinutes().toString().padStart(2, '0');
                            const dateFormat =
                            {
                                day, month, hour, minute
                            }
                            setonSelectedEndDate(dateFormat);
                        }}
                        onCancel={() => {
                            setOpenDialogEndDate(false)
                        }}
                    />
                    <TouchableOpacity
                        onPress={addSale}
                        style={{
                            alignItems: 'center', marginTop: 5,
                            padding: 6, borderRadius: 5, backgroundColor: '#3669C9',
                            justifyContent: 'center', marginTop: 10
                        }}>
                        <Text style={{
                            marginLeft: 5, textAlign: 'center',
                            color: 'white', fontSize: 18
                        }}>XÁC NHẬN</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </ScrollView >
    )
}

export default UpdateProduct