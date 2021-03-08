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
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Home.vue')
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
    path: '/dashboard/create',
    name: 'CreatePage',
    meta: {
      layout: 'dashboard',
      requiresVisitor: true
    },
    component: () => import('@/views/pages/CreatePage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
