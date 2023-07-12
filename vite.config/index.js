import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { Lib as ViteLib } from './lib';
import { PATHS } from './paths';

export default defineConfig((init) => {
  ViteLib.loadViteEnv(init.mode);
  const PROD = init.mode === 'production';

  return {
    root: PATHS.PROJECT_ROOT,
    publicDir: 'static',
    base: process.env.GH_PAGES === 'true' ? '/resume/' : '',

    resolve: {
      alias: ViteLib.makeAliases(),
    },

    build: {
      target: 'es2021',
      minify: PROD ? 'esbuild' : undefined,
      assetsDir: 'app',
      outDir: PATHS.OUTPUT_DIR,

      rollupOptions: {
        input: {
          entry: PATHS.APP_INDEX_HTML,
        },

        output: {
          manualChunks: undefined,
        },
      },
    },

    server: {
      port: Number(process.env.VITE_SERVER_PORT),
      host: process.env.VITE_SERVER_HOST,
      base: process.env.VITE_SERVER_BASE,
    },

    plugins: [
      vue(),

      createHtmlPlugin({
        minify: PROD && Boolean(process.env.VITE_APP_USE_MINIFY),

        inject: {
          data: {
            title: process.env.VITE_APP_TITLE,
            app: `<script type="module" src="${PATHS.APP_INDEX_ENTRY}"></script>`,
          },
        },
      }),
    ],
  };
});
