declare module MNetWord {
  export interface ReqRes<T> {
    code: number;
    data: T;
    msg: string;
  }

  export interface ReqParams<K = unknown, D = unknown> {
    url: string;
    method?: "POST" | "GET"; 
    data?: K;
    config?: D;
  }
}
