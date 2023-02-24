import { rest } from 'msw';

/**
 * /dealer-login mock handler, accepting "123456" as token and "test" as username
 */
const dealerLogin = rest.post('*/dealer-login', async (req, res, ctx) => {
  const { username } = await req.json();
  if (username == 'test') {
    return res(
      ctx.json({
        username: 'test',
        id: 1,
        token: '123456',
        mq_username: 'mq-test',
        mq_password: 'mq-pw'
      })
    );
  } else {
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: `User "${username}" not found`
      })
    );
  }
});

export const handlers = [dealerLogin];
