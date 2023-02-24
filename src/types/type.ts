import { FetchResponse } from '@/http-client/fetchhelper';

export type Client = {
  connect: (opt: ConnectOpt, callback: ConnectCallbackFn) => void;
  reconnect: () => void;
  subscribe: (event: string, callback: EventCallbackFn) => void;
  unsubscribe: (event: string) => void;
  isConnected: boolean;
};

export type DealerClient = {
  login(dealer_id: string): Promise<FetchResponse<LoginResponse>>;
  callPitboss(): Promise<FetchResponse<GeneralResponse>>;
} & Client;

export type PitbossClient = {
  login(username: string, password: string): Promise<FetchResponse<LoginResponse>>;
} & Client;

export type LoginResponse = {
  username?: string;
  dealer_id?: string;
  token: string;
  mq_username: string;
  mq_password: string;
};

export type GeneralResponse = {
  success: number;
};

export type ClientOpt = {
  connectTimeout: number;
  endpoint: string; // dev
  greencard: string;
  id: string; // H002, H003
  path: string;
  // logEnabled: true,
  rabbitmqport?: string;
  rabbitmqprotocol?: string;
  rabbitmqvirtualhost?: string;
  redcard: string;
};

export type Error = {
  error: string;
  code: number;
  id: string;
};

export type ConnectRes =
  | {
      hostid: string; // host id of the host
      sessionid: string; // session id of the connected host
      status: number; // the enums represent the status of the host
      // video1url: string; // the video url of the table camera
      hostinfo: {
        hostid: string; // Unique host id, e.g. H002
        tableid: string; // Unique table id, e.g. T-BAC-002
        type: number; // Type of the game e.g. BAS, BAC....
      };
      tableinfo: {
        tableid: string; // Unique table id, e.g. T-BAC-002
        hostid: string; // Unique host id, e.g. H002
        gametype: number; // Type of the game e.g. BAS, BAC....
        name: string; // Name of the table
      };
      iscallingpitboss: boolean;
      dealerinfo: {
        // Current logined dealer info else null
        staffid: string; // unique id of the dealer
        nickname: string; // nickname of the dealer e.g. "Mary"
        profileimagefilename: string; // url of the profile picture of the dealer
      };
      artistinfo: {
        // Current logined dealer info else null
        staffid: string; // unique id of the dealer
        nickname: string; // nickname of the dealer e.g. "Mary"
        profileimagefilename: string; // url of the profile picture of the dealer
      }; // Current artist info else null
      pitbossinfo: {
        staffid: string;
        nickname: string;
        profileimagefilename: string;
        nfcid: string;
        role: string;
        tableList: string[];
      };
      gamestatus: any;
    }
  | Error;

export type ConnectOpt = {
  force: 'true' | 'false';
  session: string;
};

export type ConnectCallbackFn = (res: ConnectInfo) => void;

export type ConnectInfo = {};

export type EventCallbackFn = (data: any) => void;
