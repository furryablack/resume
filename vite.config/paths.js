import { Lib as ProjectLib } from '../lib';

const PATHS = {};
PATHS.PROJECT_ROOT = ProjectLib.IO.resolveRealPath('./');
PATHS.APP_ENVIRONMENT = ProjectLib.IO.normalizePath(`${PATHS.PROJECT_ROOT}/environment`);
PATHS.APP_SOURCE = ProjectLib.IO.normalizePath(`${PATHS.PROJECT_ROOT}/src`);
PATHS.APP_INDEX_ENTRY = `./src/app/main.js`;
PATHS.APP_INDEX_HTML = ProjectLib.IO.normalizePath(`${PATHS.PROJECT_ROOT}/index.html`);
PATHS.OUTPUT_DIR = './docs';

export { PATHS };
