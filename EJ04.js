const fs = require('fs');

function copiarArchivo(origen, destino) {
  fs.writeFile(origen, 'Este es el contenido original.', function(err) {
    if (err) {
      console.log('Error al escribir el archivo:', err);
    } else {
      console.log('El archivo fue escrito correctamente.');

      const contenido = fs.readFileSync(origen, 'utf8');
      console.log('Contenido leído:', contenido);

      fs.writeFile(destino, contenido, function(err) {
        if (err) {
          console.log('Error al copiar el archivo:', err);
        } else {
          console.log(`El archivo fue copiado como ${destino}`);
        }
      });
    }
  });
}

module.exports = copiarArchivo;
