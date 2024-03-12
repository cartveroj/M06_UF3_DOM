<?php
include "../conecction.php";

if(isset($_POST["id"]) && !empty($_POST["id"])){

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM products WHERE id=" . $_POST["id"];

    $result = $conn->query($sql);

    $array = array();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $object = new stdClass();
        $object->nom = $row["nom"];
        $object->addEdit = $row["id"];
       
        echo json_encode($object);

    } else {
        echo "0 results";
    }

    $conn->close();
}


?>