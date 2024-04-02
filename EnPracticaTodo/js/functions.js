//Logica de javaScript de validacion de formularios, manejo de maps, persistencia en base de datos, metodos AJAX, etc

//Declaracion de variables globales

  let inputs = document.querySelectorAll("input");
  let mensajeVacio = "Este campo no puede estar vacio";
  let mensajeError = "Error: revise el valor introducido"
  let mensajeErrorMaps = "La dirección introducida no es válida"
  let mensajeErrorSelect = "Error: debe seleccionar un valor"
  let esValido=true;
  let arrayErrores = ["vacio","errorData","errorMaps", "errorSelect"];


  let selects = document.querySelectorAll("select");
  let selectDistricte = document.getElementById('selectDistricte');
  let selectBarri = document.getElementById('selectBarri');
  let selectVia = document.getElementById('selectVia');
  let selectPoblacion = document.getElementById('selectPoblacio');

  let deflat= 41.390205;
  let deflng= 2.154007;
  let map;
  let responseDiv;
  let marker;

  let direccion = "";
  let nombreDireccion= "";
  let numeroCalle= "";
  let codigoPostal= "";
  let via= "";
  let txtBarri = "";
  let txtPoblacion = "";
  let txtDistrito = "";
  let numeroPis = "";
  let escalera = "";
  let puerta = "";

//#region Insert y previsualizacion

//revisamos todos los inputs y selects en el momento que 
//el usuario quiere hacer submit el formulario
$("#form-pisos-register").submit(function(event){

  let formIsValid = true;

  inputs.forEach(element  => {
    if(element.type != "submit"){
        if (element.value === '') {
            addClassValidInvalidInputs(element,!esValido,arrayErrores[0]);
            formIsValid = false;
        } else {
            addClassValidInvalidInputs(element,esValido);
        }
    }
  });

  selects.forEach((select)=>{
    let value = $(`#${select.id}`).find("option:selected").text();
    if(!checkSelect(value, select)){
      formIsValid= false;
    }
  });

  if (!formIsValid) {
    event.preventDefault(); // Prevención del envío del formulario
    return;
  }

  //envia los datos del form al archivo php para realizar el insert
  let formData = $(this).serialize();
  let post = $.ajax({
    method: "POST",
    url: "insertData.php",
    dataType: "json",
    data: formData
  });
  
  post.done( response => {
    console.log("Respuesta del servidor:", response);
  });
  
});


//Previsualiza los datos del formulario 
$("#btnVisualizar").on("click", function(event){
  event.preventDefault();
  $("#nomPis").text($("#validationNom").val() + " "+txtBarri + " "+txtDistrito);
  $("#dir").text(direccion +" - "+txtDistrito+" - " + txtBarri);
  $("#preu").text($("#validationPreu").val() + " €");
  $("#txtDescripcion").text($("#validationDescripcion").val());

});

//funcion que revisa que los select hayan sido seleccionados 
function checkSelect(value, select){
  if(value != "Open this select menu"){
    addClassValidInvalidSelects(select, esValido);
    return true;
  }else{
    addClassValidInvalidSelects(select, !esValido,arrayErrores[3]);
    return false;
  }
}

//funcion que se encarga de añadir las clases de validaciones 
//a los selects si cumplen ciertos criterios
function addClassValidInvalidSelects(element, esValid,tipoMensaje){
    if(esValid){
      element.classList.remove('is-invalid');
      element.classList.add('is-valid');
      addClassFeedback(element,esValido)
    }else{
      element.classList.remove('is-valid');
      element.classList.add('is-invalid');
      
      if(tipoMensaje == arrayErrores[3]){
        addClassFeedback(element,!esValido,tipoMensaje)
      }
    }
}

//#endregion  

//#region maps

//recupera los datos del formulario para armar la direccion

$('#validationNomDireccion').on('change', () => {
  nombreDireccion = $('#validationNomDireccion').val();
  concatenandoDireccion();
});
$('#validationNumeroCalle').on('change', () => {
  numeroCalle = $('#validationNumeroCalle').val();
  concatenandoDireccion();
});
$('#validationPis').on('change', () => {
  numeroPis = $('#validationPis').val();
  concatenandoDireccion();
});
$('#validationEscala').on('change', () => {
  escalera = $('#validationEscala').val();
  concatenandoDireccion();
});
$('#validationPorta').on('change', () => {
  puerta = $('#validationPorta').val();
  concatenandoDireccion();
});
$('#validationCP').on('change', () => {
  codigoPostal = $('#validationCP').val();
  concatenandoDireccion();
  busquedaDireccionMaps();
});

