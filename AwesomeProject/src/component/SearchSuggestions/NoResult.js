import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { stylesNoResult } from '../../css/Styles'

const NoResult = () => {
  return (
    <View style={stylesNoResult.view}>
      <Image style={stylesNoResult.image} source={require('../../images/Searchbar/ic_wonder.png')}></Image>
      <Text numberOfLines={3} style={stylesNoResult.text}>Xin lỗi nhưng chúng tôi không thể tìm được kết quả nào liên quan </Text>
      <Text style={stylesNoResult.lightText}>Hãy thử tìm bằng từ khóa khác xem</Text>
    </View>
  )
}

export default NoResult

const styles = StyleSheet.create({})