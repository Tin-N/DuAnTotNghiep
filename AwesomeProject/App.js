/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Alert,
  Dimensions,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/utils/AppNavigator';
import { AppContextProvider } from './src/utils/AppContext';
import { StyleLogin } from './src/css/Styles';
import ProductScreen from './src/screens/ProductScreen';
import TestScreen from './src/screens/TestScreen';
import FilterScreen from './src/screens/FilterScreen';
// import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import { useState } from 'react';
import DisableUserScreen from './src/screens/DisableUserScreen';
import Tesst from './src/screens/Tesst';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Item from './src/component/UserList/Item';
import ActivateUserScreen from './src/screens/ActivateUserScreen';
import StatisticSellerScreen from './src/screens/personStore/StatisticSellerScreen';
import DetailChatScreen from './src/screens/personStore/DetailChatScreen';
// import SearchScreen from './src/screens/SearchScreen';
// import Category from './src/screens/Category';
// import SearchStore from './src/screens/personStore/SearchStore';
// import HomeStore from './src/screens/personStore/HomeStore';



const App = () => {
  // const [modalVisible, setModalVisible] = useState(false)
  // const {height}=Dimensions.get('screen').height;
  
  // const Dialog = ({modalVisible, setModalVisible}) =>{
  //     const [count, setcount] = useState(3) // 3 là số giây vừa muốn làm việc gì đó
  //   useEffect(() => {
  //     // sau 3 giay thi tru
  //   const time =  setInterval(() => {
  //     setcount(prevCount => prevCount - 1);
  //     }, 1000);

  //     //  Het thoi gian thi se lam gi do 
  //     if(count==0&&modalVisible){
  //       clearInterval(time);
  //       setModalVisible(false);

  //       //  Lenh chuyen huong o day

  //       Alert.alert("Tieu de ","Da chuyen man hinh");
  //     }
  //     return () => {
  //       clearInterval(time);
  //     }
  //   }, [count])
    
  //   return(
  //     <View  style={{height:height,justifyContent:'center',alignItems:'center'}}>
  //       <Modal
        
  //         animationType="slide"
  //         transparent={true}
  //         visible={modalVisible}
  //         onRequestClose={() => {
  //           Alert.alert('Modal has been closed.');
  //           setModalVisible(!modalVisible);
  //         }}
  
  //       >
  
  //         <Text>Màn hình sẽ được chuyển tới trang khác trong {count} s</Text>
  //       </Modal>
  //     </View>
  //   )
  // }
  return (
  // <WelcomeScreen/>
    //  <StatisticSellerScreen/>
    // <AppContextProvider>
    //   <NavigationContainer>
    //     <AppNavigator/>
    //   </NavigationContainer>
    // </AppContextProvider>

    <DetailChatScreen/>
    // <View>
    //   <View>
    //   <Dialog modalVisible={modalVisible}  setModalVisible={setModalVisible}/>
    //   </View>
    //   <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
    //     <Text>Helloo</Text>
    //   </TouchableOpacity>
    // </View>
  )
}



export default App;
