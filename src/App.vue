<template>
  <div id="app">
    <!-- v-if здесь для того чтобы пофиксить проблему с отсутствием в this.$route.meta.layout значения. Оно подгружается через определенное время. Через какое я не нашел -->
    <component v-if="this.$route.meta.layout" :is="currentTabComponent" />
    <vue-progress-bar/>
  </div>
</template>
<script>
import DashboardLayout from './layouts/DashboardLayout.vue'
import EditorLayout from './layouts/EditorLayout.vue'
import ErrorLayout from './layouts/ErrorLayout.vue'
import LoginLayout from './layouts/LoginLayout.vue'
import UserLayout from './layouts/UserLayout.vue'


export default {
  name: 'App',
  components: {DashboardLayout, EditorLayout, LoginLayout,  UserLayout, ErrorLayout,},
  computed: {
    currentTabComponent() {
      return (this.$route.meta.layout || 'dashboard') + '-layout'
    }
  },
  methods: {
  },
}
</script>
<style>

</style>
