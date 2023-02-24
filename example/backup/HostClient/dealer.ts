import { DealerApi } from '../http-client/dealer';
import { FetchResponse } from '../http-client/fetchhelper';
import { ClientOpt, DealerClient, GeneralResponse, LoginResponse } from '../types/type';
import HostClient from './core';

export class DealerHostClient extends HostClient implements DealerClient {
  protected declare apiClient: DealerApi;
  constructor(opt: ClientOpt) {
    super(opt);
  }
  protected initApiClient() {
    this.apiClient = DealerApi.getInstance();
  }
  public async login(dealer_id: string): Promise<FetchResponse<LoginResponse>> {
    return this.apiClient.login(dealer_id);
  }
  public async callPitboss(): Promise<FetchResponse<GeneralResponse>> {
    return this.apiClient.callPitboss();
  }
}
