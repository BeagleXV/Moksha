//6. Calcule a soma de todos os números de 1 a 100.

//Utilizando FOR:
function somaFor(){
    soma = 0;
    for (let i = 1; i <= 100; i++){
        soma += i;
    }
    return console.log(soma);
}

somaFor();

//Utilizando WHILE:
function somaWhile(){
    soma = 0; // Utilizei o mesmo nome para variavel soma, pois ela está dentro do escopo de uma outra função chamada somaWhile()
    numero = 1;
    while(numero <= 100){
        soma += numero;
        numero++;
    }   
    return console.log(soma);
}

somaWhile();