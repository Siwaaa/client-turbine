<template>
  <button
    type="button"
    @click="logInWithFacebook"
    class="btn btn-fb w-full font-bold text-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 mr-2"
      viewBox="0 0 245 244"
      version="1.1"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Artboard"
          transform="translate(-199.000000, -117.000000)"
          fill="#FFFFFE"
        >
          <g
            id="f_logo_RGB-White_1024"
            transform="translate(199.000000, 117.000000)"
          >
            <path
              d="M245,122.745584 C245,54.9550197 190.154932,1.13686838e-13 122.5,1.13686838e-13 C54.8450684,1.13686838e-13 0,54.9550197 0,122.745584 C0,184.011452 44.7964795,234.791684 103.359375,244 L103.359375,158.226729 L72.2558594,158.226729 L72.2558594,122.745584 L103.359375,122.745584 L103.359375,95.7031972 C103.359375,64.9400853 121.647764,47.9474936 149.629443,47.9474936 C163.031948,47.9474936 177.050781,50.3448682 177.050781,50.3448682 L177.050781,80.5517892 L161.603818,80.5517892 C146.386304,80.5517892 141.640625,90.0135078 141.640625,99.7204779 L141.640625,122.745584 L175.615234,122.745584 L170.184082,158.226729 L141.640625,158.226729 L141.640625,244 C200.203521,234.791684 245,184.011452 245,122.745584"
              id="Fill-1"
            />
          </g>
        </g>
      </g></svg
    >Продолжить с Facebook
  </button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "AuthFacebookBtn",
  methods: {
    ...mapActions(["GO_FACEBOOK"]),
    statusChangeCallback(response) {
      if (response.status === "connected") {
        alert(response.authResponse.accessToken);
      } else {
        alert("not logged fb");
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
              access_token: response.authResponse.accessToken,
              user_id: response.authResponse.userID,
            }).then(() => {
              vm.$router.push({ name: "Home" });
            });
          } else {
            alert(
              "Пользователь отменил вход в систему или не полностью авторизовался."
            );
          }
        },
        { scope: "email,public_profile", return_scopes: true }
      );
    },
  },
  mounted() {
    this.loadFacebookSDK(document, "script", "facebook-jssdk");
    this.initFacebook();
  },
};
</script>

<style scoped>
.btn-fb {
  background-color: rgb(24, 119, 242);
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-fb:hover {
  background-color: rgb(20, 102, 210);
}
.btn-fb:active {
  background-color: rgb(19, 85, 170);
}
</style>