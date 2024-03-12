<?php
    
    include "../conecction.php";
    
        $sql = "DELETE FROM products WHERE id =" . $_GET["id"];
        
        echo $sql;

        if ($conn->query($sql) === TRUE) {
            echo "New record deleted successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();

header('Location: ex2FormLlistat.php');