
<script setup>
import { ref } from 'vue';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';


const calendarOptions = ref({
  plugins: [dayGridPlugin,bootstrap5Plugin],
  themeSystem: 'bootstrap5',
  initialView: 'dayGridMonth',
  locale: ptBrLocale,
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
          
  <CardBase titulo="Calendário">
    <FullCalendar :options="calendarOptions" />
  </CardBase>
      
</template>


<style scoped></style>