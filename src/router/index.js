import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from "@/views/Base/Admin";
import Frontend from "@/views/Base/Frontend";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Frontend',
        component: Frontend
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
