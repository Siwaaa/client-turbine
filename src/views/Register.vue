<template>
  <form @submit.prevent="register" class="w-60">
    <h1 class="mb-4 text-xl text-center font-semibold text-gray-700">
      Регистрация
    </h1>
    <p class="text-xs text-gray-600">
      Сервис на стадии тестирования. Если Вы хотите присоединиться к
      тестированию, напишите нам в
      <a href="https://t.me/aaawis" target="_blank" class="underline"
        >telegram</a
      >
    </p>
    <label class="block mb-4 text-sm">
      <span class="text-gray-700">Код доступа</span>
      <input
        v-model="codeSuccess"
        @change="checkCode"
        required
        maxlength="12"
        class="form-input block w-full mt-1 text-sm focus:border-black focus:outline-none"
      />
      <span v-if="!validCode" class="text-xs text-red-600">
        Неверный код
      </span>
    </label>
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
        @input="validEmail = true"
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
          Регистрируясь, Вы принимаете
          <router-link to="#" class="underline">политику конфиденциальности</router-link>
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
      codeSuccess: '',
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      // переменные валидации
      validEmail: true,
      validCode: true,
    };
  },
  methods: {
    ...mapActions(["registerToken"]),
    checkCode(e) {
      e.target.value == "GROUP14" ? this.validCode = true : this.validCode = false
    },
    register() {
      this.$Progress.start();
      if (this.codeSuccess == "GROUP14" && this.password === this.password_confirm) {
        this.registerToken({
          name: this.name,
          email: this.email,
          password: this.password,
        })
          .then(() => {
            this.$router.push({ name: "Home" });
            this.$Progress.finish();
          })
          .catch((error) => {
            error.status === 422
              ? (this.validEmail = false)
              : console.log("Ошибка", error);
            this.$Progress.fail();
          });
      } else this.$Progress.fail();
    },
  },
};
</script>

<style scoped>
</style>