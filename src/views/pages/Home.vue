<template>
  <div>
    <header class="df pb-4">
      <h1 class="text-4xl font-semibold">Title</h1>
    </header>

    <router-link
      :to="{
        name: 'CreatePage',
      }"
      class="inline-flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple mb-4"
    >
      <svg
        class="w-4 h-4 mr-2 -ml-1"
        fill="currentColor"
        viewBox="0 0 22 22"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>

      <span>Создать страницу</span>
    </router-link>

    <div class="grid gap-6 mb-8 grid-cols-1 max-w-2xl">
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "../../components/Card.vue";

export default {
  name: "Home",
  components: { Card },
};
</script>

<style>
</style>