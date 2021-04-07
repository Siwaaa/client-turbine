<template>
  <div>
    <header class="df pb-4">
      <h1 class="text-4xl font-semibold">
        Статистика страницы "{{ this.$route.params.url }}"
      </h1>
    </header>
    <!-- <line-chart
      v-if="chartData.data"
      :chartdata="chartData"
      :options="chartOptions"
    /> -->
    <div class="xl:h-52 bg-white">
      <div class="px-4 py-6">
        <h2 class="text-xl	font-medium">Цифры шепчут</h2>
        <div
          class="stat mt-6 grid gap-2 grid-cols-2 xl:grid-cols-4 md:w-9/12 w-full"
        >
          <div class="flex flex-col leading-none">
            <span class="text-gray-600 text-sm">Открыли</span
            ><span class="text-4xl">{{
              searchPageObj.count_prosmotr || 0
            }}</span>
          </div>
          <div class="flex flex-col leading-none">
            <span class="text-gray-600 text-sm">Проверили аккаунт</span
            ><span class="text-4xl">{{ searchPageObj.count_check || 0 }}</span>
          </div>
          <div class="flex flex-col leading-none">
            <span class="text-gray-600 text-sm">Подписались</span
            ><span class="text-4xl">{{ searchPageObj.count_podpis || 0 }}</span>
          </div>
          <div class="flex flex-col leading-none">
            <span class="text-gray-600 text-sm">Процент завершения</span
            ><span class="text-4xl">{{ ctr }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import LineChart from "../../components/LineChart.vue";
import { mapGetters } from "vuex";

export default {
  name: "PageStatistics",
  // components: { LineChart },
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
            data: [this.count_prosmotr],
          },
          {
            label: "Подписок",
            borderColor: "#ff6384",
            backgroundColor: "rgba(200, 78, 137, 0.1)",
            fill: "start",
            data: [this.count_podpis],
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
      count_prosmotr: "",
      count_check: "",
      count_podpis: "",
    };
  },
  computed: {
    ...mapGetters(["allPages"]),
    searchPageObj() {
      return this.allPages.find((item) => item.url == this.$route.params.url);
    },
    ctr() {
      if (
        this.searchPageObj.count_podpis &&
        this.searchPageObj.count_prosmotr
      ) {
        return (
          (this.searchPageObj.count_podpis /
            this.searchPageObj.count_prosmotr) *
          100
        ).toFixed(1);
      } else return 0;
    },
  },
  methods: {},
  created() {
    this.count_prosmotr = this.searchPageObj.count_prosmotr;
    this.count_check = this.searchPageObj.count_check;
    this.count_podpis = this.searchPageObj.count_podpis;
  },
};
</script>

<style>
</style>