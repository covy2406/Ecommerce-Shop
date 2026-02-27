import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      // component: () => import('../views/Login.vue'),
      component: () => import('@/views/auth/signIn.vue'),
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: () => import('@/components/product/ProductDetail.vue'),
    },
    {
      path: '/products/:id',
      name: 'product-edit',
      component: () => import('@/views/product/ProductUpsert.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
