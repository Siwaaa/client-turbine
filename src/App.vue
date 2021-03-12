<template>
  <div id="app">
    <!-- v-if здесь для того чтобы пофиксить проблему с отсутствием в this.$route.meta.layout значения. Оно подгружается через определенное время. Через какое я не нашел -->
    <component v-if="this.$route.meta.layout" :is="currentTabComponent" />
  </div>
</template>
<script>
import DashboardLayout from './layouts/DashboardLayout.vue'
import LoginLayout from './layouts/LoginLayout.vue'
import UserLayout from './layouts/UserLayout.vue'

export default {
  name: 'App',
  components: {DashboardLayout, LoginLayout, UserLayout},
  computed: {
    currentTabComponent() {
      return (this.$route.meta.layout || 'dashboard') + '-layout'
    }
  },
  methods: {
  }
}
</script>
<style>

</style>
