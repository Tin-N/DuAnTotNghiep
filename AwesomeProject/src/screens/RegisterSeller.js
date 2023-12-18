import React, { useState,useEffect,useContext } from 'react';
import { styleHome,styleSearchScreen } from '../css/Styles';
import { View, Text, TextInput,TouchableOpacity, Alert,ScrollView,Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AppContext } from '../utils/AppContext';
import AxiosIntance from '../utils/AxiosIntance';

const SellerRegistration = (props) => {
    const {navigation,route}=props;
    const {params}=route;
    const {userID}=params;
    const { isLogin, setisLogin, isOrder, setisOrder, userInfo, setuserInfo, setuserID, userAddress, setuserAddress, userRole, setuserRole } = useContext(AppContext);
    const logOut = () => {
      setisLogin(false)
      setuserID('')
      setuserAddress('')
      setuserInfo('')
      setuserRole(0)
    }
    useEffect(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: "none"
        }
      });
      return () => navigation.getParent()?.setOptions({
        tabBarStyle: undefined
      });
    }, [navigation]);
    useEffect(() => {
      
      console.log(userID);
      const checkUser= async ()=>{
        const response = await AxiosIntance().get("/UserApi/get-by-id?id="+userID);
        console.log(userID);
        if(response.result==true)
        {
          if(response.user.roleID==2)
          {
            Alert.alert("Thông báo","Bạn đang chờ duyệt... ", [
              {
                text: 'Tôi đã hiểu',
                onPress: () => handleClick(),
              }]);
          }
          if(response.user.roleID==3)
          {
            Alert.alert("Thông báo","Bạn đã được duyệt thành người bán.\nBạn sẽ đăng xuất ứng dụng và sử dụng các chức năng của người bán!", [
              {
                text: 'Đăng xuất',
                onPress: () => handleClick2(),
              }]);
          }
        }
       
      }
      checkUser();
      return () => {
        
      }
    }, [])
    
  const [formData, setFormData] = useState({
    description: '',
    agreeToTerms: false,
  });
  const [isChecked, setisChecked] = useState(false)
  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick =()=>{
    navigation.goBack();
  }
  const handleClick2 =()=>{
    logOut();
    navigation.goBack();
  }
  const handleSubmit = async() => {
    // Thực hiện xử lý đăng ký người bán tại đây (ví dụ: gửi dữ liệu lên server)

    // Hiển thị thông báo hoặc chuyển hướng người dùng khi đăng ký thành công
    const response = await AxiosIntance().post("/UserApi/check-seller-by-id/"+userID);
    console.log(response.user);
    if(response.result==true)
    {
      Alert.alert('Thông báo', 'Đã đăng ký vào danh sách chờ duyệt!');
      navigation.goBack();
      
    }
    ToastAndroid.show("Lỗi gửi thông tin",ToastAndroid.SHORT)
  };


// Dieu khoan 



const [isExpanded, setExpanded] = useState(false);

