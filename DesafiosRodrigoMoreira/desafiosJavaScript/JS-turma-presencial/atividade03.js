/*Atividade 3: Funções de Callback
Crie uma função executarOperacao que receba dois números e uma função de callback que
represente uma operação matemática (soma, subtração, multiplicação ou divisão). A função
executarOperacao deve retornar o resultado da operação aplicada aos dois números.*/

function executarOperacao(num1,num2,operador){
	return operador(num1,num2);
};

const soma = (x,y) => x + y;
const subtracao = (x,y) => x - y;
const multiplicacao = (x,y) => x * y;
const divisao = (x,y) => x / y;

console.log(executarOperacao(5,5,soma));
console.log(executarOperacao(7,2,subtracao));
console.log(executarOperacao(9,4,multiplicacao));
console.log(executarOperacao(14,3,divisao));
