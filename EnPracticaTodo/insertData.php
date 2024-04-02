<?php 

include "conecction.php";

    /*Lógica php que se encarga de realizar el insert de los datos enviados*/


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar si los campos esperados están presentes en $_POST
    if(isset($_POST["nom"], $_POST["preu"], $_POST["via"],
     $_POST["direccion"], $_POST["numeroCalle"], 
     $_POST["pis"], $_POST["escalera"], $_POST["porta"], 
     $_POST["codigoPostal"], $_POST["distrito"], 
     $_POST["barri"], $_POST["poblacion"],
    $_POST["descripcion"])) {

        // Escapar los valores del formulario antes de usarlos en la consulta SQL (esto es básico y se debe mejorar con consultas preparadas)
        $name = $_POST["nom"];
        $precio = $_POST["preu"];
        $id_via = $_POST["via"];
        $direccion = $_POST["direccion"];
        $numeroCalle = $_POST["numeroCalle"];
        $pis = $_POST["pis"];
        $escalera = $_POST["escalera"];
        $porta = $_POST["porta"];
        $codigoPostal = $_POST["codigoPostal"];
        $id_districte = $_POST["distrito"];
        $id_barri = $_POST["barri"];
        $id_poblacion = $_POST["poblacion"];
        $descripcion = $_POST["descripcion"];

        // Crear la consulta SQL con los valores escapados
        $sql = "INSERT INTO pisos (name, precio, id_via, direccion, numero_calle, piso, escalera, puerta, codigo_postal, id_districte, id_barri, id_poblacion, descripcion) 
        VALUES ('$name', '$precio', '$id_via', '$direccion', '$numeroCalle', '$pis', '$escalera', '$porta', '$codigoPostal', '$id_districte', '$id_barri', '$id_poblacion', '$descripcion')";

        if ($coneccion->query($sql) === TRUE) {
            // Redirigir después de la inserción exitosa (asegúrate de que no haya ninguna salida antes de la redirección)
            header('Location: form_registrePisos.php');
            exit;
        } else {
            echo "Error: " . $sql . "<br>" . $coneccion->error;
        }

    } else {
        echo "Error: Datos faltantes en el formulario";
    }
} else {
    echo "Error: Se esperaba una petición POST";
}
?>