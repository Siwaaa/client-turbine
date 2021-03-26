<template>
  <div
    class="template__01 pb-6 relative min-h-screen md:h-full md:shadow-lg md:rounded-lg"
  >
    <div class="img w-full overflow-hidden size z-20">
      <img src="@/assets/fearless.gif" class="w-full" />
    </div>
    <header class="mt-4 px-6 ">
      <h1 class="template-text-color text-3xl font-semibold	">Title</h1>
    </header>
    <main class="mt-4 px-6 flex flex-col text-white	">
      <div class="decription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia totam
        ipsam quia ab rerum maiores praesentium, iure esse debitis! Voluptate,
        sequi! Consequuntur corrupti quo provident, vitae amet assumenda
        adipisci delectus.
      </div>
      <div v-if="ds" class="mt-4">Timer ?</div>
      <router-link
        :to="{name: 'UserInst'}"
        class="btn-color inline-block mx-auto mt-6 px-4 py-2 font-medium transition-all duration-300 rounded-lg focus:outline-none"
        >Btn</router-link
      >

      <label class="inline-block absolute bottom-2 inset-x-0 text-center"
        >Сделано в
        <router-link to="" class="">ClientTurbine</router-link></label
      >
    </main>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "UserStart",
  data() {
    return {
      ds: false,
      className: "bg-purple-600",
    }
  },
  computed: {
    ...mapGetters(["allPages"])
  },
  mounted() {

  }
};
</script>

<style>

.size {
  max-height: calc(100vw / 16 * 9 / 2);
}
@media (max-width: 640px) {
  .size {
    max-height: calc(100vw / 16 * 9);
  }
}
</style>