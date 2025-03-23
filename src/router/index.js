// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: () => import('@/modules/auth/views/SignInView.vue'),
        meta: { layout: 'FullPageLayout'}
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import('@/modules/auth/views/SignUpView.vue'),
        meta: { layout: 'FullPageLayout'}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
