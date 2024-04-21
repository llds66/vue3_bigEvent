import { createRouter,createWebHistory} from "vue-router";

import LoginVue from '@/views/Login.vue'
import Layout from "@/views/Layout.vue";

const routes = [
    { path:'/login',component:LoginVue},
    { path:'/',component:Layout}
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;