const termsText = `
Chào mừng bạn đến với dịch vụ bán hàng của chúng tôi. Trước khi bạn bắt đầu bán hàng, hãy đọc kỹ các điều khoản dưới đây.

1. Đăng Ký Người Bán:
   1.1. Để trở thành người bán trên nền tảng của chúng tôi, bạn cần đăng ký và cung cấp thông tin đầy đủ, chính xác và hiện đại.
   1.2. Chúng tôi có quyền từ chối đăng ký người bán mà không cần giải thích.

2. Chất Lượng Sản Phẩm và Dịch Vụ:
   2.1. Bạn cam kết rằng tất cả sản phẩm và dịch vụ bạn cung cấp đều tuân thủ các tiêu chuẩn chất lượng và an toàn.
   2.2. Chúng tôi có quyền loại bỏ sản phẩm hoặc người bán vi phạm các tiêu chuẩn của chúng tôi mà không cần báo trước.

3. Quảng Cáo và Tiếp Thị:
   3.1. Bạn chịu trách nhiệm về nội dung và chất lượng của bất kỳ quảng cáo nào liên quan đến sản phẩm hoặc dịch vụ của bạn.
   3.2. Chúng tôi có quyền yêu cầu bạn chỉnh sửa hoặc loại bỏ bất kỳ quảng cáo nào vi phạm chính sách của chúng tôi.

4. Giao Dịch và Thanh Toán:
   4.1. Chúng tôi sẽ xử lý thanh toán cho các giao dịch được thực hiện thông qua nền tảng của chúng tôi và chuyển khoản số tiền tương ứng cho bạn.
   4.2. Chúng tôi sẽ giữ một phần trăm hoa hồng theo thỏa thuận cho mỗi giao dịch.

5. Phí và Chi Phí:
   5.1. Bạn sẽ chịu trách nhiệm về tất cả các phí và chi phí liên quan đến việc sử dụng dịch vụ của chúng tôi.
   5.2. Chúng tôi có quyền điều chỉnh phí và chi phí và thông báo cho bạn trước bằng cách sử dụng thông báo trên nền tảng hoặc qua email.

6. Chính Sách Hoàn Trả và Đổi Trả:
   6.1. Bạn phải tuân thủ các chính sách hoàn trả và đổi trả của chúng tôi, như mô tả chi tiết trên trang web của chúng tôi.
   6.2. Bạn chịu trách nhiệm xử lý mọi yêu cầu hoàn trả và đổi trả từ khách hàng của mình.

7. Chấp Nhận Điều Khoản và Điều Kiện:
   7.1. Bằng cách sử dụng dịch vụ của chúng tôi, bạn chấp nhận và tuân thủ mọi điều khoản và điều kiện được mô tả trong tài liệu này.
   7.2. Chúng tôi có quyền thay đổi các điều khoản và điều kiện này và sẽ thông báo cho bạn trước về bất kỳ thay đổi nào.

Hãy chắc chắn rằng bạn đã đọc và hiểu rõ các điều khoản trên trước khi xác nhận
`

  const previewLines = 5; // Số dòng được hiển thị trong chế độ xem trước


  return (
    <ScrollView>
      <View style={[styleHome.topBarView,{}]}>
      <TouchableOpacity
      style={{marginLeft:-10}}
      onPress={handleClick}>
            <Image
                style={styleSearchScreen.icons}
                source={require('../images/icon/previous-ic.png')}
                />
         </TouchableOpacity>
            <View style={{marginLeft:5,width:"90%"}}>
            <Text style={[styleHome.title,{fontSize:20, textAlign:'center',color:'black'}]}>Đăng ký trở thành người bán</Text>
            </View>
            <View style={styleHome.viewIcons}>
            <TouchableOpacity activeOpacity={1}/>
              
            </View>
          </View>

      {/* <Text style={{ fontSize: 24, marginBottom: 20 }}>Đăng ký trở thành người bán</Text> */}
     
     <View
      style={{margin:20}}
     >
     <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Mô tả mặt hàng của cửa hàng"
        value={formData.description}
        onChangeText={(text) => handleChange('description', text)}
      />

      <Text
        style={{
            fontSize:24,
            color:'black',
            fontWeight:'bold'
        }}
      >Điều Khoản Bán Hàng</Text>

      <View style={{ paddingHorizontal: 20,paddingBottom:10 }}>

      <Text numberOfLines={isExpanded ? undefined : previewLines} style={{ fontSize: 16 }}>
        {termsText}
      </Text>
      {/* {!isExpanded&&(<TouchableOpacity onPress={() => setExpanded(!isExpanded)}>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>
          Xem thêm
        </Text>
      </TouchableOpacity>)} */}

      {isExpanded ? 
        <TouchableOpacity onPress={() => setExpanded(false)}>
          <Text style={{ color: 'blue',fontSize:16,marginBottom: 10  }}>Thu gọn</Text>
        </TouchableOpacity>:<TouchableOpacity onPress={() => setExpanded(!isExpanded)}>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>
          Xem thêm
        </Text>
      </TouchableOpacity>
      }
    </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        {/* <CheckBox
          value={formData.agreeToTerms}
          onValueChange={() => handleChange('agreeToTerms', !formData.agreeToTerms)}
        /> */}
        <BouncyCheckbox
        textStyle={{
            textDecorationLine: "none",
          }}
        size={25}
        fillColor="#3669c9"
        unfillColor="#FFFFFF"
        text="Tôi đồng ý với điều khoản của ứng dụng"
        iconStyle={{ borderColor: "red" }}
        onPress={(isChecked) => {setisChecked(!isChecked);handleChange('agreeToTerms', !formData.agreeToTerms)}}
        isChecked={isChecked}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: formData.agreeToTerms ? '#3669c9' : 'gray',
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
        }}
        onPress={()=>handleSubmit()}
        disabled={!formData.agreeToTerms}
      >
        <Text style={{ color: 'white',fontSize:15,fontWeight:'bold' }}>Đăng ký</Text>
      </TouchableOpacity>
     </View>
    </ScrollView>
  );
};

export default SellerRegistration;

