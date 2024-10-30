import { AxiosRequestConfig } from 'axios';

import axiosInstance from './service';

/** 请依据 axiosInstance 看情况修改 */
export const GET = <T = any, P = Record<string, any>>(
  url: string,
  params?: P,
  config?: AxiosRequestConfig
): Promise<IResponse<T>> => {
  return axiosInstance<IResponse<T>>({
    method: 'GET',
    url,
    params,
    ...config
  })
    .then((res) => res?.data)
    .catch((e) => e);
};

export const POST = <T = any, P = Record<string, any>>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig
): Promise<IResponse<T>> => {
  return axiosInstance<IResponse<T>>({
    method: 'POST',
    url,
    data,
    ...config
  })
    .then((res) => res?.data)
    .catch((e) => e);
};
