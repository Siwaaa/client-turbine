<template>
  <form @submit.prevent="login" class="w-full">
    <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
      Вход
    </h1>
    <label class="block text-sm">
      <span class="text-gray-700 dark:text-gray-400">Email</span>
      <input
        v-model="email"
        type="email"
        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        placeholder="email@example.ru"
      />
    </label>
    <label class="block mt-4 text-sm">
      <span class="text-gray-700 dark:text-gray-400">Пароль</span>
      <input
        v-model="password"
        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        placeholder="***************"
        type="password"
      />
    </label>

    <!-- You should use a button here, as the anchor is only used for the example  -->
    <button
      type="submit"
      class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
    >
      Войти
    </button>

    <p class="mt-4">
      <router-link
        class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
        :to="{name: 'Register'}"
      >
        Забыли пароль?
      </router-link>
    </p>
    <p class="mt-1">
      <router-link
        class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
        :to="{name: 'Register'}"
      >
        Создать аккаунт
      </router-link>
    </p>
  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
    methods: {
    ...mapActions(["getToken"]),
    login() {
      this.getToken({
        email: this.email,
        password: this.password,
      })
      .then(response => {
        if (response) {
          this.$router.push( {name: 'Home'})
        } else {
          alert('Неверный логин или пароль')
        }
      })
    }
  }
};
</script>

<style>
</style>