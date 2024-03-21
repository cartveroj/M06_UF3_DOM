  let inputs = document.querySelectorAll("input");
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
  $('#form-user-register').submit(function(e) {
    e.preventDefault();
    console.log(e);

  });


  $('#btnUsername').on('click', () => {
    let nom = $('#validationNom').val();
    let cognom = $('#validationCognoms').val();
    let dniNie = $('#validationDNI').val();
    let userName = document.getElementById('validationUsername');
    let respuesta = "";
    if(nom != '' && cognom!= '' && dniNie != ''){
      let primeraLetraNom = nom.slice(0,1);
       respuesta += primeraLetraNom.toLowerCase();
       let apellidosSinEspacio = cognom.replace(' ','').toLowerCase();
       let primeraLetraApellido = apellidosSinEspacio.slice(0,1).toUpperCase();
       let restoLetrasApellido = apellidosSinEspacio.slice(1,4);
       respuesta += primeraLetraApellido;
       respuesta += restoLetrasApellido;
       let primerValorDniNie = dniNie.slice(0,1);
       respuesta += primerValorDniNie.toLowerCase();
       let restoValoresDniNie = dniNie.slice(1,4);
       respuesta += restoValoresDniNie;
       userName.value = respuesta;
    }
  });
  function validacionGeneral(element){
    console.log(element.id)
    var id = element.id;
    let div = id;
    let result = div.replace(/validation/, ""); 
    let divFeedback = document.getElementById(`feedback${result}`);
    let mensaje = "Este campo no puede estar vacio";
    console.log(divFeedback);
    element.addEventListener('focusout', ()=>{
        if(element.value === ''){
            element.classList.remove('is-valid');
            element.classList.add('is-invalid');
            divFeedback.innerHTML = mensaje;
            divFeedback.classList.add('invalid-feedback');
        }else{
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
            divFeedback.innerHTML = " ";
            divFeedback.classList.remove('invalid-feedback');
            
        }
    });
    element.addEventListener('input', ()=>{
        if(element.value !== ''){
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
            divFeedback.innerHTML = " ";
            divFeedback.classList.remove('invalid-feedback');
        }else{
            element.classList.remove('is-valid');
            element.classList.add('is-invalid'); 
            divFeedback.innerHTML = mensaje;
            divFeedback.classList.add('invalid-feedback');          
        }
    });
}
//funcion que verifica por cada elemento y una funcion especifica
function validarElemento(elemento, validador) {
  var id = elemento.id;
  let div = id;
  let result = div.replace(/validation/, ""); 
  let divFeedback = document.getElementById(`feedback${result}`);
  let mensaje = "Este campo no puede estar vacio";

  elemento.addEventListener('focusout', () => {
    if (elemento.value === '') {
      divFeedback.innerHTML = mensaje;
      divFeedback.classList.add('invalid-feedback'); 
      elemento.classList.add('is-invalid');
      return;
    }
  
    if (!validador(elemento.value)) {
      divFeedback.innerHTML = "Error: revise el valor introducido";
      divFeedback.classList.add('invalid-feedback'); 
      elemento.classList.add('is-invalid');
    } else {
      elemento.classList.remove('is-invalid');
      elemento.classList.add('is-valid');
      divFeedback.innerHTML = "";
    }
  });
  
  elemento.addEventListener('input', () => {
    if (elemento.value === '') {
      divFeedback.innerHTML = mensaje;
      divFeedback.classList.add('invalid-feedback'); 
      elemento.classList.add('is-invalid');
      return;
    }
  
    if (!validador(elemento.value)) {
      divFeedback.innerHTML = "Error: revise el valor introducido";
      elemento.classList.add('is-invalid');
      divFeedback.classList.add('invalid-feedback'); 
    } else {
      elemento.classList.remove('is-invalid');
      elemento.classList.add('is-valid');
      divFeedback.innerHTML = "";
      divFeedback.classList.remove('invalid-feedback'); 
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
