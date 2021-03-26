<template>
  <div
    class="template__02 pb-6 px-6 relative min-h-screen flex items-center w-full md:h-full md:shadow-lg md:rounded-lg "
  >
    <div
      class="card flex flex-col w-full items-center p-4 rounded-lg bg-white	bg-opacity-10	 shadow-2xl"
    >
      <h4 class="mb-4 font-semibold">
        Спасибо за подписку
      </h4>
      <p class="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
        commodi a omnis numquam quod
      </p>
      <a
        href="#"
        class="btn-color inline-block mx-auto mt-6 px-4 py-2 font-medium transition-colors duration-150 rounded-lg focus:outline-none"
        >Скачать материал
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserUspech",
  data() {
    return {
      ds: true,
      className: "bg-purple-600",
    }
  },
  methods: {

  },
  mounted() {
    // убираем за собой
    localStorage.removeItem('check-first-screen')
  }
};
</script>

<style>

</style>