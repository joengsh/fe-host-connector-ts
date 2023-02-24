import { LoginResponse } from '../types/type';
import { ApiCore } from './core';

export class DealerApi extends ApiCore {
  protected static classInstance?: DealerApi;

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new DealerApi();
    }

    return this.classInstance;
  }

  public login = (dealer_id: string) => this.instance.post<LoginResponse>('/dealer-login', { dealer_id });
  public logout = () => this.instance.post('/dealer-logout');
  public callPitboss = () => this.instance.post('/dealer-call-pitboss');
}
