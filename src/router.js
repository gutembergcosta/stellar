import { createRouter, createWebHistory } from 'vue-router';
import MegaForm from '@/paginas/MegaForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MegaForm,
  },
  {
    path: '/megaform',
    name: 'MegaForm',
    component: MegaForm,
  },
  // Adicione suas rotas aqui
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
});

export default router;
