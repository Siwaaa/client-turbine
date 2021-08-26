<template>
  <div
    class="w-full lg:w-3/5 max-w-xl mx-auto sm:overflow-visible overflow-hidden"
  >
    <header class="pb-4">
      <h1 id="title" class="text-2xl font-normal">Баланс</h1>
    </header>
    <main>
      <div class="px-4 py-6 mb-8 bg-white rounded-lg shadow-md">
        <h4
          class="
            flex
            justify-between
            items-center
            mb-4
            text-lg
            font-medium
            text-gray-600
          "
        >
          Текущий баланс
        </h4>
        <span class="text-5xl font-semibold"
          >{{ balance }}<span class="text-2xl">₽</span></span
        >
        <p class="text-sm text-gray-400">1 рубль = 1 подписчик</p>
        <h4
          class="
            flex
            justify-between
            items-center
            my-4
            text-lg
            font-medium
            text-gray-600
          "
        >
          Пополнение
        </h4>
        <div class="flex space-x-2 mb-4">
          <button
            class="
              item-price
              btn
              py-2
              px-5
              bg-green-700
              text-white
              hover:bg-green-800
            "
            type="button"
            @click="inputBalance = 590"
          >
            590₽
          </button>
          <button
            class="
              item-price
              btn
              py-2
              px-5
              bg-green-700
              text-white
              hover:bg-green-800
            "
            type="button"
            @click="inputBalance = 750"
          >
            750₽
          </button>
          <button
            class="
              item-price
              btn
              py-2
              px-5
              bg-green-700
              text-white
              hover:bg-green-800
            "
            type="button"
            @click="inputBalance = 900"
          >
            900₽
          </button>
          <button
            class="
              item-price
              btn
              py-2
              px-5
              bg-green-700
              text-white
              hover:bg-green-800
            "
            type="button"
            @click="inputBalance = 1500"
          >
            1 500₽
          </button>
          <button
            class="
              item-price
              btn
              py-2
              px-5
              bg-green-700
              text-white
              hover:bg-green-800
            "
            type="button"
            @click="inputBalance = 3000"
          >
            3 000₽
          </button>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-xl">К оплате:</p>
          <input
            type="number"
            class="form-input w-32 focus:border-black focus:outline-none"
            name="balance"
            id="balance"
            v-model="inputBalance"
          />
        </div>
        <p v-if="validError" class="text-sm text-red-700">
          Минимальная сумма пополнения 590 рублей
        </p>
        <button @click="goToPay" class="btn btn-save mt-4" type="button">
          Пополнить
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Balance",
  data() {
    return {
      balance: 50,
      inputBalance: 590,
      validError: false,
    };
  },
  methods: {
    checkValid() {
      if (this.inputBalance < 590) {
        this.validError = true;
        return false;
      }
      this.validError = false;
      return true;
    },
    goToPay() {
      this.checkValid();
      fetch();
    },
  },
};
</script>