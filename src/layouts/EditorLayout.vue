<template>
  <div class="w-full min-h-screen bg-gray-50">
    <header class="w-full h-14 flex justify-between border-b bg-white px-2">
      <div class="back flex items-center ">
        <router-link to="/">Главная</router-link>
      </div>
      <!-- USER -->
      <div class="flex items-center text-sm">
        <!-- Avatar with inset shadow -->
        <div
          class="relative flex items-center justify-center w-8 h-8 mr-3 rounded-full shadow-sm bg-indigo-300"
        >
          <span class="font-bold text-lg text-white">{{
            name ? name[0].toUpperCase() : "C"
          }}</span>
        </div>
        <div class="hidden md:block">
          <p class="text-gray-800">{{ name }}</p>
        </div>
      </div>
    </header>
    <main class="overflow-hidden" style="height: calc(100vh - 3.5rem)">
      <router-view />
    </main>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "EditorLayout",
    computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style>
</style>