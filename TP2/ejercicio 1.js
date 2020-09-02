// Ejercicio 1
function coche (marca, modelo, precio)
{
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
}

function IVA(precio)
{
    iva = precio * 0.21;
    return iva;
}

var coche1 = new coche('Renault', 'Laguna', 1800);
var coche2 = new coche('Ford', 'Mondeo', 2300);
var coche3 = new coche('Mercedes', '600', 8500);
var coche4 = new coche('Seat', 'Cordoba', 3000);
var cadena;

cadena = `El coche ${coche1.marca}  ${coche1.modelo} vale ${coche1.precio} y el iva es ${IVA(coche1.precio)}`
document.write(cadena + "<br>");
cadena = `El coche ${coche2.marca}  ${coche2.modelo} vale ${coche2.precio} y el iva es ${IVA(coche2.precio)}`
document.write(cadena + "<br>");
cadena = `El coche ${coche3.marca}  ${coche3.modelo} vale ${coche3.precio} y el iva es ${IVA(coche3.precio)}`
document.write(cadena + "<br>");
cadena = `El coche ${coche4.marca}  ${coche4.modelo} vale ${coche4.precio} y el iva es ${IVA(coche4.precio)}`
document.write(cadena + "<br>");