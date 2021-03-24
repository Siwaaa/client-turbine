<template>
  <div class="a">
    <header class="df pb-4">
      <h1 id="title" class="text-4xl font-semibold">Настройки аккаунта</h1>
    </header>
    <form
      @submit.prevent="updateNameEmail"
      class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <label class="block text-sm">
        <span class="text-gray-700 dark:text-gray-400">Никнейм </span>
        <input
          v-model="nameLocal"
          type="text"
          required
          maxlength="40"
          class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
          placeholder="Client turbine"
        />
      </label>

      <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">Email</span>
        <input
          v-model="emailLocal"
          type="text"
          required
          maxlength="20"
          class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
          placeholder="Bred Pit"
        />
      </label>
            <button
        type="submit"
        class="inline-block mt-4 px-3 py-2 leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
      >
        Изменить
      </button>
    </form>
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      Смена пароля
    </h4>
    <form
      @submit.prevent="updatePassword"
      class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <label class="block text-sm">
        <span class="text-gray-700 dark:text-gray-400">Старый пароль </span>
        <input
          v-model="password"
          type="password"
          required
          maxlength="40"
          class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
          placeholder="***********"
        />
      </label>

      <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">Новый пароль</span>
        <input
          v-model="newPassword"
          type="password"
          required
          maxlength="20"
          class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
          placeholder="***********"
        />
      </label>
      <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400"
          >Подтверждение нового пароля</span
        >
        <input
          v-model="newPasswordCheck"
          type="password"
          required
          maxlength="20"
          class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
          placeholder="***********"
        />
      </label>
      <button
        type="submit"
        class="inline-block mt-4 px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
      >
        Изменить
      </button>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Settings',
  data() {
    return {
      nameLocal: '',
      emailLocal: '',
      created_atLocal: '',
      password: '',
      newPassword: '',
      newPasswordCheck: ''
    }
  },
  computed: {
    ...mapGetters(['name', 'email', 'created_at']),
  },
  created() {
    this.nameLocal = this.name
    this.emailLocal = this.email
  },
  methods: {
    ...mapActions(['changePassword', 'updateNameAndEmail']),
    updateNameEmail() {
      this.updateNameAndEmail({
        name: this.nameLocal,
        email: this.emailLocal
      }).then(() => this.$router.push({ name: 'Home'}))
    },
    updatePassword() {
      this.changePassword({
        current_password: this.password,
        new_password: this.newPassword
      }).then(() => this.$router.push({ name: 'Login'}))
    }
  },
};
</script>

<style>
</style>