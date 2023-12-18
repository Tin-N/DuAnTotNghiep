import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { styleWelcome } from '../css/Styles'
import { images } from '../component/Slideshow/images';
import { useNavigation } from '@react-navigation/native';
import Slideshow from '../component/Slideshow/Slideshow'
const WelcomeScreen = (props) => {

  const { navigation } = props

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);
  const goHome = () => {
    console.log(">>> click");
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={styleWelcome.view}>
      <Text style={styleWelcome.text}>Hãy mua những thứ bạn muốn</Text>
      <Slideshow
        isAutoSroll={true}
        width={'80%'}
        imagesource={images}
        flex={0.8}
        image
        heightRate={0.7}
        paginationEnabled={true}
      />
      <TouchableOpacity
      onPress={()=>navigation.navigate("Main")}
        // chổ này click không được này
        style={[styleWelcome.TextInput]}>
        <Text
          style={styleWelcome.MiniTextInput}
        >Bắt đầu</Text>
      </TouchableOpacity>

    </View>
  )
}

export default WelcomeScreen