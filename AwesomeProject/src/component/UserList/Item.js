import {View, Text, Image,TouchableOpacity, ToastAndroid} from 'react-native';
import React from 'react';
import AxiosIntance from '../../utils/AxiosIntance';

const Item = props => {
    const {isDisableUser,data,setCheck,check}=props;
    const disableTitle="Vô hiệu hóa người dùng"
    const activateTitle="Kích hoạt người dùng"
    const ADUser = async()=>{
        if(isDisableUser)
        {

            const response=await AxiosIntance().post("/UserApi/disableUser?id="+data._id);
            if(response.result)
            {
                console.log(response);
                ToastAndroid.show("Đã vô hiệu hóa thành công user thành công user",ToastAndroid.SHORT)
                setCheck(!check)
            }else{
                ToastAndroid.show("Có lỗi trong quá trình vô hiệu hóa user",ToastAndroid.SHORT);
            }
        }else if(isDisableUser==false){
            const response=await AxiosIntance().post("/UserApi/activateUser?id="+data._id);
            if(response.result)
            {
                ToastAndroid.show("Đã kích hoạt thành công user",ToastAndroid.SHORT)
                setCheck(!check)

            }else{
                ToastAndroid.show("Có lỗi trong quá trình kích hoạt user",ToastAndroid.SHORT);
            }
        }
    }



  return (
  
        <View
      style={{
        // height: 130,
        elevation: 5,
        borderRadius: 10, 
        backgroundColor: 'white', 
        margin: 10, 
        padding: 5,
       
        // alignItems:'center',
      }}>
     <View style={{
         flexDirection:'row',
         marginBottom:10
     }}>
     <View style={{
        width:"20%",
        alignSelf:'center',
        justifyContent:'flex-start',
        marginRight:10,
     }}
     
     >
     <Image style={{
        marginLeft:5,
        
        backgroundColor: 'black',
         height: 60,
          width: 60,
        borderRadius:30
          }} />

     </View>
          <View style={{
            width:"76%",
          }}>
            {/* <Text>{i}</Text> */}
            <Text>Tên: {data.username}</Text>
            <Text>Tên đầy đủ: {data.fullname}</Text>
            <Text>Email: {data.email}</Text>
            <Text>Địa chỉ: {data.address}</Text>
            <Text>Sdt: {data.phoneNumber}</Text>
            <Text>Vai trò: {data.roleID}</Text>

            <Text>Vi phạm điều khoản: ....</Text>

          </View>
     </View>
          <TouchableOpacity 
          activeOpacity={0.7}
          onPress={()=>ADUser()}
          style={{
            marginHorizontal:10,
            marginVertical:5,
            backgroundColor:'#3669C9',
            padding:10,
            alignSelf:'flex-end',
            borderRadius:10,
            width:230
          }}>
            <Text
            style={{
                color:'#fff',
                fontSize:18,
                textAlign:'center'
            }}>{isDisableUser?disableTitle:activateTitle}</Text>
          </TouchableOpacity>

    </View>
  );
};

export default Item;
