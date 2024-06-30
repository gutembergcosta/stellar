
<script setup>
import { ref, computed } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: [ 'January', 'February', 'March' ],
  datasets: [ { data: [40, 20, 12] } ]
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
const height = ref(400);

const myStyles = computed(() => {
  return {
    height: `${height.value}px`,
    position: 'relative',
  };
});



</script>

<template>
  <CardBase titulo="Gráficos">
    <div :style="myStyles">
      <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
        width="100"
      />
    </div>
  </CardBase>
</template>


<style scoped></style>