import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/view/Home.vue';
import DataPage from '@/view/DataPage.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/DataPage',
      name: 'Data',
      component: DataPage,
    },
  ],
});

export default router;
