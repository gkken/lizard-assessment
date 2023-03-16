import { createServer } from 'miragejs';

import data from './data.json';

export function makeServer({ environment = 'test' }: { environment: string }) {
  return createServer({
    environment,
    routes() {
      this.namespace = 'api';

      this.get('/posts', () => {
        return data;
      });
    },
  });
}
