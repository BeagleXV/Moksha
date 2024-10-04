//30. Crie uma função que conte quantos números ímpares existem em uma lista.

function contaNumerosImpar(numeros){
    let contador = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 !== 0){
            contador += 1;
        }
    }
    return contador;
}

console.log(contaNumerosImpar([1,4,3,8]));