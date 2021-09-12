<template>
  <div class="w-full lg:w-3/4 mx-auto sm:overflow-visible overflow-hidden">
    <header class="pb-4">
      <h1 id="title" class="text-2xl font-normal">История платежей</h1>
    </header>
    <main>
      <div class="mb-8 bg-white rounded-lg shadow-md overflow-auto">
        <table class="w-full whitespace-no-wrap rounded-lg overflow-hidden">
          <thead>
            <tr
              class="
                text-xs
                font-semibold
                tracking-wide
                text-left text-gray-500
                uppercase
                border-b
                bg-gray-50
              "
            >
              <th class="px-4 py-3">№</th>
              <th class="px-4 py-3">Тип</th>
              <th class="px-4 py-3">Дата</th>
              <th class="px-4 py-3">Сумма</th>
              <th class="px-4 py-3">Статус</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y">
            <tr
              v-for="(payment, index) in allPayments"
              :key="payment.id"
              class="text-gray-700 text-sm"
            >
              <td class="px-4 py-3 text-xs">
                <span>{{ ++index }}</span>
              </td>
              <td class="px-4 py-3 ">
                <p>{{ payment.type === 'invoice' ? 'Пополнение' : 'Бонусы'}}</p>
              </td>
              <td class="px-4 py-3">
                <p>{{ payment.date }}</p>
              </td>
              <td class="px-4 py-3 ">
                <p>{{ payment.value }}</p>
              </td>
              <td class="px-4 py-3 ">
                <span
                  v-if="payment.status === 'succeeded'"
                  class="
                    px-2
                    py-1
                    font-semibold
                    leading-tight
                    text-green-700
                    bg-green-100
                    rounded-full
                  "
                >
                  Успешно
                </span>
                <span
                  v-else-if="payment.status === 'canceled'"
                  class="
                    px-2
                    py-1
                    font-semibold
                    leading-tight
                    text-red-700
                    bg-red-100
                    rounded-full
                  "
                >
                  Отменен
                </span>
                <span
                  v-else-if="payment.status === 'pending'"
                  class="
                    px-2
                    py-1
                    font-semibold
                    leading-tight
                    text-yellow-700
                    bg-yellow-100
                    rounded-full
                  "
                >
                  Обработка
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          v-if="!allPayments"
          class="w-full h-10 flex justify-center items-center text-gray-400"
        >
          Нет доступных операций
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BalanceHistory",
  data() {
    return {
      payments: [],
    };
  },
  computed: {
    ...mapGetters(["allPayments"]),
  },
  methods: {
    ...mapActions(["API_GET_PAYMENTS", "API_UPDATE_PAYMENT"]),
  },
  created() {
    this.API_GET_PAYMENTS();
    this.$route.query.order_id
      ? this.API_UPDATE_PAYMENT(this.$route.query.order_id)
      : false;
    //  console.log(this.$route.query);
  },
};
</script>
