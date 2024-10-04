//23. Calcule a raiz quadrada de um número.

function raizQuadrada(numero){
    return Math.sqrt(numero);
}

console.log(raizQuadrada(81));

// Exemplo de Arrowfunction neste mesmo caso:

const arrowRaizQuadrada = (numero) => Math.sqrt(numero);

console.log(arrowRaizQuadrada(9));