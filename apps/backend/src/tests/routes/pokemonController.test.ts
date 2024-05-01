import supertest from 'supertest';
import { server } from '../../server';

describe('GET /pokemon/pikachu', () => {
  test('名前が取得できること', async () => {
    const res = await supertest(server()).get('/pokemon/pikachu');
    expect(res.body.name).toBe('pikachu');
  });
});
