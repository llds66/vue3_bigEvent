import request from '@/utils/request.js'
// 一、文章分类
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
/*
* 3. 修改文章分类
* */
export const articleCategoryUpdateService = (categoryModel)=>{
    return request.put('/category',categoryModel)
}
/*
* 4. 修改文章分类
* */
export const articleCategoryDeleteService = (id)=>{
    // return request.delete('/category?id=' + id)
    return request.delete(`/category?id=${id}`)
}
//二、文章列表
/*
* 1. 获取文章列表(条件查询)
* */
export const articleListService = (params) => {
    return request.get('/article', { params: params })
}
/*
* 2. 添加文章
* */
export const articleAddService = (articleModel) => {
    return request.post('/article', articleModel )
}


















