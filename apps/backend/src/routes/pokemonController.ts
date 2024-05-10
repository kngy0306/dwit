import { Router } from 'express';
import { pikachu } from '../assets/api/pokemon/pikachu';

const router: Router = Router();

router.get('/pikachu', (_, res) => {
  return res.json(pikachu);
});

export default router;
