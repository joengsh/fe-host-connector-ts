import { ApiCore } from '@/http-client/core';
import type { ConnectCallbackFn, ConnectOpt, Client, EventCallbackFn, ClientOpt } from '@/types/type';

export default class HostClient implements Client {
  protected apiClient: ApiCore;
  constructor(opt: ClientOpt) {
    this.initApiClient();
    this.apiClient.setBaseUrl(opt.endpoint);
  }
  protected initApiClient() {
    this.apiClient = ApiCore.getInstance();
  }

  connect: (opt: ConnectOpt, callback: ConnectCallbackFn) => void;
  reconnect: () => void;
  subscribe: (event: string, callback: EventCallbackFn) => void;
  unsubscribe: (event: string) => void;
  isConnected: boolean;
}
