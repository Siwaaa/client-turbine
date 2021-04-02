<template>
  <div>
    <header class="pb-4 mb-4">
      <h1 class="text-4xl font-semibold">Редактирование страницы</h1>
    </header>
    <main class="h-full flex pb-16 overflow-y-auto">
      <form
        @submit.prevent="submit"
        enctype="multipart/form-data"
        class="container px-6 mx-auto flex-grow"
      >
        <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          Внутренние настройки
        </h4>
        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
          <label class="block text-sm">
            <span class="text-gray-700 dark:text-gray-400"
              >Название
              <span class="text-purple-700">*</span>
            </span>
            <input
              v-model.trim="name"
              type="text"
              required
              maxlength="32"
              class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
              placeholder="Client turbine"
            />
          </label>

          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400"
              >Ссылка на страницу <span class="text-purple-700">*</span></span
            >
            <div class="relative flex mt-1">
              <span
                class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
              >
                http://domains/page/
              </span>
              <input
                v-model.trim="url"
                @change="checkUrl"
                type="text"
                required
                maxlength="20"
                class="block w-full text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input-two"
                placeholder="polet-normalny"
              />
            </div>
            <span v-if="!urlValid" class="text-xs text-red-600">
              Допустимые символы: "a-z", "0-9", "-", "_"
            </span>
          </label>
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400"
              >Ник в Instagram <span class="text-purple-700">*</span></span
            >
            <input
              v-model="instagram"
              @change="checkInst"
              type="text"
              required
              maxlength="50"
              class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
              placeholder="Bred Pit"
            />
            <span v-if="!instValid" class="text-xs text-red-600">
              {{ instErrorText }}
            </span>
          </label>

          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400"> Домен </span>
            <select
              v-model="domain_id"
              class="block w-full mt-1 form-select focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <option disabled value="">Выберите один из вариантов</option>
            </select>
          </label>
        </div>
        <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          Страница приветствия
        </h4>
        <div
          class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          <label class="block text-sm">
            <span class="text-gray-700 dark:text-gray-400"
              >Заголовок <span class="text-purple-700">*</span></span
            >
            <input
              v-model="title_ad"
              type="text"
              required
              maxlength="255"
              class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
              placeholder="Подпишись"
            />
          </label>
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400">Описание</span>
            <textarea
              v-model="description_ad"
              type="text"
              class="block w-full mt-1 text-sm form-textarea focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
              rows="3"
              placeholder="Тут братан нужно продать"
            ></textarea>
          </label>
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400"
              >Картинка для обложки</span
            >
            <label
              class="img-unload relative border-dashed border-2 border-gray-200 mt-1 w-full flex flex-col items-center px-4 py-6 rounded-lg cursor-pointer overflow-hidden"
            >
              <div v-if="srcImg" class="absolute top-0 w-full z-30">
                <img :src="srcImg" alt="backgroud" class="w-full" />
                <span
                  @click.capture="deleteImg"
                  class="absolute top-3 right-3 inline-block px-3 py-1 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none z-40"
                  >Удалить</span
                >
              </div>

              <svg
                class="text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                >
                  <span>Загрузить файл</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    accept="image/png,image/gif,image/jpeg,image/jpg"
                    max-file-size="5242880"
                    @change="setImg"
                    class="sr-only"
                  />
                </label>
              </div>
              <p class="text-xs text-gray-500">PNG, JPG, GIF не более 5MB</p>
            </label>
          </label>

          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400">
              Дизайн-шаблон
            </span>
            <select
              v-model="template_id"
              class="block w-full mt-1 form-select focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <option disabled value="">Выберите один из вариантов</option>
              <option v-for="template in allTemplates" :key="template.id">
                {{ template.id }}
              </option>
            </select>
          </label>
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400"
              >Текст на кнопке <span class="text-purple-700">*</span></span
            >
            <input
              v-model="btn_ad"
              type="text"
              required
              maxlength="30"
              class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
              placeholder="Получить материал"
            />
          </label>
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400">Facebook PIXEL</span>
            <textarea
              v-model="fb_pixel"
              type="text"
              class="block w-full mt-1 text-sm form-textarea focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
              rows="3"
              placeholder="Должно начинаться так: "
            ></textarea>
          </label>
        </div>

        <!-- Validation inputs -->
        <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          Страница Успеха
        </h4>
        <div
          class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          <!-- Invalid input -->
          <label class="block text-sm">
            <span class="text-gray-700 dark:text-gray-400">
              Заголовок
              <span class="text-purple-700">*</span>
            </span>
            <input
              v-model="title_success"
              type="text"
              required
              maxlength="60"
              class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
              placeholder="Спасибо за подписку"
            />
          </label>

          <!-- Valid input -->
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400"> Описание </span>
            <input
              v-model="description_success"
              class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
              placeholder="Описание"
            />
          </label>
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400">
              Текст на кнопке <span class="text-purple-700">*</span>
            </span>
            <input
              v-model="btn_success"
              type="text"
              required
              maxlength="40"
              class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
              placeholder="Получить материалы"
            />
          </label>
          <!-- Ссылка на скачивание -->
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400">
              Ссылка на скачивание материала
            </span>
            <input
              v-model="link_download"
              type="text"
              required
              class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
              placeholder="http:/example.com/"
            />
          </label>
        </div>
        <div class="flex justify-end">
          <router-link
            :to="{ name: 'Home' }"
            class="inline-block mr-4 px-5 py-3 font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500"
          >
            Отменить
          </router-link>
          <button
            type="submit"
            :disabled="disabled"
            class="inline-block disabled:opacity-50 px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          >
            Сохранить
          </button>
        </div>
      </form>
      <section class="flex-none min-w-max w-5/12 hidden lg:block">
        <div class="fixed 2xl:right-52 xl:right-32 right-16 w-56">
          <div class="strelki mb-2 flex items-center justify-between">
            <span class="text-lg font-semibold text-gray-600"
              >Предпросмотр</span
            >
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
            class="phone w-full rounded-xl overflow-x-hidden shadow-lg"
            style="height: 30rem"
          >
            <div
              v-if="slide == 1"
              class="template__01 pb-6 relative min-h-full"
              :class="currentTemplate.css_class"
            >
              <div class="img w-full overflow-hidden size z-20">
                <img :src="srcImg" class="w-full" />
              </div>
              <header class="mt-4 px-4">
                <h1 class="text-xl font-semibold">{{ title_ad }}</h1>
              </header>
              <main class="mt-4 px-4 flex flex-col text-xs">
                <div class="decription">
                  {{ description_ad }}
                </div>
                <button
                  class="btn-color inline-block mx-auto my-6 px-4 py-2 font-medium transition-all duration-300 rounded-lg focus:outline-none"
                >
                  {{ btn_ad }}
                </button>

                <label
                  class="inline-block absolute bottom-2 inset-x-0 text-center"
                  >Сделано в
                  <router-link to="" class="">ClientTurbine</router-link></label
                >
              </main>
            </div>
            <div
              v-else-if="slide == 2"
              class="py-6 px-4 relative min-h-full text-xs"
              :class="currentTemplate.css_class"
            >
              <div class="inst w-full flex items-center flex-col">
                <img
                  src="@/assets/ava.svg"
                  alt="avatar"
                  class="h-10 overflow-hidden"
                />
                <h4 class="font-bold mt-2">Full name</h4>
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
                      <stop
                        offset=".999"
                        stop-color="#4168c9"
                        stop-opacity="0"
                      />
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
                  >{{ instagram }}
                </span>
              </div>
              <main class="mt-12">
                <!-- Первый вариант -->
                <form
                  v-if="!checkFirstScreen"
                  class="input-container w-full mt-4 text-center"
                >
                  <h2 class="font-bold text-sm leading-4">
                    Подпишись на мой инстаграм и ссылка для скачивания
                    материалов станет доступна
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
                  <h2 class="font-bold text-sm leading-4">
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

                <label
                  class="inline-block absolute bottom-2 inset-x-0 text-center"
                  >Сделано в
                  <router-link to="" class="">ClientTurbine</router-link></label
                >
              </main>
            </div>
            <div
              v-else-if="slide == 3"
              class="px-4 relative text-xs min-h-full flex items-center"
              :class="currentTemplate.css_class"
            >
              <div
                class="card flex flex-col w-full items-center p-4 rounded-lg bg-white bg-opacity-10 shadow-2xl"
              >
                <h4 class="mb-4 font-semibold">{{ title_success }}</h4>
                <p class="">
                  {{ description_success }}
                </p>
                <a
                  href="#"
                  class="btn-color inline-block mx-auto mt-6 px-4 py-2 font-medium transition-colors duration-150 rounded-lg focus:outline-none"
                  >{{ btn_success }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PageEdit",
  data() {
    return {
      id: "",
      name: "",
      url: "",
      instagram: "",
      domain_id: "",
      title_ad: "",
      description_ad: "",
      img_cover: "",
      template_id: "",
      btn_ad: "",
      timer: "",
      fb_pixel: "",
      title_success: "",
      description_success: "",
      btn_success: "",
      link_download: "",
      // переменные валидации
      urlValid: true,
      instValid: true,
      instErrorText: "",
      urlAPI: process.env.VUE_APP_ROOT_API,
      srcImg: null,
      slide: 1,
      checkFirstScreen: false,
    };
  },
  computed: {
    ...mapGetters(["allPages", "allTemplates"]),
    searchPageObj() {
      return this.allPages.find((item) => item.url == this.$route.params.url);
    },
    disabled() {
      return Boolean(!(this.urlValid && this.instValid));
    },
    currentTemplate() {
      if (this.allTemplates) {
        return this.allTemplates.find((item) => item.id == this.template_id);
      } else return { css_class: "template__01" };
    },
  },
  methods: {
    ...mapActions(["API_UPDATE_PAGE", "API_GET_TEMPLATES"]),
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
    checkUrl(e) {
      const res = e.target.value.match(/[a-z0-9_-]/g);
      res && res.length == e.target.value.length
        ? (this.urlValid = true)
        : (this.urlValid = false);
    },
    checkInst(e) {
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
            res.data.is_private
              ? ((this.instErrorText =
                  "Аккаунт закрытый, необходимо перевести в открытый"),
                (this.instValid = false))
              : (this.instValid = true);
          } else {
            this.instValid = false;
            this.instErrorText = "Аккаунт не найден";
          }
        });
    },
    setImg(event) {
      let file = event.target.files[0];
      console.log(file);
      if (file && file.size / 1024 / 1024 < 5) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.srcImg = e.target.result;
        };
        reader.readAsDataURL(file);
        this.img_cover = file;
      } else {
        alert("Файл больше 5 MB. Попробуйте сжать");
      }
    },
    deleteImg(e) {
      e.preventDefault();
      this.srcImg = null;
    },
    submit() {
      let formData = new FormData();
      formData.append("_method", "PUT");
      formData.append("img_cover", this.img_cover);
      const allData = JSON.stringify({
        id: this.id,
        name: this.name,
        status: 1,
        url: this.url,
        instagram: this.instagram,
        domain_id: this.domain_id,
        title_ad: this.title_ad,
        description_ad: this.description_ad,
        img_cover: this.srcImg ? this.img_cover : null,
        template_id: this.template_id,
        btn_ad: this.btn_ad,
        timer: this.timer,
        fb_pixel: this.fb_pixel,
        title_success: this.title_success,
        description_success: this.description_success,
        btn_success: this.btn_success,
        link_download: this.link_download,
      });
      formData.append("data", allData);

      this.API_UPDATE_PAGE(formData);
      this.$router.push({ name: "Home" });
    },
  },
  created() {
    this.id = this.searchPageObj.id;
    this.name = this.searchPageObj.name;
    this.url = this.searchPageObj.url;
    this.instagram = this.searchPageObj.instagram;
    this.domain_id = this.searchPageObj.domain_id;
    this.title_ad = this.searchPageObj.title_ad;
    this.description_ad = this.searchPageObj.description_ad;
    this.img_cover = this.searchPageObj.img_cover;
    this.template_id = this.searchPageObj.template_id;
    this.btn_ad = this.searchPageObj.btn_ad;
    this.timer = this.searchPageObj.timer;
    this.fb_pixel = this.searchPageObj.fb_pixel;
    this.title_success = this.searchPageObj.title_success;
    this.description_success = this.searchPageObj.description_success;
    this.btn_success = this.searchPageObj.btn_success;
    this.link_download = this.searchPageObj.link_download;
    if (this.searchPageObj.img_cover) {
      // (this.srcImg = this.urlAPI + "/images/" + this.img_cover),
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch(`${this.urlAPI}/api/${this.searchPageObj.url}/img`, options)
        .then((response) => response.json())
        .then((res) => {
          if (res.success) {
            this.srcImg = res.img;
          }
        });
    } else {
      this.srcImg = null;
    }
  },
  mounted() {
    this.API_GET_TEMPLATES();
  },
};
</script>

<style>
</style>