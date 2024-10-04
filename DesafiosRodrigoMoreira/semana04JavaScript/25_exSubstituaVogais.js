//25. Substitua todas as vogais de uma string por '*'.

function substituirVogaisFor(frase){
    let vogais = ['a','e','i','o','u'];
    let novaFrase = '';
    for(let i = 0; i < frase.length; i++){
        if(vogais.includes(frase[i].toLowerCase())){
            novaFrase += '*';
        } else {
            novaFrase += frase[i]
        }
    }
    return novaFrase;
}

console.log(substituirVogaisFor('Ola mUndo!'));

//Utilizando WHILE:

function substituirVogaisWhile(frase){
    let vogais = ['a','e','i','o','u'];
    let novaFrase = '';
    let i = 0;
    while(i < frase.length){
        if(vogais.includes(frase[i].toLowerCase())){
            novaFrase += '*';
        } else {
            novaFrase += frase[i];
        }
        i++;
    }
    return novaFrase;
}

console.log(substituirVogaisWhile('Polkadot'))
