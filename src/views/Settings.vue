<template>
  <div class="w-full lg:w-3/5 max-w-xl mx-auto">
    <header class="df pb-4">
      <h1 id="title" class="text-2xl font-medium">Настройки аккаунта</h1>
    </header>
    <div class="px-6 py-8 mb-8 bg-white rounded-lg shadow-md divide-y">
      <div class="item w-full">
        <div class="flex items-center">
          <div
            class="flex items-center justify-center w-10 h-10 mr-3 rounded-full shadow-sm bg-green-300"
          >
            <span class="font-bold text-lg text-white">{{
              name ? name[0].toUpperCase() : "C"
            }}</span>
          </div>
          <div>
            <p class="text-gray-800">{{ name }}</p>
          </div>
        </div>
        <button
          type="button"
          name="name"
          @click="openModal"
          class="inline-block mt-4 mb-6 px-3 py-2 text-sm leading-none text-black transition-colors duration-150 bg-gray-200 border border-transparent rounded active:bg-gray-600 hover:bg-gray-100 focus:outline-none"
        >
          Изменить имя
        </button>
      </div>
      <div class="item w-full pt-4">
        <div class="flex flex-col text-sm">
          <h3 class="text-gray-700 uppercase">Email</h3>
          <span class="text-gray-500">Текущий: {{ emailLocal }}</span>
        </div>

        <button
          type="button"
          name="email"
          @click="openModal"
          class="inline-block mt-4 mb-6 px-3 py-2 text-sm leading-none text-black transition-colors duration-150 bg-gray-200 border border-transparent rounded active:bg-gray-600 hover:bg-gray-100 focus:outline-none"
        >
          Изменить email
        </button>
      </div>
      <div class="item w-full pt-4">
        <div class="flex flex-col text-sm">
          <h3 class="text-gray-700 uppercase">Пароль</h3>
          <span class="text-gray-500"
            >После смены пароля все текущие сессии будут закрыты. Чтобы заново
            войти в сервис, используйте новый пароль</span
          >
        </div>

        <button
          type="button"
          name="pass"
          @click="openModal"
          class="inline-block mt-4 mb-6 px-3 py-2 text-sm leading-none text-black transition-colors duration-150 bg-gray-200 border border-transparent rounded active:bg-gray-600 hover:bg-gray-100 focus:outline-none"
        >
          Сменить
        </button>
      </div>
    </div>
    <Modal>
      <template v-slot:header>
        <h1>Смена имени</h1>
      </template>
      <template v-slot:description="desProps">
        <form @submit.prevent="updateNameEmail" class="py-3 text-gray-800">
          <label class="block">
            <span>Никнейм </span>
            <input
              v-model="nameLocal"
              type="text"
              required
              maxlength="40"
              class="block w-full mt-1 text-sm focus:border-black focus:outline-none form-input"
              placeholder="Client turbine"
            />
          </label>

          <label class="block mt-2">
            <span>Email</span>
            <input
              v-model="emailLocal"
              type="text"
              required
              maxlength="20"
              class="block w-full mt-1 text-sm focus:border-black focus:outline-none form-input"
              placeholder="email@ex.com"
            />
          </label>
          <div class="w-full flex justify-end">
            <button
              type="button"
              @click.prevent="desProps.close"
              class="inline-block mt-4 mr-2 px-3 py-2 text-sm leading-none text-black transition-colors duration-150 bg-gray-200 border border-transparent rounded active:bg-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              Отмена
            </button>
            <button
              type="submit"
              class="inline-block mt-4 px-3 py-2 text-sm leading-none text-white transition-colors duration-150 bg-black border border-transparent rounded active:bg-gray-600 hover:bg-gray-900 focus:outline-none"
            >
              Сохранить
            </button>
          </div>
        </form>
      </template>
    </Modal>
    <Modal>
      <template v-slot:header>
        <h1>Смена имени</h1>
      </template>
      <template v-slot:description="desProps">
        <form @submit.prevent="updatePassword" class="py-3 text-gray-800">
          <label class="block">
            <span>Старый пароль </span>
            <input
              v-model="password"
              type="password"
              required
              maxlength="40"
              class="block w-full mt-1 text-sm focus:border-black focus:outline-none form-input placeholder-gray-300"
              placeholder="***********"
            />
          </label>

          <label class="block mt-4">
            <span class="text-gray-700 dark:text-gray-400">Новый пароль</span>
            <input
              v-model="newPassword"
              type="password"
              required
              maxlength="20"
              class="block w-full mt-1 text-sm focus:border-black focus:outline-none form-input placeholder-gray-300"
              placeholder="***********"
            />
          </label>
          <label class="block mt-4">
            <span>Подтверждение нового пароля</span>
            <input
              v-model="newPasswordCheck"
              type="password"
              required
              maxlength="20"
              class="block w-full mt-1 text-sm focus:border-black focus:outline-none form-input placeholder-gray-300"
              placeholder="***********"
            />
          </label>
          <div class="w-full flex justify-end">
            <button
              type="button"
              @click.prevent="desProps.close"
              class="inline-block mt-4 mr-2 px-3 py-2 text-sm leading-none text-black transition-colors duration-150 bg-gray-200 rounded active:bg-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              Отмена
            </button>
            <button
              type="submit"
              class="inline-block mt-4 px-3 py-2 text-sm leading-none text-white transition-colors duration-150 bg-black rounded active:bg-gray-600 hover:bg-gray-900 focus:outline-none"
            >
              Изменить
            </button>
          </div>
        </form>
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Modal from "@/components/Modal.vue";

export default {
  name: "Settings",
  components: { Modal },
  data() {
    return {
      nameLocal: "",
      emailLocal: "",
      created_atLocal: "",
      password: "",
      newPassword: "",
      newPasswordCheck: "",
      //modal переменные
      modalNumber: 0,
    };
  },
  computed: {
    ...mapGetters(["name", "email", "created_at"]),
  },
  created() {
    this.nameLocal = this.name;
    this.emailLocal = this.email;
  },
  methods: {
    ...mapActions(["changePassword", "updateNameAndEmail"]),
    updateNameEmail() {
      this.updateNameAndEmail({
        name: this.nameLocal,
        email: this.emailLocal,
      }).then(() => this.$router.push({ name: "Home" }));
    },
    updatePassword() {
      this.changePassword({
        current_password: this.password,
        new_password: this.newPassword,
      }).then(() => this.$router.push({ name: "Login" }));
    },
    openModal(e) {
      if (e.target.name == "name" || e.target.name == "email") {
        this.modalNumber = 1;
      } else this.modalNumber = 2;
    },
  },
};
</script>

<style>
</style>