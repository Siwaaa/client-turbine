<template>
  <form @submit.prevent="register" class="w-full">
    <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
      Создание аккаунта
    </h1>
    <label class="block text-sm">
      <span class="text-gray-700 dark:text-gray-400">Имя</span>
      <input
        v-model="name"
        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        placeholder="Justin Bieber"
      />
    </label>
    <label class="block mt-4 text-sm">
      <span class="text-gray-700 dark:text-gray-400">Email</span>
      <input
        v-model="email"
        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        placeholder="email@example.ru"
      />
    </label>
    <label class="block mt-4 text-sm">
      <span class="text-gray-700 dark:text-gray-400">Пароль</span>
      <input
        v-model="password"
        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        placeholder="*************"
        type="password"
      />
    </label>
    <label class="block mt-4 text-sm">
      <span class="text-gray-700 dark:text-gray-400"> Подтверждение пароля </span>
      <input
        v-model="password_confirm"
        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        placeholder="*************"
        type="password"
      />
    </label>

    <div class="flex mt-6 text-xs text-gray-400">
      <label class="flex items-center">
        <span class="ml-2">
          Регистрируясь вы подтвержаете
          <router-link to="#" class="underline">политику конфет</router-link>
        </span>
      </label>
    </div>
    <button
      type="submit"
      class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
    >
      Создать
    </button>

    <p class="mt-4">
      <router-link
        class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
        :to="{name: 'Login'}"
      >
        Уже есть аккаунт? Войти
      </router-link>
    </p>
  </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirm: ''
    }
  },
   methods: {
    ...mapActions(["registerToken"]),
    register() {
      this.registerToken({
        name: this.name,
        email: this.email,
        password: this.password,
      }).then(() => this.$router.push( {name: 'Home'})) 
    }
  }
};
</script>

<style scoped>
</style>