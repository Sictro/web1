function enviarCorreo() {
  const correo = "sictrocolombia@gmail.com";
  const asunto = "Necesito ayuda con su producto";
  const cuerpo = "Hola, necesito más información sobre: ";
  window.location.href = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}

function enviarWhatsApp() {
  const telefono = "573189005860"; // Número con código de país sin signos
  const mensaje = "Hola, necesito mas informacion sobre:";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
