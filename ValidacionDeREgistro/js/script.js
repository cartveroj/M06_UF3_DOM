
let form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", function(){
    form.addEventListener("submit", validarFormulario);
});

form.addEventListener("focusout", (e)=>{
    e.target.style.background = " ";
});

function validarFormulario(e){
    e.preventDefault();
    let contraseña = document.getElementById("contraseña").value;
    console.log(contraseña)
    let email = document.getElementById("email").value;
    console.log(email);
    let reconfirmacion = document.getElementById("reconfirmacion").value;
    console.log(reconfirmacion)
if(!validateEmail(email) || !validateContraseña(contraseña)){
    return;
};

}

function validateContraseña(contraseña){
    if( !/[a-z][A-Z][0-9][`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(contraseña)){
       document.getElementById("msg").innerHTML= "La contraseña es invalida"
        return false;
    }
}

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
        }else{
        return false;
        }

}