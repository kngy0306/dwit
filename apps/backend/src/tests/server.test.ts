import supertest from 'supertest';
import { server } from '../server';

test('health check returns 200', async () => {
  await supertest(server())
    .get('/status')
    .expect(200)
    .then((res) => {
      expect(res.ok).toBe(true);
    });
});
