import axios from "axios";
// 封装get和post请求
export const get = (url, params, config) => {
    return axios.get(url, { params, ...config})
    .then((res) => {
        // console.log(res);
        return res.data;
    } );
}

export const post = (url, data, config) => {
    return axios.post(url, data, config);
}


