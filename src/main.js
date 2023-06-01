import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import HelloWorld from "./components/HelloWorld.vue"
import {
    createRouter,
    createWebHashHistory   , 
} from 'vue-router'

import Index from "~/pages/Index.vue"

const routes = [
{
    path:"/",
    component: Index
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
const app = createApp(App)


// app.use(router)
app.use(ElementPlus)

// import 'virtual:windi.css'

app.mount('#app')