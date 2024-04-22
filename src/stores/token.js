import {defineStore} from "pinia";
import {ref} from "vue";

/*
    defineStore参数描述：
        第一个参数：给状态起名，具有唯一性
        第二个参数：函数，可以把定义该状态中拥有的内容
    defineStore返回值描述：
        返回的是一个函数，将来可以调用该函数，得到第二个参数中返回的内容
*/
/**
 * token
 */
export const useTokenStore = defineStore('token',() =>{
    // 定义一个ref，用来存储token
    const token = ref('')
    // 定义一个方法，用来设置token
    const setToken = (newToken) => {
        token.value = newToken
    }
    // 定义一个方法，用来移出token
    const removeToken = () => {
        token.value = ''
    }
    // 返回需要暴露的内容
    return {
        token,
        setToken,
        removeToken
    }
},
    // 参数持久化插件
    {
        persist:true
    }
)




















