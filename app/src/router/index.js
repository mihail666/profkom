import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('@/pages/homePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { layout: 'main' },
    component: () => import('@/pages/aboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
