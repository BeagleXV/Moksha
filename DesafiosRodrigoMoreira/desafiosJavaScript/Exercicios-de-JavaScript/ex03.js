//3. Verifique se um número é par ou ímpar.

function parImpar(numero){
    if(numero % 2 == 0){
        return console.log("Par")
    } else {
        return console.log("Impar")
    }
}

parImpar(6);

// Exemplo de Arrowfunction neste mesmo caso:

const arrowParImpar = numero => numero % 2 === 0 ? 'Par' : 'Impar'; //? se a condição for verdadeira : se a condição for falsa.

console.log(arrowParImpar(7));