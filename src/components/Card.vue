<template>
  <div class="min-w-0 bg-white border rounded-lg shadow-xs dark:bg-gray-800">
    <div class="body-card p-4">
      <h4 class="mb-4 font-semibold text-3xl text-gray-700 dark:text-gray-300">
        {{ pageProps.name }}
      </h4>
      <div class="ctr mb-10 flex flex-col text-gray-600 dark:text-gray-400">
        <span
          ><span class="text-gray-800 font-semibold">{{ ctr }}%</span> CTR</span
        >
        <span
          ><span class="text-gray-800 font-semibold">{{
            pageProps.count_prosmotr || 0
          }}</span>
          просмотры</span
        >
        <span
          ><span class="text-gray-800 font-semibold">{{
            pageProps.count_podpis || 0
          }}</span>
          подписчики</span
        >
      </div>
      <div class="inst-and-url">
        <a href="/" target="_blank" class="inst">
          <span>{{ pageProps.instagram }}</span>
        </a>
        <div class="url"></div>
      </div>
    </div>
    <div
      class="footer-card p-4 bg-indigo-50 text-gray-400 bg-opacity-75 flex flex-wrap"
    >
      <router-link
        to="#"
        class="item p-2 hover:text-gray-600 flex items-center mr-4 animate"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
        <span class="ml-1">Открыть</span>
      </router-link>
      <router-link
        :to="{
          name: 'PageStatistics',
          params: {
            id: pageProps.id,
            url: pageProps.url,
          },
        }"
        class="item p-2 hover:text-gray-600 flex items-center mr-4 animate"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
        <span class="ml-1">Статистика</span>
      </router-link>
      <router-link
        :to="{
          name: 'PageEdit',
          params: {
            id: pageProps.id,
            url: pageProps.url,
          },
        }"
        class="item p-2 hover:text-gray-600 flex items-center mr-4 animate"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
        <span class="ml-1">Изменить</span>
      </router-link>
      <router-link
        to="#"
        class="item p-2 hover:text-gray-600 flex items-center mr-4 animate"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
        <span class="ml-1">Дублировать</span>
      </router-link>
      <router-link
        to="#"
        class="item p-2 hover:text-gray-600 flex items-center mr-4 animate"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
        <span class="ml-1">Удалить</span>
      </router-link>
      <router-link
        to="#"
        class="item p-2 hover:text-gray-600 flex items-center mr-4 animate"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
        <span class="ml-1">Скопировать ссылку</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    pageProps: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  computed: {
    ctr() {
      if (this.pageProps.count_podpis && this.pageProps.count_prosmotr) {
        return this.pageProps.count_podpis / this.pageProps.count_prosmotr;
      } else return 0;
    },
  },
};
</script>

<style scoped>
.animate {
  @apply transition-colors duration-300;
}
</style>