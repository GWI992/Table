import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/administrator',
      name: 'administrator',
      component: () => import('../views/AdministratorView.vue')
    },
    {
      path: '/administrator/table/create',
      name: 'administrator create table',
      component: () => import('../components/administrator/Create.vue')
    },
    {
      path: '/manager',
      name: 'manager',
      component: () => import('../views/ManagerView.vue')
    },
  ]
})

export default router
