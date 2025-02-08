import { test, expect, request, APIRequestContext } from '@playwright/test';
import { PetstoreAPI } from '../../test/model/API/petstoreApi';
import UrlProperties from '../../test/model/locators/UrlProperties';

    /* new version */
  /* old version starts
  test.describe('Petstore API Tests', () => {
    let reqContext: APIRequestContext;
    let api: PetstoreAPI;
  
    test.beforeEach(async () => {
      reqContext = await request.newContext();
      api = new PetstoreAPI(reqContext);
    });

    test('Add a pet, verify response, retrieve and delete it', async () => {
      const petData = {
        id: 123456,
        name: 'Fluffy',
        category: { id: 1, name: 'Dog' },
        photoUrls: ['https://example.com/fluffy.jpg'],
        tags: [{ id: 1, name: 'cute' }],
        status: 'available',
      };
  
      // ✅ Add Pet & Validate Response
      const addResponse = await api.addPet(petData);
      expect(addResponse.status()).toBe(200);
      const addResponseBody = await addResponse.json();
      expect(addResponseBody).toMatchObject(petData);
  
      // ✅ Get Pet & Validate Response
      const getResponse = await api.getPetById(123456);
      expect(getResponse.status()).toBe(200);
      const getResponseBody = await getResponse.json();
      expect(getResponseBody).toMatchObject(petData);
  
      // ✅ Delete Pet & Validate Deletion
      await api.deletePet(123456);
      const deleteResponse = await api.getPetById(123456);
      expect(deleteResponse.status()).toBe(404); // Should return 404 since pet is deleted
    });
  });

  old version end */
  /* New Version end */

  test.describe('Petstore API Tests', () => {
    let reqContext: APIRequestContext;
    let api: PetstoreAPI;
  
    test.beforeEach(async () => {
      reqContext = await request.newContext();
      api = new PetstoreAPI(reqContext);
    });

  test('Add a pet, verify response body, retrieve and validate, then delete', async ({request}) => {
    const petData = {
        id: 9090,
        name: 'Fluffy',
        category: { id: 1, name: 'Dog' },
        photoUrls: [],
        tags: [{ id: 1, name: 'cute' }],
        status: 'available',
      };
    const addResponse = await api.addPet(petData);

    console.log('Raw response:', await addResponse.text());
    const addResponseBody = await addResponse.json();

    expect(addResponseBody).toMatchObject({
      id: 9090,
      name: 'Fluffy',
      category: { id: 1, name: 'Dog' },
      photoUrls: [],
      tags: [{ id: 1, name: 'cute' }],
      status: 'available',
    });

    const getResponse = await api.getPetById(9090);
    const getResponseBody = await getResponse.json();

    expect(getResponseBody.id).toBe(9090);
    expect(getResponseBody.name).toBe('Fluffy');
    expect(getResponseBody.status).toBe('available');

    /*await api.deletePet(9090);
    const deleteResponse = await api.getPetById(9090);
    expect(deleteResponse.status()).toBe(404); // Should return 404 since pet is */
  });
});
