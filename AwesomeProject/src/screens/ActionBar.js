import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation từ thư viện React Navigation

const ActionBar = ({ title }) => {
  const navigation = useNavigation(); // Sử dụng useNavigation để truy cập đối tượng điều hướng

  const handleBackPress = () => {
    navigation.goBack(); // Chuyển về màn hình trước đó
  };
  
  return (
    <View style={styles.actionBar}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Image style={{ width: 25, height: 25 }} source={require('../images/3994376_arrow_back_left_navigation_previous_icon.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View> 
  );
};

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
  },
  title: {
    color: 'Black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ActionBar;
