const numero = parseInt(prompt("Introduce un número, por favor:"));

if (numero % 2 === 0) {
    document.write('El número '+numero+ ' es divisible por 2');
} else {
    document.write('El número '+numero+ ' no es divisible por 2');
}