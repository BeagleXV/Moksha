//12. Crie uma função que calcule o fatorial de um número.

function calculaFatorialFor(numero){
    let fatorial = 1;
    for(let i = 1; i <= numero; i++){
        fatorial *= i;
    }
    return fatorial;
}

console.log(calculaFatorialFor(5));


// Utilizando WHILE:

function calculaFatorialWhile(numero){
    let fatorial = 1;
    let i = 1;
    while(i <= numero){
        fatorial *= i;
        i++;
    }
    return fatorial;
}

console.log(calculaFatorialWhile(6));