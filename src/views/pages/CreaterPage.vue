<template>
  <div class="h-full md:flex md:flex-row flex-col">
    <aside class="md:w-20 z-30 md:h-full w-full h-12 bg-white border-r">
      <div
        class="cont md:block md:w-10 md:shadow-none md:mx-auto md:pt-6 flex shadow"
      >
        <router-link
          title="Редактирование текстов"
          :to="{ name: 'CreaterPage' }"
          class="btn-edit hover:bg-gray-300"
          exact
          active-class="bg-gray-200"
        >
          <svg
            class="h-5 w-6"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.82125 9.95042L0 15.4854l4.92188-2.6606L.82125 9.95042zM10.5243.455416c-.2692-.188828-.57299-.32276-.89399-.394142-.321-.0713824-.65292-.0788167-.97679-.0218781-.32387.0569386-.63334.1771341-.91075.3537191-.2774.176585-.51729.406098-.70596.675425L1.47368 8.99979l4.10063 2.86871 5.56879-7.93121c.379-.54399.5267-1.21612.4107-1.8689-.116-.65278-.4863-1.232874-1.0295-1.612974zM16.3125 16.3123H0c0 .4476.17779.8768.494257 1.1932.316468.3165.745693.4943 1.193243.4943H18c0-.4476-.1778-.8768-.4943-1.1932-.3164-.3165-.7456-.4943-1.1932-.4943z"
            ></path>
          </svg>
        </router-link>
        <router-link
          title="Дизайн-шаблон"
          :to="{ name: 'CreaterPage', hash: '#design' }"
          class="btn-edit hover:bg-gray-300"
          active-class="bg-gray-200"
        >
          <svg
            class="w-4 h-4"
            viewBox="0 0 12 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill-rule="nonzero">
              <path
                d="M12 10c0-3.74-4.18-7.439-6-10-1.82 2.561-6 6.26-6 10a6 6 0 1 0 12 0z"
              ></path>
              <path
                d="M5.59 2.133c-.022.026-1.089 1.288-1.403 1.669C2.026 6.422 1 8.266 1 10a5 5 0 0 0 10 0c0-1.734-1.026-3.578-3.187-6.198-.314-.381-1.38-1.643-1.402-1.669A50.34 50.34 0 0 1 6 1.637a50.34 50.34 0 0 1-.41.496zM12 10a6 6 0 1 1-12 0C0 6.26 4.18 2.561 6 0c1.82 2.561 6 6.26 6 10z"
                class="typeform--svg--secondary__fill"
              ></path>
            </g>
          </svg>
        </router-link>
        <router-link
          title="Настройки"
          :to="{ name: 'CreaterPage', hash: '#settings' }"
          class="btn-edit hover:bg-gray-300"
          active-class="bg-gray-200"
        >
          <svg
            class="w-4 h-4"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4495 8.0005c0-.3345.2295-.667.6455-.9365L16 6.477c-.1025-.5355-.2605-1.0695-.4775-1.593-.217-.524-.483-1.0125-.789-1.4645l-1.0545.2255c-.485.1035-.882.031-1.1185-.2055-.2365-.237-.3095-.633-.206-1.1185l.2245-1.052C11.657.643 10.6155.2115 9.521.002l-.5845.903c-.1855.286-.405.4875-.635.583-.612.254-1.0695-.323-1.238-.583L6.477 0c-.536.1025-1.069.261-1.593.4775-.5235.217-1.0125.482-1.464.7895l.2255 1.054c.064.302.1485 1.034-.4635 1.2875-.23.095-.528.1075-.861.0365L1.269 3.42C.643 4.3425.2115 5.384.002 6.478l.903.586c.4165.269.6455.6015.6455.936-.0005.3345-.2295.667-.6455.937L0 9.5225c.1025.536.2605 1.07.4775 1.593.217.524.483 1.013.789 1.464l1.055-.225c.485-.1035.882-.0305 1.1185.206.236.237.3095.6335.2055 1.1185l-.2245 1.0515c.9215.626 1.964 1.058 3.058 1.267l.5845-.903c.186-.286.405-.4875.6355-.583.612-.2535 1.07.3235 1.238.583L9.523 16c.536-.1025 1.0695-.261 1.593-.4775.524-.2165 1.0125-.4825 1.464-.789l-.2245-1.0535c-.0645-.303-.149-1.0345.463-1.288.23-.0955.528-.108.8615-.037l1.052.2245c.626-.9215 1.057-1.9635 1.267-3.057l-.903-.5855c-.417-.27-.6465-.6025-.6465-.9365zM8 10.6265c-1.4505 0-2.626-1.176-2.626-2.6265C5.374 6.5495 6.55 5.3735 8 5.3735c1.4505 0 2.6265 1.176 2.6265 2.6265 0 1.4505-1.176 2.6265-2.6265 2.6265z"
            ></path>
          </svg>
        </router-link>
      </div>
    </aside>
    <main class="flex w-full h-full">
      <!-- Левая часть -->
      <div
        class="left-workspace flex-none border-r md:w-1/2 w-full overflow-auto"
      >
        <form @submit.prevent="submit" enctype="multipart/form-data">
          <div class="cont px-6 pb-14">
            <!-- Текстовый раздел -->
            <div v-if="$route.hash == ''">
              <header class="h-16 px-4 flex items-center border-b">
                <span class="text-xl font-light">Редактирование текстов</span>
              </header>
              <main class="px-4 max-w-xl">
                <div class="privet py-6 border-b">
                  <div
                    @click="visiblePrivet = !visiblePrivet"
                    class="title flex justify-between items-center cursor-pointer"
                  >
                    <span class="uppercase font-semibold text-sm"
                      >Приветствие</span
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-gray-500 transform"
                      :class="{ 'rotate-180': visiblePrivet }"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div v-if="visiblePrivet" class="body">
                    <label class="block mt-4 text-sm">
                      <span class="text-gray-700"
                        >Заголовок <span class="text-red-800">*</span></span
                      >
                      <input
                        v-model="page.title_ad"
                        type="text"
                        required
                        maxlength="255"
                        class="form-input block w-full mt-1 focus:border-black focus:outline-none"
                        placeholder="Сочный, продающий заголовок"
                      />
                    </label>
                    <label class="block mt-4 text-sm">
                      <span class="text-gray-700">Описание</span>
                      <textarea
                        v-model="page.description_ad"
                        type="text"
                        class="block w-full mt-1 form-textarea focus:border-black focus:outline-none"
                        rows="5"
                        placeholder="Объясните почему стоит забрать материал"
                      ></textarea>
                    </label>
                    <label class="block mt-4 text-sm">
                      <span class="text-gray-700">Картинка для обложки</span>
                      <br />
                      <span class="text-xs text-gray-400"
                        >Рекомендуемый размер 1920х1080</span
                      >
                      <label
                        class="img-unload relative border-dashed border-2 border-gray-200 mt-1 w-full flex flex-col items-center px-4 py-6 rounded-lg cursor-pointer overflow-hidden"
                      >
                        <div
                          v-if="page.srcImg"
                          class="absolute top-0 w-full z-20"
                        >
                          <img
                            :src="page.srcImg"
                            alt="backgroud"
                            class="w-full"
                          />
                          <span
                            @click.capture="deleteImg"
                            class="absolute top-3 right-3 inline-block px-3 py-2 font-medium leading-none text-white transition-colors duration-150 bg-black rounded active:bg-gray-700 hover:bg-gray-800 focus:outline-none z-40"
                            >Удалить</span
                          >
                        </div>

                        <svg
                          class="text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            class="relative cursor-pointer rounded-md font-medium focus-within:outline-none"
                          >
                            <span class="color-accent">Загрузить файл</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              accept="image/png,image/gif,image/jpeg,image/jpg"
                              max-file-size="2097152"
                              @change="setImg"
                              class="sr-only"
                            />
                          </label>
                        </div>
                        <p class="mt-2 text-xs text-gray-900">
                          PNG, JPG, GIF не более 2MB
                        </p>
                      </label>
                    </label>
                    <label class="block mt-4 text-sm">
                      <header class="mb-4 flex justify-between items-center">
                        <span class="text-gray-700">Таймер</span>
                        <switch-comp v-model="page.timer"></switch-comp>
                      </header>
                      <transition name="fade-switch-group">
                        <section v-if="page.timer">
                          <span class="text-gray-700"
                            >Текст таймера
                            <span class="text-red-800">*</span></span
                          >
                          <input
                            v-model="page.timer_text"
                            type="text"
                            required
                            maxlength="40"
                            class="form-input block w-full mt-1 mb-4 text-sm focus:border-black focus:outline-none"
                            placeholder="Материал станет недоступен"
                          />
                          <span class="text-gray-700"
                            >Таймер в секундах
                            <span class="text-red-800">*</span></span
                          >
                          <input
                            v-model="page.timer_sec"
                            type="number"
                            min="1"
                            step="1"
                            required
                            class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
                            placeholder="60"
                          />
                        </section>
                      </transition>
                    </label>
                    <label class="block mt-4 text-sm">
                      <span class="text-gray-700"
                        >Текст на кнопке
                        <span class="text-red-800">*</span></span
                      >
                      <input
                        v-model="page.btn_ad"
                        type="text"
                        required
                        maxlength="32"
                        class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
                        placeholder="Получить материал"
                      />
                    </label>
                  </div>
                </div>
                <div class="uspech py-6 border-b">
                  <div
                    @click="visibleUspech = !visibleUspech"
                    class="title flex justify-between items-center cursor-pointer"
                  >
                    <span class="uppercase font-semibold text-sm">Успех</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-gray-500 transform"
                      :class="{ 'rotate-180': visibleUspech }"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div v-if="visibleUspech" class="body">
                    <label class="block mt-4 text-sm">
                      <span class="text-gray-700 dark:text-gray-400">
                        Заголовок
                        <span class="text-red-800">*</span>
                      </span>
                      <input
                        v-model="page.title_success"
                        type="text"
                        required
                        maxlength="50"
                        class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
                        placeholder="Спасибо за подписку"
                      />
                    </label>
                    <label class="block mt-4 text-sm">
                      <span class="text-gray-700 dark:text-gray-400">
                        Описание
                      </span>
                      <input
                        v-model="page.description_success"
                        class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
                        placeholder="Жми чтобы забрать ..."
                      />
                    </label>
                    <label class="block mt-4 text-sm">
                      <span class="text-gray-700 dark:text-gray-400">
                        Текст на кнопке <span class="text-red-800">*</span>
                      </span>
                      <input
                        v-model="page.btn_success"
                        type="text"
                        required
                        maxlength="32"
                        class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
                        placeholder="Получить"
                      />
                    </label>
                    <!-- Ссылка на скачивание -->
                    <label class="block mt-4 text-sm">
                      <span class="text-gray-700 dark:text-gray-400">
                        Ссылка на скачивание материала
                        <span class="text-red-800">*</span>
                      </span>
                      <input
                        v-model="page.link_download"
                        type="text"
                        required
                        class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
                        placeholder="http:/example.com/"
                      />
                    </label>
                  </div>
                </div>
              </main>
            </div>
            <!-- Дизайн -->
            <div v-else-if="$route.hash == '#design'">
              <header class="h-16 px-4 pt-4 border-b">
                <span class="text-xl font-light">Выбор дизайна</span>
              </header>
              <main class="px-4">
                <div class="flex flex-wrap mt-6">
                  <div
                    v-for="temp in allTemplates"
                    :key="temp.id"
                    @click="setDesign(temp.id)"
                    class="mr-4 mb-6 md:w-36 md:h-40 w-32 h-36 text-sm rounded-lg overflow-hidden shadow ring-blue-600 cursor-pointer"
                    :class="{ ring: page.template_id == temp.id }"
                  >
                    <div
                      class="body-card flex flex-col items-start justify-center h-3/4 p-4"
                      :class="temp.css_class"
                    >
                      <h4
                        class="overflow-hidden max-w-full font-medium text-lg leading-none"
                        style="overflow-wrap: break-word"
                      >
                        Текст
                      </h4>
                      <span class="btn-color mt-2 p-1 rounded text-xs">
                        Кнопка
                      </span>
                    </div>
                    <div
                      class="footer-card h-1/4 flex items-center px-2 border-t text-gray-400 bg-opacity-75"
                    >
                      <span class="text-gray-800 leading-3">{{
                        temp.name
                      }}</span>
                      <!-- Modal -->
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <!-- Внутренние настройки -->
            <div v-else-if="$route.hash == '#settings'">
              <header class="h-16 px-4 pt-4 border-b">
                <span class="text-xl font-light">Внутренние настройки</span>
              </header>
              <main class="px-4">
                <label class="block mt-4 text-sm">
                  <span class="text-gray-700"
                    >Название
                    <span class="text-red-800">*</span>
                  </span>
                  <br />
                  <span class="text-xs text-gray-500">Видно только Вам</span>
                  <input
                    v-model.trim="page.name"
                    type="text"
                    required
                    maxlength="32"
                    class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
                    placeholder="Client turbine"
                  />
                </label>
                <label class="block mt-4 text-sm">
                  <span class="text-gray-700"
                    >Ник в Instagram <span class="text-red-800">*</span></span
                  >
                  <br />
                  <span class="text-xs text-gray-500">Аватар и имя подгрузятся автоматически</span>
                  <div class="relative flex mt-1">
                    <span
                      class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                    >
                      @
                    </span>
                    <input
                      v-model.trim="page.instagram"
                      @change="checkInst"
                      type="text"
                      required
                      maxlength="30"
                      class="form-input-two block w-full text-sm focus:border-black focus:outline-none"
                      placeholder="kevin"
                    />
                  </div>
                  <span v-if="!instValid" class="text-xs text-red-600">
                    {{ instErrorText }}
                  </span>
                  <span v-if="instVisibleStatus" class="text-xs text-black">
                    {{ instStatus }}
                  </span>
                </label>

                <label class="block mt-4 text-sm">
                  <span class="text-gray-700"> Домен </span>
                  <br />
                  <span class="text-xs text-gray-500"
                    >Если подключенных доменов нет, то страница будет на домене
                    clturbine.site</span
                  >
                  <select
                    v-model="page.domain_id"
                    class="form-select block w-full mt-1 text-sm focus:border-black focus:outline-none"
                  >
                    <option disabled value="">
                      Выберите один из вариантов
                    </option>
                    <option selected value="null">clturbine.site</option>
                    <option
                      v-for="domain in allDomains"
                      :key="domain.id"
                      :value="domain.id"
                    >
                      {{ domain.url }}
                    </option>
                  </select>
                </label>
                <label class="block mt-4 text-sm">
                  <span class="text-gray-700">Facebook PIXEL ID</span>
                  <br />
                  <span class="text-xs text-gray-500"
                    >События добавятся автоматически</span
                  >
                  <input
                    v-model="page.fb_pixel"
                    type="text"
                    maxlength="24"
                    class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
                    placeholder="141592653589793"
                  />
                </label>
              </main>
            </div>
          </div>
          <footer
            class="fixed z-20 left-0 bottom-0 w-full h-12 px-4 bg-white border-t"
          >
            <div
              class="w-full h-full flex lg:pl-10 lg:justify-center justify-end items-center space-x-2"
            >
              <router-link :to="{ name: 'Home' }" class="btn btn-cancel">
                Отмена
              </router-link>
              <button type="submit" class="btn btn-save">Сохранить</button>
            </div>
          </footer>
        </form>
      </div>
      <!-- Правая часть -->
      <div
        class="right-workspace flex-grow pt-4 mb-12 hidden md:block overflow-y-auto"
      >
        <Phone :phoneProps="page" />
      </div>
    </main>
    <Notification :notiProps="notiItems" @close="closeNotification">
    </Notification>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Phone from "@/components/Phone.vue";
