import { FetchResponse } from '@/http-client/fetchhelper';
import { PitbossApi } from '@/http-client/pitboss';
import { ClientOpt, LoginResponse, PitbossClient } from '@/types/type';
import HostClient from './core';

export class PitbossHostClient extends HostClient implements PitbossClient {
  protected declare apiClient: PitbossApi;
  constructor(opt: ClientOpt) {
    super(opt);
  }
  protected initApiClient() {
    this.apiClient = PitbossApi.getInstance();
  }
  async login(username: string, password: string): Promise<FetchResponse<LoginResponse>> {
    return this.apiClient.login(username, password);
  }
}
