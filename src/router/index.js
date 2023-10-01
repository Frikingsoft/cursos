// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/registro',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'registro',
        component: () => import( '@/views/Registro.vue'),
      },
    ],
  },
  {
    path: '/cursos/:curso',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'curso',
        component: () => import( '@/views/Paginas.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to,from,savedPosition) {
    // Si savedPosition es definido, la página volverá a esa posición
    if (savedPosition) {
      return savedPosition;
    } else {
      // De lo contrario, carga la página desde la parte superior
      return { top: 0 };
    }
  },
})


export default router
