import { Router } from 'express';
import helloController from './hello/hello.controller';

const api = Router().use(helloController);
const router: Router = Router().use('/api', api);

export default router;
