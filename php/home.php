<!DOCTYPE html>
<html lang="en">
<head>
	<?php include("includes/header.php"); ?>	
</head>
<body>
	<div class="container-scroller">
		<?php include("includes/topo.php"); ?>
		<div class="container-fluid page-body-wrapper">
			<?php include("includes/sidebar.php"); ?>
			<div class="main-panel">
				<div class="content-wrapper">
					<?php include("includes/alerta-aviso.php"); ?>
					<?php include("includes/indicadores.php"); ?>
					<?php include("includes/dashboard-actions.php"); ?>
					<?php include("includes/quadrados.php"); ?>
					<?php include("includes/grafico.php"); ?>
					<?php include("includes/tabela-img.php"); ?>
					<?php include("includes/calendario.php"); ?>
				</div>
				<?php include("includes/footer.php"); ?>
			</div>
		</div>
	</div>
	<?php include("includes/scripts.php"); ?>
</body>
</html>