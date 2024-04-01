<template>
<div class="d-flex justify-content-between topo">
	<div>
		<button class="openbtn" onclick="toggleSidebar()"><i class="fa-solid fa-bars"></i></button>  
	</div>
	<div class="flex items-center">



<VaButtonDropdown preset="secondary" class="mr-2  pd-0 btn-config">
	<template #label>
		<VaAvatar src="https://randomuser.me/api/portraits/women/5.jpg" class="avatar-topo" />
		<span>Nome do usuário</span>
	</template>
	<ul>
		<li><a href="">asdfa</a></li>
		<li><a href="">asdfa</a></li>
		<li><a href="">asdfa</a></li>
		<li><a href="">asdfa</a></li>
	</ul>
</VaButtonDropdown>
</div>
</div>
   
</template>

<style scoped>


	.topo{
		background: white;
		padding: 0 16px;
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
	.avatar-topo{width: 35px; height: 35px;}
</style>