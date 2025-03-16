import service, { ReqParams } from ".";

export const apiPost = <T = unknown, K = unknown>(data: ReqParams<K>) => {
  return service.post<MNetWord.ReqRes<T>>(data.url, data.data, data.config);
};

export const apiGet = <T = unknown, K = unknown>(data: ReqParams<K>) => {
  return service.get<MNetWord.ReqRes<T>>(data.url, data.config);
};

apiGet({
    url: "/api/test",
    config: {
        
    }
})