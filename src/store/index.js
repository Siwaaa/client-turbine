import Vue from 'vue'
import Vuex from 'vuex'
import page from './modules/page'
import auth from './modules/auth'
import template from './modules/template'
import domain from './modules/domain'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urlAPI: process.env.VUE_APP_ROOT_API
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    page,
    auth,
    template,
    domain
  }
})
