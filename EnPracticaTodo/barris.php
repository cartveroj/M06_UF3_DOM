<?php 
    /*Lógica php que retorna en formato json los valores de la tabla de barris*/
    include "conecction.php";
    $id_districte = $_POST['id'];
    $query = " SELECT * FROM `barris` WHERE `id_districte` = $id_districte ORDER BY id asc";

    $result = mysqli_query($coneccion, $query);
    $return = array();

    while($row = mysqli_fetch_assoc($result)){
        $object = new stdClass();
        $object->id = $row["id"];
        $object->id_districte = $row["id_districte"];
        $object->slug = $row["slug"];
        $object->name = $row["name"];
       
        $return[] = $object;
    }
    echo json_encode($return);
    exit();
?>