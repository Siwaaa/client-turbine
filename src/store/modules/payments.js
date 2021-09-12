export default {
  state: {
    payments: null,
  },
  mutations: {
    updatePaymentAll(state, payments) {
      state.payments = payments
    },
  },
  actions: {
    async API_GET_PAYMENTS(ctx) {
      await fetch(`${this.state.urlAPI}/api/payments`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }
      }).then((response) => response.ok ? response.json() : Promise.reject(response))
        .then((result) => {
          const payment = result.data
          if (payment) {
            ctx.commit('updatePaymentAll', payment)
          }
        }).catch((error) => {
          alert('Ошибка загрузки платежей')
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
    async API_UPDATE_PAYMENT(ctx, id) {
      await fetch(`${this.state.urlAPI}/api/payments/${id}/check`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }
      }).then((res) => res.ok ? ctx.dispatch('API_GET_PAYMENTS') : Promise.reject(res))
        .catch((error) => {
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
    allPayments(state) {
      return state.payments
    },
  }
}