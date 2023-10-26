const numero1 = parseFloat(prompt("Por favor, introduce el primer número:"));
const numero2 = parseFloat(prompt("Introduce el segundo número:"));

if (numero1 > numero2) {
    document.write('El número '+numero1+ ' es mayor que el número '+numero2);
} else if (numero2 > numero1) {
    document.write('El número '+numero2+ ' es mayor que el número '+numero1);
} else {
    document.write("Los numeros ingresados son iguales");
}