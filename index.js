const concatenar = require("./EJ01")
concatenar("Hola", "como estas?")

const mate = require("./modulos/matematica")

console.log(mate.suma(1,2))

const crearAlumno = require("./modulos/Alumno")
const alumno1 = crearAlumno("Fabricio", "12345678");
const alumno2 = crearAlumno("Marco", "87654321");

const copiarArchivo = require('./EJ04');

copiarArchivo('entrada.txt', 'salida.txt');
