function cancelar(){
    swal ({
        title: "¿Seguro que desea cancelar?",
        icon: "warning",
        buttons: ["No", "Si"],
        dangerMode: true,
    })
}

function comprobarDato(dato){
    if (dato == ""){
        swal({
            title: "Datos incompletos",
            text: "Por favor revise sus datos",
            icon: "warning",
          });
        return false
        console.log("entro al if")
    } else {
        return true
    }
}

function comprobar(){
    const nombre = document.getElementById("inputNombre").value;
    const apellido = document.getElementById("inputApellido").value;
    const direccion = document.getElementById("inputDireccion").value;
    const telefono = document.getElementById("inputTelefono").value;
    const email = document.getElementById("inputEmail").value;
    if (comprobarDato(nombre) && comprobarDato(apellido) && comprobarDato(direccion) && comprobarDato(telefono) && comprobarDato(email)){
        swal({
            title: "Bien hecho ",
            text: "Datos completados con exito",
            icon: "success",
          }); 
    }
}
