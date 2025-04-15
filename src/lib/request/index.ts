import { SERVER_ERROR_CODE_MAP } from "@/constant/config";
import axios from "axios";
import type {
  AxiosInstance as Instance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";

export type ReqConfig<T = unknown> = InternalAxiosRequestConfig<T>;
export type ResPonse<T = unknown> = AxiosResponse<MNetWork.Response<T>>;
export type ReqParams<T = unknown> = MNetWork.ReqParams<T> &
  Omit<AxiosRequestConfig, "url" | "data">;

export interface AxiosInstance extends Instance {
  (config: AxiosRequestConfig): Promise<ResPonse>;
  (url: string, config?: AxiosRequestConfig): Promise<ResPonse>;
}

const commonHeader = (config: ReqConfig) => {
  if (config.headers) {
    config.headers["Authorization"] = "Bearer " + "";
    config.headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
    config.headers["Pragma"] = "no-cache";
    config.headers["Expires"] = "0";
  }
  return config;
};

const options: CreateAxiosDefaults = {
  baseURL: AXIOS_BASE_URL,
};
const service = axios.create(options);

service.interceptors.request.use(
  (config: ReqConfig) => commonHeader(config),
  (err) => Promise.reject(err)
);

service.interceptors.response.use(
  (res) => {
    // 禁止更改数据结构 只能更改请求状态
    const code = res.data.code;
    type Code = keyof typeof SERVER_ERROR_CODE_MAP;
    if (SERVER_ERROR_CODE_MAP[code as Code])
      return Promise.reject({
        ...res,
        data: {
          ...res.data,
          msg: SERVER_ERROR_CODE_MAP[code as Code],
        },
      });
    return res;
  },
  (err) => Promise.reject(err)
);

export default service;