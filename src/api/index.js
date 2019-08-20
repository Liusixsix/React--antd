import request from '../utils/request'
import qs from 'qs'

export const login = (params) => {
    return request({
        url: '/shijing/user/userLogin',
        method: 'get',
        params
    })
}

export const gettable = (data)=>{
    return request({
        url:'/shijing/order/getOrderList',
        method:'get',
        data
    })
}