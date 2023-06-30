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
  },
  {
    path: '/decisions',
    name: 'decisions',
    meta: { layout: 'main' },
    component: () => import('@/pages/decisionsPage.vue')
  },
  {
    path: '/documents',
    name: 'documents',
    meta: { layout: 'main' },
    component: () => import('@/pages/documentsPage.vue')
  },
  {
    path: '/news',
    name: 'news',
    meta: { layout: 'main' },
    component: () => import('@/pages/newsPage.vue')
  },
  {
    path: '/chill',
    name: 'chill',
    meta: { layout: 'main' },
    component: () => import('@/pages/chillPage.vue')
  },
  {
    path: '/detailNew/:id',
    name: 'detailNew',
    meta: { layout: 'main' },
    component: () => import('@/pages/detailNew.vue')
  },
  {
    path: '/activity',
    name: 'activity',
    meta: { layout: 'main' },
    component: () => import('@/pages/activityPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
