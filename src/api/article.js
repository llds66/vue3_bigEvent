import request from '@/utils/request.js'
/*
* 1. 获取文章分类
* */
export const articleCategoryListService = () => {
    //获取token状态
    return request.get('/category')
}
/*
* 2. 新增文章分类
* */
export const articleCategoryAddService = (categoryModel) =>{
    return request.post('category',categoryModel)
}