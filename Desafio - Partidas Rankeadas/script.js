// Função que calcula o saldo entre vitórias e derrotas
function calcularSaldoPartidas(vitorias, derrotas) {
    let saldo = vitorias - derrotas; // Subtrai derrotas das vitórias
    return saldo; // Retorna o saldo
}

// Função que classifica o jogador em um rank baseado no saldo
function classificarRank(saldo) {
    if (saldo <= 10) {
        return "Ferro";
    } else if (saldo > 10 && saldo <= 20) {
        return "Bronze";
    } else if (saldo > 20 && saldo <= 50) {
        return "Prata";
    } else if (saldo > 50 && saldo <= 80) {
        return "Ouro";
    } else if (saldo > 80 && saldo <= 90) {
        return "Diamante"; 
    } else if (saldo > 90 && saldo <= 100) {
        return "Lendário";
    } else {
        return "Imortal"; // Se o saldo for acima de 100
    }
}

// Função que exibe a mensagem final com saldo e rank
function exibirMensagem(saldo, rank) {
    console.log("O Herói de saldo de: " + saldo + " está no nível de " + rank + ".");
    
    // Exibe mensagem especial se o jogador for Imortal
    if (rank === "Imortal") {
        console.log("Parabéns! Você alcançou o rank máximo!");
    } else {
        console.log("Continue jogando para subir de rank!");
    }
}

// Define o número de vitórias e derrotas
vitorias = 150;
derrotas = 5;

// Calcula o saldo de partidas
let saldoPartidas = calcularSaldoPartidas(vitorias, derrotas);

// Classifica o rank com base no saldo
let rank = classificarRank(saldoPartidas);

// Exibe a mensagem final com saldo e classificação
exibirMensagem(saldoPartidas, rank);
