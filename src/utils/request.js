import axios from 'axios'
import { message } from 'antd';

// create an axios instance
const service = axios.create({
    // 开发环境
    baseURL: process.env.NODE_ENV === 'development' ? 'http://192.168.0.61:8082' : 'http://69.171.69.13:3001', // api的base_url
    timeout: 20000, // request timeout
    transformRequest:[
        function(data,headers){
          headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        }
      ]
})

// request interceptor
service.interceptors.request.use(config => {
    config.data = config.data ? config.data : {}
    return config
}, error => {
    Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
    response => {
        const data = response.data;
        if (data.code === 400) {
            message.error(data.msg);
            // router.replace({ path: '/' })
            return Promise.reject(data)
        }
        return data;
    },
    error => {
        return Promise.reject(error)
    })

service.defaults.withCredentials = true
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default service



