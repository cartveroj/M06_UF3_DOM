/*
dropArea (.drop-area)
dragDropText (h2)
button (button)
input (#input-file)
preview (#preview)
*/
let arrayArchivos = [];
let dropArea = document.querySelector('.drop-area');
let dragDropText = document.querySelector('h2');
console.log(dragDropText)
let button = document.querySelector('button');
let input = document.querySelector('#input-file');
console.log(input)
let preview = document.querySelector('#preview');
console.log(preview)

let eventos =["dragover", "dragleave", "drop"];
 
eventos.forEach(event => {
    dropArea.addEventListener(event, preventDefault);

});
dropArea.addEventListener("dragover", function(){
    dropArea.classList.add('active');
    dragDropText.innerText = "Drop to upload files";
});

dropArea.addEventListener("dragleave", function(){
    dragDropText.innerText = "Drag & Drop files";
    dropArea.classList.remove('active');
});

dropArea.addEventListener("drop", function(e){
    arrayArchivos = Array.from(e.dataTransfer.files);
    console.log(arrayArchivos);
    dragDropText.innerText = "Drag & Drop files";
    dropArea.classList.remove('active');
});

function showFiles(){
    
}

function preventDefault(event){
   event.preventDefault();
   
}




// button.addEventListener("click", ()=>{
//     input.click();
// });
// input.addEventListener("change",()=>{
//     let files = input.files;
//     if(files.length === 0){
//         console.log("no hay nigun archivo")
//     }

//     for(let file of files){
//         console.log(file.name)
//     }
    
// });