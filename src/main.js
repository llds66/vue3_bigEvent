import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {createPinia} from 'pinia'
import {createPersistedState}  from "pinia-persistedstate-plugin";

const pinia = createPinia()
const persist = createPersistedState()
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.scss'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
pinia.use(persist)
app.mount('#app')
