import type { ConnectCallbackFn, ConnectOpt, Client, EventCallbackFn, InitRes, ClientOpt } from '@/type';

export default class MockHostClient implements Client {
  constructor(opt: ClientOpt) {}
  init: (callback: (data: InitRes) => void) => void;
  connect: (opt: ConnectOpt, callback: ConnectCallbackFn) => void;
  reconnect: () => void;
  subscribe: (event: string, callback: EventCallbackFn) => void;
  unsubscribe: (event: string) => void;
  isConnected: boolean;
}
