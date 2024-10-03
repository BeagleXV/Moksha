//13. Imprima a sequência de Fibonacci até o décimo termo.

function fibonacciFor(numero){            /**/ 
   let termo1 = 0;
   let termo2 = 1;
   let resultado = [termo1, termo2];
   for(let contador = 3; contador <= numero; contador++){
    let termo3 = termo1 + termo2;
    resultado.push(termo3);
    termo1 = termo2;
    termo2 = termo3;
   }
   return resultado.join('-');
}

console.log(fibonacciFor(10));

//Utilizando WHILE:

function fibonacciWhile(numero){
    let termo1 = 0;
    let termo2 = 1;
    let resultado = [termo1, termo2];
    contador = 3;
    while(contador <= numero){
        let termo3 = termo1 + termo2;
        resultado.push(termo3);
        contador++;
        termo1 = termo2;
        termo2 = termo3;
    }
    return resultado.join('-');
}

console.log(fibonacciWhile(10));