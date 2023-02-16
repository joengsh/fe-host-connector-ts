export type Client = {
  init: (callback: (data: InitResponse) => void) => void;
  connect: (opt: ConnectOpt, callback: ConnectCallbackFn) => void;
  reconnect: () => void;
  subscribe: (event: string, callback: EventCallbackFn) => void;
  unsubscribe: (event: string) => void;
  isConnected: boolean;
};

export type Error = {
  error: string;
  code: number;
};
export type InitResponse =
  | {
      gametype: [
        {
          id: string;
          name: string;
        }
      ];
    }
  | Error;

export type ConnectOpt = {};

export type ConnectCallbackFn = (res: ConnectInfo) => void;

export type ConnectInfo = {};

export type EventCallbackFn = (data: any) => void;
