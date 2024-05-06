let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function verificarIntento() {
    // Reinicia el mensaje antes de cada intento
    document.getElementById('mensaje').textContent = '';

    const intento = parseInt(document.getElementById('intento').value);

    if (isNaN(intento) || intento < 1 || intento > 100) {
        establecerMensaje('Por favor, ingresa un número válido entre 1 y 100.');
        return;
    }

    intentos++;

    if (intento === numeroAleatorio) {
        establecerMensaje(`¡Acertaste! Solo utilizaste ${intentos} intentos.`);
    } else if (intento < numeroAleatorio) {
        establecerMensaje('No, mi número es mayor.');
    } else {
        establecerMensaje('No, mi número es menor.');
    }
}

function establecerMensaje(mensaje) {
    document.getElementById('mensaje').textContent = mensaje;
}

