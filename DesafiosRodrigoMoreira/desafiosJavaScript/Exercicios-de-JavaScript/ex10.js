//10. Conte quantas vogais existem em uma string.

function contaVogais(string){
    let vogais = ['a','e','i','o','u'];
    let contador = 0;
    for(let i = 0; i < string.length; i++){
        if(vogais.includes(string[i].toLowerCase())){
            contador += 1;  
        }
    }
    return contador;
}

console.log(contaVogais('Polkadot'));