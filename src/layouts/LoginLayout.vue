<template>
  <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div
      class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
    >
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img
            aria-hidden="true"
            class="object-cover w-full h-full dark:hidden"
            alt="Office"
          />
          <img
            aria-hidden="true"
            class="hidden object-cover w-full h-full dark:block"
            alt="Office"
          />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <router-view/>
          <vue-progress-bar></vue-progress-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginLayout",
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