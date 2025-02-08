import { APIRequestContext, APIResponse } from '@playwright/test';

export class BaseAPI {
  protected request: APIRequestContext;
  protected authToken: string;

  constructor(request: APIRequestContext, authToken?: string) {
    this.request = request;
    this.authToken = authToken || '';
  }

  private getHeaders() {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${this.authToken}`,
    };
  }

  async get(endpoint: string): Promise<APIResponse> {
    const response = await this.request.get(endpoint, { headers: { Accept: 'application/json' } });
    return response;
  }

  async post(endpoint: string, data: object): Promise<APIResponse> {
    const response = await this.request.post(endpoint, {
      headers: { 'Content-Type': 'application/json' },
      data,
    });
    return response;
  }

  async put(endpoint: string, data: object): Promise<APIResponse> {
    const response = await this.request.post(endpoint, {
      headers: { 'Content-Type': 'application/json' },
      data,
    });
    return response;
  }

  async delete(endpoint: string): Promise<APIResponse> {
    const response = await this.request.delete(endpoint);
    return response;
  }
}
