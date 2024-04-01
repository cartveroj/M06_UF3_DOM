<?php 
    /*Lógica php que retorna en formato json los valores de la tabla de categoria*/
    include "conecction.php";
    $cat = " SELECT * FROM `districtes`";

    $result = mysqli_query($coneccion, $cat);
    $return = array();

    while($row = mysqli_fetch_assoc($result)){
        $object = new stdClass();
        $object->id = $row["id"];
        $object->slug = $row["slug"];
        $object->name = $row["name"];
       
        $return[] = $object;
    }
    echo json_encode($return);
    exit();
?>