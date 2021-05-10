<template>
  <form @submit.prevent="login" class="w-60">
    <h1
      class="mb-4 text-xl text-center font-semibold text-gray-700 dark:text-gray-200"
    >
      Вход
    </h1>
    <label class="block text-sm">
      <span class="text-gray-700 dark:text-gray-400">Email</span>
      <input
        v-model="email"
        type="email"
        required
        class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
        placeholder="bruce@wayne.com"
      />
    </label>
    <label class="block mt-4 text-sm">
      <span class="text-gray-700 dark:text-gray-400">Пароль</span>
      <input
        v-model="password"
        class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
        placeholder="***************"
        type="password"
        required
      />
    </label>

    <!-- You should use a button here, as the anchor is only used for the example  -->
    <button type="submit" class="btn btn-save w-full mt-6">Войти</button>

    <p class="mt-4">
      <router-link
        class="text-sm text-gray-500 font-medium underline hover:text-gray-900"
        :to="{ name: 'Register' }"
      >
        Забыли пароль?
      </router-link>
    </p>
    <p class="mt-1">
      <router-link
        class="text-sm text-gray-500 font-medium underline hover:text-gray-900"
        :to="{ name: 'Register' }"
      >
        Создать аккаунт
      </router-link>
    </p>
    <Notification :notiProps="notiItems" @close="closeNotification">
    </Notification>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import Notification from "@/components/Notification.vue";

export default {
  components: { Notification },
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      // noti переменные
      notiItems: [],
    };
  },
  methods: {
    ...mapActions(["getToken"]),
    closeNotification(index) {
      this.notiItems.splice(index, 1);
    },
    login() {
      this.getToken({
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          if (error.status == 401) {
            this.notiItems.unshift({
              text: "Неверный логин или пароль",
              type: 'error',
              id: Date.now(),
            });
          }
        });
    },
  },
};
</script>

<style>
</style>