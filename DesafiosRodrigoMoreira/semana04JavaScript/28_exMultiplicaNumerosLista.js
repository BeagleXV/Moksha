//28. Crie uma função que multiplique todos os elementos de uma lista.

function multiplicaNumerosFor(numeros){
    let produto = 1;
    for(let i = 0; i < numeros.length; i++){
        produto *= numeros[i];
    }
    return produto;
}


console.log(multiplicaNumerosFor([5,3,9,11]));

//Utilizando WHILE:

function multiplicaNumerosWhile(numeros_){
    let produto = 1;
    let i = 0;
    while(i < numeros_.length){
        produto *= numeros_[i];
        i++;
    }
    return produto;
}

console.log(multiplicaNumerosWhile([1,10,9,3]));