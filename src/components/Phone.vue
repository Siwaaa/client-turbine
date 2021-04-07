<template>
  <div class="fixed 2xl:right-52 xl:right-32 right-16 w-56">
    <div class="strelki mb-2 flex items-center justify-between">
      <span class="text-lg font-semibold text-gray-600">Предпросмотр</span>
      <div class="inline-flex bg-white text-gray-400 text-sm">
        <button
          :disabled="slide == 1"
          @click="prevSlide"
          class="border border-gray-300 hover:text-gray-300 px-2 rounded-l focus:outline-none disabled:opacity-50"
        >
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          :disabled="slide == 3"
          @click="nextSlide"
          class="border border-l-0 border-gray-300 hover:text-gray-300 px-2 rounded-r focus:outline-none disabled:opacity-50"
        >
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="phone transform scale-50 break-words rounded-xl overflow-x-hidden shadow-lg"
      style="height: 812px; width: 375px"
    >
      <div
        v-if="slide == 1"
        class="template__01 pb-6 relative min-h-full"
        :class="currentTemplate.css_class"
      >
        <div class="img w-full overflow-hidden size z-20">
          <img :src="phoneProps.srcImg" class="w-full" />
        </div>
        <header class="mt-4 px-6">
          <h1 class="text-3xl font-semibold">{{ phoneProps.title_ad }}</h1>
        </header>
        <main class="mt-4 px-6 flex flex-col">
          <div class="decription">
            <p style="white-space: pre-wrap">{{ phoneProps.description_ad }}</p>
          </div>
          <button
            class="btn-color inline-block mx-auto my-6 px-4 py-2 font-medium transition-all duration-300 rounded-lg focus:outline-none"
          >
            {{ phoneProps.btn_ad }}
          </button>

          <label class="inline-block absolute bottom-2 inset-x-0 text-center"
            >Сделано в
            <router-link to="" class="">ClientTurbine</router-link></label
          >
        </main>
      </div>
      <div
        v-else-if="slide == 2"
        class="py-6 px-6 relative min-h-full"
        :class="currentTemplate.css_class"
      >
        <div class="inst w-full flex items-center flex-col">
          <img
            src="@/assets/ava.svg"
            alt="avatar"
            class="h-20 overflow-hidden"
          />
          <h4 class="font-bold mt-2"></h4>
          <span class="flex items-center">
            <svg
              class="inline mr-2"
              viewBox="0 0 48 48"
              width="24px"
              height="24px"
            >
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8ma"
                cx="19.38"
                cy="42.035"
                r="44.899"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#fd5" />
                <stop offset=".328" stop-color="#ff543f" />
                <stop offset=".348" stop-color="#fc5245" />
                <stop offset=".504" stop-color="#e64771" />
                <stop offset=".643" stop-color="#d53e91" />
                <stop offset=".761" stop-color="#cc39a4" />
                <stop offset=".841" stop-color="#c837ab" />
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              />
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8mb"
                cx="11.786"
                cy="5.54"
                r="29.813"
                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#4168c9" />
                <stop offset=".999" stop-color="#4168c9" stop-opacity="0" />
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              />
              <path
                fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              />
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
              <path
                fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
              /></svg
            >{{ phoneProps.instagram }}
          </span>
        </div>
        <main class="mt-36">
          <!-- Первый вариант -->
          <form
            v-if="!checkFirstScreen"
            class="input-container w-full mt-4 text-center"
          >
            <h2 class="font-bold text-xl leading-5">
              Подпишись на мой инстаграм и ссылка для скачивания материалов
              станет доступна
            </h2>
            <a
              href="#"
              class="btn-color inline-block w-full mt-6 px-4 py-2 font-medium transition-colors duration-150 rounded-lg focus:outline-none"
            >
              Подписаться
            </a>
            <button
              @click.prevent="checkFirstScreen = true"
              type="button"
              class="inline w-full mt-2 underline"
            >
              Я подписался
            </button>
          </form>
          <!-- Второй вариант -->
          <form
            @submit.prevent
            v-else
            class="input-container w-full mt-4 text-center"
          >
            <h2 class="font-bold text-xl leading-5">
              Введите ваш логин инстаграма для проверки подписки:
            </h2>
            <input
              type="text"
              maxlength="24"
              required
              class="w-full form-input mt-6 text-black focus:outline-none"
              style="line-height: 1"
            />
            <button
              type="button"
              class="btn-color inline-block w-full mt-2 px-4 py-2 font-medium transition-colors duration-150 rounded-lg focus:outline-none"
            >
              Проверить
            </button>
            <a
              @click.prevent="checkFirstScreen = false"
              class="inline-block w-full mt-2 underline"
            >
              Не подписан?
            </a>
          </form>

          <label class="inline-block absolute bottom-2 inset-x-0 text-center"
            >Сделано в
            <router-link to="" class="">ClientTurbine</router-link></label
          >
        </main>
      </div>
      <div
        v-else-if="slide == 3"
        class="px-4 relative min-h-full flex items-center"
        :class="currentTemplate.css_class"
      >
        <div
          class="card flex flex-col w-full items-center p-4 rounded-lg bg-white bg-opacity-10 shadow-2xl"
        >
          <h4 class="mb-4 font-semibold">{{ phoneProps.title_success }}</h4>
          <p class="">
            {{ phoneProps.description_success }}
          </p>
          <a
            href="#"
            class="btn-color inline-block mx-auto mt-6 px-4 py-2 font-medium transition-colors duration-150 rounded-lg focus:outline-none"
            >{{ phoneProps.btn_success }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Phone",
  props: {
    phoneProps: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      slide: 1,
      checkFirstScreen: false,
    };
  },
  computed: {
    ...mapGetters(["allTemplates"]),
    currentTemplate() {
      if (this.allTemplates) {
        return this.allTemplates.find((item) => item.id == this.phoneProps.template_id);
      } else return { css_class: "template__01" };
    },
  },
  methods: {
    prevSlide() {
      if (this.slide > 1) {
        this.slide--;
      }
    },
    nextSlide() {
      if (this.slide < 3) {
        this.slide++;
      }
    },
  },
};
</script>

<style scoped>
.phone {
  position: relative;
  top: -180px;
  left: -70px;
}
</style>