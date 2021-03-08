export default {
  state: {
    operations: [],
  },
  mutations: {
    updateOperAll(state, operations) {
        state.operations = operations
    },
    addOper(state, newOperations) {
      state.operations.unshift(newOperations)
    },
  },
  actions: {
    async fechOperations(ctx, date) {
      try {
        let res = ''
        if(date) {
          res = await fetch(`https://bu.emocia.com/v1/api/operations?startDate=${date[0]}&endDate=${date[1]}`, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }
          })
        } else {
          res = await fetch("https://bu.emocia.com/v1/api/operations", {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }
          })
        }
        
        const oper = (await res.json()).data
        ctx.commit('updateOperAll', oper)

      } catch (error) {
        alert('Данные с сервера не получены')
      }

    },
    async API_add_operation(ctx, data) {
      try {
        // console.log(data)
        const res = await fetch("https://bu.emocia.com/v1/api/operations", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
          body: JSON.stringify(data)
        });
        console.log(res)
        ctx.commit('addOper', data)

      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },
    async API_update_operation(ctx, data) {
      try {
        const res = await fetch(`https://bu.emocia.com/v1/api/operations/${data.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
          body: JSON.stringify(data)
        });

        console.log(res, "выполнение action")
        ctx.dispatch('fechOperations')

      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },
    async API_delete_operation(ctx, id) {
      try {
        const res = await fetch(`https://bu.emocia.com/v1/api/operations/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
        });

        console.log(res, "удаление")
        ctx.dispatch('fechOperations')

      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },

  },
  getters: {
    allOperations(state) {
      if(state.operations) {
        return state.operations.sort(function (a, b) {
          var dateA = new Date(a.date), dateB = new Date(b.date)
          return dateB - dateA //сортировка по возрастающей дате
        })
      }
    },
    groupOperations: state => project_id => {
      const groupByDate = {}

      if (state.operations) {
        if (project_id) {
          const filterOper = state.operations.filter(
            (oper) => oper.project_id === Number(project_id))
          filterOper.forEach(function (item) {
            if (groupByDate[item.date]) {
              groupByDate[item.date].push(item)
            } else {
              groupByDate[item.date] = [item]
            }
          })
        } else {
          state.operations.forEach(function (item) {
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
    filterOperationsDate: state => date => {
      if (date.length >1) {
        const newOper = state.operations.filter(
          oper => oper.date >= date[0] && oper.date <= date[1])
        return newOper
      }
    },
    nameOperationsArray(state) {
      const nameArray = []
      state.operations.forEach(function(item) {
        nameArray.push(item.name)
      }) 
      // убираем повторяющиеся значения с помощью коллекции ES6
      return Array.from(new Set(nameArray)) 
    },
    countOperations(state) {
      return state.operations.length
    }
  }
}