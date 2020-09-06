function alerta(){
    swal({
        title: "Datos incompletos",
        text: "Por favor ingrese su nombre",
        icon: "warning",
      });
}

const nombre = document.getElementById("inputNombre");
const apellido = document.getElementById("inputApellido");
const direccion = document.getElementById("inputDierccion");
const telefono = document.getElementById("inputTelefono");
const email = document.getElementById("inputEmail");
const formulario = document.getElementById("formulario");
let ver = false
const prueba = "Hola"

console.log(prueba.length)

function cancelar(){
    swal ({
        title: "¿Seguro que desea cancelar?",
        icon: "warning",
        buttons: ["No", "Si"],
        dangerMode: true,
    })
}

function comprobarDato(dato, veri){
    if (dato == null){
        swal({
            title: "Datos incompletos",
            text: "Por favor revise sus datos",
            icon: "warning",
          });
        veri = false
        console.log("entro al if")
    } else {
        veri = true
        console.log("no entro al if")
    }
}

formulario.onsubmit = function(){
    comprobarDato(nombre.value, ver)
    console.log(ver)
    console.log(nombre)
    if (ver == true){
        swal({
            title: "Bien hecho ",
            text: "Datos completados con exito",
            icon: "success",
          }); 
    }
}

formulario.onsubmit()