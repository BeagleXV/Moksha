//15. Crie uma função que conte quantas vezes um caractere aparece em uma string.

function contaCaracterFor(letra){
    let frase = 'eu caí de skate hoje!';
    let contador = 0;
    for(let i = 0; i < frase.length; i++){
        if(letra.toLocaleLowerCase() == frase[i]){
            contador += 1;
        }
    }
    return contador;
}

console.log(contaCaracterFor('e'));

//Utilizando WHILE:

function contaCaracterWhile(letra){
    let frase = 'not your keys, not your coins!'
    let i = 0
    let contador = 0;
    while(i < frase.length){
        if(letra.toLocaleLowerCase() == frase[i]){
            contador += 1;

        }
        i++;   
    }
    return contador;
}

console.log(contaCaracterWhile('O'));