<template>
  <div class="flex flex-col items-center min-h-screen sm:px-4 py-8 bg-gray-50">
    <header class="mt-10">
      <a href="https://client-turbine.ru" class="uppercase font-bold">
        <!-- <img src="@/assets/logo.png" alt="" class="h-10"> -->
        Client Turbine
      </a>
    </header>
    <div class="h-full mt-10 mx-auto overflow-hidden">
      <router-view />
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