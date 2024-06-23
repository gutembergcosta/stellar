import { createRouter, createWebHistory } from 'vue-router';

const pasta = process.env.VUE_APP_PASTA;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/paginas/HomePage.vue"),
  },
  {
    path: '/megaform',
    name: 'MegaForm',
    component: () => import("@/paginas/MegaForm.vue"),
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import("@/paginas/auth/LoginPage.vue"),
  },
  {
    path: '/item',
    name: 'Item',
    children: [
      {
        path: '/item/lista',
        component: () => import("@/paginas/item/ItemList.vue"),
        name: 'Itens',
      },
      {
        path: '/item/novo',
        component: () => import("@/paginas/item/ItemForm.vue"),
        name: 'Adicionar novo Item',
      },
      {
        path: '/item/editar/:id',
        component: () => import("@/paginas/item/ItemForm.vue"),
        name: 'Editar Item',
      }
    ]
  },
  {
    path: '/usuarios',
    name: 'Users',
    children: [
      {
        path: '/usuarios/lista',
        component: () => import("@/paginas/users/UserList.vue"),
        name: 'Usuários',
      },
      {
        path: '/usuarios/novo',
        component: () => import("@/paginas/users/UserForm.vue"),
        name: 'Adicionar novo usuários',
      },
      {
        path: '/usuarios/editar/:id',
        component: () => import("@/paginas/users/UserForm.vue"),
        name: 'Editar usuários',
      },
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
