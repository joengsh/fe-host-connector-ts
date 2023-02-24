import { LoginResponse } from '../types/type';
import { ApiCore } from './core';

export class PitbossApi extends ApiCore {
  protected static classInstance?: PitbossApi;

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new PitbossApi();
    }

    return this.classInstance;
  }

  public login = (username: string, password: string) =>
    this.instance.post<LoginResponse>('/pitboss-login', { username, password });
  public logout = () => this.instance.post('/pitboss-logout');
}
