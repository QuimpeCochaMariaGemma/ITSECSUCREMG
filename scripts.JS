// Función para mostrar un mensaje de confirmación al enviar el formulario
document.getElementById("form-contacto").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre && email && mensaje) {
        alert(`Gracias, ${nombre}. Hemos recibido tu mensaje y te responderemos pronto.`);
        this.reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
