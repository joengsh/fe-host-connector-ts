import { RequestReferrerPolicy } from 'msw';
// import fetch, { Headers, Response } from 'node-fetch';

export class FetchHelper {
  public static create(config: HelperConfig) {
    return new FetchHelper(config);
  }

  protected _baseURL = '';
  protected _authorizationToken = '';
  protected _timeout = 10000;
  protected _timeoutMessage = 'Request Timeout';
  protected _retryCount = 3;

  // prepend the baseURL to the url if it is a relative path
  protected getURL(url) {
    const r = new RegExp('^(?:[a-z+]+:)?//', 'i');
    if (r.test(url)) return url;
    else return `${this._baseURL}${url}`;
  }

  private constructor(config: HelperConfig) {
    this._baseURL = config.baseURL ?? '';
    this._timeout = config.timeout ?? 10000;
    this._timeoutMessage = config.timeoutErrorMessage ?? this._timeoutMessage;
    this._retryCount = config.retry ?? 3;
  }

  public setBaseURL = (baseUrl: string) => (this._baseURL = baseUrl);
  public setToken = (token: string) => (this._authorizationToken = token);
  public async get<D = any, E = any>(url: string, config: RequestConfig = {}): Promise<FetchResponse<D, E>> {
    const headers = config.headers ?? {};
    if (this._authorizationToken) {
      headers['Authorization'] = `Bearer ${this._authorizationToken}`;
    }
    const result = await fetch(this.getURL(url), {
      method: 'GET',
      headers,
      ...config
    });
    const response = result as FetchResponse;
    if (result.ok) {
      response.data = await result.json();
    } else {
      response.error = await result.json();
    }
    return response;
  }
  public async post<D = any, E = any>(
    url: string,
    data?: any,
    config: RequestConfig = {}
  ): Promise<FetchResponse<D, E>> {
    console.log('post');
    const headers = config.headers ?? {};
    if (this._authorizationToken) {
      headers['Authorization'] = `Bearer ${this._authorizationToken}`;
    }
    if (data) {
      headers['Content-Type'] = 'application/json';
      const body = JSON.stringify(data);
      config.body = body;
    }
    console.log(config);
    const result = await fetch(this.getURL(url), {
      method: 'POST',
      headers,
      ...config
    });
    console.log(result);
    const response = result as FetchResponse;
    if (result.ok) {
      response.data = await result.json();
    } else {
      response.error = await result.json();
    }
    return response;
  }
}

export type HelperConfig = {
  baseURL?: string;
  timeout?: number;
  timeoutErrorMessage?: string;
  retry?: number;
};

export interface RequestConfig {
  body?: string;
  mode?: RequestMode;
  cache?: RequestCache;
  credential?: RequestCredentials;
  headers?: Headers;
  redirect?: RequestRedirect;
  referrerPolicy?: RequestReferrerPolicy;
}

export interface FetchResponse<D = any, E = any> {
  status: number;
  statusText: string;
  ok: boolean;
  url: string;
  data?: D;
  error?: E;
}

export enum HttpStatusCode {
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,
  EarlyHints = 103,
  Ok = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  ImUsed = 226,
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  Unused = 306,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  PayloadTooLarge = 413,
  UriTooLong = 414,
  UnsupportedMediaType = 415,
  RangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  ImATeapot = 418,
  MisdirectedRequest = 421,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  TooEarly = 425,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HttpVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511
}
