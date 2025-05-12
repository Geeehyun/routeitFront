import axios from "@/config/axios.js";

const signInApi = (userId, password) => {
    return axios.post('/api/user/public/signin', { userId, password })
};

const refreshTokenApi = (refreshToken) => {
    return axios.post('/api/user/refresh', { refreshToken })
};

export { signInApi, refreshTokenApi };