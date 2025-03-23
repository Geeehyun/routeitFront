// src/lib/axios.js
import axios from 'axios'
import {API_BASE_URL} from "./api.js";

const instance = axios.create({
    baseURL: API_BASE_URL, // API 기본 주소
    timeout: 5000, // 타임아웃 설정 (ms)
    headers: {
        'Content-Type': 'application/json',
    },
})

// 요청 인터셉터
instance.interceptors.request.use(
    (config) => {
        // 토큰이나 공통 헤더 넣는 곳
        // 예: config.headers.Authorization = `Bearer ${yourToken}`
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 응답 인터셉터
instance.interceptors.response.use(
    (response) => response.data, // 바로 data만 넘기게!
    (error) => {
        console.error('[Error]', error)
        return Promise.reject(error)
    }
)

export default instance
