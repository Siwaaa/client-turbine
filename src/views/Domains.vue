<template>
  <div class="a">
    <header class="df pb-4">
      <h1 id="title" class="text-2xl font-normal">Домены</h1>
    </header>
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      Подключение домена
    </h4>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <label class="block text-sm">
        <span class="text-gray-700 dark:text-gray-400">Адрес домена </span>
        <input
          v-model="domain"
          type="text"
          required
          maxlength="40"
          class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
          placeholder="Client turbine"
        />
      </label>
      <button
        type="submit"
        class="inline-block mt-4 px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
      >
        Подключить
      </button>

      <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">Текущие домены</span>
        <div class="w-full overflow-x-auto">
          <table class="w-full whitespace-no-wrap">
            <thead>
              <tr
                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
              >
                <th class="px-4 py-3">Домен</th>
                <th class="px-4 py-3">Статус</th>
                <th class="px-4 py-3">Действия</th>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
            >
              <tr class="text-gray-700 dark:text-gray-400">
                <td class="px-4 py-3">
                  <a href="http://" target="_blank"> sobaka.com </a>
                </td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
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
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      Если домена еще нет
    </h4>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p>
        Если у вас нет доменного имени, вы можете зарегестрирвоать его в REG.RU
        Для подключения сначала добавьте новую А-запись для вашего домена с IP,
        а затем введите ваш домен и нажмите “Подключить домен”,
      </p>

      <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">A-запись</span>
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
  </div>
</template>

<script>
export default {
  name: 'Domains',
  data() {
    return {
      a: '46.4.70.151',
      domain: '',
    }
  }
};
</script>

<style>
input:read-only {
  background-color: rgb(225, 225, 225);
}
</style>