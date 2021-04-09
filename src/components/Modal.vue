<template>
  <transition>
    <div
      @click.self="close"
      class="fixed inset-0 z-30 flex items-end bg-black bg-opacity-75 sm:items-center sm:justify-center"
    >
      <div
        class="w-full px-8 py-4 z-50 overflow-hidden bg-white rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-lg"
        role="dialog"
        id="modal"
      >
        <header class="flex justify-end">
          <button
            class="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
            aria-label="close"
            @click="close"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </header>
        <!-- Modal body -->
        <main class="mt-2 mb-4">
          <!-- Modal title -->
          <header class="mb-1 text-2xl font-medium text-black">
            <slot name="header"></slot>
          </header>

          <!-- Modal description -->
          <slot name="description" class="text-sm text-gray-700"></slot>
        </main>
        <footer
          class="flex items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50"
        >
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: [],
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>

</style>