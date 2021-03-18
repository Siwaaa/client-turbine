<template>
  <div
    class="pb-6 px-6 relative min-h-screen flex items-center w-full md:h-full md:shadow-lg md:rounded-lg "
    style="
      background: linear-gradient(225deg, rgb(170, 7, 107), rgb(97, 4, 95));
    "
  >
    <div
      class="card flex flex-col w-full items-center p-4 bg-white rounded-lg shadow-xs"
    >
      <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
        Спасибо за подписку
      </h4>
      <p class="text-gray-600 dark:text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
        commodi a omnis numquam quod
      </p>
      <a
        href="#"
        class="inline-block mx-auto mt-6 px-4 py-2 font-medium text-white transition-colors duration-150 bg-gradient-to-r from-pink-500 to-pink-700 rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none"
        >Скачать материал
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserUspech",
  data() {
    return {
      ds: true,
      className: "bg-purple-600",
    }
  },
  methods: {

  },
  mounted() {
    // убираем за собой
    localStorage.removeItem('check-first-screen')
  }
};
</script>

<style>

</style>