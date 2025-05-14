const SECRET_VALUE = 'SECRET_VALUE';
process.env.AUTH_SECRET_KEY = SECRET_VALUE;

import request from "supertest";
import app from "../../app"
import { secretHeaderName } from "../../../../shared/types/consts";
import { RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_MESSAGE } from "../../consts";

describe('Rate Limiter', () => {
  it('should block requests after exceeding the limit', async () => {
    // Send requests up to the limit
    for (let i = 0; i < RATE_LIMIT_MAX_REQUESTS; i++) {
      await request(app)
        .get('/api/whois/example.com')
        .set(secretHeaderName, SECRET_VALUE);
    }
    // The next request should be rate limited
    const response = await request(app)
      .get('/api/whois/example.com')
      .set(secretHeaderName, SECRET_VALUE);
    expect(response.status).toBe(429);
    expect(response.text).toContain(RATE_LIMIT_MESSAGE);
  });
});

