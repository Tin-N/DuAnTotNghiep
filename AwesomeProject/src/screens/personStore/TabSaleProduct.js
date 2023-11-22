import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    ToastAndroid,
    ImageBackground,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';
import AxiosIntance from '../../utils/AxiosIntance';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../utils/FirebaseConfig';
const TabSaleProduct = ({ route }) => {
    const { productID } = route.params;
    const [titleSale, setTitleSale] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [openDialogStartDate, setOpenDialogStartDate] = useState(false);
    const [openDialogEndDate, setOpenDialogEndDate] = useState(false);
    const [saleOff, setSaleOff] = useState('0');
    const [onSelectedStartDate, setonSelectedStartDate] = useState({});
    const [onSelectedEndDate, setonSelectedEndDate] = useState({});

    // data saleOff
    const [sales, setSales] = useState([]);
    const [storySales, setStorySales] = useState([])
    const [dateStory, setDateStory] = useState({});
    const [endDaySaleUsing, setendDaySaleUsing] = useState({});
    const [startDaySaleUsing, setstartDaySaleUsing] = useState({});
    const validationDateSale = () => {
        if(titleSale === '' || saleOff === '' || saleOff < 0 || saleOff > 100 ){
            Alert.alert('Không hợp lệ', 'Vui lòng điền chính xác thông tin')
        }else if(startDate.getTime() > endDate.getTime()){
            Alert.alert('Mốc thời gian không hợp lệ', 'Thời gian bắt đầu phải ở trước thời gian kết thúc')
        }else{
            addSale();
        }
    }
    const addSale = async () => {
        const request = await AxiosIntance().post('/saleOffAPI/addSaleOff', {
            userID: '113',
            titleSale: titleSale,
            productID: productID,
            saleOff: (saleOff / 100),
            startDay: startDate.getTime(),
            endDay: endDate.getTime(),
        });
    };
    useEffect(() => {
        const getSalesCurrent = async () => {
            const response = await AxiosIntance().get('/saleOffAPI/getSaleOffCurrent?productID=' + productID);
            console.log(">>>>>response: " + response);
            if (response.result == true && response.saleOff.length != 0) {
                setSales(response.saleOff);
                const startTime = new Date(response.saleOff[0].startDay)
                const startDay = startTime.getDate().toString().padStart(2, '0');
                const startMonth = (startTime.getMonth() + 1).toString().padStart(2, '0');
                const startHour = startTime.getHours().toString().padStart(2, '0');
                const startMinute = startTime.getMinutes().toString().padStart(2, '0');
                const itemStartDay = {
                    startDay, startMonth, startHour, startMinute
                }
                const endTime = new Date(response.saleOff[0].endDay)
                const endDay = endTime.getDate().toString().padStart(2, '0');
                const endMonth = (endTime.getMonth() + 1).toString().padStart(2, '0');
                const endHour = endTime.getHours().toString().padStart(2, '0');
                const endMinute = endTime.getMinutes().toString().padStart(2, '0');
                const itemEndDay = {
                    endDay, endMonth, endHour, endMinute
                }
                setstartDaySaleUsing(itemStartDay)
                setendDaySaleUsing(itemEndDay)
            } else {
                ToastAndroid.show('Không có dữ liệu sale', ToastAndroid.SHORT)
            }
        }
        getSalesCurrent();
        const getSalesByProduct = async () => {
            const response = await AxiosIntance().get('/saleOffAPI/getSaleOffByProduct?productID=' + productID);
            console.log(">>>>>response sale story: " + response.saleOff[0].startDay);
            if (response.result == true && response.saleOff.length != 0) {
                setStorySales(response.saleOff);
                // const startDay = formatDateFormSaleUsing(response.saleOff[0].startDay, response.saleOff[0].endDay)
                // const startDay = new Intl.DateTimeFormat('vi-VN', {
                //     year: 'numeric',
                //     month: 'long',
                //     day: 'numeric',
                //     hour: 'numeric',
                //     minute: 'numeric',
                //     second: 'numeric',
                //     timeZoneName: 'Asia/Ho_Chi_Minh',
                // }).format(new Date(response.saleOff[0].startDay));
            } else {
                ToastAndroid.show('Không có dữ liệu sale', ToastAndroid.SHORT)
            }
        }
        getSalesByProduct();
        return () => {
        }
    }, [])

    return (
        <View style={{ backgroundColor: 'white', height: '100%', marginTop:10 }}>
            <View style={{ marginLeft: 10, marginRight: 10, padding: 5 }}>
                {
                    sales.length != 0 ?
                        <View>
                            <Text style={{ fontSize: 20, color: 'black' }}>Trạng thái: Đang giảm giá</Text>
                            <Text>Ticket đang áp dụng</Text>
                            <View>
                                <Text>Ngày bắt đầu: {startDaySaleUsing.startDay}/{startDaySaleUsing.startMonth} {startDaySaleUsing.startHour}:{startDaySaleUsing.startMinute}</Text>
                                <Text>Kết thúc: {endDaySaleUsing.endDay}/{endDaySaleUsing.endMonth} {endDaySaleUsing.endHour}:{endDaySaleUsing.endMinute}</Text>
                                <Text>{sales.startDay}</Text>
                            </View>
                        </View> :
                        <View>
                            <Text style={{ fontSize: 20, color: 'black' }}>Trạng thái: Không có giảm giá</Text>
                        </View>
                }
            </View>
            <View
                style={{
                    marginLeft: 10,
                    marginRight: 10,
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginBottom: 10,
                }}>
                <Text
                    style={{
                        fontFamily: 'TiltNeon-Regular',
                        color: 'black',
                        fontSize: 20,
                    }}>
                    Thiết lập giảm giá mới
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <Text style={{ color: '#3669C9', fontSize: 20 }}>Mức giảm</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '50%',
                        }}>
                        <TextInput
                            defaultValue={saleOff}
                            onChangeText={setSaleOff}
                            keyboardType='numeric'
                            style={{
                                fontSize: 20,
                                borderColor: '#CCCCCC',
                                color: 'black',
                                borderWidth: 1,
                                borderRadius: 8,
                                paddingLeft: 10,
                                fontFamily: 'TiltNeon-Regular',
                                marginTop: 5,
                                width: '100%',
                                paddingLeft: 58,
                            }}
                        />
                        <Text style={{ marginLeft: -80, fontSize: 18, marginTop: 5 }}>
                            % Giảm
                        </Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        onChangeText={setTitleSale}
                        style={{
                            fontSize: 15,
                            borderColor: '#CCCCCC',
                            borderWidth: 1,
                            borderRadius: 8,
                            paddingLeft: 10,
                            fontFamily: 'TiltNeon-Regular',
                            marginTop: 5,
                        }}
                        placeholder="Tên chương trình sale"
                    />
                </View>
                <Text
                    style={{
                        fontFamily: 'TiltNeon-Regular',
                        color: '#3669C9',
                        fontSize: 20,
                        marginTop: 10,
                    }}>
                    Thiết lập thời gian sale
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 5,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        marginTop: 10,
                        borderColor: '#CCCCCC',
                    }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>Ngày bắt đầu</Text>
                    <TouchableOpacity
                        style={{ width: '35%' }}
                        onPress={() => setOpenDialogStartDate(true)}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: '100%',
                            }}>
                            <View style={{ width: '90%' }}>
                                {onSelectedStartDate.day ? (
                                    <Text style={{ color: 'black', fontSize: 18 }}>
                                        {' '}
                                        {onSelectedStartDate.day}/{onSelectedStartDate.month}{' '}
                                        {onSelectedStartDate.hour}:{onSelectedStartDate.minute}
                                    </Text>
                                ) : (
                                    <View>
                                        <Text style={{ textAlign: 'center' }}>Nhấp chọn</Text>
                                    </View>
                                )}
                            </View>
                            <Icon1 name="chevron-forward-outline" size={23}></Icon1>
                        </View>
                    </TouchableOpacity>
                </View>
                <DatePicker
                    modal={true}
                    open={openDialogStartDate}
                    date={startDate}
                    locale="vi_VN"
                    title="Bắt đầu giảm giá"
                    minimumDate={new Date()}
                    onConfirm={date => {
                        setOpenDialogStartDate(false);
                        setStartDate(date);
                        const day = date.getDate().toString().padStart(2, '0');
                        const month = (date.getMonth() + 1).toString().padStart(2, '0');
                        const hour = date.getHours().toString().padStart(2, '0');
                        const minute = date.getMinutes().toString().padStart(2, '0');
                        const dateFormat = {
                            day,
                            month,
                            hour,
                            minute,
                        };
                        setonSelectedStartDate(dateFormat);
                    }}
                    onCancel={() => {
                        setOpenDialogStartDate(false);
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 5,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: '#CCCCCC',
                    }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>Ngày kết thúc</Text>
                    <TouchableOpacity
                        style={{ width: '35%' }}
                        onPress={() => setOpenDialogEndDate(true)}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: '100%',
                            }}>
                            <View style={{ width: '90%' }}>
                                {onSelectedEndDate.day ? (
                                    <Text style={{ color: 'black', fontSize: 18 }}>
                                        {' '}
                                        {onSelectedEndDate.day}/{onSelectedEndDate.month}{' '}
                                        {onSelectedEndDate.hour}:{onSelectedEndDate.minute}
                                    </Text>
                                ) : (
                                    <View>
                                        <Text style={{ textAlign: 'center' }}>Nhấp chọn</Text>
                                    </View>
                                )}
                            </View>
                            <Icon1 name="chevron-forward-outline" size={23}></Icon1>
                        </View>
                    </TouchableOpacity>
                </View>
                <DatePicker
                    modal={true}
                    open={openDialogEndDate}
                    date={endDate}
                    locale="vi_VN"
                    minimumDate={new Date()}
                    title="Kết thúc giảm giá"
                    onConfirm={date => {
                        setOpenDialogEndDate(false);
                        setEndDate(date);
                        const day = date.getDate().toString().padStart(2, '0');
                        const month = (date.getMonth() + 1).toString().padStart(2, '0');
                        const hour = date.getHours().toString().padStart(2, '0');
                        const minute = date.getMinutes().toString().padStart(2, '0');
                        const dateFormat = {
                            day,
                            month,
                            hour,
                            minute,
                        };
                        setonSelectedEndDate(dateFormat);
                    }}
                    onCancel={() => {
                        setOpenDialogEndDate(false);
                    }}
                />
                <TouchableOpacity
                    onPress={validationDateSale}
                    style={{
                        alignItems: 'center',
                        marginTop: 5,
                        padding: 6,
                        borderRadius: 5,
                        backgroundColor: '#3669C9',
                        justifyContent: 'center',
                        marginTop: 10,
                    }}>
                    <Text
                        style={{
                            marginLeft: 5,
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 18,
                        }}>
                        XÁC NHẬN
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TabSaleProduct