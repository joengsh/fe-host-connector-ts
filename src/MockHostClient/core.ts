import type { ConnectCallbackFn, ConnectOpt, Client, EventCallbackFn, ClientOpt } from '@/types/type';

export default class MockHostClient implements Client {
  constructor(opt: ClientOpt) {}
  connect: (opt: ConnectOpt, callback: ConnectCallbackFn) => void;
  reconnect: () => void;
  subscribe: (event: string, callback: EventCallbackFn) => void;
  unsubscribe: (event: string) => void;
  isConnected: boolean;
}
