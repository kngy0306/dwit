import { server } from './server';

const port = process.env.PORT || 5001;
const name = 'dwit';

server().listen(port, () => {
  console.log(`api running on ${port}: from ${name}`);
});
