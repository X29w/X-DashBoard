import service, { ReqParams } from ".";

/**
 * @name 用于发送post请求的函数
 * @example 
 * const res = await apiPost<SomeTypes>({
        url: "http://localhost:3000/",
        data: {
          name: "test",
        },
      });
 * @template T 返回的数据类型
 * @param {ReqParams} data
 * @return {Promise<T>}
 */
export const apiPost = async <T = unknown>({
  url,
  data,
  ...config
}: ReqParams) => {
  const res = await service.post<T>(url, data, config);
  return res.data;
};

/**
 * @name 用于发送get请求的函数
 * @example
 *  const res = await apiGet({
        url: "http://localhost:3000/folder",
        params: {
          id: 1,
        },
      });
 * @template T
 * @param {ReqParams} data
 * @return {*}  {Promise<T>}
 */
export const apiGet = async <T = unknown>({ url, ...data }: ReqParams) => {
  const res = await service.get<T>(url, data);
  return res.data;
};