import { Config } from '@stencil/core';
//import {sass} from 'stencil/sass';

export const config: Config = {
  namespace: 'kron-ui-framework',
  globalStyle: 'src/global/global.css',
    plugins: [
      //sass()
    ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
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
