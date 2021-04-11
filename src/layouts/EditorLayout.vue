<template>
  <div class="w-full min-h-screen bg-gray-50">
    <header class="w-full h-12 flex justify-between border-b bg-white px-4">
      <router-link to="/" class="back flex items-center hover:text-gray-900 text-gray-500">
        <span class="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </span>
        <span class="font-medium">Главная</span>
      </router-link>
      <!-- USER -->
      <div class="flex items-center text-sm font-medium">
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
    <main class="overflow-hidden" style="height: calc(100vh - 3rem)">
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EditorLayout",
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style>
</style>