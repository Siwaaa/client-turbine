<template>
  <div>
    <h1 class="text-xl font-semibold text-gray-700">Сброс пароля</h1>
    <p class="text-sm">Введите новый пароль</p>
    <form @submit.prevent="reset" class="w-64 mt-4">
      <label class="block mt-4 text-sm">
        <span class="text-gray-700">Пароль</span>
        <input
          v-model="password"
          class="
            form-input
            block
            w-full
            mt-1
            text-sm
            focus:border-black
            focus:outline-none
          "
          placeholder="***************"
          type="password"
          required
        />
      </label>
      <label class="block mt-4 text-sm">
        <span class="text-gray-700">Подтверждение пароля</span>
        <input
          v-model="passwordConfirm"
          class="
            form-input
            block
            w-full
            mt-1
            text-sm
            focus:border-black
            focus:outline-none
          "
          placeholder="***************"
          type="password"
          required
        />
      </label>
      <button type="submit" class="btn btn-save w-full mt-6">
        Сбросить
      </button>
    </form>
    <Modal v-if="showEnd">
      <template v-slot:header>
        <h2>Пароль обновлен</h2>
      </template>
      <template v-slot:description>
        <div class="text-sm">
          <p>Ваш пароль сброшен. Для входа в приложение нажмите на кнопку</p>
          <router-link :to="{ name: 'Login' }" class="mt-2 btn btn-save">
            Перейти
          </router-link>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  components: { Modal },
  name: "PasswordSet",
  data() {
    return {
      password: null,
      passwordConfirm: null,
      showEnd: false,
    };
  },
  methods: {
    reset() {
      const token = this.$route.query.token;
      console.log(token);
      if (this.password === this.passwordConfirm) {
        fetch(`${process.env.VUE_APP_ROOT_API}/api/reset-set`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ pass: this.password, token: token }),
        })
          .then((response) =>
            response.ok ? response.json() : Promise.reject(response)
          )
          .then((result) =>
            result.status ? (this.showEnd = true) : Promise.reject(result)
          )
          .catch(() => {
            alert("Ошибка сброса пароля");
          });
      } else {
        alert('Пароли не совпадают')
      }
    }, 
  },
};
</script>

<style>
</style>