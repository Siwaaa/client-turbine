<template>
  <div
    class="flex h-screen bg-gray-50"
    :class="{ 'overflow-hidden': isSideMenuOpen }"
  >
    <!-- Строка уведомления -->
    <div v-if="isBalanceSmall" class="fixed flex px-8 py-2 justify-between items-center z-30 w-full md:h-14 h-auto bg-green-50 text-green-700">
      <p>Баланс слишком низкий, рекомендуем пополнить. При ноле подписная страница будет заблокирована</p> 
      <button @click="isBalanceSmall = false">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- Desktop sidebar -->
    <aside
      class="
        z-20
        hidden
        w-60
        overflow-y-auto
        border-r
        bg-white
        md:block
        flex-shrink-0
      "
    >
      <div class="text-gray-600 h-full">
        <router-link
          class="
            inline-block
            relative
            pl-6
            py-3
            md:h-14
            w-full
            text-lg
            font-semibold
            text-gray-800
            border-b
          "
          :to="{ name: 'Home' }"
        >
          <!-- <img src="@/assets/logo.png" alt="logo" class="h-full "> -->
          Client Turbine
        </router-link>

        <ul class="mt-10">
          <li>
            <router-link
              class="
                inline-block
                w-full
                relative
                px-6
                py-3
                transition-all
                duration-300
                hover:text-gray-800
                hover:bg-gray-200
              "
              :to="{ name: 'Home' }"
              active-class="bg-gray-100 text-black"
            >
              <span class="inline-flex items-center w-full text-sm font-medium">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                <span class="ml-4">Страницы</span>
              </span>
            </router-link>
          </li>
          <li>
            <router-link
              class="
                inline-block
                w-full
                relative
                px-6
                py-3
                transition-all
                duration-300
                hover:text-gray-800
                hover:bg-gray-200
              "
              :to="{ name: 'Domains' }"
              exact=""
              active-class="bg-gray-100 text-black"
            >
              <span class="inline-flex items-center w-full text-sm font-medium">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span class="ml-4">Домены</span>
              </span>
            </router-link>
          </li>
          <li>
            <router-link
              class="
                inline-block
                w-full
                relative
                px-6
                py-3
                transition-all
                duration-300
                hover:text-gray-800
                hover:bg-gray-200
              "
              :to="{ name: 'Balance' }"
              active-class="bg-gray-100 text-black"
            >
              <span class="inline-flex items-center w-full text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="ml-4 mr-2">Баланс</span>
                <span
                  v-if="userBalance < 50"
                  class="
                    px-2
                    py-1
                    font-semibold
                    leading-tight
                    text-yellow-700
                    bg-yellow-100
                    rounded-full
                  "
                  >{{ userBalance }}</span
                >
                <span
                  v-else
                  class="
                    px-2
                    py-1
                    font-semibold
                    leading-tight
                    text-green-700
                    bg-green-100
                    rounded-full
                  "
                  >{{ userBalance }}</span
                >
              </span>
            </router-link>
          </li>
          <li>
            <router-link
              class="
                inline-block
                w-full
                relative
                px-6
                py-3
                transition-all
                duration-300
                hover:text-gray-800
                hover:bg-gray-200
              "
              :to="{ name: 'Settings' }"
              exact=""
              active-class="bg-gray-100 text-black"
            >
              <span class="inline-flex items-center w-full text-sm font-medium">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="ml-4">Настройки</span>
              </span>
            </router-link>
          </li>
        </ul>
        <button
          class="inline-block fixed border-t bottom-0 w-60 px-6 py-3"
          @click.prevent="logout"
        >
          <span
            class="
              inline-flex
              items-center
              w-full
              text-sm
              font-medium
              transition-colors
              duration-300
              hover:text-gray-800
            "
          >
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span class="ml-2">Выход</span>
          </span>
        </button>
      </div>
    </aside>
    <!-- Mobile sidebar -->
    <!-- Backdrop -->
    <div
      v-show="isSideMenuOpen"
      @click="closeSideMenu"
      class="
        fixed
        inset-0
        z-10
        flex
        items-end
        bg-black bg-opacity-50
        sm:items-center
        sm:justify-center
      "
    ></div>
    <aside
      class="
        fixed
        inset-y-0
        z-20
        flex-shrink-0
        w-64
        mt-16
        overflow-y-auto
        bg-white
      "
      v-show="isSideMenuOpen"
    >
      <div class="py-4 text-gray-500">
        <router-link class="ml-6 text-lg font-bold text-gray-800" to="/">
          Client Turbine
        </router-link>
        <ul>
          <li>
            <router-link
              class="
                inline-block
                w-full
                relative
                px-6
                py-3
                transition-all
                duration-300
                hover:text-gray-800
                hover:bg-gray-200
              "
              :to="{ name: 'Home' }"
              exact=""
              active-class="bg-gray-100 text-black"
            >
              <span
                class="
                  inline-flex
                  items-center
                  w-full
                  text-sm
                  font-medium
                  transition-colors
                  duration-300
                  hover:text-gray-800
                "
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                <span class="ml-4">Страницы</span>
              </span>
            </router-link>
          </li>
          <li>
            <router-link
              class="
                inline-block
                w-full
                relative
                px-6
                py-3
                transition-all
                duration-300
                hover:text-gray-800
                hover:bg-gray-200
              "
              :to="{ name: 'Domains' }"
              exact=""
              active-class="bg-gray-100 text-black"
            >
              <span class="inline-flex items-center w-full text-sm font-medium">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span class="ml-4">Домены</span>
              </span>
            </router-link>
          </li>
          <li>
            <router-link
              class="
                inline-block
                w-full
                relative
                px-6
                py-3
                transition-all
                duration-300
                hover:text-gray-800
                hover:bg-gray-200
              "
              :to="{ name: 'Balance' }"
              active-class="bg-gray-100 text-black"
            >
              <span class="inline-flex items-center w-full text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="ml-4">Баланс</span>
              </span>
            </router-link>
          </li>
          <li>
            <router-link
              class="
                inline-block
                w-full
                relative
                px-6
                py-3
                transition-all
                duration-300
                hover:text-gray-800
                hover:bg-gray-200
              "
              :to="{ name: 'Settings' }"
              exact=""
              active-class="bg-gray-100 text-black"
            >
              <span class="inline-flex items-center w-full text-sm font-medium">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="ml-4">Настройки</span>
              </span>
            </router-link>
          </li>
        </ul>
        <button
          class="inline-block fixed border-t bottom-0 w-64 px-6 py-3"
          @click.prevent="logout"
        >
          <span
            class="
              inline-flex
              items-center
              w-full
              text-sm
              font-medium
              transition-colors
              duration-300
              hover:text-gray-800
            "
          >
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span class="ml-2">Выход</span>
          </span>
        </button>
      </div>
    </aside>
    <!-- HEADER -->
    <div class="flex flex-col flex-1 w-full">
      <header class="z-10 md:h-14 py-4 bg-white border-b">
        <div
          class="
            container
            mx-auto
            h-full
            w-full
            flex
            items-center
            md:justify-end
            justify-between
            px-6
          "
        >
          <!-- Mobile hamburger -->
          <button
            class="
              p-1
              mr-5
              -ml-1
              rounded-md
              md:hidden
              focus:outline-none
              focus:shadow-outline-purple
            "
            @click="toggleSideMenu"
            aria-label="Menu"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <!-- USER -->
          <div class="flex items-center text-sm font-medium">
            <!-- Avatar with inset shadow -->
            <div
              class="
                ava
                relative
                flex
                items-center
                justify-center
                w-8
                h-8
                mr-3
                rounded-full
                shadow-sm
              "
            >
              <span class="font-bold text-lg text-white">{{
                name ? name[0].toUpperCase() : "C"
              }}</span>
            </div>
            <div class="hidden md:block">
              <p class="text-gray-800">{{ name }}</p>
            </div>
          </div>
        </div>
      </header>
      <main class="h-full overflow-y-auto">
        <div class="container mx-auto px-6 md:py-10 py-8 grid">
          <router-view />
        </div>
      </main>
    </div>
    <!-- SUPPORT -->
    <SupportBtn></SupportBtn>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SupportBtn from "@/components/SupportBtn.vue";

