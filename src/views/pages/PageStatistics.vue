<template>
  <div>
     <header class="df pb-4">
      <h1 class="text-4xl font-semibold">Статистика страницы "{{this.$route.params.url}}"</h1>
    </header>
    <line-chart :chartdata="chartData" :options="chartOptions" />
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