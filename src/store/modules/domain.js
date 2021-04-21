export default {
  state: {
    domains: null,
  },
  mutations: {
    updateDomainAll(state, domains) {
      state.domains = domains
    },
    addDomain(state, newdomains) {
      state.domains.unshift(newdomains)
    },
  },
  actions: {
    async API_GET_DOMAINS(ctx) {
      await fetch(`${this.state.urlAPI}/api/domains`, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }
      }).then((response) => response.ok ? response.json() : Promise.reject(response))
        .then((result) => {
          const domain = result.data
          if (domain) {
            ctx.commit('updateDomainAll', domain)
          }
        }).catch((error) => {
          alert('Ошибка загрузки доменов')
          throw error
        })
    },
    async API_ADD_DOMAIN(ctx, data) {
      await fetch(`${this.state.urlAPI}/api/domains`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
        body: JSON.stringify(data)
      }).then((res) => res.ok ? ctx.dispatch('API_GET_DOMAINS', data) : Promise.reject(res))
        .catch((error) => {
          throw error
        })

    },
    async API_UPDATE_DOMAIN(ctx, id) {
      await fetch(`${this.state.urlAPI}/api/domains/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }
      }).then((res) => res.ok ? ctx.dispatch('API_GET_DOMAINS') : Promise.reject(res))
        .catch((error) => {
          throw error
        })
    },
    async API_DELETE_DOMAIN(ctx, id) {
      await fetch(`${this.state.urlAPI}/api/domains/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
      }).then((res) => res.ok ? ctx.dispatch('API_GET_DOMAINS') : Promise.reject(res))
        .catch((error) => {
          throw error
        })
    },

  },
  getters: {
    allDomains(state) {
      return state.domains
    },
  }
}