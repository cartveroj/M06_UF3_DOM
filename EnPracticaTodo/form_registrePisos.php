<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<!-- <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script> -->

	<link rel="stylesheet" href="css/style.css">

</head>

<body>
	<div class="container pt-5 pb-5">
		<h4>Formulari de registre de pisos</h4>

		<div class="row">
			<div class="col-6">
				<form id="form-pisos-register" >
					<div class="form-row mt-5 mb-4">
						<div class="col-4">
							<label for="validationNom">Nom*</label>
							<input type="text" class="form-control" id="validationNom" value="" name="nom">
							<div id="feedbackNom">
							</div>
						</div>

						<div class="col-4">
							<label for="validationPreu">Preu*</label>
							<input type="text" class="form-control" id="validationPreu" value="" name="preu">
							<div id="feedbackPreu">
						
							</div>
						</div>	
					</div>
					
					<div class="form-row mb-4">
						<div class="col-4">
							<label for="validationVia">Via</label>
							<select class="custom-select" id="selectVia" name="via">
								<option selected>Open this select menu</option>
								<!-- <option value="1">Carrer</option>
								<option value="2">Torrent</option>
								<option value="3">Avinguda</option> -->
							</select>
							<div id="feedbackVia"></div>
						</div>

						<div class="col-4">
							<label for="validationNomDireccion">Nom direccio</label>
							<input type="text" class="form-control" id="validationNomDireccion" name="direccion">
							<div id="feedbackNomDireccion">
						
							</div>
						</div>

						<div class="col-4">
							<label for="validationNumeroCalle">Número</label>
							<input type="text" class="form-control" id="validationNumeroCalle" name="numeroCalle">
							<div id="feedbackNumeroCalle">
						
							</div>
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="validationPis">Pis</label>
							<input type="text" class="form-control" id="validationPis" name="pis">
							<div id="feedbackPis">
						
							</div>
						</div>

						<div class="col-4">
							<label for="validationEscala">Escala</label>
							<input type="text" class="form-control" id="validationEscala" name="escalera">
							<div id="feedbackEscala">
						
							</div>
						</div>

						<div class="col-4">
							<label for="validationPorta">Porta</label>
							<input type="text" class="form-control" id="validationPorta" name="porta">
							<div id="feedbackPorta">
						
							</div>
						</div>
					</div>
					
					<div class="form-row mb-4">
						<div id="map"></div>
						<input type="text" class="form-control" id="validationMaps" hidden >
						<div id="feedbackMaps"></div>
					</div>
					
					<div class="form-row mb-4">
						<div class="col-4">
							<label for="validationCP">CP</label>
							<input type="text" class="form-control" id="validationCP" name="codigoPostal">
							<div id="feedbackCP">
						
							</div>
						</div>

						<div class="col-4">
							<label for="selectDistricte">Districte</label>
							<select class="custom-select" id="selectDistricte" name="distrito" required>
								<option selected>Open this select menu</option>
								<!-- <option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option> -->
							</select>
							<div id="feedbackDistricte"></div>
						</div>

						<div class="col-4">
							<label for="selectBarri">Barri</label>
							<select class="custom-select" id="selectBarri" name="barri">
								<option selected>Open this select menu</option>
								<!-- <option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option> -->
							</select>
							<div id="feedbackBarri"></div>
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="selectPoblacio">Població</label>
							<select class="custom-select" id="selectPoblacio" name="poblacion">
								<option selected>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
							<div id="feedbackPoblacio"></div>
						</div>

						<div class="col-4">
							<label for="">Latitud</label>
							<input type="text" class="form-control" id="validationLatitud">
							<div id="feedbackLatitud"></div>
						</div>

						<div class="col-4">
							<label for="">Longitud</label>
							<input type="text" class="form-control" id="validationLongitud">
							<div id="feedbackLongitud">
						
							</div>
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Descripcion</label>
							<textarea id="validationDescripcion" name="descripcion">

							</textarea>
						</div>
					</div>
					
					<button class="btn btn-primary" id="btnRegistrar" type="submit">Registrar</button>

					<button class="btn btn-info" id="btnVisualizar">Visualitzar</button>
				</form>
			</div>

			<div class="col-6 pt-5">
				<h4 id="nomPis">Nom + barri, districte</h4>
				<p id="dir">Via Nom Número Pis Escala Porta · CP · Districte · Barri ·
				Poblacio</p>
				<p id="preu">300€</p>
				<p id= txtDescripcion>Text</p>
			</div>
		</div>
	</div>

	<script src="js/functions.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwEQr8flR0CtMZ-
    jSs9hK8lscYUMOtVPk&callback=initMap" async defer></script>
</body>
</html>