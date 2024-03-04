<?php 
    /*Lógica php que retorna en formato json los valores de la tabla de categoria*/
    include("conecction.php");
    $cat = " SELECT * FROM `categoria`";

    $result = mysqli_query($coneccion, $cat);
    $return = array();

    while($row = mysqli_fetch_assoc($result)){
        $object = new stdClass();
        $object->nom = $row["name"];
        $object->id = $row["id"];
       
        $return[] = $object;
    }
    //var_dump($return);
    echo json_encode($return);
    exit();
?>