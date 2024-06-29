<script setup>

import { ref } from 'vue'
  import { useAuthStore } from '@/stores/auth.store';
  import CloseSidebar from './CloseSidebar.vue'
  const authStore = useAuthStore();

  const avatarImg = ref(require('@/assets/img/user.png'))
</script>

<template>
<div class="w-100">
	<div class="topo d-flex justify-content-between">
		<div class="">
			<div>
				<CloseSidebar/>
			</div>
		</div>
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
		background: white;
		height: 60px
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