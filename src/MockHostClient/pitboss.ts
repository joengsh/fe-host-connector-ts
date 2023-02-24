import { FetchResponse } from '@/http-client/fetchhelper';
import { PitbossApi } from '@/http-client/pitboss';
import { ClientOpt, LoginResponse, PitbossClient } from '@/types/type';
import MockHostClient from './core';
import { sleep } from '@/utils/sleep';

export class MockPitbossHostClient extends MockHostClient implements PitbossClient {
  constructor(opt: ClientOpt) {
    super(opt);
  }

  async login(username: string, password: string): Promise<FetchResponse<LoginResponse>> {
    await sleep(100);
    const result = {
      status: 200,
      statusText: 'OK',
      ok: true,
      url: 'https://localhost/dealer-login',
      data: {
        username: username,
        token: '123456',
        mq_username: 'mq_username',
        mq_password: 'mq_password'
      }
    };
    return result;
  }
}
