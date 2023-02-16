import type { ConnectCallbackFn, ConnectOpt, Client, EventCallbackFn, InitResponse } from '@/type';

export default class HostClient implements Client {
  constructor() {}
  init: (callback: (data: InitResponse) => void) => void;
  connect: (opt: ConnectOpt, callback: ConnectCallbackFn) => void;
  reconnect: () => void;
  subscribe: (event: string, callback: EventCallbackFn) => void;
  unsubscribe: (event: string) => void;
  isConnected: boolean;
}
