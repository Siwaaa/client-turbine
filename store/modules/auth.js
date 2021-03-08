export default {
  state: {
    token: localStorage.getItem('access_token') || null,
    name: localStorage.getItem('name_user') || "Пупсик"
  },
  mutations: {
    tokenUpdate(state, token) {
      state.token = token
    },
    destroyTokenAndName(state) {
      state.token = null
      state.name = null
    },
    destroyOperationsAndProject() {
      this.state.operation.operations = null
      this.state.project.projects = null
    },
    nameUpdate(state, name) {
      state.name = name
    }
  },
  actions: {
    async getToken(ctx, data) {
      try {
      // console.log(data)
      const res = await fetch("https://bu.emocia.com/v1/api/login", {
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
      try {
      await fetch("https://bu.emocia.com/v1/api/logout", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
      })
      localStorage.removeItem('access_token')
      localStorage.removeItem('name_user')
      ctx.commit('destroyTokenAndName')
      ctx.commit('destroyOperationsAndProject')

      } catch (error) {
        alert('Выход не выполнен')
      }
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