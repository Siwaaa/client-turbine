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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
