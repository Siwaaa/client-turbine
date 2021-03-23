<template>
  <div>
    <header class="pb-4 mb-4">
      <h1 class="text-4xl font-semibold">Создание страницы</h1>
      <!-- <button @click="$router.back()">Назад</button> -->
    </header>
    <main class="h-full pb-16 overflow-y-auto">
      <form
        @submit.prevent="submit"
        enctype="multipart/form-data"
        class="container px-6 mx-auto grid"
      >
        <h4 class="mb-4 text-lg font-semibold text-gray-600">
          Внутренние настройки
        </h4>
        <div
          class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md"
        >
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
                http://domains.com/
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
              v-model.trim="instagram"
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
              <option>$1,000</option>
              <option>$5,000</option>
              <option>$10,000</option>
              <option>$25,000</option>
            </select>
          </label>

          <!-- <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400">Message</span>
            <textarea
              class="block w-full mt-1 text-sm form-textarea focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
              rows="3"
              placeholder="Enter some long form content."
            ></textarea>
          </label> -->

          <!-- <div class="flex mt-6 text-sm">
            <label class="flex items-center dark:text-gray-400">
              <input
                type="checkbox"
                class="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 checked:bg-blue-600 checked:border-transparent appearance-none"
              />
              <span class="ml-2">
                I agree to the
                <span class="underline">privacy policy</span>
              </span>
            </label>
          </div> -->
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
              <option>$1,000</option>
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
              maxlength="32"
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
              maxlength="50"
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
              maxlength="32"
              class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
              placeholder="Получить материалы"
            />
          </label>
          <!-- Ссылка на скачивание -->
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400">
              Ссылка на скачивание материала
              <span class="text-purple-700">*</span>
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

        <button
          type="submit"
          :disabled="disabled"
          class="inline-block disabled:opacity-50 px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          Создать
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreatePage",
  data() {
    return {
      name: "",
      url: "",
      instagram: "",
      domain_id: null,
      title_ad:
        "Подпишись на мой инстаграм и ссылка для скачивания материалов станет доступна",
      description_ad: "",
      img_cover: "",
      srcImg: null,
      template_id: 1,
      btn_ad: "Получить материал",
      timer: 0,
      fb_pixel: "",
      title_success: "Спасибо за подписку",
      description_success: "",
      btn_success: "Получить материал",
      link_download: "",
      // переменные валидации
      urlValid: true,
      instValid: true,
      instErrorText: "",
    };
  },
  computed: {
    disabled: function() {
      return Boolean(!(this.urlValid && this.instValid));
    }
  },
  methods: {
    ...mapActions(["API_ADD_PAGE"]),
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
      fetch("http://127.0.0.1:8000/api/check-inst", options)
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
      formData.append("img_cover", this.img_cover);
      // fetch("http://127.0.0.1:8000/api/file-upload", {
      //   mode: "no-cors",
      //   method: "POST",
      //   body: formData,
      // });
      const allData = JSON.stringify({
        name: this.name,
        status: 1,
        url: this.url,
        instagram: this.instagram,
        domain_id: this.domain_id,
        title_ad: this.title_ad,
        description_ad: this.description_ad,
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

      this.API_ADD_PAGE(formData);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>

</style>