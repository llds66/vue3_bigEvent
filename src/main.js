// Vue 3 Framework and Main Component
import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'

import { createPinia } from 'pinia'
import { createPersistedState } from "pinia-persistedstate-plugin"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/dist/locale/zh-cn.js'

import './assets/main.scss'

const pinia = createPinia()
pinia.use(createPersistedState())

const app = createApp(App)

app.use(ElementPlus, { locale })
app.use(router)
app.use(pinia)

app.mount('#app')