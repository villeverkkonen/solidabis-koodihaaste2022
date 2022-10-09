import {
    afterAll,
    afterEach,
    beforeAll,
  } from 'vitest';
  import { fetch } from 'cross-fetch';
  
  import { server } from './utils';
  
  global.fetch = fetch;
  
  beforeAll(() => server.listen({ onUnhandledRequest: `error` }));
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());