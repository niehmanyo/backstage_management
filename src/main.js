import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {
    createrRouter,
    createWebHashHistory    
} from 'vue-router'
import HelloWorld from "./components/HelloWorld.vue"
import r from "./router/main"
const app = createApp(App)



const routes = [
    {
        path:"/",component: HelloWorld
    }
]

const router = createrRouter({
    history:createWebHashHistory(),
    routes
})
app.use(r)

app.use(ElementPlus)

import 'virtual:windi.css'

app.mount('#app')