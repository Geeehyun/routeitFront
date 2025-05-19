import axios from "@/config/axios.js";

const signInApi = (userId, password) => {
    return axios.post('/api/user/public/signin', { userId, password })
};

const signUpApi = (data) => {
    return axios.post('/api/user/public/signup', data)
};

const refreshTokenApi = (userId, refreshToken) => {
    return axios.post('/api/token/public/refresh', {userId, refreshToken});
};

export { signInApi, signUpApi, refreshTokenApi };