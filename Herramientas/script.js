function calcularCosto() {
  const horas = parseInt(document.getElementById("horas").value) || 0;
  const minutos = parseInt(document.getElementById("minutos").value) || 0;
  const segundos = parseInt(document.getElementById("segundos").value) || 0;

  const tiempoHoras = horas + minutos / 60 + segundos / 3600;

  const gramos = parseFloat(document.getElementById("gramos").value) || 0;
  const precioFilamento = parseFloat(document.getElementById("precioFilamento").value) || 0;
  const sueldoDisenador = parseFloat(document.getElementById("sueldoDisenador").value) || 0;
  const precioLuz = parseFloat(document.getElementById("precioLuz").value) || 0;
  const consumoMaquina = parseFloat(document.getElementById("consumoMaquina").value) || 0;
  const desgaste = parseFloat(document.getElementById("desgaste").value) || 0;
  const margenError = parseFloat(document.getElementById("margenError").value) / 100 || 0;
  const iva = parseFloat(document.getElementById("iva").value) / 100 || 0;
  const ganancia = parseFloat(document.getElementById("ganancia").value) / 100 || 0;

  const pagoDisenador = sueldoDisenador * tiempoHoras;
  const costoLuz = consumoMaquina * tiempoHoras * precioLuz;
  const costoMaterial = (precioFilamento / 1000) * gramos;

  const costoBase = pagoDisenador + costoLuz + costoMaterial + desgaste;
  const costoConMargen = costoBase * (1 + margenError);
  const costoIVA = costoConMargen * iva;
  const valorGanancia = costoConMargen * ganancia;
  const costoFinal = costoConMargen + costoIVA + valorGanancia;

  document.getElementById("resultados").innerHTML = `
    💼 Sueldo del diseñador: ${pagoDisenador.toLocaleString("es-CO", {style: "currency", currency: "COP"})}<br>
    ⚡ Costo de la luz: ${costoLuz.toLocaleString("es-CO", {style: "currency", currency: "COP"})}<br>
    🧵 Costo del material: ${costoMaterial.toLocaleString("es-CO", {style: "currency", currency: "COP"})}<br>
    🛠️ Desgaste de máquina: ${desgaste.toLocaleString("es-CO", {style: "currency", currency: "COP"})}<br>
    🔢 Costo base (sin margen): ${costoBase.toLocaleString("es-CO", {style: "currency", currency: "COP"})}<br>
    📉 Margen de error (${(margenError*100).toFixed(1)}%): ${(costoConMargen - costoBase).toLocaleString("es-CO", {style: "currency", currency: "COP"})}<br>
    💰 Costo con margen de error: ${costoConMargen.toLocaleString("es-CO", {style: "currency", currency: "COP"})}<br>
    🧾 IVA (${(iva*100).toFixed(1)}%): ${costoIVA.toLocaleString("es-CO", {style: "currency", currency: "COP"})}<br>
    📈 Margen de ganancia (${(ganancia*100).toFixed(1)}%): ${valorGanancia.toLocaleString("es-CO", {style: "currency", currency: "COP"})}<br>
    ✅ <strong>Costo final a cobrar: ${costoFinal.toLocaleString("es-CO", {style: "currency", currency: "COP"})}</strong>
  `;
}
function irPaginaInicial() {
  // Cambia "index.html" por la ruta correcta si el archivo se llama distinto
  window.location.href = "../index.html";
}
