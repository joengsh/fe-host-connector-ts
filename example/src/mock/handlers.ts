import { rest } from 'msw';

/**
 * /dealer-login mock handler, accepting "123456" as token and "test" as username
 */
const dealerLogin = rest.post('*/dealer-login', async (req, res, ctx) => {
  const { dealer_id } = await req.json();
  if (dealer_id == 'test') {
    return res(
      ctx.json({
        username: 'test',
        dealer_id: 'test',
        token: '123456',
        mq_username: 'mq-test',
        mq_password: 'mq-pw'
      })
    );
  } else {
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: `User "${dealer_id}" not found`
      })
    );
  }
});

const pitbossLogin = rest.post('*/pitboss-login', async (req, res, ctx) => {
  const { username, password } = await req.json();
  if (username == 'test' && password == '123') {
    return res(
      ctx.json({
        username: 'test',
        dealer_id: 'test',
        token: '123456',
        mq_username: 'mq-test',
        mq_password: 'mq-pw'
      })
    );
  } else {
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: `User "${username}" not found or wrong password`
      })
    );
  }
});

export const handlers = [dealerLogin, pitbossLogin];
