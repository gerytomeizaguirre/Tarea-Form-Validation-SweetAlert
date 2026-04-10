const form= document.getElementById("formulario");
const nombre= document.getElementById("nombre");
const email= document.getElementById("email");
const password= document.getElementById("password");
const confirmPassword= document.getElementById("confirmPassword");
const errornombre= document.getElementById("errornombre");
const erroremail= document.getElementById("erroremail");
const errorpassword= document.getElementById("errorpassword");
const errorconfirmPassword= document.getElementById("errorconfirmPassword");

var NombreCompleto;
var Correo;
var Contra;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if(nombre.value.trim() === "") {
        errornombre.textContent = "El nombre es obligatorio";
        NombreCompleto = false;
    }else{
        errornombre.textContent = "";
        NombreCompleto = validarNombreCompleto(nombre.value);
    }

    if(email.value.trim() === "") {
        erroremail.textContent = "El email es obligatorio";
        Correo = false;
    }else{
        erroremail.textContent = "";
        Correo = validarCorreo(email.value);
    }

    if(password.value.trim() === "") {
        errorpassword.textContent = "La contraseña es obligatoria";
        Contra = false;
    }else{
        errorpassword.textContent = "";
        Contra = validarContraseña(password.value);
    }

    if(confirmPassword.value.trim() === "") {
        errorconfirmPassword.textContent = "La confirmación de contraseña es obligatoria";
    }else{
        if(confirmPassword.value !== password.value) {
            errorconfirmPassword.textContent = "Las contraseñas no coinciden";
            Swal.fire({
            title: "¡!",
            text: "Las Contraseñas NO Coinciden!",
            icon: "error"
        });
        }else{
        errorconfirmPassword.textContent = "";
        Swal.fire({
            title: "¡!",
            text: "Las Contraseñas Coinciden!",
            icon: "success"
        });
    }

    if (NombreCompleto && Correo && Contra && confirmPassword.value === password.value) {
        Swal.fire("¡Éxito!", "Formulario enviado correctamente", "success");
    }
}
});


function validarNombreCompleto(nombre) {
    
    const nombreLimpio = nombre.trim();

    // Regex: 4 grupos de letras separados por un espacio cada uno
    // Soporta tildes y la letra Ñ
    const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1]+){3}$/;

    if (regex.test(nombreLimpio)) {
        Swal.fire({
            title: "¡!",
            text: "Nombre Ingresado Correctamente!",
            icon: "success"
        });
        return true;
    } else {
        Swal.fire({
            title: "¡!",
            text: "Nombre Ingresado Incorrectamente!",
            icon: "error"
        });
        return false;
    }
};


function validarCorreo(email) {
    
    const emailLimpio = email.trim();

    // Regex: dirección de correo electrónico válida
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(emailLimpio)) {
        Swal.fire({
            title: "¡!",
            text: "Correo Ingresado Correctamente!",
            icon: "success"
        });
        return true;
    } else {
        Swal.fire({
            title: "¡!",
            text: "Correo Ingresado Incorrectamente!",
            icon: "error"
        });
        return false;
    }
};

function validarContraseña(password) {
    const minLength = 8;
    // Evaluamos todas las condiciones
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);

    // Validamos una por una con retornos rápidos (Early Return)
    if (password.length < minLength) {
        Swal.fire({ title: "¡!", text: "Mínimo 8 caracteres!", icon: "error" });
        return false;
    }
    if (!hasUpperCase) {
        Swal.fire({ 
            title: "¡!", 
            text: "Falta una letra mayúscula!", 
            icon: "error" 
        });
        return false;
    }
    if (!hasLowerCase) {
        Swal.fire({ 
            title: "¡!", 
            text: "Falta una letra minúscula!", 
            icon: "error" 
        });
        return false;
    }
    if (!hasNumbers) {
        Swal.fire({ 
            title: "¡!", 
            text: "Falta al menos un número!", 
            icon: "error" 
        });
        return false;
    }
    if (!hasSpecialChar) {
        Swal.fire({ 
            title: "¡!", 
            text: "Falta un caracter especial (@$!%*?&)!", 
            icon: "error" 
        });
        return false;
    }

    Swal.fire({ 
        title: "¡!", 
        text: "Contraseña Ingresada Correctamente!", 
        icon: "success" 
    });
    return true;
}