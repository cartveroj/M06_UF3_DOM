/*Logica que se encarga de realizar validaciones de un formulario */

//declaracion de variables globales
let pwd1 = document.getElementById("password");
let pwd2 = document.getElementById("reconfirmacion");

let mensaje = document.getElementById("msg");
let esValid;

let inputs = document.querySelectorAll("input");
let mensajeHidden = document.querySelectorAll("span");

/*Realiza diversas verficaciones mientras el usuario ingresa los datos en cada input */
inputs.forEach((element)=>{
    if(element.type != "submit"){
        switch (element.id){
            case "email" :
                validarElemento(element, validateEmail); // validamos el email
            break;
            case "password":
                validacionContraseña(element); //validamos la contraseña
            break;
            case "reconfirmacion":
                validarElemento(element, revalidateContraseña); //verificamos la confirmacion de la contraseña
            break;
            default:
                validacionGeneral(element); // verficacion de los demas inputs que no tienen verificaciones especificas
        }
    }
});

//verificamos todo el formulario que no esten vacios, 
//eliminanos el atributo hidden para mostrar diferentes mensajes en cada input
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

    // Validar todos los campos usando las funciones de validación

    inputs.forEach(element  => {
        console.log(element)
        if(element.type != "submit"){
            let span = document.getElementById(`${element.id}S`);
            if (element.value === '') {
                element.classList.remove('is-valid');
                element.classList.add('is-invalid');
                span.removeAttribute('hidden');
                valid = false;
            } else {
                element.classList.remove('is-invalid');
                element.classList.add('is-valid');
                span.setAttribute('hidden', true);
            }
        }
       
    });

    // Enviar el formulario si todas las validaciones son exitosas
    if (valid) {
        form.submit();
    }
});

//funcion que realiza la verficacion general de cada input principalmente que no este vacio 
function validacionGeneral(element){
    let span = document.getElementById(`${element.id}S`);

    element.addEventListener('focusout', ()=>{
        if(element.value === ''){
            element.classList.remove('is-valid');
            element.classList.add('is-invalid');
            span.removeAttribute('hidden');
        }else{
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
            span.setAttribute('hidden', true);
            
        }
    });
    element.addEventListener('input', ()=>{
        if(element.value !== ''){
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
            span.setAttribute('hidden', true);
        }else{
            element.classList.remove('is-valid');
            element.classList.add('is-invalid');
            span.removeAttribute('hidden');
           
           
        }
    });
}
//funcion que se encarga de verificar que el email este compuesto con todos los
//elementos esenciales de un email
function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
//funcion que verifica que las contraseñas sean exactamente iguales
function revalidateContraseña(){
    console.log(pwd2.value)
    console.log(pwd1.value)
    return pwd1.value === pwd2.value;
  
}
//funcion que verifica por cada elemento y una funcion especifica
function validarElemento(elemento, validador) {
    let span = document.getElementById(`${elemento.id}S`);
    elemento.addEventListener('focusout', () => {
        if (elemento.value === '' || !validador(elemento.value)) {
            elemento.classList.remove('is-valid');
            elemento.classList.add('is-invalid');
            span.removeAttribute('hidden');
        } else {
            elemento.classList.remove('is-invalid');
            elemento.classList.add('is-valid');
            span.setAttribute('hidden', true);
        }
    });

    elemento.addEventListener('input', () => {
        if (elemento.value === '' || !validador(elemento.value)) {
            elemento.classList.remove('is-valid');
            elemento.classList.add('is-invalid');
            span.removeAttribute('hidden');
        } else {
            elemento.classList.remove('is-invalid');
            elemento.classList.add('is-valid');
            span.setAttribute('hidden', true);
        }
    });
}

//funcion que se encarga de validar la contraseña 
function validacionContraseña(element){
    element.addEventListener('input', validarPassword);
    element.addEventListener('focusout', validarPassword);
}

//Funcion que contiene todos los requisitos que debe contener una contraseña
// por cada validacion se muestra por pantalla, rojo si no cumple
//verde si cumple y finalmente se borra si cumple todos los requisitos
function validarPassword(){
    let lowerCaseLetters = /[a-z]/;
    let upperCaseLetters = /[A-Z]/;
    let numbers = /[0-9]/;
    let specialChars =  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let esValid = true;
    let contador = 0;

    // Limpiar mensajes anteriores
    mensaje.innerHTML = '';

    if (pwd1.value === '' || pwd1.value === ' ') {
        esValid = false;
        mensaje.innerHTML += `<ul><li class="text-control invalid">La contraseña no puede estar vacía</li>`;
    } 
    
    if (pwd1.value.length < 8 || pwd1.value.length > 15) {
        esValid = false;
        mensaje.innerHTML += `<li class="text-control invalid">La contraseña debe tener entre 8 y 15 caracteres</li>`;
    } else {
        contador++;
        mensaje.innerHTML += `<li class="text-control valid">La contraseña tiene una longitud adecuada</li>`;
    }
    
    if (!lowerCaseLetters.test(pwd1.value)) {
        esValid = false;
        mensaje.innerHTML += `<li class="text-control invalid">Se requiere al menos 1 letra minúscula</li>`;
    } else {
        contador++;
        mensaje.innerHTML += `<li class="text-control valid">Se requiere al menos 1 letra minúscula</li>`;
    }
    
    if (!upperCaseLetters.test(pwd1.value)) {
        esValid = false;
        mensaje.innerHTML += `<li class="text-control invalid">Se requiere al menos 1 letra mayúscula</li>`;
    } else {
        contador++;
        mensaje.innerHTML += `<li class="text-control valid">Se requiere al menos 1 letra mayúscula</li>`;
    }
    
    if (!numbers.test(pwd1.value)) {
        esValid = false;
        mensaje.innerHTML += `<li class="text-control invalid">Se requiere al menos 1 número</li>`;
    } else {
        contador++;
        mensaje.innerHTML += `<li class="text-control valid">Se requiere al menos 1 número</li>`;
    }
    
    if (!specialChars.test(pwd1.value)) {
        esValid = false;
        mensaje.innerHTML += `<li class="text-control invalid">Se requiere al menos 1 caracter especial</li>`;
    } else {
        contador++;
        mensaje.innerHTML += `<li class="text-control valid">Se requiere al menos 1 caracter especial</li> </ul>`;
    }

    // Verificar que se cumplan todas las verificaciones
    if (contador === 5) {
        esValid = true;
        mensaje.innerHTML = '';
    }
}






