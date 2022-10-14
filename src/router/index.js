import { createRouter, createWebHashHistory } from 'vue-router'
import Intro from '@/views/Intro.vue'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: () => import('@/views/ShoppingCart.vue')
  },
  {
    path: '/CardPractice',
    name: 'CardPractice',
    component: () => import('@/views/CardPractice.vue')
  },
  {
    path: '/PopUp',
    name: 'PopUp',
    component: () => import('@/views/PopUp.vue')
  },
  {
    path: '/Typing',
    name: 'Typing',
    component: () => import('@/views/Typing.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