//Concatena los valores del formalario
function concatenandoDireccion(){
  direccion = via + " "+nombreDireccion + 
  " "+numeroCalle + " "+numeroPis+ " "+escalera+
   " "+puerta+ " "+codigoPostal;
  
}
//Funcion que se encarga de realziar la busqueda de la direccion 
//introducida por el usuario
function busquedaDireccionMaps(){
  clear(); //limpiamos la busqueda anterior
  let inputMaps = document.getElementById('validationMaps');
  let geocoder = new google.maps.Geocoder();
        let address =`"${direccion}"`;
        geocoder.geocode( { 'address': address}, function(results, status) {
          responseDiv = document.createElement("div");
            if (status == google.maps.GeocoderStatus.OK) {

              latitude = results[0].geometry.location.lat();
              document.getElementById('validationLatitud').value = latitude;

              longitude = results[0].geometry.location.lng();
              document.getElementById('validationLongitud').value = longitude;
              
              ubicacionEnMaps(latitude,longitude); //enviamos los datos 
              addClassValidInvalidInputs(inputMaps,esValido)
            }else{
              addClassValidInvalidInputs(inputMaps,!esValido,arrayErrores[2]);
              document.getElementById('validationLatitud').value = "";
              document.getElementById('validationLongitud').value = "";

            }
        });
}

  
  //Funcion que recibe coordenadas para buscar en el maps
  async function ubicacionEnMaps(latitude,longitude) {
  const { Map } = await google.maps.importLibrary("maps");
  const myLatLng = { lat: latitude, lng: longitude };
  map = new Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 12,
  });
  
  addMarker(myLatLng);
  
}
 //funcion principal que inicia el maps
  async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const myLatLng = { lat: deflat, lng: deflng };
  
  map = new Map(document.getElementById("map"), {
    center: { lat: deflat, lng: deflng },
    zoom: 12,
  });

  addMarker(myLatLng);
}
//funcion que limpiar el marker del mapa
function clear() {
  marker.setMap(null);
}
initMap();

  //funcion que se encarga de añadir marKer (icono)
  function addMarker(position){
    marker = new google.maps.Marker({
      position,
      map,
    });
}
//#endregion

//#region consultas php

//deshabilitamos algunas opciones del formulario
$('#selectBarri').prop("disabled", true);
$('#validationLatitud').prop("disabled", true);
$('#validationLongitud').prop("disabled", true);

//recupera los datos de distrito a traves del metodo Ajax
var request = $.ajax({
  method: "GET",
  url: "districtes.php",
  dataType: "json"
});

request.done( data => {
  data.forEach( districte =>{
      createOptions(districte,selectDistricte) //enviamos los datos recuperados para crear los elementos en la vista
  });
});

//recuperamos los datos de via a traves del metodo AJAX
$.ajax({
  method: "GET",
  url: "vias.php",
  dataType: "json"
}).done( data => {
  data.forEach(via =>{
    createOptions(via, selectVia);
  })

});

//recupera el valor del select y verifica que haya sido seleccionado con la funcion chackSelect
$(`#selectVia`).on( "change", function() {
  via = $(this).find("option:selected").text();
  checkSelect(via, selectVia);
  concatenandoDireccion();
});

$(`#selectBarri`).on( "change", function() {
  let idBarri = $( this ).val();
  txtBarri = $(this).find("option:selected").text();
    checkSelect(idBarri,selectBarri);
});
$(`#selectPoblacio`).on( "change", function() {
  let idPoblacion = $( this ).val();
  
  txtPoblacion = $(this).find("option:selected").text();
    checkSelect(idPoblacion,selectPoblacion);
});
$(`#selectDistricte`).on( "change", function() {
    let idDistricte = $( this ).val();
    txtDistrito = $(this).find("option:selected").text();
    checkSelect(idDistricte, selectDistricte);
    if(idDistricte > 0 ){
      $('#selectBarri').prop("disabled", false);
      queryGetBarris(idDistricte);
    
    }else{
      $('#selectBarri').prop("disabled", true);
    }
  });

//funcion que crea los elementos de option
function createOptions(data, select){
   
    let opt = document.createElement('option');
    opt.value = data.id;
    opt.text = data.name;
    //añadimos dentro del select
    select.appendChild(opt);
}

//funcion que recupera los elementos de barri segun el distrito seleccionado
function queryGetBarris(idSeleccionado){
  $.ajax({
    method: "POST",
    url: "barris.php",
    data: { id : idSeleccionado},
    dataType: "json"
  }).done( data => {
    data.forEach(barri =>{
      createOptions(barri, selectBarri);
    })
  
  });
}

//#endregion

//#region verificacion inputs

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

