/* Lógica de js del selector */

let selectorCategorias = document.querySelector('select');
console.log(selectorCategorias);
//metodo que llama a un fichero php de categorias
fetch('php/categorias.php')
.then((response) => 
response.json()
)
.then((data) => {
    console.log(data);
    data.forEach(e => {
        //creamos los elementos de option
        let opt = document.createElement('option');
        opt.value = e.id;
        opt.text = e.nom;
        //añadimos dentro del select
        document.getElementById('categorias').appendChild(opt);
    });
    
})
.catch((error) => {
    console.log(error);
});

/* 
Metodo listener que recupera los valores en el momentoç
que la lista es seleccionada
*/
selectorCategorias.addEventListener('change', function(e){
    document.getElementById('subCategorias').innerHTML=""; //limpia las options previas
    console.log(e.target.value);
    let formData = new FormData(); //instanciamos un objeto de formdata
    formData.append("cat", `${e.target.value}`);
    console.log(formData);
    let options = {
        method: 'POST',
        body: formData
    }
    //realizamos la llamada a a subcategorias con options que lleva el valor de la id categoria seleccionada
    fetch('php/subCategorias.php',options)
    .then((response) => 
    response.json()
    )
    .then((data) => {
        console.log(data);
        data.forEach(e => {
            let opt = document.createElement('option');
            opt.value = e.id;
            opt.text = e.nom;
            document.getElementById('subCategorias').appendChild(opt);
        });
        
    })
    .catch((error) => {
        console.log(error);
    });
});





