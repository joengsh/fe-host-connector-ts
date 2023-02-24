import { DealerApi } from '@/http-client/dealer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
const server = setupServer(
  // Describe the requests to mock.
  rest.post('*/dealer-call-pitboss', async (req, res, ctx) => {
    const authorization = req.headers.get('authorization');
    if (authorization == 'Bearer 123456') {
      return res(
        ctx.json({
          success: 1
        })
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({
          errorMessage: `Not Authorized`
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
  describe('When calling /dealer-call-pitboss', () => {
    test('Then success: 1 should be returned if token is provided', async () => {
      api.setToken('123456');
      const result = await api.callPitboss();
      expect(result.data.success).toEqual(1);
    });
    test('And error code 401 should returned if missing token', async () => {
      api.setToken('');
      const result = await api.callPitboss();
      expect(result.status).toEqual(401);
      expect(result.error.errorMessage).toEqual('Not Authorized');
    });
  });
});
