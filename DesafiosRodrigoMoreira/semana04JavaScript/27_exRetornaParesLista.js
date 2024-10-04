//27. Crie uma função que retorne a soma dos números pares de uma lista.

function retornaParesFor(numeros){
    let soma = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            soma += numeros[i];
        }
        
    }
    return soma;
}

console.log(retornaParesFor([1,6,3,2]));

// Utilizando WHILE:

function retornaParesWhile(numeros_){
    let soma = 0;
    let i = 0;
    while(i < numeros_.length){
        if(numeros_[i] % 2 === 0){
            soma += numeros_[i];
        }
        i++;
    }
    return soma;
}

console.log(retornaParesWhile([17,25,18,22,4]))
