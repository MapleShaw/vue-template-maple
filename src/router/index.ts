import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/about-team.html',
      name: 'about-team',
      component: () => import('../views/AboutTeam.vue')
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('../views/Price.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/Product.vue')
    },
  ]
})

export default router
