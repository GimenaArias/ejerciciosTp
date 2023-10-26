const numero = parseInt(prompt("Por favor, introduce un número:"));
let mensaje = '';

if (numero % 2 === 0) {
  mensaje += '2, ';
}
if (numero % 3 === 0) {
  mensaje += '3, ';
}
if (numero % 5 === 0) {
  mensaje += '5, ';
}
if (numero % 7 === 0) {
  mensaje += '7, ';
}

if (mensaje === '') {
  document.write('El número: ' + numero + ' no es divisible por los números 2, 3, 5 ni 7.');
} else {

  document.write('El número: ' + numero + ' es divisible por: ' + mensaje);
}