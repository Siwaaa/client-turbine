import Vue from 'vue'
import Vuex from 'vuex'
import page from './modules/page'
import auth from './modules/auth'
import template from './modules/template'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },

  modules: {
    page,
    auth,
    template,
  }
})
