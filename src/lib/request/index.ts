import { AxiosKit } from "@x-industry/x-ts-utils";
import qs from "qs";

import axios from "axios";

const axiosKit = new AxiosKit.AxiosKitCore()
  .create(
    axios,
    {
      baseURL: "http://localhost:3000",
    },
    qs
  )
  .useRequestInterceptors(
    (config) => {
      // 请求相关数据, 你可以处理 config 中 headers、data 相关数据, 例如在这里传递 Token 自定义响应头
      return config;
    },
    (error) => {
      // 请求错误的拦截, 做你想做的
      return error;
    }
  )
  .useResponseInterceptors(
    (response) => {
      // 响应相关数据, 你可以在这里全局存储响应头的 Token 字段 (response.headers['authorization'])
      return response;
    },
    (error) => {
      // 响应错误的拦截, 做你想做的
      return error;
    }
  )
  .useStatusInterceptors(({ response, resolve }) => {
    // 服务器端私有状态码的拦截, 控制你的响应使用以不同的 Promise 回调、全局的错误提示等等 (这里主要是你业务级的处理)
    resolve(response.data);
  })
  .useLoading(
    () => {
      // 控制你的 Loading 开启
    },
    () => {
      // 控制你的 Loading 关闭
    }
  );

// 为了简便的使用函数, 你可以使用绑定上下文到导出函数
export const request = axiosKit.request.bind(axiosKit);
