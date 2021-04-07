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
    async API_GET_PAGES(ctx, date) {
      try {
        let res = ''
        if(date) {
          res = await fetch(`${this.state.urlAPI}/api/pages`, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }
          })
        } else {
          res = await fetch(`${this.state.urlAPI}/api/pages`, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }
          })
        }
        
        const page = (await res.json()).data
        if(page) {
          localStorage.setItem('pages_arr', JSON.stringify(page))
          ctx.commit('updatePageAll', page) 
        }

      } catch (error) {
        alert('Данные с сервера не получены')
      }

    },
    async API_ADD_PAGE(ctx, data) {
      try {
        const hadlerData = JSON.parse(data.get("data"))
        await fetch(`${this.state.urlAPI}/api/pages`, {
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
          body: data
        }).then(() => ctx.commit('addPage', hadlerData))
        
      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },
    async API_UPDATE_PAGE(ctx, data) {
      try {
        const hadlerData = JSON.parse(data.get("data"))
        await fetch(`${this.state.urlAPI}/api/pages/${hadlerData.id}`, {
          // POST для фикс бага от php, который не давал получать $request
          method: 'POST',
          headers: {
            // 'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
          body: data
        }).then(() => ctx.dispatch('API_GET_PAGES'))

      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },
    async API_DELETE_PAGE(ctx, id) {
      try {
        await fetch(`${this.state.urlAPI}/api/pages/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
        }).then(() => ctx.dispatch('API_GET_PAGES'))
        
      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },

  },
  getters: {
    allPages(state) {
      return state.pages
    },
  }
}