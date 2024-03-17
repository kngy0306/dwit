import { createServer } from './server';

const port = process.env.PORT || 5001;
const server = createServer();
const name = 'kona';

server.listen(port, () => {
  console.log(`api running on ${port}: from ${name}`);
});
