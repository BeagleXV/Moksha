function nomeUsuario(){
    let nome = prompt("Digite seu nome de usuário: ");
    document.getElementById("user-label").firstChild.textContent = nome;
}

// Função para gerar uma escolha aleatória para o computador
function escolhaComputador() {
    const escolhas = ["Pedra", "Papel", "Tesoura"];
    const indiceAleatorio = Math.floor(Math.random() * escolhas.length);
    return escolhas[indiceAleatorio];
}

// Função para determinar o vencedor da rodada
function determinarVencedor(jogador, computador) {
    if (jogador === computador) {
        return "Empate";
    }

    if (
        (jogador === "Pedra" && (computador === "Tesoura")) ||
        (jogador === "Papel" && (computador === "Pedra")) ||
        (jogador === "Tesoura" && (computador === "Papel")) 
    ) {
        return "Jogador";
    } else {
        return "Computador";
    }
}

// Variáveis de controle de pontuação
let pontosJogador = 0;
let pontosComputador = 0;
let pontosEmpate = 0;

// Função para atualizar o placar na tela
function atualizarPlacar() {
    document.getElementById("user-score").textContent = pontosJogador;
    document.getElementById("computer-score").textContent = pontosComputador;
    document.getElementById("empate-score").textContent = pontosEmpate;
}

// Função principal do jogo
function jogarJogo(escolhaJogador) {
    const computadorEscolha = escolhaComputador();
    const resultado = determinarVencedor(escolhaJogador, computadorEscolha);

    if (resultado === "Jogador") {
        pontosJogador++;
        document.getElementById("resultado-jogo").textContent = `Você escolheu ${escolhaJogador}, o computador escolheu ${computadorEscolha}. Você venceu esta rodada!`;
    } else if (resultado === "Computador") {
        pontosComputador++;
        document.getElementById("resultado-jogo").textContent = `Você escolheu ${escolhaJogador}, o computador escolheu ${computadorEscolha}. O computador venceu esta rodada!`;
    } else {
        pontosEmpate++;
        document.getElementById("resultado-jogo").textContent = `Você escolheu ${escolhaJogador}, o computador escolheu ${computadorEscolha}. Empate nesta rodada!`;
    }

    atualizarPlacar();
}
// Chama a função nomeUsuario() quando a pagina for carregada. 
window.onload = function() {
    nomeUsuario();
};
// Adicionando eventos de clique aos botões
document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", function() {
        jogarJogo(this.id);
    });
});