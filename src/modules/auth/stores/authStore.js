import {defineStore} from "pinia";
import {refreshTokenApi, signInApi} from "@/modules/auth/api/authApi.js";
import { isTokenValid } from "@/modules/auth/composables/useToken.js";
import { jwtDecode } from 'jwt-decode'

const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        accessToken: null,
        refreshToken: null
    }),
    actions: {
        async signIn(userId, password) {
            try {
                const res = await signInApi(userId, password);
                const accessToken = res.data.accessToken;
                const refreshToken = res.data.refreshToken;

                this.setTokens(accessToken, refreshToken);

                return true;
            } catch (e) {
                console.error('[auth.signIn] error : ', e);
                return false;
            }
        },
        signOut() {
            this.user = null;
            this.clearTokens();
        },
        reloadToken() {
            if (!this.accessToken || !this.refreshToken) {
                const accessToken = sessionStorage.getItem('accessToken');
                const refreshToken = sessionStorage.getItem('refreshToken');
                if (accessToken || refreshToken) {
                    console.log('[auth.reloadToken] Reloaded token from sessionStorage');
                    this.accessToken = accessToken;
                    this.refreshToken = refreshToken;
                }
            }
        },
        async refreshAccessToken() {
            try {
                if(!this.accessToken){
                    return false;
                }
                const payload = jwtDecode(this.accessToken);
                const userId = payload.userId;
                const token = this.refreshToken;
                if(!token) return false;

                const res = await refreshTokenApi(userId, token);
                const newAccessToken = res.data.accessToken;
                const newRefreshToken = res.data.refreshToken;

                this.setTokens(newAccessToken, newRefreshToken);

                return true;
            } catch (e) {
                console.error('[auth.refreshToken] error :', e);
                return false;
            }
        },
        setTokens(accessToken, refreshToken) {
            if(accessToken.indexOf('Bearer') > -1) {
                accessToken = accessToken.substring(7);
            }
            if(refreshToken.indexOf('Bearer') > -1) {
                refreshToken = refreshToken.substring(7);
            }
            this.accessToken = accessToken;
            this.refreshToken = refreshToken;
            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('refreshToken', refreshToken);
        },
        clearTokens() {
            this.accessToken = null;
            this.refreshToken = null;
            sessionStorage.removeItem('accessToken');
            sessionStorage.removeItem('refreshToken');
        },
        async getToken(retry = true) {
            if (!isTokenValid(this.accessToken)) {
                if (retry) {
                    // 토큰 갱신 시도
                    await this.refreshAccessToken();

                    // 갱신 후 다시 getToken 호출 (재귀)
                    return this.getToken(false);
                } else {
                    // 갱신 후에도 실패하면 토큰 클리어
                    this.clearTokens();
                    return {
                        accessToken: null,
                        refreshToken: null
                    };
                }
            }
            // 토큰이 유효하면 반환
            return {
                accessToken: this.accessToken,
                refreshToken: this.refreshToken
            };
        },
    }
});

export { useAuthStore };