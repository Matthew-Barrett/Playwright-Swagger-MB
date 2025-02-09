import { APIRequestContext, expect, APIResponse } from '@playwright/test';
import { UrlProperties } from '../locators/UrlProperties.ts';

import { BaseAPI } from './baseApi';


export class PetstoreAPI extends BaseAPI {

  
  async addPet(petData: object): Promise<APIResponse> {
    try{
    return this.post(`${UrlProperties.API_BASE_URL}/pet`, petData);
    } catch(error) {
      console.log('Error adding pet:', error);
      throw error;
  }
}

  async getPetById(petId: number): Promise<APIResponse> {
    try {
    return this.get(`${UrlProperties.API_BASE_URL}/pet/${petId}`);
    } catch(error) {
      console.log('Error getting pet by ID:', error);
      throw error;
  }
}

  async updatePet(petData: object): Promise<APIResponse> {
    try {
    return this.put(`${UrlProperties.API_BASE_URL}/pet`, petData);
    } catch(error) {
      console.log('Error updating pet:', error);
      throw error;
  }
}

  async deletePet(petId: number): Promise<APIResponse> {
    try {
    return this.delete(`${UrlProperties.API_BASE_URL}/pet/${petId}`);
    } catch(error) {
      console.log('Error deleting pet:', error);
      throw error;
  }
}
}