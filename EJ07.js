// src/ej07.js
const countryData = require('country-data');

function obtenerMoneda(codigoPais) {
  const pais = countryData.countries[codigoPais];
  
  if (!pais) {
    return `Código de país inválido: ${codigoPais}`;
  }

  const codigoMoneda = pais.currencies[0]; // Puede haber más de una
  const moneda = countryData.currencies[codigoMoneda];

  return moneda ? moneda.name : "Moneda no encontrada";
}

module.exports = obtenerMoneda;
