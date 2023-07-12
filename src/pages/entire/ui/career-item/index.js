import { defineAsyncComponent } from 'vue';

export const CareerItem = defineAsyncComponent(() => import('./career-item.vue'));