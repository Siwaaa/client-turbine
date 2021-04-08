<template>
  <div class="w-56 h-12 bg-black bg-opacity-90 text-white rounded-md">
    <div class="container h-full p-3 flex justify-between items-center">
      <span class="text"> Страница удалена </span>
      <div class="manage w-6 h-full flex justify-center items-center rounded hover:bg-gray-300">
        <svg
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {},
  methods: {
  }
};
</script>

<style>
</style>