/* eslint-disable @typescript-eslint/no-explicit-any */

import { loadEnv as loadEnvNative } from 'vite';
import { Lib as ProjectLib } from '../lib';
import { PATHS } from './paths';

function makeAliases() {
  return ProjectLib.IO.getSubDirs(PATHS.APP_SOURCE).reduce(
    (acc, name) => ({
      ...acc,
      [`@${name}`]: `${ProjectLib.IO.resolvePath(PATHS.APP_SOURCE)}/${name}`,
    }), {},
  );
}

function loadViteEnv(mode) {
  process.env = {
    ...process.env,

    ...Object.entries(loadEnvNative(mode, PATHS.APP_ENVIRONMENT)).reduce((env, [key, value]) => ({
      ...env,
      [key]: value,
    }), {}),
  };
}

export const Lib = {
  loadViteEnv,
  makeAliases,
};
