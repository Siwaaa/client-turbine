<template>
  <div class="a">
    <header class="df pb-4">
      <h1 id="title" class="text-4xl font-semibold">Дизайн шаблоны</h1>
    </header>
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      Доступные дизайны
    </h4>
    <div class="flex flex-wrap mb-6">
      <div
        class="inline-flex flex-col mr-4 mb-6 w-44 h-52 items-center justify-center mb-4 px-4 py-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
        style="background-color: rgb(4, 135, 175)"
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
        <span>Новый шаблон</span>
      </div>
      <div
        class="mr-4 mb-6 w-44 h-52 text-sm bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out"
      >
        <div
          class="body-card flex flex-col items-start justify-center h-3/4 p-4"
        >
          <h4
            class="overflow-hidden max-w-full font-medium text-lg leading-none text-gray-700"
            style="overflow-wrap: break-word"
          >
            Лялял
          </h4>
          <div class="inst max-w-full">
            <span>Агуша</span>
          </div>
          <button class="bg-blue-600 px-4 py-2 rounded"></button>
        </div>
        <div
          class="footer-card relative px-4 py-3 border-t text-gray-400 bg-opacity-75 flex flex-wrap"
        >
          <span class="text-gray-800">Name</span>
          <!-- Modal -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>