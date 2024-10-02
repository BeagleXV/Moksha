//11. Verifique se um número está presente em uma lista.

function verificaNumero(numero){
    let listaNumeros = [12,4,25,36,5,6,11];
    if(listaNumeros.includes(numero)){
        return console.log(`O número ${numero} está presente na lista!`);
    } else {
        return console.log(`O número ${numero} NÃO está presente na lista!`);
    }

}

verificaNumero(25);