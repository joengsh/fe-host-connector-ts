import { DealerApi } from '@/http-client/dealer';
import { FetchResponse } from '@/http-client/fetchhelper';
import { ClientOpt, DealerClient, GeneralResponse, LoginResponse } from '@/types/type';
import MockHostClient from './core';
import { sleep } from '@/utils/sleep';

export class MockDealerHostClient extends MockHostClient implements DealerClient {
  constructor(opt: ClientOpt) {
    super(opt);
  }
  public async login(dealer_id: string): Promise<FetchResponse<LoginResponse>> {
    await sleep(100);
    const result = {
      status: 200,
      statusText: 'OK',
      ok: true,
      url: 'https://localhost/dealer-login',
      data: {
        dealer_id: dealer_id,
        token: '123456',
        mq_username: 'mq_username',
        mq_password: 'mq_password'
      }
    };
    return result;
  }
  public async callPitboss(): Promise<FetchResponse<GeneralResponse>> {
    await sleep(100);
    const result = {
      status: 200,
      statusText: 'OK',
      ok: true,
      url: 'https://localhost/dealer-call-pitboss',
      data: {
        success: 1
      }
    };
    return result;
  }
}
