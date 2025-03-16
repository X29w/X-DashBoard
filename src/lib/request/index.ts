import { CODES } from "@/constant/config";
import axios from "axios";
import type {
  AxiosInstance as Instance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";

export type ReqConfig<T = unknown> = InternalAxiosRequestConfig<T>;
export type ResPonse<T = unknown> = AxiosResponse<MNetWord.ReqRes<T>>;
export type ReqParams<T = unknown> = MNetWord.ReqParams<T, AxiosRequestConfig>;

export interface AxiosInstance extends Instance {
  (config: AxiosRequestConfig): Promise<ResPonse>;
  (url: string, config?: AxiosRequestConfig): Promise<ResPonse>;
}

const commonHeader = (config: ReqConfig) => {
  if (config.headers) {
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  }
  config.baseURL = AXIOS_BASE_URL;
  return config;
};

const options: CreateAxiosDefaults = {
  baseURL: AXIOS_BASE_URL,
  timeout: 30000,
  withCredentials: true,
};
const service = axios.create(options) as AxiosInstance;

service.interceptors.request.use(
  (config: ReqConfig) => commonHeader(config),
  (err) => Promise.reject(err)
);

service.interceptors.response.use(
  (res) => {
    // 禁止更改数据结构 只能更改请求状态!!!
    const code = res.data.code;
    if (code !== 200) {
      return Promise.reject(res);
    }
    type Code = keyof typeof CODES;
    if (code[code as Code])
      return Promise.reject({
        ...res,
        data: {
          ...res.data,
          msg: code[code as Code],
        },
      });
    return res;
  },
  (err) => Promise.reject(err)
);


export default service;
