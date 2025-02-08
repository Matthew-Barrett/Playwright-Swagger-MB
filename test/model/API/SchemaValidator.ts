export const petSchema = {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      category: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          name: { type: 'string' },
        },
        required: ['id', 'name'],
      },
      photoUrls: { type: 'array', items: { type: 'string' } },
      tags: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
          },
          required: ['id', 'name'],
        },
      },
      status: { type: 'string', enum: ['available', 'pending', 'sold'] },
    },
    required: ['id', 'name', 'status'], // ✅ Ensure required fields exist
  };