//24. Crie uma função que retorne os divisores de um número.

function retornaDivisoresFor(numero){
    let divisores = [];
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
            divisores.push(i);
        }
    }
    return divisores;
}

console.log(retornaDivisoresFor(8));

// Utilizando WHILE:

function retornaDivisoresWhile(numero){
    let divisores = [];
    let i = 1;
    while(i <= numero){
        if(numero % i === 0){
            divisores.push(i);
        }
        i++;
    }
    return divisores;
}

console.log(retornaDivisoresWhile(25));

