// src/ej06.js
const { URL } = require('url');

function parsearUrl(direccion) {
  try {
    const miUrl = new URL(direccion);

    const parametros = {};
    miUrl.searchParams.forEach((valor, clave) => {
      parametros[clave] = valor;
    });

    return {
      host: `${miUrl.protocol}//${miUrl.host}`,
      pathname: miUrl.pathname,
      parametros: parametros
    };
  } catch (error) {
    console.log('Error al parsear la URL:', error.message);
    return null;
  }
}

module.exports = parsearUrl;
