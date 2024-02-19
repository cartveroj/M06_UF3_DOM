/*
Archivo que contiene la logica de drag and drop de archivos
especificamente de imagenes, mostrando los archivos, caso contrario
tiene un alert que notifica que no es el formato correcto.
*/

//declaracion de variables globales
let arrayArchivos = [];

let dropArea = document.querySelector('.drop-area');
let dragDropText = document.querySelector('h2');
let button = document.querySelector('button');
let input = document.querySelector('#input-file');
let preview = document.querySelector('#preview');

//variable que contiene los eventos 
let eventos =["dragover", "dragleave", "drop"];

const form = document.querySelector("form");
const files = document.querySelector('#input-file');

eventos.forEach(event => {
    dropArea.addEventListener(event, preventDefault);
});
//evento que se activa cuando un elemento se arrastra
dropArea.addEventListener("dragover", function(){
    dropArea.classList.add('active');
    dragDropText.innerText = "Drop to upload files";
});
//evento que se ejecuta cuando un elemento se arrastra y se deja
dropArea.addEventListener("dragleave", function(){
    dragDropText.innerText = "Drag & Drop files";
    dropArea.classList.remove('active');
});
/*El evento drop se activa cuando se suelta un 
elemento o selección de texto en un destino de 
entrega válido. */
dropArea.addEventListener("drop", function(e){
    
    arrayArchivos = arrayArchivos.concat(Array.from(e.dataTransfer.files));
    showFiles();
    dragDropText.innerText = "Drag & Drop files";
    dropArea.classList.remove('active');
    
});
//evento que se activa del boton de updload de archivos
button.addEventListener("click", function(e){
    e.preventDefault();
    input.click();
});
input.addEventListener("change", function(){
    arrayArchivos = arrayArchivos.concat(Array.from(input.files));
    console.log(arrayArchivos);
    showFiles();
    form.submit();
});
//Funcion que se encarga de gestionar el arrayDeArchivos
function showFiles(){
    if(arrayArchivos.length != 0){
        preview.innerHTML = ""; //limpiamos las imagenes previas para mostrar la lista nueva
        arrayArchivos.forEach((file, index)=>{
            processFile(file,index)
        });
        console.log(arrayArchivos);
    }
}
//funcion que se encarga de procesar el file, verificando la extension
//y carga la imagen en el navegador
function processFile( file, index){
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
            <img src="${reader.result}" />
            <span class="fileName">${file.name}</span>
            <span onclick="remove(${index})" class="material-symbols-outlined removeBtn">close</span>
            </div>
        `;
        preview.innerHTML += prev;
    };

          
    reader.readAsDataURL(file);
}
/*Funcion que se encarga de eliminar las imagenes del array
y el div creado para la imagen
 */
function remove(index){
    let divToRemove = preview.children[index];
    preview.removeChild(divToRemove);
    console.log(arrayArchivos);
    arrayArchivos.splice(index,1);
    showFiles();
}

//funcion que deshabilita eventos que vienen por defecto en los navegadores
function preventDefault(event){
   event.preventDefault();
   
}

/*Opcional */

form.addEventListener("submit", function(e){
    e.preventDefault();
    const dataTransfer = new DataTransfer();
    arrayArchivos.forEach(file=>{
    dataTransfer.items.add(file);
    })
    input.files = dataTransfer.files;
    
    });