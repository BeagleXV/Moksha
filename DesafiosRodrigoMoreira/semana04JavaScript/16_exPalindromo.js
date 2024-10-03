//16. Crie uma função que retorne se uma string é um palíndromo.

function palindromo(frase){
    frase = frase.replace(/\s/g,'').toLowerCase(); // Fiz com que o paramentro recebesse ele mesmo sem espaço e em letras minúsculas.
    if(frase === frase.split('').reverse().join('').toLowerCase()){ //criei uma condição em que eu comparo o paramentro com ele mesmo, porem de tras pra frente usando os metodos split('') + reverse() + join('')
        return console.log(`A frase '${frase}' é um palíndromo!`);
    } else {
        return console.log(`A frase '${frase}' NÃO é um palíndromo!`);
    }
}

palindromo('A cera causa sua careca');

