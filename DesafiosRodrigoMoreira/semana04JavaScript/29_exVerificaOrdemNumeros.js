//29. Verifique se uma lista está em ordem crescente.

function verificaOrdemCrescente(numeros){
    for(let i = 0; i < numeros.length - 1; i++){
        if(numeros[i] > numeros[i + 1]){
            return false;
        }
    }
    return true;
}

console.log(verificaOrdemCrescente([2,1,4,3]));
console.log(verificaOrdemCrescente([1,2,3,4]));