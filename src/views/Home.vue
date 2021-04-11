<template>
  <div>
    <header class="df pb-4">
      <h1 id="title" class="text-2xl font-medium mb-4">Подписные страницы</h1>
    </header>

    <div class="flex flex-wrap mb-6">
      <router-link
        :to="{
          name: 'CreatePage',
        }"
        class="inline-flex mr-4 mb-6 px-4 py-2 w-44 h-52 items-center text-lg text-white font-bold bg-white border border-gray-100 rounded-lg hover:opacity-90 transition-opacity duration-300"
        style="background-color: rgb(4, 135, 175)"
      >
        <svg
          class="w-6 h-6 mr-2"
          viewBox="0 0 10 10"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 6c0-1.10457.89543-2 2-2h8c0 1.10457-.89543 2-2 2H0z"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 0v8c0 1.10457-.89543 2-2 2V2c0-1.104569.89543-2 2-2z"
          ></path>
        </svg>

        <span>Создать страницу</span>
      </router-link>
      <Card
        v-for="page in allPages"
        :key="page.id"
        :pageProps="page"
        @deletePage="deletePage"
        @duplicatePage="duplicatePage"
      />
    </div>
    <!-- Modal -->
    <div
      v-show="isModalOpen"
      @click.self="closeModal"
      class="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
    >
      <div
        class="w-full px-6 py-4 z-50 overflow-hidden bg-white rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-xl"
        role="dialog"
        id="modal"
      >
        <header class="flex justify-end">
          <button
            class="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
            aria-label="close"
            @click="closeModal"
          >
            <svg
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </header>
        <!-- Modal body -->
        <div class="mt-4 mb-6">
          <!-- Modal title -->
          <p
            class="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300"
          >
            Удалить эту страницу?
          </p>
          <!-- Modal description -->
          <p class="text-sm text-gray-700 dark:text-gray-400">
            Вы собираетесь удалить страницу.
            <br />
            Она исчезнет навсегда, и мы не сможем ее вернуть.
          </p>
        </div>
        <footer
          class="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800"
        >
          <button
            @click="closeModal"
            class="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
          >
            Отмена
          </button>
          <button
            @click.prevent="realyDelete"
            class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-red-600 hover:bg-red-700 focus:outline-none"
          >
            Да, удалить
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: { Card },
  data() {
    return {
      isModalOpen: false,
      confirmDeletion: false,
      idDelete: "",
    };
  },
  computed: {
    ...mapGetters(["allPages"]),
  },
  methods: {
    ...mapActions(["API_GET_PAGES", "API_DELETE_PAGE", "API_ADD_PAGE"]),
    deletePage(id) {
      this.isModalOpen = true;
      this.idDelete = id;
      if (this.confirmDeletion) {
        this.API_DELETE_PAGE(id);
        this.closeModal();
        this.confirmDeletion = false;
      }
    },
    duplicatePage(id) {
      const pageObj = this.allPages.find((item) => item.id == id);
      if (pageObj) {
        let formData = new FormData();
        formData.append("img_cover", pageObj.img_cover);
        const allData = JSON.stringify({
          name: pageObj.name + "-copy" + (Date.now() % 7777),
          status: 1,
          instagram: pageObj.instagram,
          domain_id: pageObj.domain_id,
          title_ad: pageObj.title_ad,
          description_ad: pageObj.description_ad,
          img_cover: pageObj.img_cover,
          template_id: pageObj.template_id,
          btn_ad: pageObj.btn_ad,
          timer: pageObj.timer,
          fb_pixel: pageObj.fb_pixel,
          title_success: pageObj.title_success,
          description_success: pageObj.description_success,
          btn_success: pageObj.btn_success,
          link_download: pageObj.link_download,
        });
        formData.append("data", allData);

        this.API_ADD_PAGE(formData).then(() => this.API_GET_PAGES());
      }
    },
    closeModal() {
      this.isModalOpen = false;
    },
    realyDelete() {
      this.confirmDeletion = true;
      this.deletePage(this.idDelete);
    },
    scrollBehavior() {
      document.getElementById("title").scrollIntoView();
    },
  },
  mounted() {
    this.API_GET_PAGES();
  },
};
</script>

<style>
</style>