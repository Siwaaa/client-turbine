<template>
  <div class="fixed z-50 left-0 top-1 w-full flex justify-center">
    <transition-group name="slide" tag="div" class="flex flex-col space-y-2">
      <div
        class="container sm:w-96 w-full h-full bg-black bg-opacity-90 text-white rounded-md p-3 flex justify-between items-center"
        role="alert"
        v-for="(message, index) in notiProps"
        :key="message.id"
      >
        <span class="text-sm">{{ message.text }}</span>
        <button
          type="button"
          @click="close(index)"
          class="manage w-6 py-1 h-full flex justify-center items-center rounded focus:outline-none hover:bg-gray-300 hover:text-gray-600 active:bg-gray-500"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    notiProps: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  methods: {
    close(index) {
      this.$emit("close", index);
    },
    autoClose() {
      setTimeout(() => {
        this.notiProps.length > 0
          ? this.notiProps.splice(this.notiProps.length - 1, 1)
          : false;
      }, 4000);
    },
  },
  watch: {
    notiProps(val) {
      if (val.length) {
        this.autoClose();
      }
    },
  },
};
</script>

<style>
</style>