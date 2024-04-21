import request from '@/utils/request.js'

/*
* 1. 获取文章分类
* */
export const articleCategoryListService = () => {
    return request({
        url: '/category',
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGFpbXMiOnsiaWQiOjUsInVzZXJuYW1lIjoiYWFhMDAzIn0sImV4cCI6MTcxMzY5NTI0OH0.iSTU6gXxG8ogerV9v-FYyE5Lo_ec8IWFnE8R5-CRQ-0'
        },
        method: 'get'
    })

  // return request.get('/category')
}
