import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AxiosIntance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        // baseURL: 'https://fpoly-hcm.herokuapp.com/api/'
        baseURL: 
        //  'http://192.168.2.5:3000/Api' // Tin
        //  'http://192.168.1.8:3000/Api'//Nhat

        // 'http://172.16.117.18:3000/Api'// O truong  

        // 'http://192.168.1.237:3000/api' // Quy
         
         'http://192.168.1.108:3000/api' // Quy

        // 'http://192.168.1.190:3000/api' // Quy
    });
    axiosInstance.interceptors.request.use(
        async config => {
            const token = await AsyncStorage.getItem('token');
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );
    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    ); // callback
    return axiosInstance;
}

export default AxiosIntance;