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
					<?php include("includes/titular.php"); ?>
					<div class="row">
						<div class="col-lg-12 grid-margin stretch-card">
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">Basic Table</h4>
									<p class="card-description"> Add class <code>.table</code>
									</p>
									<div class="d-flex mb-3">
										<button type="button" class="btn btn-primary btn-sm">btn-sm</button>
									</div>
									<table class="table">
										<thead>
											<tr>
												<th>Profile</th>
												<th>Progress bar</th>
												<th>VatNo.</th>
												<th>Created</th>
												<th>Status</th>
												<th>Indicador</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Jacob</td>
												<td>
													<div class="progress">
														<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</td>
												<td>53275531</td>
												<td>12 May 2017</td>
												<td><label class="badge badge-danger">Pending</label></td>
												<td class="text-success"> 82.00% <i class="icon-arrow-up-circle"></i></td>
												<td><button type="button" class="btn btn-primary btn-sm">btn-sm</button></td>

											</tr>
											
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<?php include("includes/footer.php"); ?>
			</div>
		</div>
	</div>
	<?php include("includes/scripts.php"); ?>
</body>

</html>