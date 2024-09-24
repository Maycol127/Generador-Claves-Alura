/* Variables iniciales */
let cantidad = document.getElementById("cantidad");
let boton = document.getElementById('generar');
let contrasena = document.getElementById("contrasena");
let mensaje = document.getElementById("mensaje");

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){
    let numeroDigitado = parseInt(cantidad.value);
    mensaje.textContent = ''; // Limpiar el mensaje de validación anterior
    
    if(numeroDigitado < 8 ){
        alert("La cantidad de carácteres tiene que ser mayor que 8");
        return;
    }
    
    let password = '';
    for(let i = 0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;
    validarContrasena(password);
}

// Función para limpiar el campo de la contraseña
function limpiar(){
    contrasena.value = '';
    mensaje.textContent = '';
}

// Función para validar si la contraseña es fuerte o débil
function validarContrasena(password){
    let Mayuscula = /[A-Z]/.test(password);
    let Minuscula = /[a-z]/.test(password);
    let Numero = /[0-9]/.test(password);
    let CaracterEspecial = /[!@#$%^&*()]/.test(password);

    if(Mayuscula && Minuscula && Numero && CaracterEspecial){
        mensaje.textContent = 'Contraseña fuerte';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'Contraseña débil: debe incluir mayúsculas, minúsculas, números y caracteres especiales.';
        mensaje.style.color = 'red';
    }
}