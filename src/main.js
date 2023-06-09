import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router  from './router/main'
import "../src/assets/global.css"



const app = createApp(App)

app.use(router)
app.use(ElementPlus,{size:"default"})

import 'virtual:windi.css'

app.mount('#app')