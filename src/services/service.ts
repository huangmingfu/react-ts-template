import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// 创建axios实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // 请求的默认前缀 只要是发出去请求就会 默认带上这个前缀
  timeout: 10000 // 请求超时时间：10s
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (res: InternalAxiosRequestConfig) => {
    // 在请求里加入token认证信息
    // const token = getToken()//localStorage.getItem('token')获取的
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`
    // }
    return res;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

// 响应拦截器即异常处理
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res; //res.data
  },
  (err: AxiosError) => {
    return Promise.resolve(err);
  }
);

// 导出实例
export default axiosInstance;
