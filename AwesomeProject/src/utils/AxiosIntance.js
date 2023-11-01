import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AxiosIntance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        // baseURL: 'https://fpoly-hcm.herokuapp.com/api/'
        baseURL:
        //  'http://192.168.2.5:3000/Api' // Tin
         'http://192.168.1.2:3000/Api'//Nhat
        
        //  'http://172.16.84.139:3000/Api'// O truong  

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