import Notification from "@/components/Notification.vue";
import SwitchComp from "@/components/SwitchComp.vue";

export default {
  name: "CreaterPage",
  components: { Phone, Notification, SwitchComp },
  data() {
    return {
      page: {
        name: "",
        instagram: "",
        domain_id: null,
        title_ad: "Это пример подписной страницы",
        description_ad:
          "С помощью нее Вы сможете настроить автоматическую выдачу материала за подписку на Instagram\n\nУдачного запуска😉",
        img_cover: "",
        srcImg: null,
        template_id: 1,
        btn_ad: "Получить материал",
        timer: false,
        timer_text: "Материал станет недоступен через:",
        timer_sec: 60,
        fb_pixel: "",
        title_success: "Спасибо за подписку",
        description_success: "Жми на кнопку, чтобы забрать приз",
        btn_success: "Получить материал",
        link_download: "https://t.me/clturbine",
      },
      urlAPI: process.env.VUE_APP_ROOT_API,
      // переменные валидации
      instValid: true,
      instErrorText: "",
      instVisibleStatus: false,
      instStatus: "Идет поиск аккаунта...",
      // перменные отображения
      visiblePrivet: false,
      visibleUspech: false,
      notiItems: [],
    };
  },
  computed: {
    ...mapGetters(["allTemplates", "allDomains"]),
  },
  methods: {
    ...mapActions(["API_ADD_PAGE", "API_GET_TEMPLATES", "API_GET_DOMAINS"]),
    checkInst(e) {
      this.instStatus = "Идет поиск аккаунта...";
      this.instVisibleStatus = true;
      this.instValid = true;

      const inst = e.target.value;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ inst: inst }),
      };
      fetch(`${this.urlAPI}/api/check-inst`, options)
        .then((response) => response.json())
        .then((res) => {
          if (res.success) {
            if (res.data.is_private) {
              this.instVisibleStatus = false;
              this.instErrorText =
                "Аккаунт закрытый, необходимо перевести в открытый";
              this.instValid = false;
            } else {
              this.instValid = true;
              this.instStatus = "Аккаунт найден. Все в порядке ;)";
              setTimeout(() => {
                this.instVisibleStatus = false;
                this.instStatus = "Идет поиск аккаунта...";
              }, 2000);
            }
          } else {
            this.instVisibleStatus = false;
            this.instValid = false;
            this.instErrorText = "Аккаунт не найден";
          }
        });
    },
    setImg(event) {
      let file = event.target.files[0];
      if (file && file.size / 1024 / 1024 < 2) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.page.srcImg = e.target.result;
        };
        reader.readAsDataURL(file);
        this.page.img_cover = file;
      } else {
        alert("Файл больше 2 MB. Попробуйте сжать");
      }
    },
    deleteImg(e) {
      e.preventDefault();
      this.page.srcImg = null;
    },
    setDesign(id) {
      this.page.template_id = id;
    },
    closeNotification(index) {
      this.notiItems.splice(index, 1);
    },

    submit() {
      // проверка валидации
      if (
        !(
          this.page.name &&
          this.instValid &&
          this.page.title_ad &&
          this.page.template_id &&
          this.page.btn_ad &&
          this.page.title_success &&
          this.page.btn_success &&
          this.page.link_download
        )
      ) {
        this.notiItems.unshift({
          text: "Упсс... Не все поля со звездочкой заполнены",
          type: "error",
          id: Date.now(),
        });
        return false;
      }

      this.$Progress.start();
      let formData = new FormData();
      formData.append("img_cover", this.page.img_cover);
      const allData = JSON.stringify({
        name: this.page.name,
        status: 1,
        instagram: this.page.instagram,
        domain_id: this.page.domain_id,
        title_ad: this.page.title_ad,
        description_ad: this.page.description_ad,
        template_id: this.page.template_id,
        btn_ad: this.page.btn_ad,
        timer: this.page.timer,
        timer_text: this.page.timer ? this.page.timer_text : null,
        timer_sec: this.page.timer ? Number(this.page.timer_sec) : null,
        fb_pixel: this.page.fb_pixel,
        title_success: this.page.title_success,
        description_success: this.page.description_success,
        btn_success: this.page.btn_success,
        link_download: this.page.link_download,
      });
      formData.append("data", allData);

      this.API_ADD_PAGE(formData).then(() => {
        this.$router.push({ name: "Home" }), this.$Progress.finish();
      });
    },
  },
  mounted() {
    this.API_GET_TEMPLATES();
    this.API_GET_DOMAINS().catch((err) =>
      err.status == 401 ? this.$router.push({ name: "Login" }) : false
    );
  },
};
</script>

<style lang="postcss">
.btn-edit {
  @apply w-full h-10 mb-2 flex justify-center items-center rounded transition-colors duration-300 ease-in-out;
}
</style>