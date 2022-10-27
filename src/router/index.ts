import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/mainPage'
  },
  {
    path: '/main',
    component: () => import('../views/main/mainPage.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/loginPage.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
