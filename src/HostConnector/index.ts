import type { ConnectCallbackFn, ConnectOpt, Connector, EventCallbackFn } from '@/type';

export default class HostConnector implements Connector {
  constructor() {}
  connect: (opt: ConnectOpt, callback: ConnectCallbackFn) => void;
  reconnect: () => void;
  subscribe: (event: string, callback: EventCallbackFn) => void;
  unsubscribe: (event: string) => void;
  isConnected: boolean;
}
