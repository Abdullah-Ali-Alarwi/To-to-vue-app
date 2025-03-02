import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",  
      component: () => import("../view/Home.vue"),
    },
    {
      path: "/about", 
      name: "about",  
      component: () => import("../view/About.vue"),
    },
    {
      path: "/ourservices",  
      name: "ourservices",  
      component: () => import("../view/OurServiesPage.vue"),
    },
    {
      path: "/contactus",  
      name: "contactus",  
      component: () => import("../view/contactus.vue"),
    },
    {
      path: "/healthcareservies",  
      name: "healthcareservies",  
      component: () => import("../view/healthcareservies.vue"),
    }
  ],
});

export default router;
