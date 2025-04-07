class Alumno {
    constructor(username, dni){
        this.username = username;
        this.dni = dni;
    }
}

function crearAlumno(username, dni) {
    const nuevoAlumno = new Alumno(username, dni);
    console.log("Alumno creado:", nuevoAlumno);
    return nuevoAlumno;
}
module.exports = crearAlumno;