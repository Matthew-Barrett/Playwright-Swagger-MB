import { test, expect, request, APIRequestContext } from '@playwright/test';
import { PetstoreAPI } from '../../test/model/API/petstoreApi';
import { petSchema } from '../../test/model/API/SchemaValidator';
import Ajv from 'ajv';

  test.describe('Petstore API Tests', () => {
    let reqContext: APIRequestContext;
    let api: PetstoreAPI;
  
    test.beforeEach(async () => {
      reqContext = await request.newContext();
      api = new PetstoreAPI(reqContext);
    });

  test('Add a pet then verify response body', async ({request}) => {
    const petData = {
        id: 9091,
        name: 'NewDog',
        category: { id: 1, name: 'Dog' },
        photoUrls: [],
        tags: [{ id: 1, name: 'blonde' }],
        status: 'available',
      };

    const addResponse = await api.addPet(petData);
    const addResponseBody = await addResponse.json();
    console.log('Raw response:', await addResponse.text());
    console.log('Pretty JSON Response:', JSON.stringify(addResponseBody, null, 2));
    

    expect(addResponseBody).toMatchObject({
      id: 9091,
      name: 'NewDog',
      category: { id: 1, name: 'Dog' },
      photoUrls: [],
      tags: [{ id: 1, name: 'blonde' }],
      status: 'available',
    });

    const getResponse = await api.getPetById(9091);
    const getResponseBody = await getResponse.json();

    expect(getResponseBody.id).toBe(9091);
    expect(getResponseBody.name).toBe('NewDog');
    expect(getResponseBody.status).toBe('available');

  });

 test('Update a pet then verify response body', async ({request}) => {
    const petData = {
        id: 9091,
        name: 'NewDog - UpdateName',
        category: { id: 1, name: 'Dog' },
        photoUrls: [],
        tags: [{ id: 1, name: 'blonde' }],
        status: 'available',
      };
      
    const addResponse = await api.updatePet(petData);
    console.log('Raw response:', await addResponse.text());
    const addResponseBody = await addResponse.json();

    expect(addResponseBody).toMatchObject({
      id: 9091,
      name: 'NewDog - UpdateName',
      category: { id: 1, name: 'Dog' },
      photoUrls: [],
      tags: [{ id: 1, name: 'blonde' }],
      status: 'available',
    });

    const getResponse = await api.getPetById(9091);
    const getResponseBody = await getResponse.json();

    expect(getResponseBody.id).toBe(9091);
    expect(getResponseBody.name).toBe('NewDog - UpdateName');
    expect(getResponseBody.status).toBe('available');

     const responseBody = await getResponse.json();
    
        const ajvInstance = new Ajv();
        const validate = ajvInstance.compile(petSchema);
        const isValid = validate(responseBody);
    
        if (!isValid) {
          console.error('Schema Validation Errors:', validate.errors);
        }
        expect(isValid).toBeTruthy();

  });




 /* test('Delete a pet by id', async ({request}) => {
    await api.deletePet(9090);
    const deleteResponse = await api.getPetById(9090);
    expect(deleteResponse.status()).toBe(404); 
  });*/
});


