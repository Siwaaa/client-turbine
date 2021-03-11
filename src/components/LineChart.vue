<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  name: "LineChart",
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
    };
  },
  methods: {},
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style>

</style>