
<script setup>
import { ref, computed } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

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


const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  eventClick: function(info) {
    console.log(info);
    alert(info.event.id);
  },
  events: [
    { title: 'Event 1', date: '2024-06-01', id: 3 },
    { title: 'Event 2', date: '2024-06-02', id: 11 },
  ],
});



</script>

<template>
  <SideBar />
  <div class="main" id="main">
    <TopoDefault />
    <div class="container area-admin">
      <TituloPage />
      <div class="row">
        <div class="col-md-12">
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
          <CardBase titulo="Calendário">
            <FullCalendar :options="calendarOptions" />
          </CardBase>
          <CardBase titulo="Calendário">
            <SliderPrincipal/>
          </CardBase>
          <CardBase titulo="Calendário">
            <Bs5Carousel/>
          </CardBase>
        </div>
      </div>
    </div>
  </div>
  <FooterPage />
</template>


<style scoped></style>