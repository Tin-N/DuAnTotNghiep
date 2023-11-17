import { View, Text, ScrollView,StyleSheet } from 'react-native'
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
     <ScrollView
     style={{
      backgroundColor:'#f2f2f2'
     }}
     >



<View style={[
  styles.view,{
    paddingVertical:0,
  }]}>

    <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Viết tắt</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Chú thích</Text>
            </View>
          </View>


          {VietnameseCurrency.map((item)=>{
            return(
              <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{item.name}</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{item.value}</Text>
            </View>
          </View>
            )
          })} 
    
    </View>
</View>
      <View
        style={{
          backgroundColor:'white',
          marginHorizontal:10,
          elevation:2,
          borderRadius:5,
          marginTop:10,
          marginVertical:5
        }}
      >
      <View
      style={{
        marginHorizontal:30,
        marginVertical:20,
        borderColor:'black',
        borderWidth:0.5,
        
      }}
      >

        <View
          style={{
            height:"100%",
            borderWidth:0.2,
            position:'absolute',
            right:115
          }}
        >


        </View>
        <View style={{
          flexDirection:'row',
          margin:10,
         
        }}> 
          <Text
          style={{
            
            color:'black'
          }}
          >Số lượng sản phẩm đã bán {"\n"} trong 1 tuần</Text>
          <Text 
          style={{
            alignSelf:'center',
            marginLeft:5,
            color:'black'
          }}
          >  200 cái</Text>
        </View>
        <View
         style={{width:"100%",borderWidth:0.2}}
        />
        <View style={{
          flexDirection:'row',
          margin:10,
        }}>
          
          <Text
          style={{            
            color:'black'
          }}
          >Tổng doanh thu trong 1 tuần</Text>
          <Text
            style={{
              alignSelf:'center',
              marginLeft:5,
              color:'black'

            }}
          >  10000000 đ</Text>
        </View>
      </View>
      </View>
      <View
            style={[styles.view,]}>
                <View>
                  <Text style={{
                    textAlign:'center',
                    fontSize:20,
                    color:'black',
                    fontWeight:'600',
                    
                  }}>DOANH THU THEO TUẦN</Text>
                </View>
                <LineChart
                areaChart
                data={ptData}       
                width={280}
                hideDataPoints
                spacing={20}
                color="#00d5ff"
                thickness={1}
                startFillColor="rgba(83, 185, 249, 0.397))"
                endFillColor="rgba(255, 255, 255, 0.01)"
                startOpacity={0.9}
                endOpacity={0.1}
                zIndex1={1}
                initialSpacing={0}
                noOfSections={10}
                verticalLinesZIndex={2}
                yAxisLabelWidth={70}
                formatYLabel={formatMoney}
                yAxisColor="white"
                yAxisThickness={0}
                rulesType="dashed"
                height={300}
                rulesColor="gray"
                yAxisTextStyle={{color: 'black'}}
                yAxisSide='right'
                xAxisColor="lightgray"
                pointerConfig={pointerConfig}
                xAxisLabelTextStyle={{color:"black"}}
              />
      </View> 
        <View
          style={[styles.view,{marginBottom:20}]}
        >
            {/* Table Head */}
            <Text
              style={{
                textAlign:'center',
                fontSize:20,
                color:'black',
                fontWeight:'600',
                marginBottom:10,
              
            }}
            >
              
              TOP SẢN PHẨM BÁN CHẠY NHẤT</Text>
            <View style={styles.table_head}>
                <View style={{ width: '15%'}}>
                    <Text style={styles.table_head_captions}>ID</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_head_captions}>Tên sản phẩm</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_head_captions}>Đã bán</Text>
                </View>
            </View>

            {/* Table Body - Single Row */}
            <View style={styles.table_body_single_row}>
                <View style={{ width: '15%'}}>
                    <Text style={styles.table_data}>01</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>January</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>$10,236</Text>
                </View>
            </View>
            <View style={styles.table_body_single_row}>
                <View style={{ width: '15%'}}>
                    <Text style={styles.table_data}>01</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>January</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>$10,236</Text>
                </View>
            </View>
            <View style={styles.table_body_single_row}>
                <View style={{ width: '15%'}}>
                    <Text style={styles.table_data}>01</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>January</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>$10,236</Text>
                </View>
            </View>
            <View style={styles.table_body_single_row}>
                <View style={{ width: '15%'}}>
                    <Text style={styles.table_data}>01</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>January</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>$10,236</Text>
                </View>
            </View>
            <View style={styles.table_body_single_row}>
                <View style={{ width: '15%'}}>
                    <Text style={styles.table_data}>01</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>January</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>$10,236</Text>
                </View>
            </View>
               
        </View>
        <View
          style={[styles.view,{marginBottom:20}]}
        >
            {/* Table Head */}
            <Text
              style={{
                textAlign:'center',
                fontSize:20,
                color:'black',
                fontWeight:'600',
                marginBottom:10,
              
            }}
            >
              
              TOP SẢN PHẨM ĐÁNH GIÁ CAO NHẤT</Text>
            <View style={styles.table_head}>
                <View style={{ width: '15%'}}>
                    <Text style={styles.table_head_captions}>ID</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_head_captions}>Tên sản phẩm</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_head_captions}>Đánh giá</Text>
                </View>
            </View>

            {/* Table Body - Single Row */}
            <View style={styles.table_body_single_row}>
                <View style={{ width: '15%'}}>
                    <Text style={styles.table_data}>01</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>January</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>$10,236</Text>
                </View>
            </View>
            <View style={styles.table_body_single_row}>
                <View style={{ width: '15%'}}>
                    <Text style={styles.table_data}>01</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>January</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>$10,236</Text>
                </View>
            </View>
            <View style={styles.table_body_single_row}>
                <View style={{ width: '15%'}}>
                    <Text style={styles.table_data}>01</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>January</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>$10,236</Text>
                </View>
            </View>
            <View style={styles.table_body_single_row}>
                <View style={{ width: '15%'}}>
                    <Text style={styles.table_data}>01</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>January</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>$10,236</Text>
                </View>
            </View>
            <View style={styles.table_body_single_row}>
                <View style={{ width: '15%'}}>
                    <Text style={styles.table_data}>01</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>January</Text>
                </View>
                <View style={{ width: '45%'}}>
                    <Text style={styles.table_data}>$10,236</Text>
                </View>
            </View>
               
        </View>           
     </ScrollView> 

  )
}
export default StatisticSellerScreen
// rgb(100, 100, 100)
// rgb(0, 115, 255)

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,    
  },
  table_head: {
    flexDirection: 'row', 
    borderBottomWidth: 1, 
    borderColor: '#ddd', 
    padding: 7,
    backgroundColor: '#44aaf8'
},
table_head_captions:{
    fontSize: 15,
    color: 'white'
},

