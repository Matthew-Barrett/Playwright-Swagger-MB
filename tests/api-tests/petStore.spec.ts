import { test, expect, request, APIRequestContext } from '@playwright/test';
import { PetstoreAPI } from '../../test/model/API/petstoreApi';
import UrlProperties from '../../test/model/locators/UrlProperties';

  test.describe('Petstore API Tests', () => {
    let reqContext: APIRequestContext;
    let api: PetstoreAPI;
  
    test.beforeEach(async () => {
      reqContext = await request.newContext();
      api = new PetstoreAPI(reqContext);
    });

  test('Add a pet then verify response body', async ({request}) => {
    const petData = {
        id: 9090,
        name: 'NewDog',
        category: { id: 1, name: 'Dog' },
        photoUrls: [],
        tags: [{ id: 1, name: 'blonde' }],
        status: 'available',
      };
    const addResponse = await api.addPet(petData);

    console.log('Raw response:', await addResponse.text());
    const addResponseBody = await addResponse.json();

    expect(addResponseBody).toMatchObject({
      id: 9090,
      name: 'NewDog',
      category: { id: 1, name: 'Dog' },
      photoUrls: [],
      tags: [{ id: 1, name: 'blonde' }],
      status: 'available',
    });

    const getResponse = await api.getPetById(9090);
    const getResponseBody = await getResponse.json();

    expect(getResponseBody.id).toBe(9090);
    expect(getResponseBody.name).toBe('NewDog');
    expect(getResponseBody.status).toBe('available');

  });

  test('Delete a pet by id', async ({request}) => {
    await api.deletePet(9090);
    const deleteResponse = await api.getPetById(9090);
    expect(deleteResponse.status()).toBe(404); 
  });
});


