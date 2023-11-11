import { View, Text } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import {formatMoney, formatPrice} from '../../../Agro'
import { LineChart } from "react-native-gifted-charts";
const screenWidth = Dimensions.get("screen").width;
const StatisticSellerScreen = () => {
  return (
    // <View 
    // // style={{marginLeft:15,zIndex:0}}
    //  >
    //   <Text>StatisticSellerScreen</Text>
    //   <Text>{formatPrice(20000000000)}</Text>


      <View
      style={{
        paddingVertical: 100,
        paddingLeft: 20,
        backgroundColor: '#ffffff',
      }}>
          <LineChart
          areaChart
          data={ptData}
  
          width={300}
          hideDataPoints
          spacing={20}
          color="#007bff"
          thickness={2}
          startFillColor="rgba(0, 251, 255, 0.3)"
          endFillColor="rgba(5, 255, 238, 0.01)"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={6}
          yAxisLabelWidth={80}
          formatYLabel={formatMoney}
          yAxisColor="white"
          yAxisThickness={0}
          rulesType="solid"
          rulesColor="gray"
          yAxisTextStyle={{color: 'black'}}
          yAxisSide='right'
          xAxisColor="lightgray"
          pointerConfig={pointerConfig}
          xAxisLabelTextStyle={{color:"black"}}
          
        />
      </View>  

  )
}
export default StatisticSellerScreen
// rgb(100, 100, 100)
// rgb(0, 115, 255)


const pointerConfig={
  pointerStripHeight: 160,
  pointerStripColor: 'black',
  pointerStripWidth: 2,
  pointerColor: 'black',
  radius: 6,
  pointerLabelWidth: 150,
  pointerLabelHeight: 90,
  activatePointersOnLongPress: true,
  autoAdjustPointerLabelPosition: true,
  pointerLabelComponent: items => {
    return (
      <View
        style={{
          zIndex:1,
          height: 150,
          justifyContent: 'center',
          marginTop: -30,
          marginLeft: -40,
        }}>
        <Text style={{color: 'black', fontSize: 14, marginBottom:6,textAlign:'center'}}>
          {items[0].date}
        </Text>

        <View style={{paddingHorizontal:14,paddingVertical:6, borderRadius:16, backgroundColor:'white'}}>
          <Text style={{fontWeight: 'bold',textAlign:'center'}}>
            {formatPrice(items[0].value)+"đ"}
          </Text>
        </View>
      </View>
    );
  },
}
const ptData = [
  {value: 160000000, date: '1 Apr 2022'},
  {value: 180002650000, date: '2 Apr 2022'},
  {value: 190000000000, date: '3 Apr 2022'},
  {value: 180000000000, date: '4 Apr 2022'},
  {value: 140000000000, date: '5 Apr 2022'},
  {value: 145000000000, date: '6 Apr 2022'},
  {value: 160000000000, date: '7 Apr 2022'},
  {value: 200000000000, date: '8 Apr 2022'},
  {value: 160000000, date: '1 Apr 2022'},
  {value: 180002650000, date: '2 Apr 2022'},
  {value: 190000000000, date: '3 Apr 2022'},
  {value: 180000000000, date: '4 Apr 2022'},
  {value: 140000000000, date: '5 Apr 2022'},
  {value: 145000000000, date: '6 Apr 2022'},
  {value: 160000000000, date: '7 Apr 2022'},
  {value: 200000000000, date: '8 Apr 2022'},{value: 160000000, date: '1 Apr 2022'},
  {value: 180002650000, date: '2 Apr 2022'},
  {value: 190000000000, date: '3 Apr 2022'},
  {value: 180000000000, date: '4 Apr 2022'},
  {value: 140000000000, date: '5 Apr 2022'},
  {value: 145000000000, date: '6 Apr 2022'},
  {value: 160000000000, date: '7 Apr 2022'},
  {value: 200000000000, date: '8 Apr 2022'},
  // {value: 220, date: '9 Apr 2022'},
  // {
  //   value: 240,
  //   date: '10 Apr 2022',
  //   label: '10 Apr',
  //   labelTextStyle: {color: 'lightgray', width: 60},
  // },
  // {value: 280, date: '11 Apr 2022'},
  // {value: 260, date: '12 Apr 2022'},
  // {value: 340, date: '13 Apr 2022'},
  // {value: 385, date: '14 Apr 2022'},
  // {value: 280, date: '15 Apr 2022'},
  // {value: 390, date: '16 Apr 2022'},

  // {value: 370, date: '17 Apr 2022'},
  // {value: 285, date: '18 Apr 2022'},
  // {value: 295, date: '19 Apr 2022'},
  // {
  //   value: 300,
  //   date: '20 Apr 2022',
  //   // label: '20 Apr',
  //   // labelTextStyle: {color: 'lightgray', width: 60},
  // },
  // {value: 280, date: '21 Apr 2022'},
  // {value: 295, date: '22 Apr 2022'},
  // {value: 260, date: '23 Apr 2022'},
  // {value: 255, date: '24 Apr 2022'},

  // {value: 190, date: '25 Apr 2022'},
  // {value: 220, date: '26 Apr 2022'},
  // {value: 205, date: '27 Apr 2022'},
  // {value: 230, date: '28 Apr 2022'},
  // {value: 210, date: '29 Apr 2022'},
  // {
  //   value: 200,
  //   date: '30 Apr 2022',
  //   // label: '30 Apr',
  //   // labelTextStyle: {color: 'lightgray', width: 60},
  // },
  // {value: 240, date: '1 May 2022'},
  // {value: 250, date: '2 May 2022'},
  // {value: 280, date: '3 May 2022'},
  // {value: 250, date: '4 May 2022'},
  // {value: 210, date: '5 May 2022'},
];