const frase = prompt("Por favor, introduce una frase:");
let vocalesEncontradas = "";

for (let i = 0; i < frase.length; i++) {
  const caracter = frase.charAt(i).toLowerCase();
  if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    vocalesEncontradas += caracter; 
  }
}

document.write('Las vocales encontradas en la frase son :' ,vocalesEncontradas);
