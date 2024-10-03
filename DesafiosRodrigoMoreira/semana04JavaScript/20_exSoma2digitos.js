//20. Crie uma função que retorne a soma dos dígitos de um número.

function somaDigitos(numero){ 
    let soma = 0; //Variavel soma recebendo valor 0 para somar os digitos no loop
    let digitos = numero.toString().split(''); // variavel digitos recebendo o parametro numero que será convertido para string e em seguida a string será dividida numa array.
    for(let i = 0; i < digitos.length; i++){ // loop usado para percorrer a array
        soma += parseInt(digitos[i]); // dentro do loop a soma é feita convertendo cada digito da array em numeros.
    }
    return soma; // retorna o valor da soma dos digitos
}

console.log(somaDigitos(55)); 


