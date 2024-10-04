//21. Verifique se dois números são múltiplos.

function verificaMultiplo(num1, num2){
    if(num1 % num2 === 0 || num2 % num1 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(verificaMultiplo(10,5))

// Exemplo de Arrowfunction neste mesmo caso:

const arrowVerificaMultiplo = (num1,num2) => num1 % num2 === 0 || num2 % num1 === 0 ? true : false;

console.log(arrowVerificaMultiplo(3,7));