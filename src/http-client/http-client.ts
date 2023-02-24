import { FetchHelper } from './fetchhelper';

abstract class HttpClient {
  protected readonly instance: FetchHelper;

  public constructor(baseURL: string) {
    this.instance = FetchHelper.create({
      baseURL
    });
  }
}

export default HttpClient;
