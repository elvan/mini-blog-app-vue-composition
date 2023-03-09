import { createRouter, createWebHistory } from 'vue-router';
import Create from '../views/Create.vue';
import Details from '../views/Details.vue';
import Home from '../views/Home.vue';
import RealTime from '../views/RealTime.vue';
import Tag from '../views/Tag.vue';

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
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag,
  },
  {
    path: '/realtime',
    name: 'RealTime',
    component: RealTime,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
