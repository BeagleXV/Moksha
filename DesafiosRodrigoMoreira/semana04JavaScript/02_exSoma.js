//2. Crie uma função que some dois números.


function soma(num1,num2){
    return num1 + num2;
}

console.log(soma(6,8));

// Exemplo de Arrowfunction neste mesmo caso:

const arrowSoma = (num1,num2) => (num1+num2);

console.log(arrowSoma(5,4));