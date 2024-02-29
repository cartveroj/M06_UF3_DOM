let selectorCategorias = document.querySelector('select');
console.log(selectorCategorias);

fetch('php/categorias.php')
.then((response) => 
response.json()
)
.then((data) => {
    console.log(data);
    data.forEach(e => {
        let opt = document.createElement('option');
        opt.value = e.id;
        opt.text = e.nom;
        document.getElementById('categorias').appendChild(opt);
    });
    
})
.catch((error) => {
    console.log(error);
});


selectorCategorias.addEventListener('change', function(e){
    document.getElementById('subCategorias').innerHTML="";
    console.log(e.target.value);
    let formData = new FormData();
    formData.append("cat", `${e.target.value}`);
    console.log(formData);
    let options = {
        method: 'POST',
        body: formData
    }
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





