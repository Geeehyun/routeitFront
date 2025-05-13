// src/lib/axios.js
import axios from 'axios'
import {API_BASE_URL} from "./api.js";
import {useAuthStore} from "@/modules/auth/stores/authStore.js";
import {showAlert} from "@/composables/alert.js";
import { useRouter } from "vue-router";

const instance = axios.create({
    baseURL: API_BASE_URL, // API 기본 주소
    timeout: 5000, // 타임아웃 설정 (ms)
    headers: {
        'Content-Type': 'application/json',
    },
});

// 요청 인터셉터
instance.interceptors.request.use(
    async (config) => {
        const isPublicApi = config.url.includes('/public/');

        if(isPublicApi){
            return config; // 토큰 없이 접근 가능한 Api
        } else{
            const auth = useAuthStore();
            const token = await auth.getToken();

            config.headers.Authorization = `Bearer ${token.accessToken}`;
            // 토큰이나 공통 헤더 넣는 곳
            // 예: config.headers.Authorization = `Bearer ${yourToken}`
            return config;
        }
    },
    (error) => {
        return Promise.reject(error)
    }
)

let isRefreshing = false; // 토큰 재발급중 여부
let failedQueue = []; // 재요청 목록

function addFailedQueue(callback){
    failedQueue.push(callback);
}

// 응답 인터셉터
instance.interceptors.response.use(
    (response) => response.data, // 바로 data만 넘기게!
    async (error) => {
        const auth = useAuthStore();
        const router = useRouter();
        const originalRequest = error.config;

        // accessToken 만료 체크
        if(error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if(isRefreshing) {
                // 이미 토큰 재발급중이라면 큐에 추가 후 대기
                return new Promise((resolve) => {
                    addFailedQueue((newToken) => {
                        originalRequest.headers.Authorization = `Bearer ${newToken}`;
                        resolve(instance(originalRequest));
                    });
                });
            } else{
                isRefreshing = true;
            }

            try{
                const isSuccess = await auth.refreshAccessToken(); // 토큰 갱신

                if(isSuccess) {
                    // 대기 요청 처리
                    failedQueue.forEach((callback) => callback(auth.accessToken));
                    failedQueue = [];

                    // 원래 요청 처리
                    return instance(originalRequest);
                } else{
                    await showAlert().alert('토큰이 만료되었습니다.');
                    auth.signOut();
                    await router.push('/');
                    console.log('refreshToken 만료');
                    return Promise.reject(error);
                }
            } catch (e) {
                await showAlert().alert('토큰이 만료되었습니다.');
                console.log('token 재발급 error');
                return Promise.reject(e);
            } finally {
                isRefreshing = false;
            }
        }

        console.error('[Error]', error)
        return Promise.reject(error)
    }
)

export default instance
