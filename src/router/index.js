import { createRouter, createWebHistory } from 'vue-router';
import Create from '../views/Create.vue';
import Details from '../views/Details.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
