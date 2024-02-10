<template>
	<nav class="sidebar sidebar-offcanvas" id="sidebar">
		<ul class="nav">
			<li class="nav-item nav-profile">
				<a href="#" class="nav-link">
					<div class="profile-image">
						<img class="img-xs rounded-circle" src="assets/painel/images/faces/face8.jpg" alt="profile image">
						<div class="dot-indicator bg-success"></div>
					</div>
					<div class="text-wrapper">
						<p class="profile-name">Fulano de tal</p>
						<p class="designation">Administrator</p>
					</div>
						<div class="icon-container">
						<i class="icon-bubbles"></i>
						<div class="dot-indicator bg-danger"></div>
					</div>
				</a>
			</li>
			<li class="nav-item nav-category">
				<span class="nav-link">Dashboard</span>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="index.php">
					<span class="menu-title">Dashboard</span>
					<i class="icon-screen-desktop menu-icon"></i>
				</a>
			</li>
			<li class="nav-item nav-category"><span class="nav-link">UI Elements</span></li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
					<span class="menu-title">Basic UI Elements</span>
					<i class="icon-layers menu-icon"></i>
				</a>
				<div class="collapse" id="ui-basic">
					<ul class="nav flex-column sub-menu">
						<li class="nav-item"> <a class="nav-link" href="buttons.php">Buttons</a></li>
						<li class="nav-item"> <a class="nav-link" href="typography.php">Typography</a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="simple-line-icons.php">
					<span class="menu-title">Icons</span>
					<i class="icon-globe menu-icon"></i>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="basic_elements.php">
					<span class="menu-title">Form Elements</span>
					<i class="icon-book-open menu-icon"></i>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="chartist.php">
					<span class="menu-title">Charts</span>
					<i class="icon-chart menu-icon"></i>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="basic-table.php">
					<span class="menu-title">Tables</span>
					<i class="icon-grid menu-icon"></i>
				</a>
			</li>
			<li class="nav-item nav-category"><span class="nav-link">Sample Pages</span></li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
					<span class="menu-title">General Pages</span>
					<i class="icon-doc menu-icon"></i>
				</a>
				<div class="collapse" id="auth">
					<ul class="nav flex-column sub-menu">
					<li class="nav-item"> <a class="nav-link" href="login.php"> Login </a></li>
					<li class="nav-item"> <a class="nav-link" href="register.php"> Register </a></li>
					<li class="nav-item"> <a class="nav-link" href="error-404.php"> 404 </a></li>
					<li class="nav-item"> <a class="nav-link" href="error-500.php"> 500 </a></li>
					<li class="nav-item"> <a class="nav-link" href="blank-page.php"> Blank Page </a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item pro-upgrade">
				<span class="nav-link">
					<a class="btn btn-block px-0 btn-rounded btn-upgrade" href="https://www.bootstrapdash.com/product/stellar-admin-template/" target="_blank"> <i class="icon-badge mx-2"></i>Botão extra</a>
				</span>
			</li>
		</ul>
	</nav>
</template>

