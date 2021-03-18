import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'Home'}
  },
  {
    path: '/dashboard',
    name: 'Home',
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/pages/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'login',
      requiresVisitor: true
    },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'login',
      requiresVisitor: true
    },
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/dashboard/create',
    name: 'CreatePage',
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
    },
    component: () => import('@/views/pages/CreatePage.vue')
  },
  {
    path: '/dashboard/:url',
    name: 'PageEdit',
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
    },
    component: () => import('@/views/pages/PageEdit.vue')
  },
  {
    path: '/dashboard/:url/statistics',
    name: 'PageStatistics',
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
    },
    component: () => import('@/views/pages/PageStatistics.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
    },
    component: () => import('@/views/Settings.vue')
  },
  {
    path: '/domains',
    name: 'Domains',
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
    },
    component: () => import('@/views/Domains.vue')
  },
  {
    path: '/templates',
    name: 'Templates',
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
    },
    component: () => import('@/views/DesignTemplate.vue')
  },
  // User PAGES
  {
    path: '/q/id',
    name: 'UserStart',
    meta: {
      layout: 'user',
    },
    component: () => import('@/views/q/UserStart.vue')
  },
  {
    path: '/q/id/checkout',
    name: 'UserInst',
    meta: {
      layout: 'user',
    },
    component: () => import('@/views/q/UserInst.vue')
  },
  {
    path: '/q/id/good',
    name: 'UserUspech',
    meta: {
      layout: 'user',
    },
    component: () => import('@/views/q/UserUspech.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
