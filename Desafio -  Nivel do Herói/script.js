// Define o herói como um array com nome, XP, vida e ataque
const heroi = ["Vingador das Sombras", 5600, 100, 120];

// Salva os atributos do herói em variáveis separadas
let xpHeroi = heroi[1];
let nivelHeroi = "";
let vidaHeroi = heroi[2];
let ataqueHeroi = heroi[3];

// Define o monstro como um array com nome, XP, vida e ataque
let monstro = ["Dragão do Abismo", 8000, 500, 80];
let vidaMonstro = monstro[2];
let ataqueMonstro = monstro[3];

// Controla se o monstro foi derrotado
let bossDerrotado = false;

// Número de ataques que o herói pode fazer
let numeroDeAtaques = 5;

// Início da batalha: o herói ataca o monstro várias vezes
for (let i = 0; i < numeroDeAtaques ; i++) {
    // O herói causa dano ao monstro e diminui sua vida
    vidaMonstroBatalha = vidaMonstro -= ataqueHeroi;

    // Se a vida do monstro chegar a 0 ou menos, ele foi derrotado
    if (vidaMonstroBatalha <= 0) {
        bossDerrotado = true;
        console.log("O Herói " + heroi[0] + " derrotou o monstro " + monstro[0] + "!");
        break; // Encerra o loop de ataques
    }
    // Caso o monstro ainda esteja vivo, mostra a vida atual dele
    else {
        console.log("O Herói " + heroi[0] + " atacou o monstro " + monstro[0] + " a vida atual do monstro é " + vidaMonstroBatalha);
    }
}

// Se o herói derrotou o monstro, ele ganha 2000 de XP
if (bossDerrotado) {
    xpAdquerido = (monstro[1] / 4)
    xpHeroi += xpAdquerido;
    console.log("O Herói " + heroi[0] + " ganhou " + xpAdquerido + " de XP!");
}

// Define o nível do herói com base na quantidade de XP
if (xpHeroi <= 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Lendário";
} else {
    nivelHeroi = "Radiante"; 
}

// Mostra o resultado final com nome, nível e XP do herói
console.log("O Herói " + heroi[0] + " está no nível " + nivelHeroi + " com " + xpHeroi + " de XP.");
