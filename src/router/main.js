
import {
    createrRouter,
    createWebHashHistory    
} from 'vue-router'

const routes = []

const router = createrRouter({
    history:createWebHashHistory(),
    routes
})

export default router