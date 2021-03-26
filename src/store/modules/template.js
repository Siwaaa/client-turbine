export default {
  state: {
    templates: JSON.parse(localStorage.getItem('templates_arr')) || null,
  },
  mutations: {
    updateTemplateAll(state, templates) {
      state.templates = templates
    },
  },
  actions: {
    async API_GET_TEMPLATES(ctx) {
      let res = await fetch("http://127.0.0.1:8000/api/templates", {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }
      })

      const template = (await res.json()).data
      if (template) {
        localStorage.setItem('templates_arr', JSON.stringify(template))
        ctx.commit('updateTemplateAll', template)
      }

  },

},
getters: {
  alltemplates(state) {
    return state.templates
  },
}
}