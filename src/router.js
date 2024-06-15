import { createRouter, createWebHistory } from 'vue-router';
import MegaForm from '@/paginas/MegaForm.vue';
import HomePage from '@/paginas/HomePage.vue';
import ItemForm from '@/paginas/item/ItemForm.vue';
import ItemList from '@/paginas/item/ItemList.vue';
import LoginPage from '@/paginas/auth/LoginPage.vue';

const pasta = process.env.VUE_APP_PASTA;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
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
  history: createWebHistory(pasta),
  base: pasta,
  routes,
});

router.beforeEach(async (to) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = localStorage.getItem('authToken');

  if (authRequired && !auth) {
    return '/login';
  }
});

export default router;
