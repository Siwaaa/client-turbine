<template>
  <div
    class="w-full lg:w-3/5 max-w-xl mx-auto sm:overflow-visible overflow-hidden"
  >
    <header class="pb-4">
      <h1 id="title" class="text-2xl font-normal">Домены</h1>
      <span class="text-sm text-gray-600"
        >Процедура подключения домена непростая, но необходимая операция. Без
        нее не получится использовать конверсионные стратегии от facebook на
        устройствах с ios 14.5+</span
      >
    </header>
    <main>
      <h4
        class="
          flex
          justify-between
          items-center
          mb-4
          text-lg
          font-medium
          text-gray-600
        "
      >
        Подключение
        <button type="button" @click="tutorial = true" class="btn btn-save">
          Добавить домен
        </button>
      </h4>

      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md text-sm">
        <span class="text-gray-700 font-medium">Текущие домены</span>
        <div class="w-full overflow-x-auto mt-2">
          <table class="w-full whitespace-no-wrap">
            <thead>
              <tr
                class="
                  text-xs
                  font-semibold
                  tracking-wide
                  text-left text-gray-500
                  uppercase
                  border-b
                  bg-gray-50
                "
              >
                <th class="px-4 py-3">Домен</th>
                <th class="px-4 py-3">Статус</th>
                <th class="px-4 py-3">Действия</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y">
              <tr
                v-for="domain in allDomains"
                :key="domain.id"
                class="text-gray-700"
              >
                <td class="px-4 py-3">
                  <a
                    :href="'http://' + domain.url"
                    target="_blank"
                    class="break-words"
                  >
                    {{ domain.url }}</a
                  >
                </td>
                <td class="px-4 py-3 text-xs">
                  <span
                    v-if="domain.status"
                    class="
                      px-2
                      py-1
                      font-semibold
                      leading-tight
                      text-green-700
                      bg-green-100
                      rounded-full
                    "
                  >
                    Подключен
                  </span>
                  <span
                    v-else
                    class="
                      px-2
                      py-1
                      font-semibold
                      leading-tight
                      text-red-700
                      bg-red-100
                      rounded-full
                    "
                  >
                    Не активен
                  </span>
                </td>
                <td class="px-4 py-3 text-sm flex">
                  <button
                    @click="updateDomain(domain.id)"
                    type="button"
                    title="Обновить статус"
                    class="mr-2 rounded focus:outline-none active:bg-gray-200"
                  >
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
                  <button
                    @click="deleteDomain(domain.id)"
                    type="button"
                    title="Удалить домен"
                    class="rounded focus:outline-none active:bg-gray-200"
                  >
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
          <div
            v-if="Array.isArray(allDomains) && allDomains.length < 1"
            class="w-full h-10 flex justify-center items-center text-gray-400"
          >
            Нет подключенных доменов
          </div>
        </div>
      </div>
    </main>
    <Modal v-if="tutorial" @close="closeModal">
      <template v-slot:header>
        <h2>Подключение своего домена</h2>
      </template>
      <template v-slot:description>
        <div class="text-sm">
          <p>1. Добавьте A-запись в вашем регистраторе домена:</p>
          <div class="flex my-4">
            <span
              class="
                inline-block
                px-4
                py-2
                mr-2
                bg-gray-100
                text-green-800
                font-semibold
                rounded-md
              "
              >{{ ip }}</span
            >
            <button
              type="button"
              @click="copyIP"
              aria="copy"
              class="btn bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
          <form @submit.prevent="addDomain" class="flex items-end">
            <label class="block text-sm mr-2">
              <span class="text-gray-700 font-medium"
                >2. Введите домен в поле ниже:
              </span>
              <input
                v-model="domain"
                @change="checkUrl"
                type="text"
                required
                maxlength="40"
                class="
                  block
                  w-full
                  mt-1
                  text-sm
                  focus:border-black
                  focus:outline-none
                  form-input
                "
                placeholder="domain.ru"
              />
              <span v-if="!urlValid" class="text-xs text-red-600">
                {{ urlValidText }}
              </span>
            </label>
            <button
              type="submit"
              class="btn btn-save mt-2"
              :disabled="!urlValid"
            >
              Подключить
            </button>
          </form>
          <a
            href="https://www.notion.so/ff684025c8bd4111be2ca65ff5e23231"
            target="_blank"
            class="mt-8 btn btn-cancel"
          >
            Подробная инструкция
          </a>
        </div>
      </template>
    </Modal>
    <Modal v-if="isModalOpen" @close="closeModal">
      <template v-slot:header>
        <div v-if="loading" class="flex items-center space-x-2">
          <div class="placeholder-spinner animate-spin"></div>
          <h2>Привязываем домен</h2>
        </div>
        <h2 v-else-if="loadingError">Ошибка</h2>
        <h2 v-else>Успешно!</h2>
      </template>
      <template v-slot:description>
        <p v-if="loading" class="text-sm">
          Этот процесс может занять некоторое время. <br />Рекомендуем не
          закрывать эту страницу
        </p>
        <p v-else-if="loadingError" class="text-sm">
          Домен не удалось привязать к нашим серверам. Вы можете оставить
          заявку, написав в поддержку, и мы в ручном режиме привяжем Ваш домен
        </p>
        <div v-else class="text-sm">
          <p>
            Домен привязан к нашему серверу. <br />
            Сейчас мы генерируем SSL сертификат. Он нужен для того, чтобы
            соединение было безопасным. <br />
            <br />
            Обычно сайт по адресу привязанного домена становится доступен через
            15 минут. Но может потребоваться до 24 часов. Если сайт долгое время
            недоступен, Вы можете написать нам в поддержку
          </p>
          <button type="button" @click="closeModal" class="mt-2 btn btn-save">
            Закрыть окно
          </button>
        </div>
      </template>
    </Modal>
    <!-- Notification -->
    <Notification :notiProps="notiItems" @close="closeNotification">
    </Notification>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Notification from "@/components/Notification.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Modal, Notification },
  name: "Domains",
  data() {
    return {
      ip: "194.67.78.5",
      // cname: "clturbine.site",
      domain: "",
      // modal
      isModalOpen: false,
      loading: true,
      loadingError: false,
      tutorial: false,
      //валидация домена
      urlValid: true,
      urlValidText: "",
      // noti переменные
      notiItems: [],
      loadedAllDomains: false,
    };
  },
  computed: {
    ...mapGetters(["allDomains"]),
  },
  methods: {
    ...mapActions([
      "API_GET_DOMAINS",
      "API_ADD_DOMAIN",
      "API_UPDATE_DOMAIN",
      "API_DELETE_DOMAIN",
    ]),
    checkUrl(e) {
      const res = e.target.value.match(/[a-z0-9-.]/g);
      if (
        res &&
        res.length == e.target.value.length &&
        !e.target.value.includes("client-turbine.ru") &&
        !e.target.value.includes("clturbine.site") &&
        e.target.value.includes(".")
      ) {
        this.urlValid = true;
      } else {
        this.urlValid = false;
        if (
          e.target.value.includes("client-turbine.ru") ||
          e.target.value.includes("clturbine.site")
        ) {
          this.urlValidText = "Недопустимое значение";
        } else if (e.target.value.includes("http")) {
          this.urlValidText = "Без 'http://'";
        } else if (res && !e.target.value.includes(".")) {
          this.urlValidText = "Хм... Это не похоже на домен";
        } else {
          this.urlValidText = "Допустимые символы: 'a-z', '0-9', '-', '.'";
        }
      }
    },
    addDomain() {
      if (this.urlValid) {
        this.isModalOpen = true;
        this.API_ADD_DOMAIN({
          url: this.domain,
        })
          .then(() => (this.loading = false))
          .catch(() => {
            this.loading = false;
            this.loadingError = true;
          });
      }
    },
    updateDomain(id) {
      this.$Progress.start();
      this.API_UPDATE_DOMAIN(id)
        .then(() => this.$Progress.finish())
        .catch(() => this.$Progress.fail());
    },
    deleteDomain(id) {
      this.$Progress.start();
      this.API_DELETE_DOMAIN(id)
        .then(() => this.$Progress.finish())
        .catch(() => this.$Progress.fail());
    },
    // методы modal
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.loading = true;
      this.loadingError = false;
      this.tutorial = false;
    },
    // noti
    copyLinkPage(url) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          this.notiItems.unshift({
            text: "Скопировано",
            type: "success",
            id: Date.now(),
          });
        })
        .catch((err) => {
          console.log("Ошибка копирования ссылки", err);
        });
    },
    closeNotification(index) {
      this.notiItems.splice(index, 1);
    },
    copyIP() {
      navigator.clipboard
        .writeText(this.ip)
        .then(() => {
          this.notiItems.unshift({
            text: "IP-адрес скопирован",
            type: "success",
            id: Date.now(),
          });
        })
        .catch((err) => {
          console.log("Ошибка копирования IP", err);
        });
    },
  },
  created() {
    this.API_GET_DOMAINS().catch((err) =>
      err.status == 401 ? this.$router.push({ name: "Login" }) : false
    );
  },
  // mounted() {
  //   this.allDomains.length ? this.loadedAllDomains = false : this.loadedAllDomains = true
  // }
};
</script>

<style>
</style>