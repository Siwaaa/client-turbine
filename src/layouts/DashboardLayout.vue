<template>
  <div
    class="flex h-screen bg-gray-50"
    :class="{ 'overflow-hidden': isSideMenuOpen }"
  >
    <!-- Desktop sidebar -->
    <aside
      class="z-20 hidden w-60 overflow-y-auto border-r bg-white md:block flex-shrink-0"
    >
      <div class="text-gray-600 h-full">
        <router-link class="inline-block relative pl-6 py-3 md:h-14 w-full text-lg font-bold text-gray-800 border-b" to="/">
          <!-- <img src="@/assets/logo.png" alt="logo" class="h-full "> -->
          Client Turbine
        </router-link>

        <ul class="mt-10">
          <li>
            <router-link
              class="inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200"
              to="/dashboard"
              active-class="bg-gray-100 text-black"
            >
              <span
                class="inline-flex items-center w-full text-sm font-normal "
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
              class="inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200"
              to="/domains"
              exact=""
              active-class="bg-gray-100 text-black"
            >
              <span
                class="inline-flex items-center w-full text-sm font-normal "
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span class="ml-4">Домены</span>
              </span>
            </router-link>
          </li>
          <li>
            <router-link
              class="inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200"
              to="/settings"
              exact=""
              active-class="bg-gray-100 text-black"
            >
              <span
                class="inline-flex items-center w-full text-sm font-normal "
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
            class="inline-flex items-center w-full text-sm font-normal transition-colors duration-300 hover:text-gray-800"
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
      x-transition:enter="transition ease-in-out duration-150"
      x-transition:enter-start="opacity-0"
      x-transition:enter-end="opacity-100"
      x-transition:leave="transition ease-in-out duration-150"
      x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0"
      class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
    ></div>
    <aside
      class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
      v-show="isSideMenuOpen"
      x-transition:enter="transition ease-in-out duration-150"
      x-transition:enter-start="opacity-0 transform -translate-x-20"
      x-transition:enter-end="opacity-100"
      x-transition:leave="transition ease-in-out duration-150"
      x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0 transform -translate-x-20"
    >
      <div class="py-4 text-gray-500 dark:text-gray-400">
        <router-link
          class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
          to="/"
        >
          Logo
        </router-link>
        <ul>
          <li>
            <router-link
              class="inline-block w-full relative px-6 py-3"
              to="/"
              exact=""
              active-class="border-r-4 border-purple-600 text-gray-800"
            >
              <span
                class="inline-flex items-center w-full text-sm font-normal transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200"
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
              class="inline-block w-full relative px-6 py-3"
              to="/nas"
              exact=""
              active-class="border-r-4 border-purple-600 text-gray-800"
            >
              <span
                class="inline-flex items-center w-full text-sm font-normal transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200"
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
                <span class="ml-4">Настройки</span>
              </span>
            </router-link>
          </li>
        </ul>
        <div class="px-6 my-6">
          <button
            class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          >
            Create account
            <span class="ml-2" aria-hidden="true">+</span>
          </button>
        </div>
        <button
          class="inline-block fixed border-t bottom-0 w-64 px-6 py-3"
          @click.prevent="logout"
        >
          <span
            class="inline-flex items-center w-full text-sm font-normal transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200"
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
    <div class="flex flex-col flex-1 w-full">
      <header class="z-10 md:h-14 py-4 bg-white border-b">
        <div
          class="container mx-auto h-full w-full flex items-center md:justify-end justify-between  px-6"
        >
          <!-- Mobile hamburger -->
          <button
            class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
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
              class="ava relative flex items-center justify-center w-8 h-8 mr-3 rounded-full shadow-sm"
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
          <vue-progress-bar></vue-progress-bar>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DashboardLayout",
  data() {
    return {
      isModalOpen: false,
      isSideMenuOpen: false,
      isProfileMenuOpen: false,
      isPagesMenuOpen: false,
      isNotificationsMenuOpen: false,
      dark: false,
      trapCleanup: null,
    };
  },
  computed: {
    ...mapGetters(["name"]),
  },
  methods: {
    ...mapActions(["destroyToken"]),
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
    toggleTheme() {
      this.dark = !this.dark;
      // setThemeToLocalStorage(this.dark)
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
};
</script>

<style>
</style>