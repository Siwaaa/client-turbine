export default {
  state: {
    templates: null,
  },
  mutations: {
    updateTemplateAll(state, templates) {
      state.templates = templates
    },
  },
  actions: {
    async API_GET_TEMPLATES(ctx) {
      await fetch(`${this.state.urlAPI}/api/templates`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }
      }).then((response) => response.ok ? response.json() : Promise.reject(response))
        .then((json) => {
          const template = json.data
          if (template) {
            ctx.commit('updateTemplateAll', template)
          }
        }).catch(error => {
          alert('Данные с сервера не получены')
          if (error.status == 401) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('name_user')
            localStorage.removeItem('email_user')
            localStorage.removeItem('created_at_user')

            localStorage.removeItem('pages_arr')
            ctx.commit('destroyTokenAndName')
            ctx.commit('destroyPages')
          }
          throw error
        })
    },

  },
  getters: {
    allTemplates(state) {
      return state.templates
    },
  }
}