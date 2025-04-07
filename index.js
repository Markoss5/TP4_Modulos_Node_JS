const concatenar = require("./EJ01")
concatenar("Hola", "como estas?")

const mate = require("./modulos/matematica")
console.log(mate.suma(1,2))

const crearAlumno = require("./modulos/Alumno")
const alumno1 = crearAlumno("Fabricio", "12345678");
const alumno2 = crearAlumno("Marco", "87654321");

const copiarArchivo = require('./EJ04');
copiarArchivo('entrada.txt', 'salida.txt');

const parsearUrl = require('./EJ05');
const url = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";
const resultado = parsearUrl(url);
console.log(resultado);


const parsearUrl = require('./src/ej06');
let url1 = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";
console.log(parsearUrl(url1));
let url2 = "estoNoEsUnaUrl";
console.log(parsearUrl(url2));


const obtenerMoneda = require('./src/ej07');
const monedaAR = obtenerMoneda("AR");
console.log(monedaAR);
const monedaUS = obtenerMoneda("US");
console.log(monedaUS); 
const monedaFAKE = obtenerMoneda("ZZ");
console.log(monedaFAKE);    
