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
        @copyLinkPage="copyLinkPage"
      />
    </div>
    <!-- Modal -->
    <Modal v-if="isModalOpen" @close="closeModal">
      <template v-slot:header>
        <h2>Удалить эту страницу?</h2>
      </template>
      <template v-slot:description>
        <p class="text-sm text-gray-700 dark:text-gray-400">
          Вы собираетесь удалить страницу.
          <br />
          Она исчезнет навсегда, и мы не сможем ее вернуть.
        </p>
      </template>
      <template v-slot:footer>
        <button
          @click="closeModal"
          class="inline-block px-3 py-2 text-sm leading-none text-black transition-colors duration-150 bg-gray-200 border border-transparent rounded active:bg-gray-600 hover:bg-gray-100 focus:outline-none"
        >
          Отмена
        </button>
        <button
          @click.prevent="realyDelete"
          class="inline-block px-3 py-2 text-sm leading-none text-white transition-colors duration-150 bg-red-800 border border-transparent rounded active:bg-red-600 hover:bg-red-700 focus:outline-none"
        >
          {{textDeleting}}
        </button>
      </template>
    </Modal>
    <!-- Notification -->
    <transition name="slide">
      <Notification v-if="visibleNoti" @close="closeNotification">
        <template v-slot:body>
          <span class="text-sm">{{ textNotification }}</span>
        </template>
      </Notification>
    </transition>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Notification from "@/components/Notification.vue";
import Modal from "@/components/Modal.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: { Card, Notification, Modal },
  data() {
    return {
      //modal переменные
      isModalOpen: false,
      confirmDeletion: false,
      idDelete: "",
      textDeleting: 'Да, удалить',
      // noti переменные
      visibleNoti: false,
      textNotification: "Ссылка скопирована",
      
    };
  },
  computed: {
    ...mapGetters(["allPages"]),
  },
  methods: {
    ...mapActions(["API_GET_PAGES", "API_DELETE_PAGE", "API_ADD_PAGE"]),
    closeNotification() {
      this.visibleNoti = false;
    },
    deletePage(id) {
      this.isModalOpen = true;
      this.idDelete = id;
      if (this.confirmDeletion) {
        this.textDeleting = 'Удаление...'
        this.API_DELETE_PAGE(id).then(() => {
          this.closeModal();
          this.confirmDeletion = false;
          this.textDeleting = 'Да, удалить'
          // отображаем noti
          this.textNotification = "Страница удалена"
          this.visibleNoti = true
          setTimeout(() => {
          this.visibleNoti = false
        }, 4000);
        });
        
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
    copyLinkPage(url) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          this.textNotification = "Ссылка скопирована";
          this.visibleNoti = true;
          setTimeout(() => {
            this.visibleNoti = false;
          }, 3000);
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    },
    // методы модалки
    openModal(e) {
      this.modalOpen = e.target.name;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    realyDelete() {
      this.confirmDeletion = true;
      this.deletePage(this.idDelete);
    },
  },
  mounted() {
    this.API_GET_PAGES();
  },
};
</script>

<style>
</style>