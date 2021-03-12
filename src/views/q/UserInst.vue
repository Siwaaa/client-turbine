<template>
  <div
    class="pb-6 px-6 relative md:flex min-h-screen md:h-full md:shadow-lg md:rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
  >
    <div class="inst w-full flex items-center flex-col">
      <img src="" alt="" />
      <h4>Kaled slad</h4>
      <span>
        <svg class="inline mr-2" viewBox="0 0 48 48" width="24px" height="24px">
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
        >kaled slad
      </span>
    </div>
    <main class="">
      <!-- Первый вариант -->
      <form v-if="ds" class="input-container w-full mt-4">
        <h2 class="font-bold">
          Подпишись на мой инстаграм и ссылка для скачивания материалов станет
          доступна
        </h2>
        <a
          href=""
          target="_black"
          class="inline-block text-center w-full px-4 py-2 font-medium text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none"
        >
          Подписаться
        </a>
        <button class="inline w-full underline text-center">Я подписался</button>
        <!-- Modal -->
        <div
          v-show="isModalOpen"
          @click.self="closeModal"
          class="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
        >
          <div
            @keydown.escape="closeModal"
            class="w-full px-6 py-4 z-50 overflow-hidden bg-white rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-xl"
            role="dialog"
            id="modal"
          >
            <!-- Modal body -->
            <div class="mt-4 mb-6">
              <!-- Modal description -->
              <p class="text-sm text-gray-700 dark:text-gray-400">
                После подписки на инст вернитесь на эту страницу
              </p>
            </div>
          </div>
        </div>
        
      </form>
      <!-- Второй вариант -->
      <form v-else class="input-container w-full mt-4">
        <h2>Введите ваш логин инстаграма для проверки подписки:</h2>
        <input type="text" class="w-full form-input" v-model="inst" />
        <button
          class="inline-block w-full px-4 py-2 font-medium text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none"
        >
          Я подписался
        </button>

        После подписки на инст вернитесь на эту страницу
      </form>

      <label class="inline-block absolute bottom-2 inset-x-0 text-center"
        >Сделано в
        <router-link to="" class="">ClientTurbine</router-link></label
      >
    </main>
  </div>
</template>

<script>
export default {
  name: "UserInst",
  data() {
    return {
      ds: true,
      isModalOpen: false,
      inst: "",
    };
  },
  methods: {
    closeModal() {
      this.isModalOpen = false;
    },
  }
};
</script>

<style>
.size {
  max-height: calc(100vw / 16 * 9 / 2);
}
@media (max-width: 640px) {
  .size {
    max-height: calc(100vw / 16 * 9);
  }
}
</style>