//funcion que se en carga de añadir clases de validacion a los inputs
//siguiendo ciertos criterios de validacion
function addClassValidInvalidInputs(element, esValid,tipoMensaje){

  if(esValid){
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
    addClassFeedback(element,esValido)
  }else{
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');

    addClassFeedback(element,!esValido,tipoMensaje)
    
  }
}
//Funcion que se encarga de añadir clases de validacion 
//al div de Feedback y enseña mensajes de error segun el tipo de error
function addClassFeedback(element,esValid,tipoMensaje){
  
  let id = element.id;
  let div = id;
  let divFeedback = "";

  if(div.includes('validation')){
    let result = div.replace(/validation/, ""); 
    divFeedback = document.getElementById(`feedback${result}`);
  }else if(div.includes('select')){
    let result = div.replace(/select/, ""); 
    divFeedback = document.getElementById(`feedback${result}`);
  }else{
    divFeedback = document.getElementById(`${div}`)
  }

  if(esValid){
    divFeedback.innerHTML = "";
    divFeedback.classList.remove('invalid-feedback');
  }else{
    divFeedback.classList.add('invalid-feedback');
    switch (tipoMensaje){
      case arrayErrores[0]:
           divFeedback.innerHTML = mensajeVacio;
      break;
      case arrayErrores[1]:
            divFeedback.innerHTML = mensajeError;
      break;
      case arrayErrores[2]:
            divFeedback.innerHTML = mensajeErrorMaps;
      break;
      case arrayErrores[3]:
            divFeedback.innerHTML = mensajeErrorSelect;
      break;
    }
  }
  
}

//Verifica el formulario de User cuando el usuario quiere realizar submit 
  $('#form-user-register').submit(function(e) {
    e.preventDefault(); 

    inputs.forEach(element  => {
      if(element.type != "submit"){
          if (element.value === '') {
              addClassValidInvalidInputs(element,!esValido,arrayErrores[0]);
          } else {
              addClassValidInvalidInputs(element,esValido);
              switch (element.id){
                case "validationEmail" :
                  (validateEmail(element.value))
                  ?addClassValidInvalidInputs(element,esValido)
                  :addClassValidInvalidInputs(element,!esValido,arrayErrores[1]);
                break;
                case "validationDNI":
                  (validateNIF_NIE(element.value))
                  ?addClassValidInvalidInputs(element,esValido)
                  :addClassValidInvalidInputs(element,!esValido,arrayErrores[1]);
                break;
                case "validationTelf":
                  (validateTelefono(element.value))
                  ?addClassValidInvalidInputs(element,esValido)
                  :addClassValidInvalidInputs(element,!esValido,arrayErrores[1]);
                break;
            }
          }
      }
    });

  });

  // modifica el diseño del cursor 
  $('#btnUsername').on('mouseover', () => {
    $('#btnUsername').css('cursor', 'pointer');
  });

  //genera un user hacienco click a username
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

  //funcion que retorna la primera letra de un string
function primeraLetra(texto){
  return texto.slice(0,1);
}
  //funcion que retorna las cuatro letras siguientes de la primera letra de un string

function cuatroPrimerasLetra(texto){
  return texto.slice(1,4);
}
  //funcion que valida los inputs que no tienen una validacion especifica

function validacionGeneral(element){
  
  $(`#${element.id}`).on('focusout', () => {
    if(element.value === ''){
      addClassValidInvalidInputs(element,!esValido,arrayErrores[0]);
    }else{
      addClassValidInvalidInputs(element,esValido);
    }
  });

  $(`#${element.id}`).on('input', ()=>{
      if(element.value !== ''){
          addClassValidInvalidInputs(element,esValido);
      }else{
          addClassValidInvalidInputs(element,!esValido,arrayErrores[0]);         
      }
  });
}
//funcion que verifica por cada elemento y una funcion especifica
function validarElemento(elemento, validador) {
  $(`#${elemento.id}`).on('focusout', () => {
    if (elemento.value === '') {
      addClassValidInvalidInputs(elemento,!esValido,arrayErrores[0])
      return;
    }
  
    if (!validador(elemento.value)) {
      addClassValidInvalidInputs(elemento,!esValido,arrayErrores[1])
    } else {
      addClassValidInvalidInputs(elemento,esValido)
    }
  });
  
  $(`#${elemento.id}`).on('input', () => {
    if (elemento.value === '') {
      addClassValidInvalidInputs(elemento,!esValido,arrayErrores[0])
      return;
    }
  
    if (!validador(elemento.value)) {
      addClassValidInvalidInputs(elemento,!esValido,arrayErrores[1])
    } else {
      addClassValidInvalidInputs(elemento,esValido)

    }
  });
}

//funcion que valida que NIE/NiF/DNI
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

//funcion que valida el email
function validateEmail(mail) {   
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}
//funcion que valida el valor de telefono

function validateTelefono(telefono){
  return /^\d{9}$/.test(telefono)
}

//#endregion