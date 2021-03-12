<template>
  <div
    class="pb-6 relative min-h-screen md:h-full md:shadow-lg md:rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
  >
    <div class="img overflow-hidden size z-20">
      <img src="@/assets/as.jpeg" class="" />
    </div>
    <header class="mt-4 px-6">
      <h1 class="text-3xl font-semibold">Title</h1>
    </header>
    <main class="mt-4 px-6 flex flex-col">
      <div class="decription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia totam
        ipsam quia ab rerum maiores praesentium, iure esse debitis! Voluptate,
        sequi! Consequuntur corrupti quo provident, vitae amet assumenda
        adipisci delectus.
      </div>
      <div v-if="ds" class="mt-4">Timer ?</div>
      <router-link
        to=""
        class="inline-block mx-auto mt-6 px-4 py-2 font-medium text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none"
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
export default {
  name: "UserStart",
  data() {
    return {
      ds: true,
      className: "bg-purple-600",
    };
  },
  mounted: {},
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