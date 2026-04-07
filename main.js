const form= document.getElementById("formulario");
const nombre= document.getElementById("nombre");
const email= document.getElementById("email");
const password= document.getElementById("password");
const confirmPassword= document.getElementById("confirmPassword");
const errornombre= document.getElementById("errornombre");
const erroremail= document.getElementById("erroremail");
const errorpassword= document.getElementById("errorpassword");
const errorconfirmPassword= document.getElementById("errorconfirmPassword");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if(nombre.value.trim() === "") {
        errornombre.textContent = "El nombre es obligatorio";
    }else{
        errornombre.textContent = "";
    }

    if(email.value.trim() === "") {
        erroremail.textContent = "El email es obligatorio";
    }else{
        erroremail.textContent = "";
    }

    if(password.value.trim() === "") {
        errorpassword.textContent = "La contraseña es obligatoria";
    }else{
        errorpassword.textContent = "";

    }

    if(confirmPassword.value.trim() === "") {
        errorconfirmPassword.textContent = "La confirmación de contraseña es obligatoria";
    }else{
        if(confirmPassword.value !== password.value) {
            errorconfirmPassword.textContent = "Las contraseñas no coinciden";
        }else{
        errorconfirmPassword.textContent = "";
    }
}
});

