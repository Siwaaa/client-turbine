export default {
  state: {
    pages: [],
  },
  mutations: {
    updatepageAll(state, pages) {
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
          res = await fetch(`https://bu.emocia.com/v1/api/pages?startDate=${date[0]}&endDate=${date[1]}`, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }
          })
        } else {
          res = await fetch("https://bu.emocia.com/v1/api/pages", {
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
      if(state.pages) {
        return state.pages.sort(function (a, b) {
          var dateA = new Date(a.date), dateB = new Date(b.date)
          return dateB - dateA //сортировка по возрастающей дате
        })
      }
    },
    grouppages: state => project_id => {
      const groupByDate = {}

      if (state.pages) {
        if (project_id) {
          const filterpage = state.pages.filter(
            (page) => page.project_id === Number(project_id))
          filterpage.forEach(function (item) {
            if (groupByDate[item.date]) {
              groupByDate[item.date].push(item)
            } else {
              groupByDate[item.date] = [item]
            }
          })
        } else {
          state.pages.forEach(function (item) {
            if (groupByDate[item.date]) {
              groupByDate[item.date].push(item)
            } else {
              groupByDate[item.date] = [item]
            }
          })
        }
      }

      return groupByDate
    },
    filterpagesDate: state => date => {
      if (date.length >1) {
        const newpage = state.pages.filter(
          page => page.date >= date[0] && page.date <= date[1])
        return newpage
      }
    },
    namepagesArray(state) {
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