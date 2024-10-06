const taxasDeCambio = { //objeto taxa de cambio criada para pegaro valor das diferentes moedas para calcular o valor do cambio.
    usd: 0.15,
    brl: 0.06,
};

let numeroDeTransacoes = 0; // variavel global numero de transações criada para contar as transações que serão feitas.

let historicoTransacao = []; //variavel global para receber uma lista do histórico de transações

let apagarLista; // variavel global criada para armazenar i ID apagar lista

function limpaHistorico(){ //função criada para apagar o historico de listas.
    document.getElementById('historico').innerHTML = ''; // função criada para apagar o historico da lista.
}

document.getElementById('calcular').addEventListener('click',function(){
    let valorTransacao = parseFloat(document.getElementById('valor-transacao').value);
    let complexidade = document.getElementById('complexidade').value;
    let precoGas;

    switch(complexidade){
        case 'baixa':
            precoGas = 0.01;
            break;
        case 'media':
            precoGas = 0.05;
            break;
        case 'alta':
            precoGas = 0.1;
            break;
        
    }

    let custoGas = valorTransacao * precoGas;
    let moedaDeConversao = document.getElementById('moeda-conversao').value; //variavel criada para pegar o valor de cada moeda que está no select com id(moeda-conversao)
    let custoGasConvertido; // variavel sem valor criada para pegar o valor dos custo de gas convertidos das moedas brl e usd.
    
    if(valorTransacao <= 0){ // Condição se o valor da transação for maior, ou igual a 0
        document.getElementById('valor-transacao').value = ''; //Limpa o input para que o usuário não mantenha o valor inválido.
        alert("Por favor, insira um valor maior do que 0!") // envia o Alert para indicar que o usuário está inserindo um valor menor ou igual a 0
        setTimeout(function(){ //Função criada para agendar o tempo de 0 milissegundos, e retornar ao campo do input após o alert.
            document.getElementById('valor-transacao').focus(); 
        },0);
    }

    if(moedaDeConversao !== 'dot'){ // Se o a moeda selecionada não for DOT
        custoGasConvertido = custoGas * taxasDeCambio[moedaDeConversao]; // custo do gas convertido vai multiplicar o custo do gas x o valor da moeda selecionada
    } else {
        custoGasConvertido = custoGas; // No caso de selecionar DOT custo de gas convertido vai receber o custo de gas.
    }


    if(valorTransacao > 0){
        numeroDeTransacoes++; //Adicionando o contador na variavel numeroDeTransacoes usando ++; 
        document.getElementById('contador').innerHTML = `Número de Transações Simuladas: ${numeroDeTransacoes}`// Usando DOM chamei o id contador para mostrar no meu html quantas transações foram feitas.

        historicoTransacao.push({ //Adicionando a array com as informações da transação
            valor: valorTransacao,
            complexidade: complexidade,
            custoGas: custoGas,
            custoGasConvertido: custoGasConvertido,
            moedaDeConversao: moedaDeConversao
        });
        
        let historicoLista = ''; //variavel historico lista criada para receber cada uma das transaçoes feitas. 

        historicoTransacao.forEach(transacao => { //usei um forEach para percorrer a array e enviar cada transação criada para a lista.
            historicoLista += `
            <li>
            <p>Valor da Transação: ${transacao.valor} DOT</p> 
            <p>Complexidade: ${transacao.complexidade.charAt(0).toUpperCase() + transacao.complexidade.slice(1)}</p>
            <p>Custo Estimado do Gas: ${transacao.custoGas.toFixed(2)} DOT (${transacao.custoGasConvertido.toFixed(2)} ${transacao.moedaDeConversao.toUpperCase()})</p>
            </li>
            `
        });
        
        document.getElementById('historico').innerHTML = historicoLista;
        
        apagarLista = setTimeout(limpaHistorico,30000); // Variavel apagar lista recebendo setTimeout chamando a função limpaHistorico() setada para apagar a lista no tempo de 1 min = 60000 milissegundos

        document.getElementById('resultado').innerHTML = `
        <p>Valor da Transação: ${valorTransacao} DOT</p>
        <p>Complexidade: ${complexidade.charAt(0).toUpperCase() + complexidade.slice(1)}</p>
        <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} DOT (${custoGasConvertido.toFixed(2)} ${moedaDeConversao.toUpperCase()})</strong></p>`
        setTimeout(function(){
            document.getElementById('valor-transacao').focus(); 
        },0);
        document.getElementById('valor-transacao').value = '';
    } else {
        document.getElementById('resultado').innerHTML = '<p style="color:red;">Por favor, insira um valor de transação válido.</p>';
        setTimeout(function(){
            document.getElementById('valor-transacao').focus();
        },0);
    }
});

document.getElementById('valor-transacao').focus(); //Mantem o foco no campo de entrada no input de valor da transação.