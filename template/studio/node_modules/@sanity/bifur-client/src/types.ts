import {Observable} from 'rxjs'

export type RequestMethod = 'query' | 'mutate' | 'presence_rollcall' | 'presence_announce' | 'presence_disconnect'
export type SubscribeMethods = 'presence' | 'listen'

export type RequestParams = Record<string, any>

export type JSONRpcMessage<T> = {
  jsonrpc: string
  id: string
  method: string
  params: RequestParams
  result: T
}

export interface BifurClient {
  heartbeats: Observable<Date>
  request: <T>(
    method: RequestMethod | SubscribeMethods,
    params?: RequestParams,
  ) => Observable<T>
}
