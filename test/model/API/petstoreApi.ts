import { APIRequestContext, expect, APIResponse } from '@playwright/test';
import { UrlProperties } from '../locators/UrlProperties.ts';

import { BaseAPI } from './baseApi';


export class PetstoreAPI extends BaseAPI {

  
  async addPet(petData: object): Promise<APIResponse> {
    return this.post(`${UrlProperties.API_BASE_URL}/pet`, petData);
  }

  async getPetById(petId: number): Promise<APIResponse> {
    return this.get(`${UrlProperties.API_BASE_URL}/pet/${petId}`);
  }

  async deletePet(petId: number): Promise<APIResponse> {
    return this.delete(`${UrlProperties.API_BASE_URL}/pet/${petId}`);
  }
}