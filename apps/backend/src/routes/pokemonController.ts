import { Router } from 'express';

const router: Router = Router();

router.get('/pikachu', (_, res) => {
  return res.json({ name: 'pikachu' });
});

export default router;
