<script setup>
  
  import {ref} from 'vue';

  const action = ref("close");

  const teste = () => {
    if(action.value == 'close'){closeNav();} else{openNav();}
  }

  const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    action.value = 'close'
  }
  
  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    action.value = 'open'
  }

</script>

<template>
  <button id="btn-action-sidebar02" class="openbtn" action="close" @click="teste()"><i class="fa-solid fa-bars"></i></button>  
</template>
  
  
  
  <style scoped>
    .topo{
      background: white;
      height: 50px
    }
    .drop-down-area{
      z-index: 99999;
      position: relative;
      top: 20px;
    }
    .btn-config{
      height: 50px;
    }
    .avatar-topo{
      width: 35px; 
      height: 35px;
      margin-right: 6px;
    }
    .avatar-usernome{
      color: black;
      font-weight: 400;
    }
  </style>