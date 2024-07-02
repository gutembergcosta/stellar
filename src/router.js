import { createRouter, createWebHistory } from 'vue-router';

const pasta = process.env.VUE_APP_PASTA;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/paginas/home/HomePage.vue"),
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
    children: [
      {
        path: '/item/lista',
        component: () => import("@/paginas/item/ItemList.vue"),
        name: 'ItemList',
      },
      {
        path: '/item/novo',
        component: () => import("@/paginas/item/ItemForm.vue"),
        name: 'ItemAdd',
      },
      {
        path: '/item/editar/:id',
        component: () => import("@/paginas/item/ItemForm.vue"),
        name: 'ItemEdit',
      }
    ]
  },
  {
    path: '/usuarios',
    component: () => import("@/paginas/users/UserMain.vue"),
    name: 'UserList',
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
