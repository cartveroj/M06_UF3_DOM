
let formData = new FormData();
formData.append("cat1", this.value);
let options = {
    method: 'GET',
   // body: formData
    }

fetch('php/servicio.php')
.then((response) => 
response.json()
)
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});