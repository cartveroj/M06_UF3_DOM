<?php 

include("conecction.php");
$id=1;
$cat = " SELECT * FROM `categoria`";

$result = mysqli_query($coneccion, $cat);
$return = array();

while($row = mysqli_fetch_assoc($result)){
    $object = new stdClass();
    $object->nom = $row["name"];
    $object->id = $row["id"];
    $object->idSubCat = $row["idSubCategoria"];
    $return[] = $object;
}
//var_dump($return);
echo json_encode($return);
exit();


?>