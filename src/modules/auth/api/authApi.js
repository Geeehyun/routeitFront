import axios from "@/config/axios.js";

const signInApi = (email, password) => {
    return axios.post('/api/user/signin', { email, password })
};

const refreshTokenApi = (refreshToken) => {
    return axios.post('/api/user/refresh', { refreshToken })
};

export { signInApi, refreshTokenApi };