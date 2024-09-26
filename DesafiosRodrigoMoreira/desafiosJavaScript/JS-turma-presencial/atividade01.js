/* Atividade 1: Manipulação de Objetos Crie um objeto chamado carro com as propriedades marca, modelo, ano, e cor. Em seguida,
execute as seguintes tarefas.

- Imprima todas as propriedades do objeto.

- Atualize a cor do carro.

- Use desestruturação para extrair e imprimir a marca e o modelo.*/

const prompt = require('prompt-sync')();

const carro = {
	marca:'Ford',
	modelo:'Ka',
	ano: 2019,
	cor:'branco',
};
function carros(){
	Object.keys(carro).forEach(key => console.log(`${key}:${carro[key]}`));
	return true;
}
carros();
carro.cor = prompt("Digite a nova cor do carro: ")
carros();
const {marca, modelo} = carro;
console.log(`Marca:${marca}\nModelo:${modelo}`)
