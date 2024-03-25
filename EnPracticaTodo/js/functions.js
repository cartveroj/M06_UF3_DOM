  let inputs = document.querySelectorAll("input");
  let mensajeVacio = "Este campo no puede estar vacio";
  let mensajeError = "Error: revise el valor introducido"
  let esValido=true;
  let tipoError="";
  console.log(inputs);

  /*Realiza diversas verficaciones mientras el usuario ingresa los datos en cada input */
inputs.forEach((element)=>{
  if(element.type != "submit"){
      switch (element.id){
          case "validationEmail" :
            validarElemento(element, validateEmail) // validamos el email
          break;
          case "validationDNI":
            validarElemento(element, validateNIF_NIE) 
          break;
          case "validationTelf":
            validarElemento(element, validateTelefono)
          break;
          default:
              validacionGeneral(element); // verficacion de los demas inputs que no tienen verificaciones especificas
      }
  }
});
function addClassValidInvalidInputs(element, esValid,tipoMensaje){

  if(esValid){
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
    addClassFeedback(element,esValido)
  }else{
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
    
    if(tipoMensaje == "vacio"){
      addClassFeedback(element,!esValido,tipoMensaje)
    }else if(tipoMensaje == "errorData"){
      addClassFeedback(element,!esValido,tipoMensaje)
    }
    
    
  }
}

function addClassFeedback(element,esValid,tipoMensaje){
 // console.log(element)
  let id = element.id;
  let div = id;
  let result = div.replace(/validation/, ""); 
  let divFeedback = document.getElementById(`feedback${result}`);
//console.log(divFeedback)
  if(esValid){
    divFeedback.innerHTML = "";
    divFeedback.classList.remove('invalid-feedback');
  }else{
    divFeedback.classList.add('invalid-feedback');
    switch (tipoMensaje){
      case "vacio":
           divFeedback.innerHTML = mensajeVacio;
      break;
      case "errorData":
            divFeedback.innerHTML = mensajeError;
      break;
    }
  }
  
}
  $('#form-user-register').submit(function(e) {
    e.preventDefault();

    inputs.forEach(element  => {
      if(element.type != "submit"){
          if (element.value === '') {
              addClassValidInvalidInputs(element,!esValido,tipoError="vacio");
          } else {
              addClassValidInvalidInputs(element,esValido);
              switch (element.id){
                case "validationEmail" :
                  (validateEmail(element.value))
                  ?addClassValidInvalidInputs(element,esValido)
                  :addClassValidInvalidInputs(element,!esValido,tipoError="errorData");
                break;
                case "validationDNI":
                  (validateNIF_NIE(element.value))
                  ?addClassValidInvalidInputs(element,esValido)
                  :addClassValidInvalidInputs(element,!esValido,tipoError="errorData");
                break;
                case "validationTelf":
                  (validateTelefono(element.value))
                  ?addClassValidInvalidInputs(element,esValido)
                  :addClassValidInvalidInputs(element,!esValido,tipoError="errorData");
                break;
            }
          }
      }
    });

  });

  $('#btnUsername').on('mouseover', () => {
    $('#btnUsername').css('cursor', 'pointer');
  });

  $('#btnUsername').on('click', () => {

    let nom = $('#validationNom').val();
    let cognom = $('#validationCognoms').val();
    let dniNie = $('#validationDNI').val();
    let userName = document.getElementById('validationUsername');
    let respuesta = "";

    if(nom != '' && cognom!= '' && dniNie != ''){

       respuesta += primeraLetra(nom).toLowerCase();
       let apellidosSinEspacio = cognom.replace(' ','').toLowerCase();
       respuesta += primeraLetra(apellidosSinEspacio).toUpperCase();;
       respuesta += cuatroPrimerasLetra(apellidosSinEspacio);
       respuesta += primeraLetra(dniNie).toLowerCase();
       respuesta += cuatroPrimerasLetra(dniNie);
       userName.value = respuesta;

       addClassValidInvalidInputs(userName,esValido);
    }

  });

function primeraLetra(texto){
  return texto.slice(0,1);
}

function cuatroPrimerasLetra(texto){
  return texto.slice(1,4);
}

function validacionGeneral(element){
  
  $(`#${element.id}`).on('focusout', () => {
    if(element.value === ''){
      addClassValidInvalidInputs(element,!esValido,tipoError="vacio");
    }else{
      addClassValidInvalidInputs(element,esValido);
    }
  });

  $(`#${element.id}`).on('input', ()=>{
      if(element.value !== ''){
          addClassValidInvalidInputs(element,esValido);
      }else{
          addClassValidInvalidInputs(element,!esValido,tipoError="vacio");         
      }
  });
}
//funcion que verifica por cada elemento y una funcion especifica
function validarElemento(elemento, validador) {
  $(`#${elemento.id}`).on('focusout', () => {
    if (elemento.value === '') {
      addClassValidInvalidInputs(elemento,!esValido,tipoError="vacio")
      return;
    }
  
    if (!validador(elemento.value)) {
      addClassValidInvalidInputs(elemento,!esValido,tipoError="errorData")
    } else {
      addClassValidInvalidInputs(elemento,esValido)
    }
  });
  
  $(`#${elemento.id}`).on('input', () => {
    if (elemento.value === '') {
      addClassValidInvalidInputs(elemento,!esValido,tipoError="vacio")
      return;
    }
  
    if (!validador(elemento.value)) {
      addClassValidInvalidInputs(elemento,!esValido,tipoError="errorData")
    } else {
      addClassValidInvalidInputs(elemento,esValido)

    }
  });
}
  function validateNIF_NIE(value){
    var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    var str = value.toString().toUpperCase();

    if (!nifRexp.test(str) && !nieRexp.test(str)) return false;

    var nie = str
      .replace(/^[X]/, '0')
      .replace(/^[Y]/, '1')
      .replace(/^[Z]/, '2');

    var letter = str.substr(-1);
    var charIndex = parseInt(nie.substr(0, 8)) % 23;

    if (validChars.charAt(charIndex) === letter) return true;

    return false;
  }


function validateEmail(mail) {   
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}
function validateTelefono(telefono){
  return /^\d{9}$/.test(telefono)
}
