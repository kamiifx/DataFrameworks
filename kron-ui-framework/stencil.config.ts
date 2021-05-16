import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'kron-ui',
  globalStyle: 'src/global/global.css',
  buildEs5:true,
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
