
let buscar = document.getElementById("findLoc");
let Ilatitude = document.getElementById("latitude");
let Ilongitude = document.getElementById("longitude");
let btn = document.getElementById("geo");
let btnInit = document.getElementById("initMap");
let mensaje = document.getElementById("mensaje");

let map;
//funcion que inicia el mapa 
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  let deflat= 41.390205;
  let deflng= 2.154007;
  const myLatLng = { lat: deflat, lng: deflng };
  map = new Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 12,
  });

  addMarker(myLatLng);
}
initMap();

buscar.addEventListener('click', function(){
        Ilatitude.value = " ";
        Ilongitude.value = " ";
        let p = document.getElementById('text');
        if(p != null){
         mensaje.removeChild(p);
        }
       
        let inputUser= document.getElementById('adreca').value;
        console.log(inputUser);

        let geocoder = new google.maps.Geocoder();
        let address=`"${inputUser}"`;
        console.log()
        geocoder.geocode( { 'address': address}, function(results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
             
              latitude = results[0].geometry.location.lat();
              Ilatitude.value = latitude;
              longitude = results[0].geometry.location.lng();
              Ilongitude.value = longitude;
              ubicacionEnMaps(latitude,longitude);

            }else{

              let p = document.createElement('p');
              p.id = "text";
              let text = document.createTextNode("La dirección introducida no es válida");
              p.appendChild(text);
              mensaje.appendChild(p);
            }
        });
    });
 

async function ubicacionEnMaps(latitude,longitude) {
  const { Map } = await google.maps.importLibrary("maps");
  const myLatLng = { lat: latitude, lng: longitude };
  map = new Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 12,
  });
  
  addMarker(myLatLng);
  
}

btn.addEventListener('click',geolocalizacion);

function geolocalizacion(){
  const image = {
    url:'img/persona.png',
    scaledSize: new google.maps.Size(30, 42),
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
      };
      map.setCenter(pos);
      map.setZoom(16);
      new google.maps.Marker({
        position: pos,
        map: map,
        icon: image,
      });
    });
  }
}

btnInit.addEventListener('click',initMap);

function addMarker(position){
  const label = new google.maps.Marker({
    position,
    map,
  });
}

