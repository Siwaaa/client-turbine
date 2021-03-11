export default {
  state: {
    token: localStorage.getItem('access_token') || null,
    name: localStorage.getItem('name_user') || "Пупсик"
  },
  mutations: {
    tokenUpdate(state, token) {
      state.token = token
    },
    nameUpdate(state, name) {
      state.name = name
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
      try {
      const res = await fetch("http://127.0.0.1:8000/api/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          },
        body: JSON.stringify(data)
      })
        // .then((response) => response.json());
      const jsonRes = await res.json()

      const token = jsonRes.token
      if (token) {
        localStorage.setItem('access_token', token) 
        ctx.commit('tokenUpdate', token)
      }

      const name = jsonRes.name
      if (name) {
        localStorage.setItem('name_user', name)
        ctx.commit('nameUpdate', name)
      }

      return res.ok
      
      } catch (error) {
        console.log('Регистрация не выполнена', error)
      }
    },
    async getToken(ctx, data) {
      try {
      const res = await fetch("http://127.0.0.1:8000/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          },
        body: JSON.stringify(data)
      })
        // .then((response) => response.json());
      const jsonRes = await res.json()

      const token = jsonRes.token
      if (token) {
        localStorage.setItem('access_token', token) 
        ctx.commit('tokenUpdate', token)
      }

      const name = jsonRes.name
      if (name) {
        localStorage.setItem('name_user', name)
        ctx.commit('nameUpdate', name)
      }

      return res.ok
      
      } catch (error) {
        console.log('Вход не выполнен', error)
      }
    },
    async destroyToken(ctx) {
      await fetch("http://127.0.0.1:8000/api/logout", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
      }).then(
        function () {
          localStorage.removeItem('access_token')
          localStorage.removeItem('name_user')
          ctx.commit('destroyTokenAndName')
          ctx.commit('destroyPages')
        },
        function (error) {
          alert('Вход не выполнен', error)
        }
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
    loggedIn(state) {
      return state.token !== null
    },
  }
}