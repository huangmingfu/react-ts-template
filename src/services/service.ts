import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// 创建axios实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 请求的默认前缀 只要是发出去请求就会 默认带上这个前缀
  timeout: 10000, // 请求超时时间：10s
  headers: { 'Content-Type': 'application/json' }, // 设置默认请求头
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在请求里加入token认证信息
    // const token = getToken() // localStorage.getItem('token')
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`
    // }
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  },
);

// 响应拦截器即异常处理
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    // const code = res.data.code;
    // switch (code) {
    //   case 200:
    //     return res.data;
    //   case 401:
    //     /** 登录失效逻辑... */
    //     return res.data || {};
    //   default:
    //     return res.data || {};
    // }
    return res; // res.data
  },
  (err: AxiosError) => {
    // 如果接口请求报错时，也可以直接返回对象，如return { message: onErrorReason(error.message) }，这样使用async/await就不需要加try/catch
    // onErrorReason(err.message) // 做一些全局的错误提示，可用ui库的message提示组件
    return Promise.resolve(err);
  },
);

/** 解析http层面请求异常原因 */
// function onErrorReason(message: string): string {
//   if (message.includes('Network Error')) {
//     return '网络异常，请检查网络情况!';
//   }
//   if (message.includes('timeout')) {
//     return '请求超时，请重试!';
//   }
//   return '服务异常,请重试!';
// }

// 导出实例
export default axiosInstance;
