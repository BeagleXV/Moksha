//8. Crie uma função que retorne a média de uma lista de números.

//Utilizando FOR:
function mediaNumerosFor(numeros){
    let soma = 0;
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    return (soma / numeros.length).toFixed(2);

}
numeros = [3,7,11,15,6,55];
console.log(mediaNumerosFor(numeros));
 
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
numeros_ = [9,23,11,15,41,32];
console.log(mediaNumerosWhile(numeros_));