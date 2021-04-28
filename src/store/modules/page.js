export default {
  state: {
    pages: JSON.parse(localStorage.getItem('pages_arr')) || null,
  },
  mutations: {
    updatePageAll(state, pages) {
      state.pages = pages
    },
    addPage(state, newpages) {
      state.pages.unshift(newpages)
    },
  },
  actions: {
    async API_GET_PAGES(ctx) {
      await fetch(`${this.state.urlAPI}/api/pages`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }
      }).then((response) => response.ok ? response.json() : Promise.reject(response))
        .then((json) => {
          const page = json.data
          if (page) {
            localStorage.setItem('pages_arr', JSON.stringify(page))
            ctx.commit('updatePageAll', page)
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
    async API_ADD_PAGE(ctx, data) {
        // переменная для дубликата страницы (содержит только объект значений без файла картинки)
        const duplicateData = JSON.stringify({data: data.get("data")})
        // обработчик для vuex
        const hadlerData = JSON.parse(data.get("data"))

        await fetch(`${this.state.urlAPI}/api/pages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
          body: data.get("img_cover") ? data : duplicateData
        }).then(() => ctx.commit('addPage', hadlerData))
        .catch (error => {
          alert("Ошибка создания страницы")
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
    async API_UPDATE_PAGE(ctx, data) {
      const hadlerData = JSON.parse(data.get("data"))
      await fetch(`${this.state.urlAPI}/api/pages/${hadlerData.id}`, {
        // POST для фикс бага от php, который не давал получать $request
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
        body: data
      }).then(() => ctx.dispatch('API_GET_PAGES'))
        .catch(error => {
          alert(error, "Страница не обновлена")
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
    async API_DELETE_PAGE(ctx, id) {
      await fetch(`${this.state.urlAPI}/api/pages/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
      }).then(() => ctx.dispatch('API_GET_PAGES'))
        .catch(error => {
          alert(error, "Андрей, исправь")
        })
    },

  },
  getters: {
    allPages(state) {
      return state.pages
    },
  }
}