import { Router } from 'express';
import pokemonController from './pokemonController';

const api = Router().use(pokemonController);
const router: Router = Router().use('/pokemon', api);

export default router;
