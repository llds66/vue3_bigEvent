import {ElMessage} from "element-plus";

import axios from 'axios';
import {useTokenStore} from "@/stores/token.js";
import router from "@/router/index.js";
//定义一个变量,记录公共的前缀  ,  baseURL
const baseURL = '/api';
const instance = axios.create({baseURL})
// 添加请求拦截器： 请求之前的操作
instance.interceptors.request.use(
    (config) =>{
        let tokenStore = useTokenStore()
        // 判断是否有token，有则放在请求头中
        if(tokenStore.token){
            config.headers.Authorization = tokenStore.token
        }
        return config
    },
    (err) =>{
        Promise.reject(err)
    }
)
//添加响应拦截器
instance.interceptors.response.use(
    result=>{
        if(result.data.code === 0){
            return result.data;
        }
        ElMessage.error(result.data.message || '服务异常')
        return Promise.reject(result.data);
    },
    err=>{
        if(err.response.status === 401){
            ElMessage.error('请先登录！')
            router.push('/')
        }else {
            ElMessage.error('服务异常');

        }
        return Promise.reject(err);//异步的状态转化成失败的状态
    }
)

export default instance;