import HttpClient from './http-client';
// import { InternalAxiosRequestConfig } from 'axios';

export class ApiCore extends HttpClient {
  protected _token: string;

  protected static classInstance?: ApiCore;

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new ApiCore();
    }

    return this.classInstance;
  }

  protected constructor() {
    super('/');
    // this._initializeRequestInterceptor();
  }

  // private _initializeRequestInterceptor = () => {
  //   this.instance.interceptors.request.use(this._handleRequest, this._handleError);
  // };

  // private _handleRequest = (config: InternalAxiosRequestConfig) => {
  //   config.headers['Authorization'] = `Bearer ${this._token}`;

  //   return config;
  // };

  public setBaseUrl = (baseUrl: string) => this.instance.setBaseURL(baseUrl);
  public setToken = (token: string) => this.instance.setToken(token);

  public version = () => this.instance.get('/version');
}
