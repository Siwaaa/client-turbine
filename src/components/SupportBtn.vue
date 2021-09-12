<template>
  <div class="fixed flex flex-col items-end z-20 bottom-8 right-8">
    <div
      v-if="showSupport"
      class="w-48 h-32 mb-2 bg-white border rounded-md shadow-xl overflow-auto"
    >
      <ul class="py-2 text-sm">
        <li class="py-1 px-3 hover:bg-gray-100">
          <a
            href="https://www.notion.so/Client-Turbine-Help-Center-955fec2445464b05ae839ef2108de6b7"
            target="_blank"
            >Help Center 📚</a
          >
        </li>
        <li class="py-1 px-3 hover:bg-gray-100">
          <a href="https://t.me/clturbine_help" target="_blank"
            >Чат поддержки 👨‍💻</a
          >
        </li>
        <li class="py-1 px-3 hover:bg-gray-100">
          <a href="https://t.me/clturbine" target="_blank">Что нового?</a>
        </li>
      </ul>
    </div>
    <button
      type="button"
      @click="showSupport = !showSupport"
      class="flex justify-center items-center text-white w-10 h-10 rounded-full border shadow-xl focus:outline-none transition-all bg-main"
    >
      <span class="font-medium text-xl">?</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "SupportBtn",
  data() {
    return {
      showSupport: false,
    };
  },
};
</script>