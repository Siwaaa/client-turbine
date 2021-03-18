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
        <a :href="linkInst" target="_blank" class="inst flex items-center">
          <svg fill="#000000" viewBox="0 0 50 50" class="w-5 h-5 mr-2">
            <path
              d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
            />
          </svg>
          <span>{{ pageProps.instagram }}</span>
        </a>
        <div class="url"></div>
      </div>
    </div>
    <div
      class="footer-card p-4 bg-indigo-50 text-gray-400 bg-opacity-75 flex flex-wrap"
    >
      <router-link
        :to="{ name: 'UserStart' }"
        target="_blank"
        id="route-open"
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
      <button
        @click="pageDuplicate"
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
      </button>
      <button
        type="button"
        @click="openDelete"
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
      </button>
      <router-link
        :to="{ name: 'UserStart' }"
        event
        @click.native.prevent="copyLink"
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
    linkInst() {
      return "https://www.instagram.com/" + this.pageProps.instagram;
    },
    ctr() {
      if (this.pageProps.count_podpis && this.pageProps.count_prosmotr) {
        return this.pageProps.count_podpis / this.pageProps.count_prosmotr;
      } else return 0;
    },
  },
  methods: {
    openDelete() {
      this.$emit("deletePage", this.pageProps.id);
    },
    pageDuplicate() {
      this.$emit("duplicatePage", this.pageProps.id);
    },
    copyLink(event) {
      navigator.clipboard
        .writeText(event.target.href)
        .then(() => {
          // Получилось!
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    },
  },
};
</script>

<style scoped>
.animate {
  @apply transition-colors duration-300;
}
</style>