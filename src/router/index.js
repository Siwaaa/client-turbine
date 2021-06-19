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
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
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
    path: '/password-reset',
    name: 'Reset',
    meta: {
      layout: 'login',
      requiresVisitor: true
    },
    component: () => import('@/views/PasswordReset.vue')
  },
  {
    path: '/password-set',
    name: 'PasswordSet',
    meta: {
      layout: 'login',
      requiresVisitor: true
    },
    component: () => import('@/views/PasswordSet.vue')
  },
  {
    path: '/page/create',
    name: 'CreaterPage',
    meta: {
      layout: 'editor',
      requiresAuth: true,
    },
    component: () => import('@/views/pages/CreaterPage.vue')
  },
  {
    path: '/page/edit/:url',
    name: 'EditorPage',
    meta: {
      layout: 'editor',
      requiresAuth: true,
    },
    component: () => import('@/views/pages/EditorPage.vue')
  },
  {
    path: '/page/:url/statistics',
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
  // User PAGES
  // {
  //   path: '/q/id',
  //   name: 'UserStart',
  //   meta: {
  //     layout: 'user',
  //   },
  //   component: () => import('@/views/q/UserStart.vue')
  // },
  // {
  //   path: '/q/id/checkout',
  //   name: 'UserInst',
  //   meta: {
  //     layout: 'user',
  //   },
  //   component: () => import('@/views/q/UserInst.vue')
  // },
  // {
  //   path: '/q/id/good',
  //   name: 'UserUspech',
  //   meta: {
  //     layout: 'user',
  //   },
  //   component: () => import('@/views/q/UserUspech.vue')
  // },
  { 
    path: '*',
    meta: {
      layout: 'error',
      requiresAuth: true,
    },
    component: () => import('@/views/NotFoundComponent.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
