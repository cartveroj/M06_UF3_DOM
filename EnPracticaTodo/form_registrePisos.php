<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

	<link rel="stylesheet" href="css/style.css">
	<script src="js/functions.js"></script>
</head>

<body>
	<div class="container pt-5 pb-5">
		<h4>Formulari de registre de pisos</h4>

		<div class="row">
			<div class="col-6">
				<form id="form-user-register">
					<div class="form-row mt-5 mb-4">
						<div class="col-8">
							<label for="">Nom*</label>
							<input type="text" class="form-control" id="" value="" name="">
						</div>

						<div class="col-4">
							<label for="">Preu*</label>
							<input type="text" class="form-control" id="" value="" name="">
						</div>	
					</div>
					
					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Via</label>
							<select class="custom-select">
								<option selected>Open this select menu</option>
								<option value="1">Carrer</option>
								<option value="2">Torrent</option>
								<option value="3">Avinguda</option>
							</select>
						</div>

						<div class="col-4">
							<label for="">Nom</label>
							<input type="text" class="form-control" id="">
						</div>

						<div class="col-4">
							<label for="">Número</label>
							<input type="text" class="form-control" id="">
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Pis</label>
							<input type="text" class="form-control" id="">
						</div>

						<div class="col-4">
							<label for="">Escala</label>
							<input type="text" class="form-control" id="">
						</div>

						<div class="col-4">
							<label for="">Porta</label>
							<input type="text" class="form-control" id="">
						</div>
					</div>
					
					<div class="form-row mb-4">
						div pel mapa que ens trobarà la latitud i la longitud mitjançant una api de google.
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">CP</label>
							<input type="text" class="form-control" id="">
						</div>

						<div class="col-4">
							<label for="">Districte</label>
							<select class="custom-select">
								<option selected>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>

						<div class="col-4">
							<label for="">Barri</label>
							<select class="custom-select">
								<option selected>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Població</label>
							<select class="custom-select">
								<option selected>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>

						<div class="col-4">
							<label for="">Latitud</label>
							<input type="text" class="form-control" id="">
						</div>

						<div class="col-4">
							<label for="">Longitud</label>
							<input type="text" class="form-control" id="">
						</div>
					</div>

					<div class="form-row mb-4">
						<textarea>

						</textarea>
					</div>
					
					<button class="btn btn-primary" type="submit">Registrar</button>

					<button class="btn btn-info">Visualitzar</button>
				</form>
			</div>

			<div class="col-6 pt-5">
				<h4 id="nomPis">Nom + barri, districte</h4>
				<p id="dir">Via Nom Número Pis Escala Porta · CP · Districte · Barri · Pobliacio</p>
				<p id="preu">300€</p>
				<p>Text</p>

			</div>
		</div>
	</div>


</body>
</html>