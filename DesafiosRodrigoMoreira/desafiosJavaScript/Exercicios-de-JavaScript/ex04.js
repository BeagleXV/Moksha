//4. Crie uma função que retorne o maior de dois números.

function maiorNumero(num1,num2){
    if(num1 > num2){
        return console.log(num1);
    } else {
        return console.log(num2);
    }
}

maiorNumero(1,3);

// Exemplo de Arrowfunction neste mesmo caso:

const arrowMaiorNumero = (num1,num2) => num1 > num2 ? num1 : num2; //Neste caso eu usei o operador ternário, pois eu tive apenas 2 valores e teria que retornar apenas uma condição. ?true : false  

console.log(arrowMaiorNumero(4,15));