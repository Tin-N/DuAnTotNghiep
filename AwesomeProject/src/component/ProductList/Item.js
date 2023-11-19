import {View, Text, Image} from 'react-native';
import React, {useEffect, useState,memo} from 'react';
import {StyleHomeStore} from '../../css/Styles';
const ItemList = props => {
  const {data} = props;
  const [name, setName] = useState('');
  useEffect(() => {
    const formatString = (lineBreakLimit, cutoffLimit) => {
      if (typeof data.nameProduct !== 'undefined') {
        let name1 = data.nameProduct;
        if (name1.length > lineBreakLimit) {
          const lineBreakPosition = name1.lastIndexOf(' ', lineBreakLimit);
          if (lineBreakPosition !== -1) {
            let name2 =
              name1.slice(0, lineBreakPosition) +
              '\n' +
              name1.slice(lineBreakPosition + 1);
            if (name2.length > cutoffLimit) {
              console.log(name2.length)
              setName(name2.slice(0, cutoffLimit) + '...');
              return
            }
            setName(name2);
            return;
          }
        } else {
          setName(name1);
        }
      }
      return
    };
    formatString(20, 35);
  }, []);

  return (
    <View style={{padding:5, backgroundColor:'white', width:'100%', borderRadius:12}}>
      <Image style={{padding:5,width:'100%',height:150, borderRadius:12}} source={{uri:data.image[0]}} />
      <Text
        style={{
          textTransform:'uppercase',
          color: 'black',
          fontSize: 13,
          letterSpacing: 0.5,
          fontWeight:'500',
          padding:3
        }}>
        {data.name}
      </Text>
      <Text style={{color:'red',fontWeight:'700',fontSize:17,padding:3}}>đ {data.price} </Text>
      <View style={StyleHomeStore.reviewsProduct}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../images/ProductList/star.png')} />
          <Text style={{fontSize: 12, color: 'black'}}>
            {data.rating}
          </Text>
        </View>
        <Text
          style={{width: 90, fontSize: 12, paddingLeft: 18, color: 'black'}}>
          {data.sold} Reviews
        </Text>
        <Image
          style={{marginLeft: 10}}
          source={require('../../images/ProductList/productoptions.png')}
        />
      </View>
    </View>
  );
};

export default memo(ItemList);
