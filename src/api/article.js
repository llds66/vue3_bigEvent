import request from '@/utils/request.js'
import { useTokenStore } from '../stores/token.js'
/*
* 1. 获取文章分类
* */
export const articleCategoryListService = () => {
    //获取token状态
    const tokenStore = useTokenStore()
  return request.get('/category',{
        headers:{
            Authorization: tokenStore.token
        }
  })
}
