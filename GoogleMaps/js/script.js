
let buscar = document.getElementById("findLoc");
let Ilatitude = document.getElementById("latitude");
let Ilongitude = document.getElementById("longitude");
buscar.addEventListener('click', function(){
        let inputUser= document.getElementById('adreca').value;
        console.log(inputUser);

        let geocoder = new google.maps.Geocoder();
        let address=`"${inputUser}"`;
"Carrer de la Selva de Mar 211 08020 Barcelona"
        geocoder.geocode( { 'address': address}, function(results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
            latitude = results[0].geometry.location.lat();
            console.log(latitude);
            Ilatitude.value = latitude;
            console.log(Ilatitude);
            longitude = results[0].geometry.location.lng();
            Ilongitude.value = latitude;
            console.log(typeof(longitude));
            console.log(Ilongitude);
            }
        });
    });
 
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
    let 
  map = new Map(document.getElementById("map"), {
    center: { lat: 41.390205, lng: 2.154007 },
    zoom: 16,
  });

  google.maps.Marker({
    position: center,
    map,
    title: "Hello World!",
  });
}

initMap();

async function initMap() {
    const myLatLng = { lat: Ilatitude.value, lng: Ilongitude.value };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
  
window.initMap = initMap;

