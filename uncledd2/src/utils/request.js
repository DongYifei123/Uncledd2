import axios from "axios";
// 封装get和post请求
export const get = (url, config) => {
    return axios.get();
}

export const post = (url, data, config) => {
    return axios.post(url, data, config);
}


