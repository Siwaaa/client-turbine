<template>
  <div id="app">
    <component :is="currentTabComponent" />
  </div>
</template>
<script>
import DashboardLayout from './layouts/DashboardLayout.vue'
import LoginLayout from './layouts/LoginLayout.vue'

export default {
  name: 'App',
  computed: {
    currentTabComponent() {
      console.log()
      return (this.$route.meta.layout || 'dashboard') + '-layout'
    }
  },
  components: {DashboardLayout, LoginLayout},
  methods: {
    test () {
      this.$Progress.start()
      this.$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz')
      .then((response) => {
        console.log(response)
          this.$Progress.finish()
      }, (response) => {
                console.log(response)

          this.$Progress.fail()
      })
    }
  }
}
</script>
<style>

</style>
