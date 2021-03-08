export default {
  state: {
    projects: [],
  },
  mutations: {
    updateProject(state, projects) {
      state.projects = projects
    },
    addProject(state, newProjects) {
      state.projects.unshift(newProjects)
    }
  },
  actions: {
    async fechProjects(ctx) {
      try {
      const res = await fetch("https://bu.emocia.com/v1/api/projects", {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }
      })

      const project = (await res.json()).data
      ctx.commit('updateProject', project)

      } catch (error) {
        console.log('Данные с сервера не получены')
      }
    },
    async API_add_projects(ctx, data) {
      try {
        const res = await fetch("https://bu.emocia.com/v1/api/projects", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
          body: JSON.stringify(data)
        });
        console.log(res)
        ctx.commit('addProject', data)

      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    },
    async API_update_project(ctx, data) {
      try {
        const res = await fetch(`https://bu.emocia.com/v1/api/projects/${data.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
          body: JSON.stringify(data)
        });
        console.log(res, "выполнение action")
        console.log(JSON.stringify(data))
        ctx.dispatch('fechProjects')
      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    }, 
    async API_delete_project(ctx, id) {
      try {
        const res = await fetch(`https://bu.emocia.com/v1/api/projects/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          },
        });
  
        console.log(res, "удаление")
        ctx.dispatch('fechProjects')
        
      } catch (error) {
        alert(error, "Андрей, исправь")
      }
    }, 

  },
  getters: {
    allProjects(state) {
      return state.projects
    },
    filterProject(state) {
      if(state.projects) {
        const notDeletedProject = state.projects.filter(
          project => project.is_deleted != 1)
        return notDeletedProject
      }
      
    },
    countProjects(state) {
      return state.projects.length
    }
  }
}