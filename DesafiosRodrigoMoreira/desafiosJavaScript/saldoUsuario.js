const prompt = require('prompt-sync')();

let transacoes = [];
let saldoInicial = parseFloat(prompt("Digite o saldo inicial: "));
let quantidadeTransacao = parseInt(prompt("Quantas transações deseja registrar? "));

for (let i = 0; i < quantidadeTransacao; i++){
    let nomeUsuario = prompt("Digite o nome do usuário: ");
    let quantidadeTokens = parseFloat(prompt("Digite a quantidade de tokens: "));
    let enderecoCarteira = prompt("Digite o endereço da carteira: ");
    let transacaoConfirmada = false;
    transacoes.push({
        nomeUsuario: nomeUsuario,
        quantidadeTokens: quantidadeTokens,
        enderecoCarteira: enderecoCarteira,
        transacaoConfirmada,
    });
}

for(let j = 0; j < transacoes.length; j++){
    let taxaTransacao = Number(transacoes[j].quantidadeTokens * 0.02);
    let valorTotalTransacao = transacoes[j].quantidadeTokens + taxaTransacao;

    if(saldoInicial >= valorTotalTransacao){
        transacoes[j].transacaoConfirmada = true;
        saldoInicial -= valorTotalTransacao;
        console.log(`Transação de ${transacoes[j].nomeUsuario} confirmada.`)
    }else{
        console.log(`Erro: Saldo INSUFICIENTE para realizar a transação de ${transacoes[j].nomeUsuario}.`)
    }
}
console.log(`Saldo final após transações: ${saldoInicial}`);

