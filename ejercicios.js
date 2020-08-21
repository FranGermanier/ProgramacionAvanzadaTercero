
//Ejercicio 1
function edad(nombre, edad){
    console.log(nombre + ' tiene ' + edad + ' años')
}
console.log('Ejercicio 1');
edad('Francisco', 22);

//Ejercicio 2
function resolver(num1, operacion, num2){
    if (operacion == '-') {
        console.log(num1 + '-' + num2 + ' es igual a:');
        console.log (num1 - num2);
    } 
    else {
        if (operacion == '+') {
            console.log(num1 + '+' + num2 + ' es igual a:');
            console.log(num1 + num2);
        }
        else {
            if (operacion == '*') {
                console.log(num1 + '*' + num2 + ' es igual a:');
                console.log(num1 * num2);
            }
            else {
                console.log(num1 + '/' + num2 + ' es igual a:');
                console.log(num1 / num2);
            }
        }
    }
}

console.log('Ejercicio 2');
resolver(23, '*', 10);

//Ejercicio 3
function jubilacion(edad){
    if (edad >= 65){
        console.log('Tiene edad para jubilarse');
    } 
    else {
        console.log('No tiene edad para jubilarse');
    }
}

console.log('Ejercicio 3');
jubilacion(65);


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
jubilacionSexo(63, 'fgfgfg');

//Parte 2
//Ejercicio 2

function areaTriangulo(base, altura){
    area = (base * altura) / 2
    console.log(`El area del triangulo es: ${area}`);
}

areaTriangulo(10,20)