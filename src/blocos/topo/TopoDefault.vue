<script setup>

import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.store';
import CloseSidebar from './CloseSidebar.vue'
import TopoSidebar from './TopoSidebar'
const authStore = useAuthStore();

const avatarImg = ref(require('@/assets/img/user.png'))
</script>

<template>
<div class="w-100 topo d-flex justify-content-between sombra position-fixed">
  <TopoSidebar/>
  <div class=" lateral d-flex align-items-center justify-content-between" >
    <div class=""><CloseSidebar/></div>
    <div class="avatar-area">
			<div class="d-flex justify-content-end">
				<div class="dropdown">
					<button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<img :src="avatarImg" class="avatar-topo rounded-circle mr-2" />
						<span class="avatar-usernome">{{ authStore.userNome }}</span>
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



<style scoped>
	.topo{
		background: #ffffff;
		height: 60px;
	}

  .lateral{
    width: calc(100% - 250px);
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
    width: 30px; 
    height: 30px;
    margin-right: 6px;
  }
	.avatar-usernome{
		color: black;
		font-weight: 400;
	}
  .sombra{
    border-bottom: 1px solid #eee;
    box-shadow: 0px 4px 3px -2px rgba(0, 0, 0, 0.15);
    z-index: 1000;

  }
</style>