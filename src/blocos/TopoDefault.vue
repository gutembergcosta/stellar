<template>
<div class="w-100">
	<div class="topo d-flex justify-content-between">
		<div class="">
			<div>
				<button id="btn-action-sidebar" class="openbtn" action="close" onclick="toggleSidebar()"><i class="fa-solid fa-bars"></i></button>  
			</div>
		</div>
		<div class="avatar-area">
			<div class="d-flex justify-content-end">
				<VaButtonDropdown preset="secondary" class="  pd-0 btn-config">
					<template #label>
						<VaAvatar src="https://randomuser.me/api/portraits/women/5.jpg" class="avatar-topo" />
						<span class="avatar-usernome">Nome do usuário</span>
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
	</div>
</div>
   
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
	.avatar-topo{width: 35px; height: 35px;}
	.avatar-usernome{
		color: black;
		font-weight: 400;
	}
</style>