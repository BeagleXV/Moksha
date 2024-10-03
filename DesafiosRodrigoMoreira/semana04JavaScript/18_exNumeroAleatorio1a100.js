//18. Gere um número aleatório entre 1 e 100.

function geraNumeroAleatorio(numero){
    numero = Math.random() * 100 + 1;
    return Math.floor(numero)
}

geraNumeroAleatorio();

console.log(geraNumeroAleatorio())

// Exemplo de Arrowfunction neste mesmo caso:

const arrowNumeroAleatorio = () => Math.floor(Math.random() * 100 + 1); 

console.log(arrowNumeroAleatorio());
