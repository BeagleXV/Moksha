/*Atividade 2: Funções Avançadas e Arrow Functions
Crie uma função calcularArea que receba o comprimento e a largura de um retângulo e
retorne a área. Em seguida, refaça essa função usando arrow function.*/

function calcularArea(comprimento,largura){
	return comprimento * largura;
}

const calcularAreaArrow = (comprimento,largura) => comprimento * largura;

console.log(calcularArea(10,2));
console.log(calcularAreaArrow(10,2));
