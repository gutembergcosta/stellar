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
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<img src="https://randomuser.me/api/portraits/women/5.jpg" class="avatar-topo" />
						<span class="avatar-usernome">Nome do usuário</span>
					</button>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>				
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