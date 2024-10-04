//17. Crie uma função que ordene uma lista de números.

function ordenaNumeros(numeros){
    numeros.sort((a,b) => a - b); 
    return numeros;
}

console.log(ordenaNumeros([12,4,3,88,9,11,27,35]));