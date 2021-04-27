import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import VueProgressBar from 'vue-progressbar'
import vClickOutside from 'v-click-outside'
import VueYandexMetrika from 'vue-yandex-metrika' 


const options = {
  color: '#0487af',
  failedColor: '#8d2828',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
}

Vue.use(VueYandexMetrika, {
  id: 76507261,
  router: router,
  env: process.env.NODE_ENV,
  // other options
  сlickmap:true,
  trackLinks:true,
  accurateTrackBounce:true,
  webvisor:true
})
Vue.use(VueProgressBar, options)
Vue.use(vClickOutside)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'Login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'Home',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
