import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AxiosIntance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({


        //  baseURL: 'http://192.168.1.231:3000/Api'
        // baseURL: 
        //'https://fpoly-hcm.herokuapp.com/api/'
        // baseURL:
        //  'http://192.168.2.5:3000/Api' // Tin
        //  'http://172.16.102.134:3000/Api'//Nhat
        // baseURL: 'http://172.16.99.247:3000/Api'
        //  'http://192.168.2.5:3000/Api' // Tin
        //  'http://192.168.2.5:3000/Api'//Nhat
        // baseURL:
        // //  'http://192.168.2.5:3000/Api' // Tin
        // //  'http://192.168.1.81:3000/Api'//Nhat
        //  'http://192.168.1.81:3000/api'//Thuan192.168.6.19

         baseURL: 'http://192.168.1.5:3000/Api'


        // baseURL: 'http://192.168.1.231:3000/Api'


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