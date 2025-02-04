import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about', // المسار هنا بين علامات اقتباس
      name: 'About', // الاسم يجب أن يكون بين علامات اقتباس
      component: () => import('../view/About.vue') // استخدام طريقة الاستيراد الصحيحة
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../view/contact.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../view/protofilo.vue')
    }
  ]
});

export default router;
