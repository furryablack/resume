import { createApp as createVueApp } from 'vue';
import { Area } from './areas';
import { initWith } from './init-with';
import { RootFrame } from './root-frame';

export function createApp(params) {
  const app = createVueApp(RootFrame);
  app.config.performance = params.performance;

  const { router } = initWith.router({ 
    app, 
    area: Area, 
    baseUrl: params.baseUrl,
  });

  const isReady = router.isReady();
  const mount = app.mount;
  return { mount, isReady };
}

