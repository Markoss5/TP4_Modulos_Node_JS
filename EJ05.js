const { URL } = require('url');

function parsearUrl(direccion) {
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
}

module.exports = parsearUrl;
