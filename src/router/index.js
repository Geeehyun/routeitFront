// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/modules/home/views/HomeView.vue";
import {useAuthStore} from "@/modules/auth/stores/authStore.js";
import {jwtDecode} from "jwt-decode";
import {showAlert} from "@/composables/alert.js";

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/error/NotFoundView.vue'),
        meta: { layout: 'FullPageLayout'}
    },
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: () => import('@/modules/auth/views/SignInView.vue'),
        meta: { layout: 'FullPageLayout',  guestOnly: true}
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import('@/modules/auth/views/SignUpView.vue'),
        meta: { layout: 'FullPageLayout',  guestOnly: true}
    },
    {
        path: '/board',
        name: 'Board',
        component: () => import('@/modules/board/views/BoardView.vue'),
        //meta: {requiresAuth: true}
    },
    {
        path: '/board/write',
        name: 'PostWrite',
        component: () => import('@/modules/board/views/PostWriteView.vue'),
        meta: {requiresAuth: true}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    const auth = useAuthStore();
    const token = await auth.getToken();

    const isSignedIn = token.accessToken != null;

    if (to.meta.requiresAuth && !isSignedIn) {
        await showAlert().confirm('로그인이 필요한 화면입니다. 로그인 화면으로 이동하시겠습니까?')
            .then((res) => {
                if(res) {
                    auth.signOut();
                    router.push('/signin');
                }
            })
    } else if(to.meta.guestOnly && isSignedIn) {
        next('/');
    } else {
        next();
    }
})

export default router;
