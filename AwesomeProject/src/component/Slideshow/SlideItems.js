import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
const { width, height } = Dimensions.get('screen');
const SlideItems = props => {
  const { item, widthR, flexH, heightRate, widthRate, styleItem } = props;
  return (
    <View
      style={[
        styles.container,
        { height: height * heightRate, width: width * widthRate },
      ]}>
      <Image
        source={item.name}
        style={[styleItem ? styleItem : styles.image, { width: widthR, flex: flexH }]}
      />
    </View>
  );
};
export default SlideItems;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
});
