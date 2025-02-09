import { test, expect, request, APIRequestContext } from '@playwright/test';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { PetstoreAPI } from '../../test/model/API/petstoreApi';
import { petSchema } from '../../test/model/API/SchemaValidator';

test.describe('Petstore API Tests with Schema Validation', () => {
  let reqContext: APIRequestContext;
  let api: PetstoreAPI;
  let ajv: Ajv;

  test.beforeEach(async () => {
    reqContext = await request.newContext();
    api = new PetstoreAPI(reqContext);
    ajv = new Ajv();
    addFormats(ajv);
  });

  test('Validate JSON schema of GET /pet/{petId}', async () => {

    const petData = {
      id: 444,
      name: 'ValidateDog',
      category: { id: 1, name: 'Dog' },
      photoUrls: [],
      tags: [{ id: 1, name: 'blonde' }],
      status: 'available',
    };
    await api.addPet(petData);

    const getResponse = await api.getPetById(444);
    expect(getResponse.status()).toBe(200);

    const responseBody = await getResponse.json();
    const validate = ajv.compile(petSchema);
    const isValid = validate(responseBody);

    if (!isValid) {
      console.error('Schema Validation Errors:', validate.errors);
    }

    expect(isValid).toBeTruthy();
  });
});