import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../css/Theme';
import {StyleLogin} from '../css/Styles.js';
import {Image} from 'react-native';
const windowWIdth = Dimensions.get('window').width;
import {StyleSheet} from 'react-native';
import AxiosIntance from '../utils/AxiosIntance';
const UpdatePassword = (props) => {
  const [show, setshow] = useState(true);
  const [visible, setvisible] = useState(true);
  const [showCP, setshowCP] = useState(true);
  const [visibleCP, setvisibleCP] = useState(true);

  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState(""); 
  const {email} = props.route.params;
    const UpdatePassword = async () => {
      // console.log(oldPassword, newPassword, confirmPassword);
      
      if( newPassword==confirmPassword){
        console.log(oldPassword, newPassword, confirmPassword);
        try {
          // http://localhost:3000/Api/UserApi/change-password?email=thuan141@gmail.com&oldPassword=thuan2&newPassword=thuan3
          const response= await AxiosIntance().post("/UserApi/change-password?email="+email+"&oldPassword="+oldPassword+"&newPassword="+newPassword);
          // console.log(response, email, newPassword, confirmPassword, oldPassword);
          console.log(response)
          // console.log(emailUser, password );
          if(response.result==true)
          {
            console.log( "Do if"+newPassword, confirmPassword );
            Alert.alert("Thay đổi mật khẩu thành công");
            // await AsyncStorage.setItem("token",response.returnData.data.token);
            // ToastAndroid.show("check thanhf coong ",ToastAndroid.SHORT);
            // console.log(email);
            // console.log(emailUser, password );
            // ToastAndroid.show("Đăng nhập thành công",ToastAndroid.SHORT);
            // // setisLogin(true);
            // // setuserInfo(response.user);
            // // navigation.navigate('Product');
            // // console.log(response);
    
          }else{
            console.log( "check thất bại"+response );
            Alert.alert("Thay đổi mật khẩu thất bại");

            ToastAndroid.show("check thất bại",ToastAndroid.LONG);
          }
        } catch (error) {
          console.log(error);
        }
      }
      return
    }

  return (
    <View>
      <Text style={StyleLogin.HeadingTextCP}>Update Password</Text>
      <Text style={StyleLogin.HintText}>
        Complete the following final data to enter the Savvy Shop application
      </Text>
      
      <View>
        {/* <Text style={StyleLogin.textHint}>Old Password </Text> */}

        <View style={StyleLogin.input}>
          {/* <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="Enter your password"
            underlineColorAndroid="transparent"
            onChangeText={setOldPassword}
            secureTextEntry={visible}></TextInput> */}

          {/* <TouchableOpacity
            onPress={() => {
              setvisible(!visible);
              setshow(!show);
            }}
            style={StyleLogin.CTIcon}>
            <Image
              source={
                show === false
                  ? require('../images/icon/view.png')
                  : require('../images/icon/hide.png')
              }
              style={StyleLogin.HideShowIcon}
            />
          </TouchableOpacity> */}
        </View>
      </View>


      <View>
        <Text style={StyleLogin.textHint}>New Password</Text>

        <View style={StyleLogin.input}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="Enter your password"
            underlineColorAndroid="transparent"
            onChangeText={setNewPassword}
            secureTextEntry={visible}></TextInput>

          <TouchableOpacity
            onPress={() => {
              setvisible(!visible);
              setshow(!show);
            }}
            style={StyleLogin.CTIcon}>
            {/* <Image
              source={
                show === false
                  ? require('../images/icon/view.png')
                  : require('../images/icon/hide.png')
              }
              style={StyleLogin.HideShowIcon}
            /> */}
          </TouchableOpacity>
        </View>
      </View>


      <View>
        <Text style={StyleLogin.textHint}> Confirm New Password</Text>

        <View style={StyleLogin.input}>
          <TextInput
            style={StyleLogin.TextInputUP}
            placeholder="Enter your password"
            underlineColorAndroid="transparent"
            onChangeText={setConfirmPassword}
            secureTextEntry={visible}></TextInput>

          <TouchableOpacity
            onPress={() => {
              setvisibleCP(!visibleCP);
              setshowCP(!showCP);
            }}
            style={StyleLogin.CTIcon}>
            {/* <Image
              source={
                showCP === false
                  ? require('../images/icon/view.png')
                  : require('../images/icon/hide.png')
              }
              style={StyleLogin.HideShowIcon}
            /> */}
          </TouchableOpacity>
        </View>
      </View>
      <View style={StyleLogin.ButtonUP}>
        <TouchableOpacity style={StyleLogin.buttonShape} onPress={UpdatePassword}>
          <Text style={StyleLogin.TextButton}>Save Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // input: {
  //   placeholderTextColor: COLOR.TextPlaceHolder,
  //   height: 40,
  //   width: '20%',
  //   margin: 12,
  //   borderWidth: 1,
  //   borderColor: COLOR.borderColor,
  //   padding: 15,
  //   height: 55,
  //   justifyContent: 'space-between',
  //   borderRadius: 25,
  //   textAlign: 'center',
  // },
});
export default UpdatePassword;
