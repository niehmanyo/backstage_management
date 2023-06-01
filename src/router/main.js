
import {
    createrRouter,
    createWebHashHistory    
} from 'vue-router'

import Index from "../pages/Index.vue"

const routes = [
{
    path:"/",
    component: Index
}
]

const router = createrRouter({
    history:createWebHashHistory(),
    routes
})

export default router