import { DealerApi } from '@/http-client/dealer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
const server = setupServer(
  // Describe the requests to mock.
  rest.post('*/dealer-login', async (req, res, ctx) => {
    const { dealer_id } = await req.json();
    if (dealer_id == 'John') {
      return res(
        ctx.json({
          dealer_id: 'John'
        })
      );
    } else {
      return res(
        // Send a valid HTTP status code
        ctx.status(403),
        // And a response body, if necessary
        ctx.json({
          errorMessage: `User "${dealer_id}" not found`
        })
      );
    }
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

describe('Given the client class and some mock data', () => {
  const api = DealerApi.getInstance();
  api.setBaseUrl('http://127.0.0.1');
  describe('When calling /dealer-login', () => {
    test('Then the corresponding username and id should be returned if token is provided', async () => {
      const result = await api.login('John');
      expect(result.data.dealer_id).toEqual('John');
    });
    test('And error with message user not found should be returned if providing the wrong username', async () => {
      const result = await api.login('Doe');
      expect(result.status).toEqual(403);
      expect(result.error.errorMessage).toEqual('User "Doe" not found');
    });
  });
});
