import { StyleSheet, Text, View, FlatList } from 'react-native'
import Reactm, {useState, useContext, useEffect} from 'react'
import ProdsProcessOverviewItem from './ProdsProcessOverviewItem'
import AxiosIntance from '../../utils/AxiosIntance'
import { AppContext } from '../../utils/AppContext';
import { useNavigation } from '@react-navigation/native';

const ProdsProcessOverview = () => {
    const [data, setdata] = useState([])
    const [orderData, setorderData] = useState([])
    const appContextData = useContext(AppContext);
    const userID = appContextData.userID;
    const navigation = useNavigation();
    const [ProdsProcessOverviewChanged, setProdsProcessOverviewChanged] = useState(1)
    // console.log(">>>>> " + userID)
    useEffect(() => {
        (async () => {
            try {
                const response = await AxiosIntance().get(`/order/getOrderForSeller/${userID}`)
                setorderData(response);
                // console.log("ProdsProcessOverview - lấy dữ liệu: " + JSON.stringify(response));
            } catch (error) {
                console.log("ProdsProcessOverview: lỗi lấy dữ liệu: " + error);
            }
        })();
    }, [ProdsProcessOverviewChanged]);

    const handleNavigateToDetail = (orderDetailID) => {
        navigation.navigate("Product Process", {navigateData: orderDetailID})
    }

    const handleProdsProcessOverviewChange = () => {
        if (ProdsProcessOverviewChanged) {
            setProdsProcessOverviewChanged(false)
        } else {
            setProdsProcessOverviewChanged(true)
        }
    }

    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                data={orderData}
                renderItem={({ item }) => <ProdsProcessOverviewItem data={item} navigateToDetail={handleNavigateToDetail} prodsProcessOverviewChange={handleProdsProcessOverviewChange} />}
                keyExtractor={item => item.orderID} />
        </View>
    )
}

export default ProdsProcessOverview

const styles = StyleSheet.create({})