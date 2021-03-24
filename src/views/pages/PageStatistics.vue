<template>
  <div>
    <header class="df pb-4">
      <h1 class="text-4xl font-semibold">
        Статистика страницы "{{ this.$route.params.url }}"
      </h1>
    </header>
    <line-chart v-if="data" :chartdata="chartData" :options="chartOptions" />
    <div class="h-52 bg-white">
      <div class="px-4">
        <h2 class="font-medium">Цифры</h2>
        <div class="stat grid gap-2 grid-cols-2 xl:grid-cols-4 md:w-9/12 w-full">
          <div class="flex flex-col leading-none">
            <span class="text-gray-600 text-sm">Открыли</span
            ><span class="text-4xl">0</span>
          </div>
          <div class="flex flex-col leading-none">
            <span class="text-gray-600 text-sm">Проверили аккаунт</span
            ><span class="text-4xl">0</span>
          </div>
          <div class="flex flex-col leading-none">
            <span class="text-gray-600 text-sm">Подписались</span
            ><span class="text-4xl">0</span>
          </div>
          <div class="flex flex-col leading-none">
            <span class="text-gray-600 text-sm">Процент завершения</span
            ><span class="text-4xl">0%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "../../components/LineChart.vue";

export default {
  name: "PageStatistics",
  components: { LineChart },
  data() {
    return {
      chartData: {
        data: [],
        datasets: [
          {
            label: "Просмотров",
            borderColor: "#36a2eb",
            backgroundColor: "rgba(54, 162, 235, 0.1)",
            fill: "end",
          },
          {
            label: "Подписок",
            borderColor: "#ff6384",
            backgroundColor: "rgba(200, 78, 137, 0.1)",
            fill: "start",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        title: {
          display: true,
        },
        tooltips: {
          mode: "index",
          intersect: false,
          backgroundColor: "rgb(60, 64, 112, 0.9)",
        },
        legend: {
          display: true,
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 0,
                stepSize: 1,
              },
            },
          ],
        },
      },
    };
  },
  methods: {},
};
</script>

<style>
</style>