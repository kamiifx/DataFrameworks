import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'kron-ui',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements-bundle',
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
