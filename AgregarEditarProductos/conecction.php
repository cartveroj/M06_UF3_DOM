<?php

//Coneccion a la base de datos

$conn = new mysqli("localhost", "veronica", "pirineus", "m06_dom");
if ($conn->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}else{
 // echo "conectado";
}


