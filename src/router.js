import { createRouter, createWebHistory } from 'vue-router';
import MegaForm from '@/paginas/MegaForm.vue';
import ItemForm from '@/paginas/item/ItemForm.vue';
import ItemList from '@/paginas/item/ItemList.vue';

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
    path: '/item',
    name: 'Item',
    children: [
      {
        path: '/item/lista',
        component: ItemList
      },
      {
        path: '/item/novo',
        component: ItemForm
      },
      {
        path: '/item/editar/{id}',
        component: ItemForm
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
