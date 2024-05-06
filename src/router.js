import { createRouter, createWebHistory } from 'vue-router';
import MegaForm from '@/paginas/MegaForm.vue';
import ItemForm from '@/paginas/item/ItemForm.vue';
import ItemList from '@/paginas/item/ItemList.vue';
import LoginPage from '@/paginas/auth/LoginPage.vue';

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
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/item',
    name: 'Item',
    children: [
      {
        path: '/item/lista',
        component: ItemList,
        name: 'Itens',
      },
      {
        path: '/item/novo',
        component: ItemForm,
        name: 'Adicionar novo Item',
      },
      {
        path: '/item/editar/:id',
        component: ItemForm,
        name: 'Editar Item',
      }
    ]
  },
  // Adicione suas rotas aqui
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
});

export default router;
