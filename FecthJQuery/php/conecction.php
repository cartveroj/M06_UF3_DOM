<?php

//Coneccion a la base de datos

$coneccion = new mysqli("localhost", "veronica", "pirineus", "m06_dom");
if ($coneccion->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}else{
  //  echo "conectado";
}


