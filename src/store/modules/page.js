export default {
  state: {
    pages: [],
  },
  mutations: {
    updatePageAll(state, pages) {
        state.pages = pages
    },
    addpage(state, newpages) {
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
        ctx.commit('updatePageAll', page)

      } catch (error) {
        alert('Данные с сервера не получены')
      }

    },
    async API_ADD_PAGE(ctx, data) {
      try {
        console.log(data)
        const res = await fetch("https://bu.emocia.com/v1/api/pages", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
          body: JSON.stringify(data)
        });
        console.log(res)
        ctx.commit('addpage', data)

      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },
    async API_update_pageation(ctx, data) {
      try {
        const res = await fetch(`https://bu.emocia.com/v1/api/pages/${data.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
          body: JSON.stringify(data)
        });

        console.log(res, "выполнение action")
        ctx.dispatch('fechpages')

      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },
    async API_delete_pageation(ctx, id) {
      try {
        const res = await fetch(`https://bu.emocia.com/v1/api/pages/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
        });

        console.log(res, "удаление")
        ctx.dispatch('fechpages')

      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },

  },
  getters: {
    allPages(state) {
      return state.pages
    },
    filterPagesDate: state => date => {
      if (date.length >1) {
        const newpage = state.pages.filter(
          page => page.date >= date[0] && page.date <= date[1])
        return newpage
      }
    },
    namePagesArray(state) {
      const nameArray = []
      state.pages.forEach(function(item) {
        nameArray.push(item.name)
      }) 
      // убираем повторяющиеся значения с помощью коллекции ES6
      return Array.from(new Set(nameArray)) 
    },
    countPages(state) {
      return state.pages.length
    }
  }
}