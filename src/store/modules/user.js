export default {
  state: {
    user: {},
  },
  mutations: {
    updateUser(state, user) {
      state.user = user
    },
  },
  actions: {
    async API_GET_USER(ctx) {
      await fetch(`${this.state.urlAPI}/api/user`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }
      }).then((response) => response.ok ? response.json() : Promise.reject(response))
        .then((user) => {
          user ? ctx.commit('updateUser', user) : false
        }).catch((error) => {
          alert('Ошибка загрузки пользователя')
          if (error.status == 401) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('name_user')
            localStorage.removeItem('email_user')
            localStorage.removeItem('created_at_user')

            ctx.commit('destroyTokenAndName')
          }
          throw error
        })
    },

  },
  getters: {
    getUser(state) {
      return state.user
    },
    userBalance(state) {
      return state.user.balance
    }
  }
}