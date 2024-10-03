//14. Remova todos os espaços de uma string.

function removeEspaco(frase){
    return frase.replace(/\s/g, ''); 
}

console.log(removeEspaco("Essa é uma frase sem espaço"));