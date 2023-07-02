import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('@/pages/homePage.vue')
  },
  {
    path: '/aboutPage1',
    name: 'aboutPage1',
    meta: { layout: 'main' },
    component: () => import('@/pages/aboutsPages/aboutPage1.vue')
  },
  {
    path: '/aboutPage2',
    name: 'aboutPage2',
    meta: { layout: 'main' },
    component: () => import('@/pages/aboutsPages/aboutPage2.vue')
  },
  {
    path: '/decisions',
    name: 'decisions',
    meta: { layout: 'main' },
    component: () => import('@/pages/decisionsPage.vue')
  },
  {
    path: '/documents1',
    name: 'documents1',
    meta: { layout: 'main' },
    component: () => import('@/pages/documentsPages/documentsPage1.vue')
  },
  {
    path: '/documents2',
    name: 'documents2',
    meta: { layout: 'main' },
    component: () => import('@/pages/documentsPages/documentsPage2.vue')
  },
  {
    path: '/documents3',
    name: 'documents3',
    meta: { layout: 'main' },
    component: () => import('@/pages/documentsPages/documentsPage3.vue')
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
