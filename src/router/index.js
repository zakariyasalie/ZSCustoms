 /* eslint-disable */
 import { createRouter, createWebHistory } from 'vue-router'
 const routes = [
   {
     path: '/',
     name: 'home',
     component: () => import('@/views/HomeView.vue')
   },
   {
     path: '/about',
     name: 'about',
     component: () => import('@/views/AboutView')
   },
   {
     path: '/admin',
     name: 'admin',
     component: () => import('@/views/AdminView')
   },
   {
     path: '/products',
     name: 'products',
     component: () => import('@/views/ProductsView.vue')
   },
   {
     path: '/product/:id',
     name: 'product',
     component: () => import('@/views/ProductsView.vue')
   },
   {
     path: '/contact',
     name: 'contact',
     component: () => import('@/views/ContactView.vue')
   },
 ]
 const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
 })
 export default router