import { createRouter as createRouterNative, createWebHistory } from 'vue-router';

export function createRouter(route, baseUrl) {
  return createRouterNative({
    history: createWebHistory(baseUrl),
    routes: [route],
  });
}