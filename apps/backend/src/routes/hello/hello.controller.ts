import { Router } from 'express';

const router: Router = Router();

router.get('/hello', (_, res) => {
  return res.json({ message: 'hello' });
});

export default router;
