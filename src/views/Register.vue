<template>
  <form @submit.prevent="register" class="w-72">
    <div
      class="fixed z-30 w-full top-0 right-0 flex justify-end items-center p-2 bg-gray-50 text-sm text-gray-700"
    >
      <span class="mr-3">Уже есть аккаунт?</span>
      <router-link
        :to="{ name: 'Login' }"
        class="btn"
        style="border-color: black"
      >
        Войти
      </router-link>
    </div>
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
          <router-link to="#" class="underline"
            >политику конфиденциальности</router-link
          >
        </span>
      </label>
    </div>
    <button type="submit" class="btn btn-save w-full mt-6">Создать</button>
    <div class="facebook_login"></div>
    <AuthFacebookBtn />
  </form>
</template>

<script>
import { mapActions } from "vuex";
import AuthFacebookBtn from "@/components/AuthFacebookBtn.vue";
export default {
  name: "Register",
  components: { AuthFacebookBtn },
  data() {
    return {
      codeSuccess: "",
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
    checkCode(e) {
      e.target.value == "GROUP14"
        ? (this.validCode = true)
        : (this.validCode = false);
    },
    register() {
      this.$Progress.start();
      if (this.password === this.password_confirm) {
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
    statusChangeCallback(response) {
      if (response.status === "connected") {
        // Logged into your webpage and Facebook.
        alert("dsffdafd");
      } else {
        // Not logged into your webpage or we are unable to tell.
        alert("a!!!!sdfsfad");
      }
    },
    loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/ru_RU/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    },
    initFacebook() {
      // const vm = this;
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "140978494625223",
          cookie: true,
          version: "v10.0",
        });
        // window.FB.getLoginStatus(function (response) {
        //   vm.statusChangeCallback(response);
        // }, true);
      };
    },
    logInWithFacebook() {
      const vm = this;
      window.FB.login(
        function (response) {
          if (response.authResponse) {
            vm.GO_FACEBOOK({
              accessToken: response.authResponse.accessToken,
              user_id: response.authResponse.userID,
            }).then(() => {
              this.$router.push({ name: "Home" });
            });
          } else {
            alert(
              "Пользователь отменил вход в систему или не полностью авторизовался."
            );
          }
        },
        { scope: "email,public_profile", return_scopes: true }
      );
      return false;
    },
  },
  mounted() {
    this.loadFacebookSDK(document, "script", "facebook-jssdk");
    this.initFacebook();
  },
};
</script>

<style scoped>
</style>