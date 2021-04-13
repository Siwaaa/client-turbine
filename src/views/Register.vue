<template>
  <form @submit.prevent="register" class="w-60">
    <h1 class="mb-4 text-xl text-center font-semibold text-gray-700">
      Регистрация
    </h1>
    <label class="block text-sm">
      <span class="text-gray-700">Имя</span>
      <input
        v-model="name"
        required
        maxlength="12"
        class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
        placeholder="Bruce"
      />
    </label>
    <label class="block mt-4 text-sm">
      <span class="text-gray-700">Email</span>
      <input
        required
        v-model="email"
        class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
        placeholder="bruce@wayne.com"
        type="email"
      />
      <span v-if="!validEmail" class="text-xs text-red-600">
        Такой email уже зарегистрирован
      </span>
    </label>
    <label class="block mt-4 text-sm">
      <span class="text-gray-700">Пароль</span>
      <input
        v-model="password"
        required
        class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
        placeholder="*************"
        type="password"
      />
    </label>
    <label class="block mt-4 text-sm">
      <span class="text-gray-700"> Подтверждение пароля </span>
      <input
        v-model="password_confirm"
        required
        class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
        placeholder="*************"
        type="password"
      />
      <span v-if="password !== password_confirm" class="text-xs text-red-600">
        Разные пароли
      </span>
    </label>

    <div class="flex mt-6 text-xs text-gray-400">
      <label class="flex items-center">
        <span>
          Регистрируясь, Вы подтвержаете
          <router-link to="#" class="underline">политику конфет</router-link>
        </span>
      </label>
    </div>
    <button type="submit" class="btn btn-save w-full mt-6">Создать</button>

    <p class="mt-4">
      <router-link
        class="text-sm font-medium text-gray-600 hover:text-gray-900 underline"
        :to="{ name: 'Login' }"
      >
        Уже есть аккаунт? Войти
      </router-link>
    </p>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      // переменные валидации
      validEmail: true,
    };
  },
  methods: {
    ...mapActions(["registerToken"]),
    register() {
      if (this.password == this.password_confirm) {
        this.registerToken({
          name: this.name,
          email: this.email,
          password: this.password,
        })
          .then(() => this.$router.push({ name: "Home" }))
          .catch((error) =>
            error.status === 422 ? (this.validEmail = false) : false
          );
      } else {
        // отображаем noti
        
      }
    },
  },
};
</script>

<style scoped>
</style>