let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . "

// 1. ¿Qué método utiliza para saber la cantidad de caracteres?
// Imprima el resultado
console.log(msg.length)

// 2. Convierta la cadena de texto entregada a minúsculas e imprima por consola la salida.
console.log(msg.toLowerCase())

// 3. Si la cadena contiene la palabra filtro en algún lado imprima un mensaje por consola con el valor true.
console.log(msg.includes('filtro'))

// 4. Extrae la palabra "ejercicios" del mensaje entregado.
// imprime por consola
console.log(msg.substring(112,122))


// 5. Reemplaza los espacio por el caracter "-" e imprime el resultado final.
console.log(msg.replace(new RegExp(' ', 'g'), '-'))

// 6. Realiza en el DOM un software que compare si dos campos de password son iguales.
document.addEventListener('DOMContentLoaded', function(){
    const name = document.getElementById('name');
    const lastname = document.getElementById('lastname');
    const mail = document.getElementById('mail');
    const password = document.getElementById('password');
    const validatePassword = document.getElementById('validatePassword');
    const validateButton = document.getElementById('validateButton');
    const errorText = document.getElementById('errorText'); // Agregamos el elemento donde mostrar mensajes de error

    validateButton.addEventListener('click', function(){
        const correctName = name.value.trim();
        const correctLastName = lastname.value.trim();
        const correctMail = mail.value;
        const correctPassword = password.value;
        const correctValidatePassword = validatePassword.value;
        let errorMessage = ''; 

        if (correctName.length < 2 || correctName[0] !== correctName[0].toUpperCase()) {
            errorMessage = 'Nombre inválido. Debe tener al menos 2 caracteres y comenzar con mayúscula.';
        }
        
        if (correctLastName.length < 2 || correctLastName[0] !== correctLastName[0].toUpperCase()) {
            if (errorMessage) {
                errorMessage += ' ';
            }
            errorMessage += 'Apellido inválido. Debe tener al menos 2 caracteres y comenzar con mayúscula.';
        }
        if (!correctMail.includes('@')) {
            if (errorMessage) {
                errorMessage += ' ';
            }
            errorMessage += 'El correo electrónico debe contener el símbolo @.';
        }
        

        if (correctPassword !== correctValidatePassword) {
            if (errorMessage) {
                errorMessage += ' ';
            }
            errorMessage += 'Las contraseñas no coinciden.';
        }

        if (errorMessage) {
            errorText.textContent = errorMessage;
            errorText.style.color = 'red';
        } else {
            errorText.textContent = 'Todo está correcto.';
            errorText.style.color = 'green';
        }
    });
});




// 7. Crea una función que valide cuántas vocales tiene el msg entregado.
let cantidadVocales = 0;

function valide(msg) {
    for (let index = 0; index < msg.length; index++) {
        let vocal = msg[index].toLowerCase();
        if (vocal.includes('a') || vocal.includes('e') || vocal.includes('i') || vocal.includes('o') || vocal.includes('u')) {
            cantidadVocales++;
        }
    }
    console.log(`El mensaje tiene: ${cantidadVocales} vocales`);
}
valide(msg);


// 8. Realiza un programa basado en el mockup entregado, que guarde los comentarios agregados por el usuario, teniendo en cuenta lo siguiente:

// * No puede haber espacios ni al principio ni al final.
// * Debe poder convertirlos a mayúscula o a minúscula.
// * debe tener un contador que va disminuyendo conforme van terminándose el límite de caracteres que este será de 255.
// * Los comentarios deberán salir en color verde y negrilla.

// Fecha de entrega(por parejas) --> Jueves 19 de octubre de 2023 a las 11.30 pm -> Link del repositorio.
// Nombre completo de los integrantes