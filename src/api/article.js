import request from '@/utils/request.js'
/*
* 1. 获取文章分类
* */
export const articleCategoryListService = () => {
    //获取token状态
    return request.get('/category')
}
