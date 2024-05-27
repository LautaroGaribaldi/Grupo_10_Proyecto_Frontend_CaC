var email = document.getElementById('email');
var pass = document.getElementById('password');
var errorEmail = document.getElementById('errorEmail');
var errorPass = document.getElementById('errorPass');


function enviar(){

    if(email.value === null || email.value === ''){

        errorEmail.innerHTML = 'ingrese su Email';
    }
    if(pass.value === null || pass.value === ''){

        errorPass.innerHTML = 'ingrese su contraseña';
    }

    return false;
}