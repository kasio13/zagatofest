document.getElementById("cuestionarioForm").addEventListener("submit", function(event) {
    event.preventDefault(); // evita recargar la página

    // 1. Obtener valores
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let comentarios = document.getElementById("comentarios").value;

    // 2. Construir el mensaje
    let mensaje = `*Nuevo cuestionario:*\n\n` +
                  `👤 Nombre: ${nombre}\n` +
                  `🎂 Edad: ${edad}\n` +
                  `💬 Comentarios: ${comentarios}`;

    // 3. Codificar mensaje
    let mensajeCodificado = encodeURIComponent(mensaje);

    // 4. Número de destino (con código de país, sin +)
    let telefono = "521234567890"; // <--- cambia este por el número real

    // 5. Crear URL de WhatsApp
    let url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

    // 6. Abrir WhatsApp en nueva pestaña
    window.open(url, "_blank");
});
