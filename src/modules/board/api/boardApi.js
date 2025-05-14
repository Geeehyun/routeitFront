import axios from "@/config/axios.js";

const postWriteApi = (data) => {
    return axios.post('/api/board/post/', data)
};


export { postWriteApi };