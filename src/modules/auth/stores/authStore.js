import {defineStore} from "pinia";
import {refreshTokenApi, signInApi} from "@/modules/auth/api/authApi.js";
import { isTokenValid } from "@/modules/auth/composables/useToken.js";

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
                const user = res.data.userId;
                const accessToken = res.data.accessToken;
                const refreshToken = res.data.refreshToken;

                this.setTokens(user, accessToken, refreshToken);

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
            if (!this.user || !this.accessToken || !this.refreshToken) {
                const user = sessionStorage.getItem('user');
                const accessToken = sessionStorage.getItem('accessToken');
                const refreshToken = sessionStorage.getItem('refreshToken');
                if (user || accessToken || refreshToken) {
                    console.log('[auth.reloadToken] Reloaded token from sessionStorage');
                    this.user = user;
                    this.accessToken = accessToken;
                    this.refreshToken = refreshToken;
                }
            }
        },
        async refreshAccessToken() {
            try {
                const user = this.user;
                const token = this.refreshToken;
                if(!user || !token) return false;

                const res = await refreshTokenApi(user, token);
                const newUser = res.data.userId;
                const newAccessToken = res.data.accessToken;
                const newRefreshToken = res.data.refreshToken;

                this.setTokens(newUser, newAccessToken, newRefreshToken);

                return true;
            } catch (e) {
                console.error('[auth.refreshToken] error :', e);
                return false;
            }
        },
        setTokens(user, accessToken, refreshToken) {
            if(accessToken.indexOf('Bearer') > -1) {
                accessToken = accessToken.substring(7);
            }
            if(refreshToken.indexOf('Bearer') > -1) {
                refreshToken = refreshToken.substring(7);
            }
            this.user = user;
            this.accessToken = accessToken;
            this.refreshToken = refreshToken;
            sessionStorage.setItem('user', user);
            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('refreshToken', refreshToken);
        },
        clearTokens() {
            this.accessToken = null;
            this.refreshToken = null;
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('accessToken');
            sessionStorage.removeItem('refreshToken');
        },
        async getToken() {
            if (!isTokenValid(this.accessToken)) {
                this.clearTokens();
                // await this.refreshAccessToken();
            }
            return {
                accessToken: this.accessToken,
                refreshToken: this.refreshToken
            };
        },
    }
});

export { useAuthStore };