table_body_single_row:{
    backgroundColor: '#fff',
    flexDirection: 'row', 
    borderBottomWidth: 1, 
    borderColor: '#ddd', 
    padding: 7,
},
table_data:{  
    fontSize: 11,
},
  view:{
    paddingVertical:30,
    backgroundColor: '#ffffff',
    marginVertical:10,
    borderRadius:10,
    margin:10,
    paddingHorizontal:5,
    elevation:2
  }
  ,

  container: {
    padding:20,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cell: {
    flex: 1,
    padding: 8,
    borderRightWidth:0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 16,
  },
});



const VietnameseCurrency=[
  {name:'1 T',value:"1 Tỷ"},
  {name:'1 Tr',value:"1 Triệu"},
  {name:'1 N',value:"1 Ngàn"},
]
const pointerConfig={
  pointerStripHeight: 300,
  pointerStripColor: 'black',
  pointerStripWidth: 1.5,
  pointerColor: 'black',
  radius: 6,
  zIndex:10,
  pointerLabelWidth: 150,
  pointerLabelHeight: 90,
  activatePointersOnLongPress: true,
  autoAdjustPointerLabelPosition: true,
  pointerLabelComponent: items => {
    return (
      <View
        style={{
          zIndex:3,
          height: 150,
          justifyContent: 'center',
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
  {value: 200000000000, date: '8 Apr 2022'},
  {value: 160000000, date: '1 Apr 2022'},
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