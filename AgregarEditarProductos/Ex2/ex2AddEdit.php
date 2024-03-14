<?php
    
    include "../conecction.php";
    // Check connection

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
       
    if(isset($_POST["accion"])) {
        
        if($_POST["accion"] == "remove"){

            $sql = "DELETE FROM products WHERE id=" . $_POST["addEdit"];

        }else{

            if(isset($_POST["nomProducte"]) && !empty($_POST["nomProducte"])){

                if($_POST["addEdit"]== 0){
            
                    $sql = "INSERT INTO products (nom) VALUES ('" . $_POST["nomProducte"] ."')";
                
                }else{
                    $sql = "UPDATE products SET nom='" . $_POST["nomProducte"] . "' WHERE id=" . $_POST["addEdit"];
                }

            } 
        }

        echo $sql;

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();

    }
    
    header('Location: ex2FormLlistat.php');

?>
