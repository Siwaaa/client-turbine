export default {
  state: {
    token: localStorage.getItem('access_token') || null,
    name: localStorage.getItem('name_user') || "Пупсик",
    email: localStorage.getItem('email_user') || null,
    created_at: localStorage.getItem('created_at_user') || null,
  },
  mutations: {
    tokenUpdate(state, token) {
      state.token = token
    },
    nameUpdate(state, name) {
      state.name = name
    },
    emailUpdate(state, email) {
      state.email = email
    },
    createdUpdate(state, created_at) {
      state.created_at = created_at
    },
    destroyTokenAndName(state) {
      state.token = null
      state.name = null
    },
    destroyPages() {
      this.state.page.pages = null
    },

  },
  actions: {
    async registerToken(ctx, data) {
      await fetch(`${this.state.urlAPI}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(response => response.ok ? response.json() : Promise.reject(response))
        .then(result => {
          const token = result.token
          if (token) {
            localStorage.setItem('access_token', token)
            ctx.commit('tokenUpdate', token)
          }

          const name = result.name
          if (name) {
            localStorage.setItem('name_user', name)
            ctx.commit('nameUpdate', name)
          }
          const email = result.email
          if (email) {
            localStorage.setItem('email_user', email)
            ctx.commit('emailUpdate', email)
          }
          const created_at = result.created_at
          if (created_at) {
            localStorage.setItem('created_at_user', created_at)
            ctx.commit('createdUpdate', created_at)
          }
        })

        .catch((error) => {
          throw error
        })
    },
    async getToken(ctx, data) {
      await fetch(`${this.state.urlAPI}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data)
      }).then((response) => response.ok ? response.json() : Promise.reject(response))
        .then((result) => {
          const token = result.token
          if (token) {
            localStorage.setItem('access_token', token)
            ctx.commit('tokenUpdate', token)
          }

          const name = result.name
          if (name) {
            localStorage.setItem('name_user', name)
            ctx.commit('nameUpdate', name)
          }
          const email = result.email
          if (email) {
            localStorage.setItem('email_user', email)
            ctx.commit('emailUpdate', email)
          }
          const created_at = result.created_at
          if (created_at) {
            localStorage.setItem('created_at_user', created_at)
            ctx.commit('createdUpdate', created_at)
          }
        })
        .catch((error) => {
          throw error
        })
    },
    async destroyToken(ctx) {
      await fetch(`${this.state.urlAPI}/api/logout`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
      }).then(() => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('name_user')
        localStorage.removeItem('email_user')
        localStorage.removeItem('created_at_user')

        localStorage.removeItem('pages_arr')
        ctx.commit('destroyTokenAndName')
        ctx.commit('destroyPages')
      }).catch((error) => console.log(error))

    },
    // Facebook Auth
    async GO_FACEBOOK(ctx, data) {
      await fetch(`${this.state.urlAPI}/api/social-auth/facebook`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data)
      }).then((response) => response.ok ? response.json() : Promise.reject(response))
        .then((result) => {
          const token = result.token
          if (token) {
            localStorage.setItem('access_token', token)
            ctx.commit('tokenUpdate', token)
          }
          const name = result.name
          if (name) {
            localStorage.setItem('name_user', name)
            ctx.commit('nameUpdate', name)
          }
          const email = result.email
          if (email) {
            localStorage.setItem('email_user', email)
            ctx.commit('emailUpdate', email)
          }
          const created_at = result.created_at
          if (created_at) {
            localStorage.setItem('created_at_user', created_at)
            ctx.commit('createdUpdate', created_at)
          }
        })
        .catch((error) => {
          throw error
        })
    },
    //USER 
    async updateNameAndEmail(ctx, data) {
      await fetch(`${this.state.urlAPI}/api/user/id`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
        body: JSON.stringify(data)
      }).then(
        function () {
          const name = data.name
          if (name) {
            localStorage.setItem('name_user', name)
            ctx.commit('nameUpdate', name)
          }
          const email = data.email
          if (email) {
            localStorage.setItem('email_user', email)
            ctx.commit('emailUpdate', email)
          }
        },
        function (error) {
          alert('Ошибка смены имени и пароля', error)
        },
      )
    },
    async changePassword(ctx, data) {
      await fetch(`${this.state.urlAPI}/api/user/pas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
        body: JSON.stringify(data)
      }).then(
        function () {
          localStorage.removeItem('access_token')
          localStorage.removeItem('name_user')
          localStorage.removeItem('email_user')
          localStorage.removeItem('created_at_user')

          localStorage.removeItem('pages_arr')
          ctx.commit('destroyTokenAndName')
          ctx.commit('destroyPages')
        },
        function (error) {
          alert('Ошибка смены пароля', error)
        },
      )
    },
  },
  getters: {
    token(state) {
      return state.token
    },
    name(state) {
      return state.name
    },
    email(state) {
      return state.email
    },
    created_at(state) {
      return state.created_at
    },
    loggedIn(state) {
      return state.token !== null
    },
  }
}