<template>
  <div>
    <div class="a" v-if="!showEnd">
      <h1 class="text-xl font-semibold text-gray-700">Забыли пароль?</h1>
      <p class="text-sm">Не беда, сейчас восстановим</p>
      <form @submit.prevent="reset" class="w-64 mt-4">
        <label class="block text-sm">
          <span class="text-gray-700">Email</span>
          <input
            v-model="email"
            type="email"
            required
            class="
              form-input
              block
              w-full
              mt-1
              text-sm
              focus:border-black
              focus:outline-none
            "
            placeholder="bruce@wayne.com"
          />
        </label>
        <button type="submit" class="btn btn-save w-full mt-6">
          Сбросить пароль
        </button>
      </form>
    </div>
    <div class="mx-4" v-else>
      <h1 class="text-xl font-semibold text-gray-700">Сброс пароля</h1>
      <p class="text-sm">Для сброса пароля перейдите по ссылке в письме, отправленном на вашу почту</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordReset",
  data() {
    return {
      email: null,
      showEnd: false,
    };
  },
  methods: {
    reset() {
      fetch(`${process.env.VUE_APP_ROOT_API}/api/reset-pass`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: this.email }),
      })
        .then((response) =>
          response.ok ? response.json() : Promise.reject(response)
        )
        .then((result) => result.status ? this.showEnd = true : Promise.reject(result))
        .catch(() => {
          alert("Ошибка сброса пароля");
        });
    },
  },
};
</script>

<style>
</style>