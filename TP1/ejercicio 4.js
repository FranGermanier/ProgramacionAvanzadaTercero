//Ejercicio 4
function jubilacionSexo(edad, sexo){
    if (sexo == 'hombre'){
        if (edad >= 65){
            console.log('Tiene edad para jubilarse');
        } 
        else {
            console.log('No tiene edad para jubilarse');
        }
    } 
    else {
        if (edad >= 60){
            console.log('Tiene edad para jubilarse');
        }
        else {
            console.log('No tiene edad para jubilarse')
        }
    }
}

console.log('Ejercicio 4');
jubilacionSexo(63, 'mujer');