import Vue from 'vue'
import Vuex from 'vuex'
import project from './modules/project'
import operation from './modules/operation'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },

  modules: {
    project,
    operation,
    auth,
  }
})
