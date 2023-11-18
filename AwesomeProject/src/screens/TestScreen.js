
import {View, Text, FlatList, ToastAndroid} from 'react-native';
import React, { useEffect, useState } from 'react';
import Slideshow from '../component/Slideshow/Slideshow';
import SearchSuggestion from '../component/SearchSuggestions/SearchSuggestions';
import NoResult from '../component/SearchSuggestions/NoResult';
import { FetchData } from '../component/ProductList/data';
import ProductList from '../component/ProductList/ProductList';
import Searchbar from '../component/Seachbar/Searchbar';
import Item from '../component/CategoryList/Item';
import CategoryList from '../component/CategoryList/CategoryList';
import Banner from '../component/Banner/Banner';
import Pagination from '../component/Pagination/Pagination';
import SearchFilter from '../component/Filter/SearchFilter';
import { calculateTimeDifference } from '../../Agro';
const TestScreen = () => {

  
//   const [data, setdata] = useState([]);
//   const [column, setcolumn] = useState(2)
//   const[page,setPage]=useState(1);

//   useEffect(() => {
//     setIsLoading(true);
//   const getFirstList = async ()=>{
//     const response = await AxiosIntance().get("/productAPI/getProductByCategoryID?id=clothing&limitData=10&skipPage="+(page-1))
//         if(response.result)
//         {
//             // setMainData(response.products);
//             setdata(response.products.slice(0, newProduct));
//             // setIsLoading(false);
//             // console.log(response.products.length==response.products.slice(0, newProduct).length,response.products.length,response.products.slice(0, newProduct).length);

//         }
//     }
//     getFirstList()
//   return () => {
    
//   }
// }, [page]);



 // Lấy timestamp

const TextTime= (props)=>{

  const {startDay,endDay}=props;
  const [Time, setTime] = useState("");
  const now = new Date(); // Lấy thời gian hiện tại
  const threeDaysFromNow = new Date(now);
  threeDaysFromNow.setDate(now.getDate() + 3); // Thêm 3 ngày
  
  const futureTimestamp = threeDaysFromNow.getTime();
  
  useEffect(() => {
    // Sử dụng setTimeout để thay đổi giá trị text sau 1 giây
    // Xóa timer khi component unmount hoặc dependency thay đổi (nếu cần)
    let timer = setInterval(() => {
  
      console.log("HElllooo");
      setTime(calculateTimeDifference(new Date().getTime(),endDay));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return(
    <Text>Thời gian còn lại: {Time}</Text>
  )
}
  return (
    <View  style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
      {/* <ProductList 
                data={data}   
                styleView={{width:'100%',margin:10}}
                numColumns={column}
                
                showsHorizontalScrollIndicator={false}          
              />

              <FlatList
              
              /> */}
              {/* <SearchFilter onSubmit={setValueFilter}/> */}
             <TextTime/>

              {/* <Text>1635870123000 - thời gian bắt đầu = Ngày 4 tháng 11 năm 2021, 09:55:23 AM.</Text> */}
              {/* <Text>1635870123000 - thời gian bắt đầu = Ngày 2 tháng 9 năm 2022, 11:15:23 AM</Text> */}

    </View>
  );
};

export default TestScreen;














 {/* <Slideshow
        width={'80%'}
        flex={0.8}
        heightRate={0.4}
        paginationEnabled={true}
      /> */}
      {/* <SearchSuggestion
        src={require('../images/Searchbar/search.png')}
        deleteEnabled={true}
      /> */}
      {/* <NoResult/> */}
      {/* <ProductList 
      data={FetchData()}   
      styleView={{width:'100%',paddingTop:10}}
      horizontal 
      showsHorizontalScrollIndicator={false}
           
      /> */}
      {/* <Searchbar/> */}
      {/* <CategoryList/> */}
{/* <Banner/> */}
{/* <Pagination
totalPages={10}
 currentPage={page} 
onPageChange={setPage}
maxVisiblePages={4}
/> */}
{/* <SearchFilter/> */}
