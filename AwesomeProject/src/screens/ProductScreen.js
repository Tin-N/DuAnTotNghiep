import { View, Text,TouchableOpacity,ActivityIndicator,ScrollView,ToastAndroid } from 'react-native'
import React,{useState,useEffect} from 'react'
import Pagination from '../component/Pagination/Pagination'
import ProductList from '../component/ProductList/ProductList'
import { FetchData } from '../component/ProductList/data'
import AxiosIntance from '../utils/AxiosIntance'
const ProductScreen = (props) => {
    const [mainData, setMainData] = useState([]);
    const [loadMoreData, setLoadMoreData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [columns, setcolumns] = useState(2);
    var newProduct=5;
    useEffect(() => {
        setIsLoading(true);
      const getFirstList = async ()=>{
        const response = await AxiosIntance().get("/productAPI/getProductByCategoryID?id=clothing&limitData=10&skipPage="+(page-1))
            if(response.result)
            {
                setMainData(response.products);
                setLoadMoreData(response.products.slice(0, newProduct));
                setIsLoading(false);
                // console.log(response.products.length==response.products.slice(0, newProduct).length,response.products.length,response.products.slice(0, newProduct).length);

            }
        }
        getFirstList()
      return () => {
        
      }
    }, [page]);
    
    const LoadMoreData =  () => {
        if(mainData.length==loadMoreData.length)
        {
            ToastAndroid.show("Đã hết data");
        }else{
            setIsLoading(true);
            const newLoadMoreData = mainData.slice(loadMoreData.length, loadMoreData.length + newProduct);
            const updatedLoadMoreData = [...loadMoreData, ...newLoadMoreData];
            setLoadMoreData(updatedLoadMoreData);
            console.log(updatedLoadMoreData.length);
            if (updatedLoadMoreData.length > 5) {
                setIsLoading(false);
            }
        }
        
    };
  return (
    <View>
        {isLoading==true?
        <View style={{
            height:"100%",
            justifyContent:'center',
            alignItems:'center'
        }}>
            <ActivityIndicator
                size={'large'}
            />
        </View>
        :
        <ScrollView>
            {/* <View style={{height:40,justifyContent:'center',borderBottomColor:'gray',borderWidth:0.2,marginHorizontal:5}}>
                <View>
                    <Text style={{alignSelf:'center',textAlign:'center'}}>Xem sản phẩm theo loại: Quần áo{}</Text>
                </View>
            </View> */}
                <ProductList 
                data={loadMoreData}   
                styleView={{width:'100%',margin:10}}
                numColumns={columns}

                showsHorizontalScrollIndicator={false}          
                />
               {
               (loadMoreData.length<10)&&(loadMoreData.length!==mainData.length)
               ?
                    <View style={{
                        width:'100%',
                        alignItems:'center',
                        marginVertical:8
                        }}>
                        <TouchableOpacity onPress={LoadMoreData} style={{
                        backgroundColor:'#e8e8e8',
                        paddingHorizontal:13,
                         borderRadius:10
                    }}>
                        <Text style={{color: '#9d9d9d', fontSize: 15, marginVertical:10}}>Load more</Text>
                    </TouchableOpacity>
                    </View>
                    :<></>} 

                <Pagination
                        totalPages={10}
                        currentPage={page} 
                        onPageChange={setPage}
                        maxVisiblePages={4}
                    /> 
            </ScrollView>
        }
        
    </View>
  )
}

export default ProductScreen