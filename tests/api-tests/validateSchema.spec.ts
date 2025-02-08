import { test, expect, request, APIRequestContext } from '@playwright/test';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import PetstoreAPI from '../api/PetstoreAPI';
import { authConfig } from '../config/authConfig';
import { petSchema } from '../schemas/petSchema';

test.describe('Petstore API Tests with Schema Validation', () => {
  let reqContext: APIRequestContext;
  let api: PetstoreAPI;
  let ajv: Ajv;

  test.beforeEach(async () => {
    reqContext = await request.newContext();
    api = new PetstoreAPI(reqContext, authConfig.authToken);

    // ✅ Initialize AJV validator
    ajv = new Ajv();
    addFormats(ajv);
  });

  test('Validate JSON schema of GET /pet/{petId}', async () => {
    // ✅ 1. Add a pet
    const petData = {
      id: 123456,
      name: 'Fluffy',
      category: { id: 1, name: 'Dog' },
      photoUrls: ['https://example.com/fluffy.jpg'],
      tags: [{ id: 1, name: 'cute' }],
      status: 'available',
    };
    await api.addPet(petData);

    // ✅ 2. Fetch the pet
    const getResponse = await api.getPetById(123456);
    expect(getResponse.status()).toBe(200);

    // ✅ 3. Parse JSON Response
    const responseBody = await getResponse.json();

    // ✅ 4. Validate JSON Schema
    const validate = ajv.compile(petSchema);
    const isValid = validate(responseBody);

    if (!isValid) {
      console.error('Schema Validation Errors:', validate.errors);
    }

    expect(isValid).toBeTruthy(); // ✅ Schema should be valid
  });
});