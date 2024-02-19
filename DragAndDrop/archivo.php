<?php
echo "Dentro"; //verificando que redirige correctamente

print_r($_FILES['inputFiles']);


for ($i=0; $i<count($_FILES["inputFiles"]["name"]); $i++) {
echo $_FILES["inputFiles"]["tmp_name"][$i] .'<br>';
echo $_FILES["inputFiles"]["name"][$i] .'<br>';
}