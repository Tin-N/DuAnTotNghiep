import {
    View,
    Text,
    ToastAndroid,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    ScrollView,
  } from 'react-native';
  import Item from '../component/UserList/Item';
  import React, {useEffect, useState} from 'react';
  import SearchFilter from '../component/UserFilter/SearchFilter';
  import Searchbar from '../component/Seachbar/Searchbar';
  import AxiosIntance from '../utils/AxiosIntance';
  import Pagination from '../component/Pagination/Pagination';
  
  const ActivateUserScreen = () => {
    const [data, setData] = useState([]);
    const [text, setText] = useState('');
    const [valueSort, setValueSort] = useState([{}, {}]);
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [check,setCheck]=useState(false);
    const isDisableUser = false;
    useEffect(() => {
      
      if ((Object.keys(valueSort[0]).length > 0)||(Object.keys(valueSort[1]).length > 0)) {
          // console.log('Đối tượng rỗng');
          // Load();
          console.log(Object.keys(valueSort[0]).length + Object.keys(valueSort[1]).length +"                "+ valueSort[0].name+"                 "+valueSort[1].name);
          if(page==1)
          Load();
          setPage(1);
      }
      return () => {};
    }, [valueSort]);
  
    useEffect(() => {
      Load();
      return () => {};
    }, [page,check]);
    function createURLstring(objRole, objSort, username) {
      //   console.log(objRole,objSort,username);
  
      let url = '';
      // name
      if (username.length > 0 && typeof username !== 'undefined')
        url = url + 'username=' + text + '&';
      // price
      if (Object.keys(objRole).length > 0)
        url = url + 'roleID=' + objRole.value + '&';
  
      url = url + 'isDisabled=' + !isDisableUser;
  
      // sort
      if (Object.keys(objSort).length === 0) {
      //   console.log('Đối tượng rỗng');
      } else {
        if (objSort.name.includes('Tên tài khoản'))
          url = url + '&sortName=' + objSort.value;
        if (
          objSort.name.includes('Tên (A - Z)') ||
          objSort.name.includes('Tên (Z - A)')
        )
          url = url + '&sortFullname=' + objSort.value;
        // if(objValue.name.includes("Bán chạy"))
        //   url=url+"sortPrice="+objValue.value;
        if (objSort.name.includes('Email'))
          url = url + '&sortEmail=' + objSort.value;
      }
      console.log(url);
  
      return url;
    }
  
    const Load = async () => {
        setisLoading(true);
  
      console.log(page + 'LOADD');
      try {
  
        const response = await AxiosIntance().get(
          '/UserApi/searchByNameAndSort?' +
            createURLstring(valueSort[1], valueSort[0], text) +
            '&page=' +
            page
        );
  
        if (response.result) {
  
          setData(response.user);
        }
        setisLoading(false)
  
        setTotalPage(response.totalPage);
      } catch (error) {
        console.error('Error:', error);
      }
    };
   
  
    const onChangeText = (text)=>{
      setText(text);
    }
//    const renderFooter =()=>{
//       return(
//           isLoading1?(
//               <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <ActivityIndicator color={'blue'} size={'small'} />
//               <Text style={{marginLeft: 5}}>Loading...</Text>
//             </View>       
//          ):<View/>
//       )
//    }
  
   const onSubmitText = ()=>{
             
          if(page==1)
          Load();
          setPage(1);
          setisLoading(true);
          Load();
      
   }
    return (
      <ScrollView>
        <View>
          <Searchbar
              onChangeText={onChangeText}
              onSubmitText={onSubmitText}
              onClick={false}
              text={text}
              >
  
          </Searchbar>
          <View style={{flexDirection:'row' ,justifyContent:'flex-end'}}>
        <View  style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                <Text>Tải lại</Text>
                <TouchableOpacity
                    style={{
                    width: 40,
                    height: 40,
                    alignSelf: 'flex-end',
                    justifyContent: 'center',
                    marginHorizontal: 10,
                    marginVertical: 10,
                    }}
                    onPress={() => onSubmitText()}>
                    <Image
                    style={{width: 18, height: 18}}
                    source={require('../images/icon/refresh.png')}
                    />
                </TouchableOpacity>
           </View>
           <View style={{flexDirection:'row', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text>Sắp xếp</Text>
                <TouchableOpacity
                    style={{
                    width: 40,
                    height: 40,
                    alignSelf: 'flex-end',
                    justifyContent: 'center',
                    marginHorizontal: 10,
                    marginVertical: 10,
                    }}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                    style={{width: 23, height: 23}}
                    source={require('../images/icon/filter.png')}
                    />
                </TouchableOpacity>
           </View>
        </View>
          <SearchFilter
            onSubmit={setValueSort}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>
        {isLoading == true ? (
          <ActivityIndicator
            color={'blue'}
            size={'large'}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 300,
            }}
          />
        ) : (
          <View>
            {/* <Text>{data.length}</Text> */}
              <View
                style={{
                  width: '100%',
                  margin: 10,
                }}>
                <FlatList
                  nestedScrollEnabled={true}
                  keyExtractor={item => item._id.toString()}
                  showsVerticalScrollIndicator={false}
                  data={data} 
                  renderItem={({item}) => (
                    <Item isDisableUser={isDisableUser} data={item} check={check} setCheck={setCheck}/>
                  )}
                />
                         
                         <Pagination
                          totalPages={totalPage>0?totalPage:10}
                          currentPage={page} 
                          onPageChange={setPage}
                          maxVisiblePages={4}
                      />       
                    
                      
              </View>
            
          </View>
        )}
      </ScrollView>
    );
  };
  
  export default ActivateUserScreen;
  