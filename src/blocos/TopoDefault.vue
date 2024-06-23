<template>
<div class="w-100">
	<div class="topo d-flex justify-content-between">
		<div class="">
			<div>
				<button id="btn-action-sidebar02" class="openbtn" action="close" @click="teste()"><i class="fa-solid fa-bars"></i></button>  
			</div>
		</div>
		<div class="avatar-area">
			<div class="d-flex justify-content-end">
				<div class="dropdown">
					<button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<img :src="require('@/assets/img/user.png')" class="avatar-topo rounded-circle mr-2" />
						<span class="avatar-usernome">{{ authStore.userInfo.nome }}</span>
					</button>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>	
        <LogOut/>
			</div>
		</div>
	</div>
</div>   
</template>

<script setup>

//<img class="mx-auto d-block" :src="require('@/assets/img/preloader.svg')" alt="Description">

  import {ref} from 'vue';
  import { useAuthStore } from '@/stores/auth.store';
  const authStore = useAuthStore();

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