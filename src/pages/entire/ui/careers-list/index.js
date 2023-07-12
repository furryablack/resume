import { defineAsyncComponent } from 'vue';

export const CareersList = defineAsyncComponent(() => import('./careers-list.vue'));