<?php 
    /*Logica de php que retorna los valores de la tabla subcategoria
    segun la id de la categoria enviada
    */
    include("conecction.php");
    $idCat = $_POST['cat'];;
    $subCat = " SELECT * FROM `sub_categoria` WHERE `idCategoria`= $idCat";

    $result = mysqli_query($coneccion, $subCat);
    $return = array();

    while($row = mysqli_fetch_assoc($result)){
        $object = new stdClass();
        $object->nom = $row["name"];
        $object->id = $row["id"];
        $object->id = $row["idCategoria"];
        $return[] = $object;
    }
    //var_dump($return);
    echo json_encode($return);
    exit();
?>