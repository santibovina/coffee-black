// Función para validar el formulario newsletter
function validarFormulario(event) {
    // Obtener los valores de los campos de entrada
    const nombreApellido = document.getElementById("nombre_apellido").value;
    const email = document.getElementById("email").value;

    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Verificar si el nombre y apellido no están vacíos y si el correo es válido
    if (nombreApellido.trim() === "") {
        alert("Por favor, ingresa tu nombre y apellido.");
        event.preventDefault(); // Evita que el formulario se envíe
    } else if (!emailRegex.test(email)) {
        alert("Por favor, ingresa una dirección de correo válida.");
        event.preventDefault(); // Evita que el formulario se envíe
    } else {
        alert("¡Bienvenido!");
    }
}

// Función para validar el formulario de contacto
function validarFormularioContacto(event) {
    // Obtener los valores de los campos de entrada
    const nombreApellido = document.getElementById("nombre_apellido").value;
    const email = document.getElementById("email").value;
    const comentario = document.getElementById("comentarios").value;

    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Verificar si el nombre y apellido no están vacíos, si el correo es válido y que en el campo comentarios haya contenido
    if (nombreApellido.trim() === "") {
        alert("Por favor, ingresa tu nombre y apellido.");
        event.preventDefault(); // Evita que el formulario se envíe
    } else if (!emailRegex.test(email)) {
        alert("Por favor, ingresa una dirección de correo válida.");
        event.preventDefault(); // Evita que el formulario se envíe
    } else if (comentario.trim() === "") {
        alert("Por favor, dejanos tu comentario.");
        event.preventDefault(); // Evita que el formulario se envíe
    } else {
        alert("¡Estamos en contacto!");
    }
}
