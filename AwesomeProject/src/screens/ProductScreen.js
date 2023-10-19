import { View, Text,TouchableOpacity,ActivityIndicator,ScrollView,ToastAndroid } from 'react-native'
import React,{useState,useEffect} from 'react'
import Pagination from '../component/Pagination/Pagination'
import ProductList from '../component/ProductList/ProductList'
import { FetchData } from '../component/ProductList/data'
import AxiosIntance from '../utils/AxiosIntance'
const ProductScreen = () => {
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
                console.log(response.products.length==response.products.slice(0, newProduct).length,response.products.length,response.products.slice(0, newProduct).length);

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
                <ProductList 
                data={loadMoreData}   
                styleView={{width:'100%',margin:10}}
                numColumns={columns}

                showsHorizontalScrollIndicator={false}          
                />
               {
               (loadMoreData.length<10)&&(loadMoreData.length!==mainData.length)
               ?
                    <TouchableOpacity onPress={LoadMoreData}>
                        <Text style={{color: '#25251b', fontSize: 15}}>Load more</Text>
                    </TouchableOpacity>
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