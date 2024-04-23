import { createRouter,createWebHistory} from "vue-router";
import LoginVue from '@/views/Login.vue'
import Layout from "@/views/Layout.vue";

import ArticleCategory from '@/views/article/ArticleCategory.vue'
import ArticleManage from '@/views/article/ArticleManage.vue'

import UserAvatar from '@/views/user/UserAvatar.vue'
import UserInfo from '@/views/user/UserInfo.vue'
import UserResetPassword from '@/views/user/UserResetPassword.vue'

const routes = [
    { path:'/login',component:LoginVue},
    {
        path:'/',
        component:Layout,
        redirect:'/article/manage',
    //     子路由
        children:[
            { path:'article/category',component:ArticleCategory},
            { path:'article/manage',component:ArticleManage},
            { path:'user/info',component:UserInfo},
            { path:'user/avatar',component:UserAvatar},
            { path:'user/password',component:UserResetPassword},
        ]
    }
]




const router = createRouter({
    history:createWebHistory(),
    routes
});

// 路由前置守卫(也可以用axios响应拦截器)
// import { useTokenStore } from "@/stores/token";
// router.beforeEach((to,from,next)=>{
// //     判断是否有token
//     const token = useTokenStore()
//     if(token.token){
//         next()
//     }else{
//         if(to.path === '/login'){
//             next()
//         }else{
//             next({path:'/login'})
//         }
//     }
// })
export default router;











