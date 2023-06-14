
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Index from "~/pages/Index.vue"
import about from "~/pages/about.vue";
import login from "~/pages/Login.vue"
import NotFound from "~/pages/404.vue";
import MainPage from "~/pages/backstage.vue"
import Register from "~/pages/register.vue"


const routes = [
    {
        path: "/index",
        component: Index
    },
    {
        path: "/about",
        component: about
    },
    {
        path: "/",
        component: login
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/dashboard', component: MainPage },
    { path: '/register', component: Register }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router