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
      let res = await fetch("http://127.0.0.1:8000/api/templates", {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }
      })

      const template = (await res.json()).data
      if (template) {
        ctx.commit('updateTemplateAll', template)
      }
    },

  },
  getters: {
    allTemplates(state) {
      return state.templates
    },
  }
}