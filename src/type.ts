export type Connector = {
  connect: (opt: ConnectOpt, callback: ConnectCallbackFn) => void;
  reconnect: () => void;
  subscribe: (event: string, callback: EventCallbackFn) => void;
  unsubscribe: (event: string) => void;
  isConnected: boolean;
};

export type ConnectOpt = {};

export type ConnectCallbackFn = (res: ConnectInfo) => void;

export type ConnectInfo = {};

export type EventCallbackFn = (data: any) => void;
