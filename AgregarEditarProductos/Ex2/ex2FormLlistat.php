<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulari</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>

<?php 

include "../conecction.php";

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM products";

$result = $conn->query($sql);

$array = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        array_push($array, array("id" =>$row["id"], "nom"=>$row["nom"]));            
    }
} else {
    echo "0 results";
}

$conn->close();
?>
<body class="container mt-5 w-80">
    <div class="row">
        <div class="col">
            <h2 class="mb-3">Formulari</h2>

            <form action="ex2AddEdit.php" method="POST" id="myForm">
                <div class="form-group mb-2">
                    <input type="text" class="form-control" id="nomProducte" name="nomProducte" placeholder="Nom" value="">
                </div>

                <input type="hidden" name="accion" id="accion" value="">
                <input type="hidden" name="addEdit" id="addEdit" value="0"/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form> 
        </div>
        <div class="col">
            <h2 class="mb-3">Llistat</h2>

            <table class="table" >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Remove</th>
                        <th scope="col">Upload img</th>
                    </tr>
                </thead>
                
                <tbody>
                    <?php
                        for($i=0; $i<sizeof($array); $i++){
                            echo '<tr>
                                        <th scope="row">' . $array[$i]["id"] . '</th>
                                        <td>' . $array[$i]["nom"] . '</td>
                                        <td><p idProd="' . $array[$i]["id"] . '" class="btnEdit btn btn-outline-info">Edit</p></td>
                                        <td><p idProd="' .$array[$i]["id"]. '" class="btnRemove btn btn-outline-danger">Remove</p></td>
                                        <td><p idImg="' .$array[$i]["id"]. '" class="btnAddImg btn btn btn-outline-info">Add img</p></td>
                                        <input type="file" name="inputFiles[]" id="input-file-' .$array[$i]["id"]. '" hidden multiple />  
                                        <td><div id="preview-' .$array[$i]["id"]. '"></div></td>

                                    </tr>';
                        }  
                    ?>
                </tbody>
            </table>
        </div>
    </div>

    <script>

        let btnEdit = document.querySelectorAll(".btnEdit");
        let btnRemove =document.querySelectorAll(".btnRemove");
        let btnAddImg =document.querySelectorAll(".btnAddImg");

        btnEdit.forEach(el=>{
            el.addEventListener("click", function(){

                let formData = new FormData();
                formData.append("id", this.getAttribute("idProd"));

                let options = {
                        method: 'POST',
                        body: formData
                    }

                fetch("getProducte.php", options)
                .then((response) => response.json())
                .then((data) => {
                    document.getElementById("nomProducte").value = data.nom;
                    document.getElementById("addEdit").value = data.addEdit;
                })
                .catch((error) => {});

            })
        });
         //Listener que por cada click en el boton eliminar 
         //asignamos el valor a la accion
         //y lo enviamos por el form 
         let form = document.getElementById('myForm');
        btnRemove.forEach(el=>{
            el.addEventListener("click", function(){
           
            document.getElementById("accion").value = "remove"; //se añade el value al input para poder filtrar en el archivo.php
            document.getElementById("addEdit").value = this.getAttribute("idProd");
            form.submit();    
            })
            
        });
        
        btnAddImg.forEach(el=>{
            el.addEventListener("click", function(e){

                let id = this.getAttribute("idImg")
                let input = document.getElementById("input-file-"+id);
                let previewItem = document.getElementById("preview-"+id);

                console.log(input)
                e.preventDefault();
                input.click();
                input.addEventListener("change", function(){
                
                let arrayArchivos = Array.from(input.files);
                console.log(arrayArchivos);
                showFiles(arrayArchivos, previewItem);
               // form.submit();
            });


            })
            
        });
        
      //Funcion que se encarga de gestionar el arrayDeArchivos
        function showFiles(arrayArchivos, previewItem){
            if(arrayArchivos.length != 0){
                previewItem.innerHTML = ""; //limpiamos las imagenes previas para mostrar la lista nueva
                arrayArchivos.forEach((file, index)=>{
                    processFile(file,index, previewItem)
                });
                console.log(arrayArchivos);
            }
        }

        //funcion que se encarga de procesar el file, verificando la extension
    //y carga la imagen en el navegador
    function processFile( file, index, previewItem){
        const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
        const docType = file.type;
        //verificamos la extension 
        if(!validExtensions.includes(docType)){
            alert("Extensió no vàlida: " + file.name);
            arrayArchivos.splice(index,1);
            return;
        }
    //instanciamos objeto FileReader que permite leer el contenido de files
        let reader = new FileReader();
        let prev ="";
        reader.onload = function () {
            prev += `<div class="previewImage">
                <img src="${reader.result}" width="180" height="90"/>
                <span class="fileName">${file.name}</span>
                <button onclick="remove(${index})" class="material-symbols-outlined removeBtn">close</button>
                </div>
            `;
            previewItem.innerHTML += prev;
            };
        reader.readAsDataURL(file);
    }

    function remove(index){
    let divToRemove = preview.children[index];
    preview.removeChild(divToRemove);
    console.log(arrayArchivos);
    arrayArchivos.splice(index,1);
    showFiles();
    }
    </script>
</body>
</html>