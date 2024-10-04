//26. Verifique se uma string contém uma substring.

function verificaSubstring(string,substring){
    return string.includes(substring);
}

console.log(verificaSubstring("Hello, world!","world"));

// Exemplo de Arrowfunction neste mesmo caso:

const arrowVerificaSubstring = (string,substring) => string.includes(substring);

console.log(arrowVerificaSubstring("Olá","mundo"));