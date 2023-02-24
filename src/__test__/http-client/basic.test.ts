import { ApiCore } from '@/http-client/core';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
const server = setupServer(
  // Describe the requests to mock.
  rest.get('*/version', async (req, res, ctx) => {
    return res(
      ctx.status(401),
      // And a response body, if necessary
      ctx.json({
        errorMessage: `Not Authorized`
      })
    );
  })
);

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});

describe('Given the client class and the base url', () => {
  const api = ApiCore.getInstance();
  api.setBaseUrl('http://test.domain.net');
  describe('When fetch a get request', () => {
    test('Then the base url should be correct', async () => {
      const result = await api.version();
      expect(result.url).toEqual('http://test.domain.net/version');
    });
  });
});
