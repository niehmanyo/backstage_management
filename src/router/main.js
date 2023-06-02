
import {
    createRouter,
    createWebHashHistory    
} from 'vue-router'

import Index from "~/pages/Index.vue"
import about from "~/pages/about.vue";
import login from "~/pages/Login.vue"
import NotFound from "~/pages/404.vue";

const routes = [
{
    path:"/index",
    component: Index
},
{
    path:"/about",
    component: about
},
{
    path:"/login",
    component: login
},
{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router