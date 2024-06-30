
<script setup>
import FullCalendario from './FullCalendario';
import GraphBar from './GraphBar';

</script>

<template>
  <TopoDefault />
  <SideBar />
  <div class="main" id="main">
    
    <div class="container area-admin">
      <TituloPage nome="Título" />
      <div class="row">
        <div class="col-md-12">
          <GraphBar/>
          <FullCalendario/>
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