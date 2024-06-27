console.log("Sistema de Registro de Alumnos")
document.addEventListener("DOMContentLoaded", function(){

//obtener elementos para agregar
var form_Agregar = document.getElementById("content-form-agregaralumnos");
var addButton = document.getElementById("add-button");

//accion al haber un envio de datos
//form.addEventListener("click", agregarAlumno); //only for "form"
var enviarButton = document.getElementById("EnviarButton");
enviarButton.addEventListener("click", agregarAlumno);

//dejar apagado la pantalla de agregar alumnos
form_Agregar.style.display="none";

//accion al dar clik en boton
addButton.addEventListener("click", function(event){
    form_Agregar.style.display = "flex";
    form_consultar.style.display="none";
})

//obtener elementos para consultar
var form_consultar = document.getElementById("content-form-consultar");
var consultButton = document.getElementById("consult-button");

//dejar apagada pantalla
form_consultar.style.display ="none";
//accion al dar click
consultButton.addEventListener("click", consultarRegistros);

//Obtener boton de eliminar y dar accion al dar click
var deletedButton = document.getElementById("eliminate-button");
deletedButton.addEventListener("click", eliminarAlumno);

//Base de datos
var registro = [
    {nombre: "Eduardo Salva", edad: "30", zonaRes: "CDMX", nomPrograma: "Desarrollo Frontend", email:"LaloSal@ebac.mx"},
    {nombre: "Mario Antonio", edad: "18", zonaRes: "QRO", nomPrograma: "Desarrollo Backend", email:"MarioAn@ebac.mx"},
    {nombre: "Carla Sanchez", edad: "24", zonaRes: "ACA", nomPrograma: "Desarrollo de Videjuegos", email:"Carchez@ebac.mx"},
    {nombre: "Maria Ugalde", edad: "40", zonaRes: "MTY", nomPrograma: "Unity de cero a Pro", email:"Malde@ebac.mx"}
];

//accion consultar
function consultarRegistros(){
    console.table(registro);

    //quitar otras opciones en pantalla
    form_Agregar.style.display="none";

    //crear tabla y mostrar en pantalla
    CrearTabla();
    form_consultar.style.display="flex";
};

//crear tabla, generando columnas con filas segun base de datos
function CrearTabla(){
    //obtener elemento tabla
    var tableconsultar = document.getElementById('TableAlumnos');
    //limpiar tabla
    tableconsultar.innerHTML = "";

    //rellenar tabla
    for(var i=0; i<registro.length; i++){
        var filas =  `<tr>
                            <td>${registro[i].nombre}</td>
                            <td>${registro[i].edad}</td>
                            <td>${registro[i].zonaRes}</td>
                            <td>${registro[i].nomPrograma}</td>
                            <td>${registro[i].email}</td>
                        </tr>`                   
        tableconsultar.innerHTML += filas;
    }
};

//Accion agregar alumno
function agregarAlumno(event){
    event.preventDefault();

    //obtener valores de los inputs
    var nombre = document.getElementById("name-input").value;
    var zonaRes = document.getElementById("locality-input").value; 
    var edad = document.getElementById("age-input").value;
    var nomPrograma = document.getElementById("course-input").value;
    var email = document.getElementById("email-input").value; 

    //guardar datos del input en un objeto
    var nuevoAlumno = {nombre: nombre, zonaRes:zonaRes, edad:edad, zonaRes:zonaRes, nomPrograma:nomPrograma, email: email};

    //agregar elemento a base de datos
    registro.push(nuevoAlumno);
    alert("Alumno " + nuevoAlumno.nombre + " agregado al registro");

    //regresar pantalla a normalidad
    form_Agregar.style.display = "none";

    var nombre = document.getElementById("name-input").value = "";
    var zonaRes = document.getElementById("locality-input").value = ""; 
    var edad = document.getElementById("age-input").value = ""; 
    var nomPrograma = document.getElementById("course-input").value = ""; 
    var email = document.getElementById("email-input").value = "";
};

//accion eliminar alumno
function eliminarAlumno(){
    //recibir nombre a eliminar
    var nombreAeliminar = prompt("Ingresa el nombre a eliminar");

    //comparar y generar una lista filtrada
    registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
    alert("Alumno " + nombreAeliminar + " eliminado del registro");

    consultarRegistros();
};

})