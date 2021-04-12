<template>
  <div
    class="mr-4 mb-6 w-44 h-52 text-sm bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out"
  >
    <router-link
      :to="{
        name: 'PageEdit',
        params: {
          url: pageProps.url,
        },
      }"
      class="body-card rounded-t-lg flex flex-col items-center justify-center leading-4 h-3/4 p-4 overflow-hidden"
    >
      <h4
        class="overflow-hidden max-w-full font-medium text-base leading-5"
        style="overflow-wrap: break-word"
      >
        {{ pageProps.name }}
      </h4>
      <div class="inst max-w-full mt-1">
        <span class="flex items-center justify-start">
          <svg fill="currentColor" viewBox="0 0 50 50" class="w-5 h-5 mr-2">
            <path
              d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
            />
          </svg>
          <span class="overflow-hidden" style="overflow-wrap: break-word">{{
            pageProps.instagram
          }}</span>
        </span>
      </div>
    </router-link>
    <div
      class="footer-card relative px-4 py-3 border-t text-gray-400 bg-opacity-75 flex flex-wrap"
    >
      <span
        ><span class="text-gray-800 font-semibold">{{ ctr }}%</span> CTR</span
      >
      <button
        @click="openModal"
        aria-label="form item menu"
        class="absolute top-2 right-4 py-3 px-2 transition-colors duration-300 ease-in-out hover:bg-gray-100 rounded-md focus:outline-none"
      >
        <svg fill="#898989" width="14" height="4" viewBox="0 0 14 4">
          <g transform="rotate(90 7 7)" fill-rule="evenodd">
            <circle cx="2" cy="2" r="1.5"></circle>
            <circle cx="2" cy="7" r="1.5"></circle>
            <circle cx="2" cy="12" r="1.5"></circle>
          </g>
        </svg>
      </button>
      <!-- Modal -->
      <transition name="fade">
        <div
          v-if="isOpen"
          v-click-outside="onClickOutside"
          @click="closeModal"
          class="absolute z-20 bottom-3 left-32 w-44 bg-white py-1 rounded-lg shadow"
        >
          <div class="body-popap mb-1 text-black">
            <div class="hover:bg-gray-200 cursor-pointer">
              <a
                :href="linkToPage"
                target="_blank"
                class="inline-flex items-center px-4 py-2"
              >
                <span>Открыть</span>
                <svg
                  class="ml-3"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="#898989"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.448 0c0 .7365.597 1.3335 1.3335 1.3335h3.722L4.781 8.0555c.586.586 1.5355.586 2.1215 0l5.764-5.764V5.886c0 .7365.597 1.3335 1.3335 1.3335V0H6.448z"
                  ></path>
                  <path
                    d="M9 11.288c0 .6655-.5415 1.207-1.207 1.207H2.707c-.6655 0-1.207-.5415-1.207-1.207V6.202c0-.6655.5415-1.207 1.207-1.207h2.4245l1.5-1.5H2.707C1.212 3.495 0 4.707 0 6.202v5.086c0 1.495 1.212 2.707 2.707 2.707h5.086c1.495 0 2.707-1.212 2.707-2.707V7.405L9 8.905v2.383z"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="hover:bg-gray-200 cursor-pointer">
              <router-link
                :to="{
                  name: 'PageStatistics',
                  params: {
                    id: pageProps.id,
                    url: pageProps.url,
                  },
                }"
                class="inline-block px-4 py-2"
                ><span>Статистика</span></router-link
              >
            </div>
            <div class="hover:bg-gray-200 cursor-pointer">
              <button
                @click="pageDuplicate"
                class="inline-block px-4 py-2 focus:outline-none"
              >
                <span>Дублировать</span>
              </button>
            </div>
            <div class="hover:bg-gray-200 cursor-pointer">
              <button
                type="button"
                @click="copyLink"
                class="inline-block px-4 py-2 focus:outline-none"
              >
                <span :data-urlcopy="linkToPage">Скопировать ссылку</span>
              </button>
            </div>
          </div>
          <div class="footer-popap py-1 border-t text-red-700">
            <div class="hover:bg-gray-200 cursor-pointer">
              <button
                type="button"
                @click="openDelete"
                class="inline-block px-4 py-2 focus:outline-none"
              >
                <span>Удалить</span>
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

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
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters(["allTemplates"]),
    currentTemplate() {
      if (this.allTemplates) {
        return this.allTemplates.find(
          (item) => item.id == this.pageProps.template_id
        );
      } else return { css_class: "template__01" };
    },
    linkInst() {
      return "https://www.instagram.com/" + this.pageProps.instagram;
    },
    linkToPage() {
      return `https://clturbine.site/${this.pageProps.url}`;
    },
    ctr() {
      if (this.pageProps.count_podpis && this.pageProps.count_prosmotr) {
        return (
          this.pageProps.count_podpis / this.pageProps.count_prosmotr
        ).toFixed(2);
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
      this.$emit("copyLinkPage", event.target.dataset.urlcopy)
    },
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    onClickOutside() {
      this.closeModal();
    },
  },
};
</script>

<style lang="postcss" scoped>
.animate {
  @apply transition-colors duration-300;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>