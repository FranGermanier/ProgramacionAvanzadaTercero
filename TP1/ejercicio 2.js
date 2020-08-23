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