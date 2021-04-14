<template>
  <div class="w-full lg:w-3/5 max-w-xl mx-auto">
    <header class="df pb-4">
      <h1 id="title" class="text-2xl font-normal">Домены</h1>
    </header>
    <main>
      <h4
        class="flex justify-between items-center mb-4 text-lg font-medium text-gray-600"
      >
        Подключение
        <button
          type="button"
          @click="openModal"
          class="flex mr-1 items-center text-sm underline hover:text-black transition duration-300 ease-in focus:outline-none"
        >
          Инструкция
        </button>
      </h4>

      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
        <label class="block text-sm">
          <span class="text-gray-700">Адрес домена </span>
          <input
            v-model="domain"
            type="text"
            required
            maxlength="40"
            class="block w-full mt-1 text-sm focus:border-black focus:outline-none form-input"
            placeholder="domain.ru"
          />
        </label>
        <button type="submit" class="btn btn-save mt-2">Подключить</button>

        <label class="block mt-4 text-sm">
          <span class="text-gray-700">Текущие домены</span>
          <div class="w-full overflow-x-auto">
            <table class="w-full whitespace-no-wrap">
              <thead>
                <tr
                  class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50"
                >
                  <th class="px-4 py-3">Домен</th>
                  <th class="px-4 py-3">Статус</th>
                  <th class="px-4 py-3">Действия</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y">
                <tr class="text-gray-700 dark:text-gray-400">
                  <td class="px-4 py-3">
                    <a href="http://" target="_blank"> sobaka.com </a>
                  </td>
                  <td class="px-4 py-3 text-xs">
                    <span
                      class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                    >
                      Approved
                    </span>
                  </td>
                  <td class="px-4 py-3 text-sm flex">
                    <button class="mr-2">
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </label>
      </div>
    </main>

    <Modal v-if="isModalOpen" @close="closeModal">
      <template v-slot:header>
        <h2>Подключение домена</h2>
      </template>
      <template v-slot:description>
        <div class="text-sm text-gray-700 pb-4">
          <p>
            Если у вас нет доменного имени, вы можете зарегестрирвоать его в
            REG.RU Для подключения сначала добавьте новую А-запись для вашего
            домена с IP, а затем введите ваш домен и нажмите “Подключить домен”,
          </p>

          <label class="block mt-4 text-sm">
            <span class="text-gray-700">A-запись</span>
            <input
              v-model="a"
              type="text"
              required
              readonly
              maxlength="20"
              class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none form-input"
            />
          </label>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  components: { Modal },
  name: "Domains",
  data() {
    return {
      a: "46.4.70.151",
      domain: "",
      // modal
      isModalOpen: false,
    };
  },
  methods: {
    // методы modal
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style>
input:read-only {
  background-color: rgb(225, 225, 225);
}
</style>