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
          res = await fetch("http://127.0.0.1:8000/api/pages", {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }
          })
        } else {
          res = await fetch("http://127.0.0.1:8000/api/pages", {
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
        console.log(data)
        const res = await fetch("http://127.0.0.1:8000/api/pages", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
          body: JSON.stringify(data)
        });
        console.log(res)
        ctx.commit('addPage', data)

      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },
    async API_UPDATE_PAGE(ctx, data) {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/pages/${data.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
          body: JSON.stringify(data)
        });

        console.log(res, "выполнение action")
        ctx.dispatch('API_GET_PAGES')

      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },
    async API_DELETE_PAGE(ctx, id) {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/pages/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
        });

        console.log(res, "удаление")
        ctx.dispatch('API_GET_PAGES')

      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },

  },
  getters: {
    allPages(state) {
      return state.pages
    },
    countPages(state) {
      return state.pages.length
    }
  }
}