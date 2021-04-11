<template>
    <div class="fixed top-1 w-full flex justify-center">
      <div
        class="container w-96 h-10 bg-black bg-opacity-90 text-white rounded-md h-full p-3 flex justify-between items-center"
        role="alert"
      >
        <slot name="body"></slot>
        <button
          type="button"
          @click="close"
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
    </div>
</template>

<script>
export default {
  name: "Notification",
  props: {},
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>