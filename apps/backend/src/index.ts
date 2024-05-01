import { json, urlencoded } from 'body-parser';
import express, { type Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/routes';

const app = express();
app
  .disable('x-powered-by')
  .use(morgan('dev'))
  .use(urlencoded({ extended: true }))
  .use(json())
  .use(cors())
  .use(routes);

app.get('/status', (_, res) => {
  return res.json({ ok: true });
});

const port = process.env.PORT || 5001;
const name = 'dwit';

app.listen(port, () => {
  console.log(`api running on ${port}: from ${name}`);
});
