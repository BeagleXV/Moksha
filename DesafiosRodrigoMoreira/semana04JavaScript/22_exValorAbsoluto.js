//22. Crie uma função que retorne o valor absoluto de um número.

function valorAbsoluto(numero){
    return Math.abs(numero)
}


console.log(valorAbsoluto(-15));

// Exemplo de Arrowfunction neste mesmo caso:

const arrowValorAbsoluto = (numero) => Math.abs(numero);

console.log(arrowValorAbsoluto(-10));