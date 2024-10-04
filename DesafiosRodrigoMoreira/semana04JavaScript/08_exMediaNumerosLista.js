//8. Crie uma função que retorne a média de uma lista de números.

//Utilizando FOR:
function mediaNumerosFor(numeros){
    let soma = 0;
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    return (soma / numeros.length).toFixed(2);

}

console.log(mediaNumerosFor([3,7,11,15,6,55]));
 
//Utilizando WHILE:
function mediaNumerosWhile(numeros_){
    let soma = 0;
    let i = 0;
    while(i < numeros_.length){
        soma += numeros_[i];
        i++;
    }
    return (soma / numeros_.length).toFixed(2);
}

console.log(mediaNumerosWhile([9,23,11,15,41,32]));