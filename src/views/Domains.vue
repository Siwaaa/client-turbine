<template>
  <div
    class="w-full lg:w-3/5 max-w-xl mx-auto sm:overflow-visible overflow-hidden"
  >
    <header class="pb-4">
      <h1 id="title" class="text-2xl font-normal">Домены</h1>
      <span class="text-sm text-gray-600"
        >Процедура подключения домена непростая, но необходимая операция. Без
        нее не получится использовать конверсионные стратегии от facebook</span
      >
    </header>
    <main>
      <h4
        class="flex justify-between items-center mb-4 text-lg font-medium text-gray-600"
      >
        Подключение
        <button
          type="button"
          class="flex items-center text-sm underline hover:text-black transition duration-300 ease-in focus:outline-none"
        >
          Инструкция
        </button>
      </h4>

      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
        <form @submit.prevent="addDomain">
          <label class="block text-sm">
            <span class="text-gray-700">Адрес домена </span>
            <input
              v-model="domain"
              @change="checkUrl"
              type="text"
              required
              maxlength="40"
              class="block w-full mt-1 text-sm focus:border-black focus:outline-none form-input"
              placeholder="domain.ru"
            />
            <span v-if="!urlValid" class="text-xs text-red-600">
              {{ urlValidText }}
            </span>
          </label>
          <button type="submit" class="btn btn-save mt-2" :disabled="!urlValid">
            Подключить
          </button>
        </form>

        <div class="block mt-4 text-sm">
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
                      class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                    >
                      Подключен
                    </span>
                    <span
                      v-else
                      class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full"
                    >
                      Не активен
                    </span>
                  </td>
                  <td class="px-4 py-3 text-sm flex">
                    <button
                      @click="updateDomain(domain.id)"
                      type="button"
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
          </div>
        </div>
      </div>
      <div id="tutorial" class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
        <h2>Подключение домена</h2>
        <div class="text-sm text-gray-800 pb-4">
          <h3 class="text-black text-base font-medium">
            Первый этап. Привязка домена к нашему серверу
          </h3>
          <span class="text-xs text-gray-600"
            >Если у вас нет доменного имени, то можете зарегистрировать его в
            <a
              href="https://www.reg.ru/domain/new/?rlink=reflink-6539197"
              target="_blank"
              class="underline"
              >REG.RU</a
            >
          </span>
          <ul class="my-2 ml-4">
            <li>
              1. Перейдите в раздел с доменами в личном кабинете вашего
              регистратора и выберите редактирование DNS записей (ресурсные
              записи).
            </li>
            <li>
              2. Добавьте новые записи
              <br />
              <p class="text-xs text-gray-600">
                Для привязки основного домена необходимо сначала удалить записи:
                А, АААА, CNAME.
              </p>
              <br />
              Для доменов первого уровня:
              <label class="relative block w-64 text-sm">
                <span class="text-xs text-gray-600">Создайте А-запись</span>
                <input
                  v-model="ip"
                  type="text"
                  required
                  readonly
                  maxlength="20"
                  class="block w-full mt-1 text-sm focus:outline-none form-input"
                />
                <button
                  type="button"
                  @click="copyLinkPage(ip)"
                  class="absolute bottom-0 right-0 btn btn-save"
                >
                  Скопировать
                </button>
              </label>
              <p class="text-xs text-gray-600">
                Поле 'subdomain' оставляем пустым или добавляем символ '@'
                (зависит от регистратора)
              </p>
              <br />
              Для поддоменов:
              <label class="relative block w-64 text-sm">
                <span class="text-xs text-gray-600">Создайте CNAME-запись</span>
                <input
                  v-model="cname"
                  type="text"
                  required
                  readonly
                  maxlength="20"
                  class="block w-full mt-1 text-sm focus:outline-none form-input"
                />
                <button
                  type="button"
                  @click="copyLinkPage(cname)"
                  class="absolute bottom-0 right-0 btn btn-save"
                >
                  Скопировать
                </button>
              </label>
            </li>
            <li></li>
            <li></li>
          </ul>
          <h3 class="text-black text-base font-medium">
            Второй этап. Подтверждение домена для Facebook
          </h3>
          <span class="text-xs"
            >Добавьте текстовую запись TXT в хост вашего домена, чтобы
            подтвердить, что домен принадлежит вам.</span
          >
          <ul class="mt-2 ml-4">
            <li>
              1. Перейдите в раздел "Подтверждени DNS" аккаунта Facebook:
              "Настройки" -> "Безопасность бренда" -> "Домены"
            </li>
            <li>
              2. Добавьте домен или поддомен. После перейдите во вкладку
              "Подтверждение DNS". Скопируйте текстовую запись.
            </li>
            <li>
              3. В личном кабинете регистратора в разделе редактирования DNS
              записей создайте запись TXT и вставьте скопированный текст.
              Добавьте @ в поле 'subdomain', если это является обязательным
              требованием
            </li>
            <li class="text-xs text-gray-600">
              Примечание: Как правило, это изменение занимает всего несколько
              минут, однако бывают случаи, когда оно может занять до 72 часов.
            </li>
          </ul>
        </div>
      </div>
    </main>

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
            Сейчас мы генерируем SSL сертификат. Он нужен для того чтобы
            соединение было безопасным. <br />
            <br />
            Обычно сайт по адресу привязанного домена становится доступен через
            15 минут. Но может потребовать до 24 часов. Если сайт долгое время
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
      ip: "46.4.70.151",
      cname: "clturbine.site",
      domain: "",
      // modal
      isModalOpen: false,
      loading: true,
      loadingError: false,
      //валидация домена
      urlValid: true,
      urlValidText: "",
      // noti переменные
      notiItems: [],
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
    },
    // noti
    copyLinkPage(url) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          this.notiItems.unshift({text: 'Скопировано', id: Date.now()})
        })
        .catch((err) => {
          console.log("Ошибка копирования ссылки", err);
        });
    },
    closeNotification(index) {
      this.notiItems.splice(index, 1)
    },
  },
  mounted() {
    this.API_GET_DOMAINS();
  },
};
</script>

<style>
</style>