export default {
  name: "DashboardLayout",
  components: { SupportBtn },
  data() {
    return {
      isModalOpen: false,
      isSideMenuOpen: false,
      isProfileMenuOpen: false,
      isPagesMenuOpen: false,
      isNotificationsMenuOpen: false,
      trapCleanup: null,
      isBalanceSmall: false,
    };
  },
  computed: {
    ...mapGetters(["name", "userBalance"]),
  },
  methods: {
    ...mapActions(["destroyToken", "API_GET_USER"]),
    logout() {
      this.destroyToken().then(() => {
        this.$router.push({ name: "Login" });
      });
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    toggleSideMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen;
    },
    closeSideMenu() {
      this.isSideMenuOpen = false;
    },

    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen;
    },
    closeProfileMenu() {
      this.isProfileMenuOpen = false;
    },

    togglePagesMenu() {
      this.isPagesMenuOpen = !this.isPagesMenuOpen;
    },

    toggleNotificationsMenu() {
      this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen;
    },
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  },
  created() {
    this.API_GET_USER();
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      // if (to.meta.progress !== undefined) {
      //   let meta = to.meta.progress
      //   // parse meta tags
      //   this.$Progress.parseMeta(meta)
      // }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach(() => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  },
  watch: {
    userBalance: function(newBalance) {
      newBalance < 50 ? this.isBalanceSmall = true : this.isBalanceSmall = false
    },
    $route(to) {
      to.name == "Balance" ? this.API_GET_USER() : false
    }
  },
};
</script>

<style>
</style>