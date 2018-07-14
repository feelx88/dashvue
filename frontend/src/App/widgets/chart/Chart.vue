<template>
  <widget :size="size" :props="props">
    <div class="container">
      <canvas ref="canvas" width="100%" height="100%"></canvas>
    </div>
    <component v-if="props.data" :is="`input-${props.data.type}`" :config="props.data.config" @update="update"></component>
  </widget>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
}
</style>


<script lang="ts">
import Widget from "../Widget.vue";
import { Vue, Component } from "vue-property-decorator";
import { Chart as Chartjs } from "chart.js";
import Input from "../../datasources/Input.vue";

@Component
export default class Chart extends Widget {
  $refs: Vue["$refs"] & {
    canvas: HTMLCanvasElement;
  };

  chart: Chartjs = null;
  data: any;

  update(data: any): void {
    this.data = data;
    this.renderChart();
  }

  mounted(): void {
    this.renderChart();
  }

  renderChart(): void {
    if (!this.chart) {
      this.chart = new Chartjs(this.$refs.canvas.getContext("2d"), {
        type: "line",
        labels: [],
        datasets: [
          {
            label: "",
            data: []
          }
        ],
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          }
        }
      });
    }

    if (this.data) {
      this.chart.data.labels = this.data.labels;
      this.chart.data.datasets = [{}];
      this.chart.data.datasets[0].data = this.data.data;
      this.chart.update();
    }
  }
}
</script>